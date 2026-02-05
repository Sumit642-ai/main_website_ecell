import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import fragmentShader from './fragment.glsl?raw';

const vertexShader = /* glsl */ `
  uniform float uTime;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const PyramidMaterialImpl = shaderMaterial(
  {
    uTime: 0,
    uElectricColor: new THREE.Color('#DC3A3B'),
    uFireColor: new THREE.Color('#F16001'),
    uFresnelPower: 3.0,
    uNoiseScale: 1.0,
    uGlowIntensity: 2.5,
    uEmissionStrength: 3.0,
  },
  vertexShader,
  fragmentShader,
);

extend({ PyramidMaterial: PyramidMaterialImpl });

export { PyramidMaterialImpl as PyramidMaterial };
