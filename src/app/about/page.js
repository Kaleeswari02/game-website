"use client"
import styles from './about.module.css';
import { FiArrowUpRight ,FiArrowRight} from 'react-icons/fi'; 
import { FaGlobe, FaProjectDiagram, FaUsers, FaCalendarAlt, FaHandshake } from 'react-icons/fa';

import { useRef, useEffect,useState} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CapabilitiesSection from '../capabilities/page';
gsap.registerPlugin(ScrollTrigger);
import { useModal } from '../context/ModalContext';
import '../countcard/countcard.css'

export default function About() {
  const stats = [
    { label: 'Clients', value: 100, icon: <FaHandshake /> },
    { label: 'Countries', value: 12, icon: <FaGlobe /> },
    { label: 'Projects', value: 250, icon: <FaProjectDiagram /> },
    { label: 'Employees', value: 45, icon: <FaUsers /> },
    { label: 'Years', value: 6, icon: <FaCalendarAlt /> },
  ];
    const [counts, setCounts] = useState(stats.map(() => 0));
  
    const hexRefs = useRef([]);
  
    const { openModal } = useModal();

    const tigerRef = useRef(null);
    const sectionRef = useRef(null);
      useGSAP(() => {
    gsap.fromTo(
      tigerRef.current,
      { x: '-100px' },
      {
        x: '100px',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, { scope: sectionRef }); 
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
    <>
    <div className={`container-fluid ${styles.aboutBg}`}>
      <div ref={sectionRef} className={`container-fluid ${styles.aboutSection }`}  id='about'>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 col-xl-4 col-lg-4 text-center mb-md-0 ">
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
            {/* <img   src="/images/abouttwo.png" alt="Girl Character" className={styles.characterImg} /> */}
          </div>

          <div className="col-md-5 col-xl-5 col-lg-5 text-center text-md-start mt-xl-5 mt-lg-5 about-space">
            
            <h2 className={`${styles.aboutHeading} text-center`}>
              Who We Are<br/> 
            </h2>
            <div className='p-xl-3 p-lg-3 p-md-0'>
            <p className={`${styles.aboutPara} mt-3`}>
           At Beeyoond Gaming, we bring ideas to life through powerful 2D/3D animation, game development, and virtual experiences.
            </p>
            <p className={`${styles.aboutPara}`}>
          From eye-catching visuals to treadmill-powered gameplay, we create fun, exciting, and unforgettable digital worlds. Whether it's a game, a video, or a virtual adventure — if it's creative and interactive, we make it real.
          We’re not just a studio. We’re a team of dreamers turning imagination into action.
            </p>
                    <div className="text-center">
            <button onClick={openModal} className={`${styles.aboutButton} px-4 mt-3`}>
                GET ASSISTANCE
                <span className={`${styles.aboutButtonArrow} ms-2`}>
                <FiArrowUpRight className={styles.arrowDefault} />
                <FiArrowRight className={styles.arrowHover} />
                </span>
            </button>
            </div>

            </div>
          </div>

          <div className="col-md-3 col-xl-3 col-lg-3 text-center  mt-4 mt-md-0">
            <div ref={tigerRef}>
              <img src="/images/aboutone.png"  alt="Tiger Character" className={styles.characterImg} />
            </div>
          </div>
        </div>
      </div>
      <CapabilitiesSection/>
    </div>
    
      </>
  );
}
