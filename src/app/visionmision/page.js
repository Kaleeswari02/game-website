
'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import characterImg from '../../../public/images/bee1.jpg';
import labImg from '../../../public/images/bee2.jpg';
import styles from './visionmission.module.css';
import AboutStyles from '../about/about.module.css';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const slides = [
  {
    title: 'Our Vision',
    text: 'At Gamecrio Studios, a leading Casino Slot Game Development Company in India, our vision is to revolutionize the gaming industry by seamlessly blending innovation, creativity, and inclusivity into every aspect of our work. We envision a future into every aspect of our work. We envision a future where gaming transcends entertainment and becomes a transformative medium for connection, expression, and empowerment. where gaming transcends entertainment and becomes a transformative medium for connection, expression, and empowerment.',
    img: characterImg,
    reverse: false,
  },
  {
    title: 'Our Mission',
    text: 'To create emotionally resonant and globally inclusive gaming experiences. At Gamecrio Studios, we aim to revolutionize the gaming industry by seamlessly blending innovation, creativity, and inclusivity into every aspect of our work To create emotionally resonant and globally inclusive gaming experiences. At Gamecrio Studios, we aim to revolutionize the gaming industry by seamlessly blending innovation, creativity, and inclusivity into every aspect of our work.',
    img: labImg,
    reverse: true,
  },
];

export default function VisionMission() {
  const sectionRef = useRef(null);
  useGSAP(() => {
    const total = slides.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        // pin: true,
        scrub: true,
        start: 'top bottom',
        end: `+=${window.innerHeight * (total - 1)}`,
      },
    });

    slides.forEach((slide, i) => {
      const base = `.slide-${i}`;
      const content = `${base} .content`;
      const image = `${base} .image`;

      gsap.set(base, {
        zIndex: total - i,
        opacity: i === 0 ? 1 : 0,
        scale: i === 0 ? 1 : 0.95,
      });

      gsap.set(content, {
        x: slide.reverse ? 150 : -150,
        opacity: 0,
        clipPath: 'inset(0 100% 0 0)',
      });

      gsap.set(image, {
        x: slide.reverse ? -150 : 150,
        opacity: 0,
        clipPath: 'inset(0 0 0 100%)',
      });
    });

    for (let i = 0; i < total; i++) {
      const base = `.slide-${i}`;
      const content = `${base} .content`;
      const image = `${base} .image`;
      if (i == total + 1) {
        tl.to(base, {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: 'power1.inOut',
        }, (i + 1) * 1.5 - 0.3);
      }
      tl.to(base, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      }, i * 1.5);

      tl.to(content, {
        x: 0,
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.6,
        ease: 'power2.out',
      }, i * 1.5);

      tl.to(image, {
        x: 0,
        opacity: 1,
        clipPath: 'inset(0 0 0 0%)',
        duration: 0.6,
        ease: 'power2.out',
      }, i * 1.5 + 0.1);

      if (i !== total - 1) {
        tl.to(base, {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: 'power1.inOut',
        }, (i + 1) * 1.5 - 0.3);
      }
    }
  }, { scope: sectionRef });


  return (
    <section className={`${styles.scrollSection} my-5`}>
      <div ref={sectionRef} className={styles.sliderWrapper}>
        {slides.map((s, i) => (
          <div
            key={i}
            className={`${styles.slide} slide-${i} ${s.reverse ? styles.reverse : ''}`}
          >
            <div className={`${styles.content} content`}>
              <h2 className={styles.Heading}>
                OUR <br />
                <span className={styles.textOutline}> {s.title.slice(3)}</span>
              </h2>
              <p className={styles.para}>{s.text}</p>
              <div className="text-start">
                <button className={`${AboutStyles.aboutButton} px-4 mt-3`}>
                  GET ASSISTANCE
                  <span className={`${AboutStyles.aboutButtonArrow} ms-2`}>
                    <FiArrowUpRight className={AboutStyles.arrowDefault} />
                    <FiArrowRight className={AboutStyles.arrowHover} />
                  </span>
                </button>
              </div>
            </div>

            <div className={`${styles.image} image`}>
              <Image src={s.img} alt={s.title} priority />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
