'use client'
import { useEffect, useRef } from 'react';

export default function BeeCursor() {
  const beeRef = useRef(null);

  useEffect(() => {
    const bee = beeRef.current;
    if (!bee) return;

    const moveBee = (e) => {
      const buzzX = Math.sin(Date.now() / 60) * 10;
      const buzzY = Math.cos(Date.now() / 80) * 10;
      bee.style.left = `${e.clientX + buzzX}px`;
      bee.style.top = `${e.clientY + buzzY}px`;
    };

    document.addEventListener('mousemove', moveBee);
    return () => document.removeEventListener('mousemove', moveBee);
  }, []);

  return (
    <img
      ref={beeRef}
      src="/images/curser.png" // Update with your path
      alt="Bee Cursor"
      style={{
        position: 'fixed',
        width: '100px',
        height: '100px',
        pointerEvents: 'none',
        zIndex: 9999,
        top: 0,
        left: 0,
        transition: 'transform 0.1s linear',
      }}
    />
  );
}
