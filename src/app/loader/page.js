'use client';
import { useState, useEffect, useRef } from 'react';

import './loader.css'
export default function Preloader({ onFinish }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const preloaderRef = useRef(null);

  const handleEnter = () => {
    setIsFadingOut(true);
  };

  // Trigger onFinish after transition ends
  useEffect(() => {
    const node = preloaderRef.current;
    if (!node) return;

    const handleTransitionEnd = () => {
      if (isFadingOut) onFinish();
    };

    node.addEventListener('transitionend', handleTransitionEnd);
    return () => node.removeEventListener('transitionend', handleTransitionEnd);
  }, [isFadingOut, onFinish]);


  return (
    <div
    ref={preloaderRef}
    className={`preloader ${isFadingOut ? 'fade-out' : ''}`}
  >
    <div className="nest-container">
    <img
          src='/images/loader.png'
          className="loader-area"
          alt="Bee Nest"
          width={400}
          height={400}
          priority ='true'
          onClick={() => {
            setVisible(false);
            onFinish();
            
          }}
        />
      <div
        className="hover-hole"
        onMouseEnter={handleEnter}
        title="Enter the nest"
      />
    </div>
  </div>
  );
}