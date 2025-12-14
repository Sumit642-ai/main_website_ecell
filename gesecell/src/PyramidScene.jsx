import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';
import { SunMaterial, AtmosphereMaterial, StarMaterial } from './SunMaterial';





function MovingStars() {
  const { camera } = useThree();
  const materialRef = useRef();
  const pointsRef = useRef();
  
  const [positions, sizes, velocities] = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      
      sizes[i] = Math.random() * 2.0;
      velocities[i] = Math.random() * 0.2 + 0.05;
    }
    
    return [positions, sizes, velocities];
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
    }
    
    // Move stars towards camera
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array;
      for(let i = 0; i < positions.length / 3; i++) {
        positions[i * 3 + 2] += velocities[i]; // Move along Z
        
        // Reset if too close
        if(positions[i * 3 + 2] > 50) {
          positions[i * 3 + 2] = -150;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const handlePointerDown = () => {
    // Warp effect on click
    gsap.to(camera.position, {
      z: camera.position.z - 5,
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(camera.position, {
          z: camera.position.z + 5,
          duration: 4,
          ease: "power1.out"
        });
      }
    });
  };

  return (
    <points ref={pointsRef} onPointerDown={handlePointerDown}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSize"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <starMaterial ref={materialRef} transparent depthWrite={false} />
    </points>
  );
}

function Sun() {
  const meshRef = useRef();
  const materialRef = useRef();
  const atmosphereRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uTime = t;
    }
    if (meshRef.current) {
      // More complex rotation
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      meshRef.current.rotation.z = Math.cos(t * 0.25) * 0.1;
    }
  });

  return (
    <group>
      {/* Main Sun Sphere */}
      <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
        <sphereGeometry args={[1, 64, 64]} />
        <sunMaterial ref={materialRef} uColor={new THREE.Color('#EB5002')} />
      </mesh>
      
      {/* Atmosphere Glow */}
      <mesh scale={[1.8, 1.8, 1.8]}>
        <sphereGeometry args={[1, 64, 64]} />
        <atmosphereMaterial
          ref={atmosphereRef}
          uColor={new THREE.Color('#DC3A3B')}
          uIntensity={0.8}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          transparent
        />
      </mesh>
    </group>
  );
}

export default function PyramidScene() {
  return (
    <div className="pyramid-background">
      <Canvas
        style={{ height: '100vh', width: '100vw' }}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
      >
        <color attach="background" args={['#000000']} />
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        <OrbitControls enableZoom={true} enablePan={false} minDistance={3} maxDistance={15} />
        
        <MovingStars />
        
        <ambientLight intensity={0.1} />
        <Sun />

        <EffectComposer disableNormalPass>
          <Bloom 
            luminanceThreshold={0.6} 
            mipmapBlur 
            intensity={2.0} 
            radius={0.6}
            levels={9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
