#ifdef GL_ES
precision highp float;
#endif

uniform float uTime;
uniform vec3 uElectricColor;
uniform vec3 uFireColor;
uniform float uFresnelPower;
uniform float uNoiseScale;
uniform float uGlowIntensity;
uniform float uEmissionStrength;
uniform vec3 cameraPosition;

varying vec3 vWorldPosition;
varying vec3 vNormal;

float hash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);

  float n000 = hash(i + vec3(0.0, 0.0, 0.0));
  float n100 = hash(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash(i + vec3(1.0, 1.0, 1.0));

  vec3 u = f * f * (3.0 - 2.0 * f);

  float nx00 = mix(n000, n100, u.x);
  float nx10 = mix(n010, n110, u.x);
  float nx01 = mix(n001, n101, u.x);
  float nx11 = mix(n011, n111, u.x);

  float nxy0 = mix(nx00, nx10, u.y);
  float nxy1 = mix(nx01, nx11, u.y);

  return mix(nxy0, nxy1, u.z);
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;

  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p * frequency);
    frequency *= 2.0;
    amplitude *= 0.5;
  }

  return value;
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPosition);

  float fresnel = pow(1.0 - max(dot(N, V), 0.0), uFresnelPower);

  vec3 p = vWorldPosition * uNoiseScale;

  float fireField = fbm(p + vec3(0.0, uTime * 0.8, 0.0));
  float fireMask = smoothstep(0.25, 0.8, fireField);
  vec3 fireColor = uFireColor * fireMask * (0.7 + 0.3 * fireField);

  float lightningField = fbm(p * 2.5 + vec3(uTime * 4.0));
  float ridge = abs(lightningField - 0.5);
  float lightningMask = smoothstep(0.06, 0.0, ridge);
  float flicker = 0.5 + 0.5 * sin(uTime * 40.0 + lightningField * 10.0);
  vec3 lightningColor = uElectricColor * lightningMask * (1.2 + 1.8 * flicker);

  // Sun-like core glow
  vec3 coreGlow = vec3(0.9216, 0.3137, 0.0078) * uEmissionStrength;
  
  // Fresnel rim glow (sun corona effect)
  vec3 fresnelTint = mix(vec3(0.7569, 0.0314, 0.0039), vec3(0.8627, 0.2275, 0.2314), fresnel);
  vec3 fresnelColor = fresnelTint * pow(fresnel, 1.5) * uGlowIntensity;

  // Combine all effects
  vec3 color = coreGlow + fireColor * 3.0 + lightningColor * 2.5 + fresnelColor * 2.0;
  
  // Pulsing glow effect
  float pulse = 0.8 + 0.2 * sin(uTime * 2.0);
  color *= pulse;
  
  // Allow colors to exceed 1.0 for bloom effect
  color = clamp(color, 0.0, 8.0);

  float alpha = 1.0;

  gl_FragColor = vec4(color, alpha);
}
