'use client';
import { useEffect, useRef, useState } from 'react';
import './curser.css';

export default function BeeCursor() {
  const beeRef = useRef(null);
  const prevX = useRef(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const bee = beeRef.current;
    if (!bee) return;

    let mouseX = 0;
    let mouseY = 0;
    let beeX = window.innerWidth / 2;
    let beeY = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Set direction for flipping
      if (e.clientX > prevX.current) {
        setDirection('right');
      } else if (e.clientX < prevX.current) {
        setDirection('left');
      }
      prevX.current = e.clientX;
    };

    const moveBee = () => {
      if (!bee) return;

      // Smoothly interpolate bee position toward mouse
      beeX += (mouseX - beeX) * 0.1;
      beeY += (mouseY - beeY) * 0.1;

      bee.style.left = `${beeX - 30}px`; // Center the 60px wide bee
      bee.style.top = `${beeY - 30}px`;

      requestAnimationFrame(moveBee);
    };

    window.addEventListener('mousemove', handleMouseMove);
    moveBee(); // start animation loop

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <img
      ref={beeRef}
      src="/images/curserbee.png"
      alt="Bee Cursor"
      style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        pointerEvents: 'none',
        zIndex: 9999,
        top: 0,
        left: 0,
        transition: 'transform 0.1s ease-out',
        transform: `scaleX(${direction === 'right' ? 1 : -1})`,
      }}
    />
  );
}
