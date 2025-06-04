'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './visionmission.module.css';
import AboutStyles from '../about/about.module.css';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import { useGSAP } from '@gsap/react'; 
gsap.registerPlugin(ScrollTrigger, useGSAP);

const slides = [
  {
    title: 'Our Vision',
    text: 'At Gamecrio Studios, a leading Casino Slot Game Development Company in India, our vision is to revolutionize the gaming industry by seamlessly blending innovation, creativity, and inclusivity into every aspect of our work. We envision a future where gaming transcends entertainment and becomes a transformative medium for connection, expression, and empowerment.',
    img: '/images/vision.png',
    reverse: false,
  },
  {
    title: 'Our Mission',
    text: 'To create emotionally resonant and globally inclusive gaming experiences. At Gamecrio Studios, we aim to revolutionize the gaming industry by seamlessly blending innovation, creativity, and inclusivity into every aspect of our work.',
    img: '/images/mission.png',
    reverse: true,
  },
];

export default function VisionMission() {
  gsap.set(['.slide-0', '.slide-1'], { opacity: 0, scale: 0.95 });
  gsap.set('.slide-X', { opacity: 1, scale: 1 }); 
  const sectionRef = useRef(null);

  useGSAP(() => {
    const total = slides.length;
  
    slides.forEach((slide, i) => {
      const base = `.slide-${i}`;
      const content = `${base} .content`;
      const image = `${base} .image`;
  
      gsap.set(base, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: i === 0 ? 1 : 0,
        scale: i === 0 ? 1 : 0.95,
        zIndex: total - i,
      });
  
      gsap.set(content, {
        x: slide.reverse ? 100 : -100,
        opacity: 0,
        clipPath: 'inset(0 100% 0 0)',
      });
  
      gsap.set(image, {
        x: slide.reverse ? 100 : -100,
        opacity: 0,
        clipPath: 'inset(0 0 0 100%)',
      });
    });
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${window.innerHeight * slides.length}`,
        scrub: true,
        pin: true,
        
      },
    });
  
    slides.forEach((slide, i) => {
      const base = `.slide-${i}`;
      const content = `${base} .content`;
      const image = `${base} .image`;
  
      // Show current slide
      tl.to(base, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
  
      tl.to(content, {
        x: 0,
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.6,
        ease: 'power2.out',
      }, '<');
  
      tl.to(image, {
        x: 0,
        opacity: 1,
        clipPath: 'inset(0 0 0 0%)',
        duration: 0.6,
        ease: 'power2.out',
      }, '<+0.1');
  
      // Hide it before showing next one
      if (i !== slides.length - 1) {
        tl.to(base, {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          ease: 'power1.inOut',
        }, '+=0.8');
      }
    });
  }, { scope: sectionRef });
  
  

  return (
    <section className={`${styles.scrollSection} my-xl-3 mt-lg-3 mb-xl-3`} ref={sectionRef}>
      <div className={styles.sliderWrapper}>
        {slides.map((s, i) => (
          <div
            key={i}
            className={`${styles.slide} slide-${i} ${s.reverse ? styles.reverse : ''}`}
          >
            <div className={`${styles.content} content`}>
              <h2 className={styles.Heading}>
                OUR <br />
                <span className={styles.textOutline}>{s.title.slice(3)}</span>
              </h2>
              <p className={styles.para}>{s.text}</p>
            </div>

            <div className={`${styles.image} image`}>
              <img src={s.img} alt={s.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
