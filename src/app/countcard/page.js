'use client';
import React, { useEffect, useState,useRef } from 'react';
import { FaGlobe, FaProjectDiagram, FaUsers, FaCalendarAlt, FaHandshake } from 'react-icons/fa';
import './countcard.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP); // enables useGSAP
const stats = [
  { label: 'Clients', value: 100, icon: <FaHandshake /> },
  { label: 'Countries', value: 12, icon: <FaGlobe /> },
  { label: 'Projects', value: 250, icon: <FaProjectDiagram /> },
  { label: 'Employees', value: 45, icon: <FaUsers /> },
  { label: 'Years', value: 6, icon: <FaCalendarAlt /> },
];

export default function CountCards() {
  const [counts, setCounts] = useState(stats.map(() => 0));
 const sectionRef = useRef(null);
  const hexRefs = useRef([]);
 useGSAP(() => {
  gsap.from(hexRefs.current, {
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 80%',
      toggleActions: 'restart none none none',
      once: false,
    },
    opacity: 0,
    x: -100,
    stagger: 0.3,
    duration: 1.2,
    ease: 'power3.out',
  });
}, { scope: sectionRef });


  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const intervals = stats.map(stat => stat.value / steps);
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const updated = stats.map((stat, i) =>
        step < steps ? Math.floor(intervals[i] * step) : stat.value
      );
      setCounts(updated);
      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
     <div className="countSection" ref={sectionRef}>
      <div className="honeycomb">
        <div className="hexRow centerRow">
          {stats.slice(0, 2).map((stat, i) => (
            <div
              className="hexWrapper"
              key={i}
              ref={(el) => (hexRefs.current[i] = el)}
            >
              <div className="countItem">
                <div className="icon">{stat.icon}</div>
                <div className="number">{counts[i]}</div>
                <div className="label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="hexRow">
          {stats.slice(2).map((stat, i) => (
            <div
              className="hexWrapper"
              key={i + 2}
              ref={(el) => (hexRefs.current[i + 2] = el)}
            >
              <div className="countItem">
                <div className="icon">{stat.icon}</div>
                <div className="number">{counts[i + 2]}</div>
                <div className="label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
