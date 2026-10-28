'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import type { Mesh } from 'three';

function Core() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => { if (mesh.current) mesh.current.rotation.y += delta * 0.12; });
  return <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.4}>
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.45, 2]} />
      <meshPhysicalMaterial color="#0d4e50" metalness={0.5} roughness={0.18} transmission={0.4} thickness={1.2} wireframe />
    </mesh>
    <mesh scale={0.62}><icosahedronGeometry args={[1.45, 1]} /><meshStandardMaterial color="#64f3d4" emissive="#0a6e67" emissiveIntensity={0.45} wireframe /></mesh>
  </Float>;
}
export default function NetworkScene() {
  return <div className="scene" aria-hidden="true">
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.8], fov: 42 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.6} /><pointLight position={[3, 4, 4]} intensity={55} color="#8fffe2" />
      <Stars radius={90} depth={35} count={350} factor={2} saturation={0} fade speed={0.3} />
      <Core /><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.28} />
    </Canvas>
  </div>;
}
