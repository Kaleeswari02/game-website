"use client";
import styles from "./about.module.css";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import {
  FaGlobe,
  FaProjectDiagram,
  FaUsers,
  FaCalendarAlt,
  FaHandshake,
} from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CapabilitiesSection from "../capabilities/page";
import { useModal } from "../context/ModalContext";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const stats = [
    { label: "Clients", value: 100, icon: <FaHandshake /> },
    { label: "Countries", value: 12, icon: <FaGlobe /> },
    { label: "Projects", value: 250, icon: <FaProjectDiagram /> },
    { label: "Employees", value: 50, icon: <FaUsers /> },
    { label: "Years", value: 3, icon: <FaCalendarAlt /> },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const hexRefs = useRef([]);
  const { openModal } = useModal();
  const tigerRef = useRef(null);
  const sectionRef = useRef(null);
  const sectionRefhex = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        tigerRef.current,
        { x: "-100px" },
        {
          x: "100px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  useGSAP(
    () => {
      gsap.from(hexRefs.current, {
        scrollTrigger: {
          trigger: sectionRefhex.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
        opacity: 0,
        x: -100,
        stagger: 0.3,
        duration: 1.2,
        ease: "power3.out",
      });
    },
    { scope: sectionRefhex }
  );

  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const intervals = stats.map((stat) => stat.value / steps);
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
    <div className={`container-fluid ${styles.aboutBg}`}>
      <div
        ref={sectionRef}
        className={`container-fluid ${styles.aboutSection}`}
        id="about"
      >
        <div className="row align-items-center justify-content-center mt-5">
          {/* Counter Section */}
          <div
            ref={sectionRefhex}
            className="col-12 col-sm-12 col-md-5 tabView col-lg-5 col-xl-5 text-center text-md-center mb-4 mb-md-0"
          >
            <div className={`${styles.countSection}`}>
              <div className={`${styles.honeycomb}`}>
                {/* First Row - 2 Items */}
                <div className={`${styles.hexRow}`}>
                  {stats.slice(0, 2).map((stat, i) => (
                    <div
                      className={styles.hexWrapper}
                      key={i}
                      ref={(el) => (hexRefs.current[i] = el)}
                    >
                      <div className={styles.countItem}>
                        <div className={styles.icon}>{stat.icon}</div>
                        <div className={styles.number}>{counts[i]}</div>
                        <div className={styles.label}>{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second Row - 3 Items, Offset to Center */}
                <div  className={`${styles.hexRow} ${styles.offsetRow}`}>
                  {stats.slice(2).map((stat, i) => (
                    <div
                      className={styles.hexWrapper}
                      key={i + 2}
                      ref={(el) => (hexRefs.current[i] = el)}
                    >
                      <div className={styles.countItem}>
                        <div className={styles.icon}>{stat.icon}</div>
                        <div className={styles.number}>{counts[i + 2]}</div>
                        <div className={styles.label}>{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center text-md-start mb-4 mb-md-0 about-space">
            <h2 className={`${styles.aboutHeading} `}>Who We Are</h2>

            <p className={`${styles.aboutPara} mt-3`}>
              At Beeyoond, we turn ideas into engaging digital experiences by combining creativity with advanced technology. We specialize in 2D/3D animation, video editing, AR/VR game development, and blockchain solutions to helping businesses connect with users through immersive visuals and interactive design. From animating real machines to building secure Web3 apps, we deliver smart, standout solutions that push boundaries.
            </p>
            <p className={`${styles.aboutPara}`}>
            We focus on quality, clarity, and innovation in every project and we’re committed to delivering results that not only meet expectations but exceed them. With Beeyoond, you get a partner who listens, adapts, and delivers with precision ensuring your satisfaction at every step.
            </p>
            <div className="text-start">
              <button
                onClick={openModal}
                className={`${styles.aboutButton} px-4 mt-3`}
              >
                GET ASSISTANCE
                <span className={`${styles.aboutButtonArrow} ms-2`}>
                  <FiArrowUpRight className={styles.arrowDefault} />
                  <FiArrowRight className={styles.arrowHover} />
                </span>
              </button>
            </div>
          </div>

          {/* Character Image */}
  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 tabView text-center text-md-end mt-4 mt-md-0">
            <div ref={tigerRef} className={`${styles.tigerImg}`}>
              <img
                src="/images/aboutone.png"
                alt="Tiger Character"
                className={styles.characterImg}
              />
            </div>
          </div>
        </div>
      </div>
      <CapabilitiesSection />
    </div>
  );
}
