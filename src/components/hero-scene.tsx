'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const NetworkScene = dynamic(() => import('./3d/network-scene'), { ssr: false });
export function HeroScene() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarse = window.matchMedia('(pointer: coarse)');
    const canvas = document.createElement('canvas');
    const webgl = !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
    setEnabled(webgl && !mq.matches && !coarse.matches);
  }, []);
  return <div className="scene-shell" aria-label="Ilustración abstracta de sistemas conectados" role="img">
    <div className="scene-fallback" aria-hidden="true"><span /><span /><span /></div>
    {enabled ? <NetworkScene /> : null}
  </div>;
}
