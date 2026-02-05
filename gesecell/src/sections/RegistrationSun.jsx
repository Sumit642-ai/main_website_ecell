import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import '../SunMaterial'; // Ensure this registers the material

function Sun() {
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} scale={2.8}>
      <sunMaterial ref={materialRef} transparent side={THREE.DoubleSide} />
    </Sphere>
  );
}

export default function RegistrationSun() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Sun />
      </Canvas>
    </div>
  );
}
