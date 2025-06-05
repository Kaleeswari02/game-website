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
      src="/images/curserbee.png" // Update with your path
      alt="Bee Cursor"
      style={{
        position: 'fixed',
        width: '70px',
        height: '70px',
        pointerEvents: 'none',
        zIndex: 9999,
        top: 0,
        left: 0,
        transition: 'transform 0.1s linear',
      }}
    />
  );
}
// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import './curser.css';

// export default function BeeCursor() {
//   const beeRef = useRef(null);
//   const prevX = useRef(0);
//   const [direction, setDirection] = useState('right');

//   useEffect(() => {
//     const bee = beeRef.current;
//     if (!bee) return;

//     let mouseX = 0;
//     let mouseY = 0;
//     let beeX = window.innerWidth / 2;
//     let beeY = window.innerHeight / 2;

//     const handleMouseMove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;

//       if (e.clientX > prevX.current) {
//         setDirection('right');
//       } else if (e.clientX < prevX.current) {
//         setDirection('left');
//       }
//       prevX.current = e.clientX;
//     };

//     const moveBee = () => {
//       if (!bee) return;

//       // Interpolate position
//       beeX += (mouseX - beeX) * 0.1;
//       beeY += (mouseY - beeY) * 0.1;

//       const rect = bee.getBoundingClientRect();
//       const offsetX = rect.width / 2;
//       const offsetY = rect.height / 2;

//       bee.style.left = `${beeX - offsetX}px`;
//       bee.style.top = `${beeY - offsetY}px`;

//       requestAnimationFrame(moveBee);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     moveBee();

//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <img
//       ref={beeRef}
//       src="/images/curserbee.png"
//       alt="Bee Cursor"
//       style={{
//         position: 'fixed',
//         width: '60px',
//         height: '60px',
//         pointerEvents: 'none',
//         zIndex: 9999,
//         top: 0,
//         left: 0,
//         transition: 'transform 0.1s ease-out',
//         transform: `scaleX(${direction === 'right' ? 1 : -1})`,
//       }}
//     />
//   );
// }