'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const NetworkScene = dynamic(() => import('./3d/network-scene'), { ssr: false });
export function HeroScene() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarse = window.matchMedia('(pointer: coarse)');
    const canvas = document.createElement('canvas');
    let webgl = false;
    try { webgl = !!(canvas.getContext('webgl2') || canvas.getContext('webgl')); }
    catch { webgl = false; }
    setEnabled(webgl && !motion.matches && !coarse.matches);
  }, []);
  return <div className="scene-shell" aria-label="Diagrama de arquitectura: servicios conectados mediante flujos de datos" role="img">
    <svg className="architecture-fallback" viewBox="0 0 470 310" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs><linearGradient id="arch-stroke" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a5f8df"/><stop offset="1" stopColor="#2c9e89"/></linearGradient></defs>
      <g fill="none" stroke="url(#arch-stroke)" strokeWidth="1.5" opacity=".78">
        <path d="M68 80L176 52 292 86 402 60M68 80L90 204 196 165 292 86 330 219 402 60M176 52L196 165 302 265 330 219M90 204L182 274 302 265M196 165L330 219M292 86L302 265" />
      </g>
      {[[68,80],[176,52],[292,86],[402,60],[90,204],[196,165],[330,219],[182,274],[302,265]].map(([x,y],index)=><rect key={index} x={x-9} y={y-9} width="18" height="18" rx="3" fill="#153b37" stroke="#83e8cc" strokeWidth="2"/>)}
      <rect x="175" y="144" width="42" height="42" rx="6" fill="#1d6858" stroke="#c4ffe9" strokeWidth="3" />
    </svg>
    {enabled && <NetworkScene />}
  </div>;
}
