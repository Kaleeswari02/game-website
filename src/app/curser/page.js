'use client'
import { useEffect, useRef, useState } from 'react';
import './curser.css';
export default function BeeCursor() {
  const beeRef = useRef(null);
  const [direction, setDirection] = useState('left');
  const prevX = useRef(0);

  useEffect(() => {
    const moveBee = (e) => {
      const bee = beeRef.current;

      // Flip direction
      if (e.clientX > prevX.current) {
        setDirection('right');
      } else if (e.clientX < prevX.current) {
        setDirection('left');
      }
      prevX.current = e.clientX;

      // Move bee
      bee.style.left = `${e.clientX}px`;
      bee.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveBee);
    return () => window.removeEventListener('mousemove', moveBee);
  }, []);


  return (
    <img
      ref={beeRef}
      src="/images/curserbee.png" // Update with your path
      alt="Bee Cursor"
      className={`bee-cursor ${direction === 'right' ? 'bee-right' : 'bee-left'}`}
      style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        pointerEvents: 'none',
        zIndex: 9999,
        top: 0,
        left: 0,
        transition: 'transform 0.1s linear',
        
      }}
    />
  );
}
