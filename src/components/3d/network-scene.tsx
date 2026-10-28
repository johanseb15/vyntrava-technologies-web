'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { BufferAttribute, BufferGeometry, Group } from 'three';

const nodes = [
  [-1.65, 0.8, 0], [-0.65, 1.05, -0.35], [0.55, 0.95, 0.15], [1.65, 0.45, -0.3],
  [-1.8, -0.45, -0.2], [-0.65, -0.25, 0.6], [0.65, -0.45, 0.2], [1.75, -0.95, 0],
  [-0.85, -1.2, -0.2], [0.45, -1.3, -0.35], [0.05, 0.2, -0.7],
] as const;
const links = [[0,1],[1,2],[2,3],[0,4],[1,5],[2,6],[3,7],[4,5],[5,6],[6,7],[4,8],[8,9],[9,7],[1,10],[10,6],[5,10],[2,10]] as const;

function Architecture() {
  const group = useRef<Group>(null);
  const geometry = useMemo(() => {
    const positions: number[] = [];
    for (const [a,b] of links) {
      positions.push(...nodes[a], ...nodes[b]);
    }
    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3));
    return geo;
  }, []);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.075;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.24) * 0.045;
  });
  return <group ref={group} rotation={[-0.14, -0.18, -0.12]}>
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#79d9c2" transparent opacity={0.55} />
    </lineSegments>
    {nodes.map((point, index) => (
      <group key={index} position={[point[0],point[1],point[2]]}>
        <mesh>
          <boxGeometry args={index === 10 ? [0.55,0.55,0.55] : [0.20,0.20,0.20]} />
          <meshStandardMaterial color={index === 10 ? '#c5fff0' : '#6dd9bf'} emissive="#1b8272" emissiveIntensity={0.45} metalness={0.34} roughness={0.28} />
        </mesh>
        {index === 10 && <mesh scale={1.52}>
          <boxGeometry args={[0.55,0.55,0.55]} />
          <meshBasicMaterial color="#70e7cd" wireframe transparent opacity={0.35} />
        </mesh>}
      </group>
    ))}
  </group>;
}

export default function NetworkScene() {
  return <div className="scene" aria-hidden="true">
    <Canvas dpr={[1, 1.5]} camera={{position:[0,0,6.5],fov:42}} gl={{alpha:true,antialias:true}} frameloop="always">
      <ambientLight intensity={1.3} />
      <directionalLight position={[3,4,5]} intensity={2.2} color="#a7ffe3" />
      <Architecture />
    </Canvas>
  </div>;
}
