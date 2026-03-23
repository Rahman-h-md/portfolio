import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// Scattered floating objects across the entire screen
const ScatteredShapes = ({ count = 6 }) => {
  const shapes = useMemo(() => {
    return new Array(count).fill().map((_, i) => {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 15 - 5; 
      
      const scale = 0.5 + Math.random() * 1.5;
      const speed = 0.2 + Math.random() * 0.8;
      const type = Math.floor(Math.random() * 3); 
      
      const colors = ['#a855f7', '#00d4ff', '#ec4899', '#10b981'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const isWireframe = Math.random() > 0.4;

      return { x, y, z, scale, speed, type, color, isWireframe, id: i };
    });
  }, [count]);

  return (
    <>
      {shapes.map((s) => (
        <Float key={s.id} speed={s.speed} rotationIntensity={1.5} floatIntensity={1.5}>
          <mesh position={[s.x, s.y, s.z]} scale={[s.scale, s.scale, s.scale]}>
            {s.type === 0 && <boxGeometry args={[1, 1, 1]} />}
            {s.type === 1 && <sphereGeometry args={[0.7, 32, 32]} />}
            {s.type === 2 && <icosahedronGeometry args={[1, 0]} />}
            
            {s.type === 1 && !s.isWireframe ? (
               <MeshDistortMaterial
                color={s.color}
                distort={0.3}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
                transparent
                opacity={0.6}
              />
            ) : (
              <meshStandardMaterial 
                color={s.color} 
                wireframe={s.isWireframe} 
                roughness={0.2} 
                metalness={0.5} 
                transparent 
                opacity={s.isWireframe ? 0.25 : 0.5} 
              />
            )}
          </mesh>
        </Float>
      ))}
    </>
  );
};

const SmokyBackground = () => {
  return (
    <>
      {/* Massive undulating spheres to create a premium, abstract smoky/fog effect */}
      <Sphere args={[1, 64, 64]} scale={18} position={[-8, 8, -20]}>
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.6}
          speed={0.6}
          roughness={0.8}
          transparent
          opacity={0.2}
        />
      </Sphere>
      <Sphere args={[1, 64, 64]} scale={22} position={[8, -6, -25]}>
        <MeshDistortMaterial
          color="#00d4ff"
          attach="material"
          distort={0.7}
          speed={0.4}
          roughness={0.8}
          transparent
          opacity={0.15}
        />
      </Sphere>
      <Sphere args={[1, 64, 64]} scale={16} position={[0, -10, -18]}>
        <MeshDistortMaterial
          color="#ec4899"
          attach="material"
          distort={0.5}
          speed={0.5}
          roughness={0.8}
          transparent
          opacity={0.15}
        />
      </Sphere>
    </>
  );
};

const Hero3D = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.85 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#ec4899" />
        <pointLight position={[10, -10, 10]} intensity={2} color="#00d4ff" />
        
        <SmokyBackground />
        
        {/* Far fewer, minimal shapes */}
        <ScatteredShapes count={6} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
