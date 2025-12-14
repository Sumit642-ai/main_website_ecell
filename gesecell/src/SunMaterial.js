import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

const SunMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color('#EB5002'),
    uDisplacementScale: 0.22,
    uParallaxScale: 0.12,
  },
  // Vertex Shader
  /* glsl */ `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vLayer0;
    varying vec3 vLayer1;
    varying vec3 vLayer2;
    varying vec3 vEyeVector;
    varying vec3 vWorldPos;
    varying float vDisplacement;

    uniform float uTime;
    uniform float uDisplacementScale;

    float mod289v(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 mod289v(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 permutev(vec4 x){return mod289v(((x * 34.0) + 1.0) * x);}

    float noise3(vec3 p){
        vec3 a = floor(p);
        vec3 d = p - a;
        d = d * d * (3.0 - 2.0 * d);

        vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
        vec4 k1 = permutev(b.xyxy);
        vec4 k2 = permutev(k1.xyxy + b.zzww);

        vec4 c = k2 + a.zzzz;
        vec4 k3 = permutev(c);
        vec4 k4 = permutev(c + 1.0);

        vec4 o1 = fract(k3 * (1.0 / 41.0));
        vec4 o2 = fract(k4 * (1.0 / 41.0));

        vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
        vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

        return o4.y * d.y + o4.x * (1.0 - d.y);
    }

    float ridgedFBMv(vec3 p) {
      float v = 0.0;
      float a = 0.5;
      vec3 shift = vec3(100.0);
      for (int i = 0; i < 5; ++i) {
        float n = noise3(p);
        n = 1.0 - abs(n);
        n = n * n;
        v += a * n;
        p = p * 2.0 + shift;
        a *= 0.5;
      }
      return v;
    }

    mat2 rotate(float a) {
      float s = sin(a);
      float c = cos(a);
      return mat2(c, -s, s, c);
    }

    void main() {
      vec3 localNormal = normalize(normal);
      vec3 pos = position;

      float layerDisp = ridgedFBMv(pos * 1.2 + vec3(uTime * 0.02));
      float fineDisp = noise3(pos * 3.0 + vec3(uTime * 0.03));
      float displacement = ((layerDisp * 0.7 + fineDisp * 0.3) - 0.5) * uDisplacementScale;
      pos += localNormal * displacement;

      vNormal = normalize(normalMatrix * localNormal);
      vUv = uv;
      vPosition = pos;
      vDisplacement = displacement;
      
      vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
      vWorldPos = worldPosition.xyz;
      vEyeVector = normalize(worldPosition.xyz - cameraPosition);

      float t = uTime * 0.05;
      
      mat2 rot0 = rotate(t);
      mat2 rot1 = rotate(t * 1.5 + 10.0);
      mat2 rot2 = rotate(t * 2.0 + 20.0);
      
      vLayer0 = pos;
      vLayer0.xy = rot0 * vLayer0.xy;
      vLayer0.yz = rot0 * vLayer0.yz;
      
      vLayer1 = pos;
      vLayer1.xy = rot1 * vLayer1.xy;
      vLayer1.yz = rot1 * vLayer1.yz;
      
      vLayer2 = pos;
      vLayer2.xy = rot2 * vLayer2.xy;
      vLayer2.yz = rot2 * vLayer2.yz;

      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,
  // Fragment Shader
  /* glsl */ `
    uniform float uTime;
    uniform vec3 uColor;
    uniform float uParallaxScale;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vLayer0;
    varying vec3 vLayer1;
    varying vec3 vLayer2;
    varying vec3 vEyeVector;
    varying vec3 vWorldPos;
    varying float vDisplacement;

    float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

    float noise(vec3 p){
        vec3 a = floor(p);
        vec3 d = p - a;
        d = d * d * (3.0 - 2.0 * d);

        vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
        vec4 k1 = perm(b.xyxy);
        vec4 k2 = perm(k1.xyxy + b.zzww);

        vec4 c = k2 + a.zzzz;
        vec4 k3 = perm(c);
        vec4 k4 = perm(c + 1.0);

        vec4 o1 = fract(k3 * (1.0 / 41.0));
        vec4 o2 = fract(k4 * (1.0 / 41.0));

        vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
        vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

        return o4.y * d.y + o4.x * (1.0 - d.y);
    }

    float ridgedFBM(vec3 p) {
      float v = 0.0;
      float a = 0.5;
      vec3 shift = vec3(100.0);
      for (int i = 0; i < 5; ++i) {
        float n = noise(p);
        n = 1.0 - abs(n); // Ridge
        n = n * n; // Sharpen
        v += a * n;
        p = p * 2.0 + shift;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorldPos);
      vec3 baseNormal = normalize(vNormal);
      vec3 tangentView = viewDir - baseNormal * dot(viewDir, baseNormal);
      float tLen = max(length(tangentView), 1e-4);
      tangentView /= tLen;

      float parallaxHeight = ridgedFBM(vLayer0 * 1.5 + vec3(uTime * 0.01));
      float parallaxAmount = (parallaxHeight - 0.5) * uParallaxScale;
      vec3 parallaxOffset = tangentView * parallaxAmount;

      vec3 layer0 = vLayer0 + parallaxOffset;
      vec3 layer1 = vLayer1 + parallaxOffset * 1.4;
      vec3 layer2 = vLayer2 + parallaxOffset * 1.8;

      // 1. Generate the base noise for the cracks/lava
      // Slower movement for a heavy feel
      float n1 = ridgedFBM(layer0 * 2.0 + vec3(uTime * 0.02)); 
      float n2 = ridgedFBM(layer1 * 4.0 - vec3(uTime * 0.02));
      
      // Combine
      float noiseVal = n1 + n2 * 0.5;
      
      // 2. Sharpen the noise to create distinct "cracks" vs "solid rock"
      // The 'ridged' noise is high at the ridges (cracks). 
      // We want the cracks to be thin and the rock to be large areas.
      // Raising to a power increases contrast.
      float lavaIntensity = pow(noiseVal, 3.0) * 1.5;
      
      // 3. Create a "rocky" texture for the non-lava parts
      float rockGrain = noise(vPosition * 20.0);
      float rockDetail = noise(vPosition * 50.0);
      float rockTexture = (rockGrain + rockDetail * 0.5) * 0.2;
      
      // 4. Define Colors
      vec3 COL_BLACK = vec3(0.0, 0.0, 0.0);
      vec3 COL_WHITE = vec3(1.0, 1.0, 1.0);
      vec3 COL_GRAY = vec3(0.6549, 0.6549, 0.6549);
      vec3 COL_RED_DARK = vec3(0.7569, 0.0314, 0.0039);
      vec3 COL_RED = vec3(0.8627, 0.2275, 0.2314);
      vec3 COL_ORANGE = vec3(0.9216, 0.3137, 0.0078);

      vec3 rockColor = COL_BLACK;
      vec3 lavaDark = COL_RED_DARK;
      vec3 lavaBright = COL_ORANGE;
      vec3 flareColor = mix(COL_WHITE, COL_RED, 0.15);
      
      // 5. Mix colors based on intensity
      vec3 col = rockColor;
      
      // Add rock texture to the dark parts
      if (lavaIntensity < 0.4) {
         col += vec3(rockTexture * 0.05); 
      }
      
      // Mix in lava
      // Smoothstep controls the "width" of the transition from rock to lava
      float lavaMask = smoothstep(0.3, 0.6, lavaIntensity);
      float rockMask = 1.0 - lavaMask;

      // Large fractured plates for the crust
      float plateNoise = noise(vLayer0 * 0.8 + vec3(uTime * 0.01));
      float ridgeNoise = ridgedFBM(vLayer1 * 1.5);
      float rockPlate = clamp(plateNoise * 0.6 + ridgeNoise * 0.4, 0.0, 1.0) * rockMask;

      // Domain-warped ridges for secondary fracture network
      vec3 warpCoord = layer2 * 2.0;
      float warp1 = noise(warpCoord * 2.5 + vec3(uTime * 0.03));
      float warp2 = noise(warpCoord * 5.0 - vec3(uTime * 0.02));
      vec3 warpedPos = vPosition + vec3(warp1, warp2, warp1 - warp2) * 0.25;

      float fracture = ridgedFBM(warpedPos * 6.0);
      float fractureMask = smoothstep(0.7, 0.9, fracture) * rockMask;

      col = mix(col, lavaDark, lavaMask);
      
      float brightMask = smoothstep(0.6, 0.8, lavaIntensity);
      col = mix(col, lavaBright, brightMask);

      float ashBand = smoothstep(0.35, 0.55, lavaIntensity) * (1.0 - smoothstep(0.55, 0.75, lavaIntensity));
      vec3 ashTint = mix(COL_BLACK, COL_GRAY, 0.25);
      col += ashTint * ashBand * rockMask;

      col -= COL_GRAY * 0.08 * rockPlate;
      col -= COL_GRAY * 0.10 * fractureMask;
      col += COL_GRAY * 0.20 * rockTexture * rockMask;
      col += COL_GRAY * 0.08 * smoothstep(0.4, 0.7, fracture) * rockMask;
      col += COL_GRAY * 0.06 * clamp(vDisplacement * 5.0, 0.0, 1.0) * rockMask;

      // Mix in flare (core of the crack)
      float flareMask = smoothstep(0.8, 1.0, lavaIntensity);
      
      // Pulse the flare for active look
      float pulse = 1.0 + 0.3 * sin(uTime * 3.0 + noiseVal * 10.0);
      
      // Super bright for bloom
      col = mix(col, flareColor * 20.0 * pulse, flareMask); 
      
      // 6. Bump Mapping
      // We want the rock to look high and lava to look low/flat or emitting
      // Invert intensity for height: Rock (low intensity) = High, Lava (high intensity) = Low
      float height = 1.0 - lavaIntensity;
      height += rockTexture * 0.15 * rockMask;
      height += rockPlate * 0.45;
      height += fractureMask * 0.35;
      height += vDisplacement * 2.0 * rockMask;
      height += smoothstep(0.4, 0.75, fracture) * 0.1 * rockMask;
      height += noise(vPosition * 60.0) * 0.05 * rockMask;
      
      float bumpScale = 4.5; // Strong bump
      vec3 bump = vec3(dFdx(height), dFdy(height), 0.0);
      vec3 normal = normalize(vNormal + bump * bumpScale);
      
      // 7. Lighting
      // Simple directional light to catch the bump map on the rocks
      vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
      float diff = max(dot(normal, lightDir), 0.0);

      float rockLight = 0.25 + diff * 0.75;
      col *= mix(rockLight, 1.0, lavaMask * 0.8);
      float cavity = smoothstep(0.6, 0.9, lavaIntensity) * 0.5 + smoothstep(0.65, 0.85, fracture) * 0.4;
      float ao = clamp(1.0 - cavity, 0.25, 1.0);
      col *= mix(ao, 1.0, lavaMask * 0.85);
      col -= vec3(0.04, 0.025, 0.02) * smoothstep(0.55, 0.85, lavaIntensity) * rockMask;
      
      // 8. Edge Glow (Atmosphere/Fresnel)
      float fresnel = clamp(dot(normal, viewDir), 0.0, 1.0);
      float limb = pow(1.0 - fresnel, 3.0);
      col += lavaBright * limb * 0.45;

      gl_FragColor = vec4(col, 1.0);
    }
  `
);

const AtmosphereMaterial = shaderMaterial(
  {
    uColor: new THREE.Color('#DC3A3B'),
    uIntensity: 0.6,
  },
  /* glsl */ `
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    }
  `,
  /* glsl */ `
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform vec3 uColor;
    uniform float uIntensity;
    void main() {
      vec3 viewDirection = normalize(cameraPosition - vPosition);
      // Reduced atmosphere intensity and falloff
      float intensity = pow(0.4 - dot(vNormal, viewDirection), 3.0);
      intensity = clamp(intensity, 0.0, 1.0);
      gl_FragColor = vec4(uColor, 1.0) * intensity * uIntensity * 0.5;
    }
  `
);

const StarMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector3(0, 0, 0),
    uCameraPos: new THREE.Vector3(0, 0, 0),
  },
  /* glsl */ `
    uniform float uTime;
    uniform vec3 uMouse;
    uniform vec3 uCameraPos;
    attribute float aSize;
    varying float vAlpha;

    void main() {
      vec3 pos = position;
      
      // Calculate distance from point to mouse ray
      // Ray: O + tD (O = uCameraPos, D = uMouse)
      vec3 v = pos - uCameraPos;
      float t = dot(v, uMouse);
      vec3 closestPoint = uCameraPos + uMouse * t;
      float dist = distance(pos, closestPoint);
      
      // Repulsion effect
      float radius = 10.0; // Interaction radius
      float strength = 8.0; // Push strength
      
      if (dist < radius && t > 0.0) {
        vec3 dir = normalize(pos - closestPoint);
        float force = (1.0 - dist / radius) * strength;
        // Add some noise/randomness to the movement
        pos += dir * force;
      }

      vec4 mvPosition = viewMatrix * modelMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Size attenuation
      gl_PointSize = aSize * (200.0 / -mvPosition.z);
      
      // Twinkle effect
      float twinkle = sin(uTime * 2.0 + position.x * 10.0 + position.y * 5.0);
      vAlpha = 0.5 + 0.5 * twinkle;
    }
  `,
  /* glsl */ `
    varying float vAlpha;
    void main() {
      // Circular particle
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);
      if (dist > 0.5) discard;
      
      // Soft edge
      float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
      gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * vAlpha);
    }
  `
);

extend({ SunMaterial, AtmosphereMaterial, StarMaterial });

export { SunMaterial, AtmosphereMaterial, StarMaterial };
