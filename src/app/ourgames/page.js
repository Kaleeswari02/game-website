'use client'
import React from 'react';
import styles from './ourgames.module.css'; // Your 3D hover styles
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const games = [
  { id: 0, title: 'Game One', img: '/images/port1.png', description: 'Exciting adventure game' },
  { id: 1, title: 'Game Two', img: '/images/port2.png', description: 'Puzzle and strategy' },
  { id: 2, title: 'Game Three', img: '/images/port3.png', description: 'Fast-paced action' },
  { id: 3, title: 'Game Four', img: '/images/port2.png', description: 'Fantasy RPG world' },
  { id: 4, title: 'Game Five', img: '/images/port1.png', description: 'Multiplayer battle' },
  { id: 5, title: 'Game Six', img: '/images/port2.png', description: 'Sci-fi exploration' },
  { id: 6, title: 'Game Seven', img: '/images/port1.png', description: 'Mystery detective' },
  { id: 7, title: 'Game Eight', img: '/images/port3.png', description: 'Alien invasion survival' },
];

const OurGames = () => {

      const handleMouseMove = (e, cardRef) => {
    const bounds = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.left;
    const topY = mouseY - bounds.top;
    const centerX = leftX - bounds.width / 2;
    const centerY = topY - bounds.height / 2;
    const distance = Math.sqrt(centerX * centerX + centerY * centerY);

    const rotateX = (centerY / 100);
    const rotateY = (-centerX / 100);
    const rotateAngle = Math.log(distance) * 2;

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(${rotateX}, ${rotateY}, 0, ${rotateAngle}deg)
    `;

    const glow = cardRef.current.querySelector(`.${styles.glow}`);
    if (glow) {
      glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${centerX * 2 + bounds.width / 2}px
          ${centerY * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }
  };

  const handleMouseLeave = (cardRef) => {
    cardRef.current.style.transform = '';
    const glow = cardRef.current.querySelector(`.${styles.glow}`);
    if (glow) {
      glow.style.backgroundImage = 'radial-gradient(circle at 50% 50%, #ffffff22, #0000000f)';
    }
  };
  return (
  <div className={`${styles.gamesSection} container-fluid my-5`}>
      <h2 className="text-center">
        <span className={styles.capaHeading}>OUR</span>
        <span className={`${styles.textOutline} ms-3`}>GAMES</span>
      </h2>

      <div className="container">
        <div className="row g-4 justify-content-center my-5">
          {games.map(({ id, title, img, description }) => {
            const cardRef = useRef(null);
            return (
              <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  ref={cardRef}
                  className={styles.card3d}
                  onMouseMove={(e) => handleMouseMove(e, cardRef)}
                  onMouseLeave={() => handleMouseLeave(cardRef)}
                >
                  <div className={`glow ${styles.glow}`}></div>
                  <div className={styles.cardImageWrapper}>
                    <img src={img} alt={title} className="img-fluid rounded" />
                  </div>
                  <div className={styles.cardContent}>
                    <h5 className="mt-3">{title}</h5>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurGames;
