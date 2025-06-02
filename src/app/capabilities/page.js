'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import styles from './capabilities.module.css';
import stylesAbout from '../about/about.module.css';

const tabs = [
  { id: '1', label: '2D/3D ANIMATION', image: '/images/services-img1.png', heading: '2D/3D ANIMATION', buttonText:'KNOW MORE' ,
    description: (
      <>
        We bring ideas to life through smooth, stunning motion.
From characters to full scenes, our animations add energy and emotion.
Perfect for games, videos, and immersive experiences.


      </>
    ) 
  },
  { id: '2', label: 'GAME DEVELOPMENT', image: '/images/services-img2.png', heading: 'Game Development', buttonText:'KNOW MORE',
    description: (
      <>
      We build fun, engaging games with smart design and smooth performance.
From concept to launch, we handle gameplay, visuals, and interactivity.
Made for PC, mobile, VR — and even treadmill-powered play.
      </>
    )
  },
  { id: '3', label: 'VIDEO EDITING', image: '/images/services-img3.png', heading: 'Video Editing', buttonText:'KNOW MORE',
    description: (
      <>
We craft dynamic videos with smooth cuts, effects, and motion.
From trailers to promos, we make your content look sharp and professional.
Perfect for games, social media, and storytelling.

      </>
    )
  },
   { id: '4', label: 'VIRTUAL REALITY (VR)', image: '/images/services-img4.png', heading: 'Virtual Reality', buttonText:'KNOW MORE',
    description: (
      <>
       We create fully immersive virtual worlds you can explore and interact with.
Perfect for games, training, and next-level digital experiences.
Step inside — and experience the future of play.


      </>
    )
  },
    { id: '5', label: 'BLOCKCHAIN', image: '/images/services-img5.png', heading: 'Blockchain', buttonText:'KNOW MORE',
    description: (
      <>
      We build secure and scalable blockchain solutions — from DeFi apps to centralized platforms.
Our team handles smart contracts, tokens, wallets, and full-stack blockchain development.
Whether it's a new ICO or a custom crypto project, we've got you covered.

      </>
    )
  }
];

const CapabilitiesSection = () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <div className={`${styles.capaSection} container-fluid  py-5`} id='Services'>
      <h2 className="text-center">
        <span className={styles.capaHeading}>OUR</span>
        <span className={`${styles.textOutline} ms-3`}>CAPABILITIES</span>
      </h2>

      <div className={`${styles.tabsContainer} mt-xl-5 mt-lg-5 mt-md-5 mt-3`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} mt-xl-5 mt-lg-5 mt-md-5 mt-3 ${activeTab === tab.id ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={`${styles.tabContent} mt-xl-5 mt-lg-5 mt-md-5 mt-3`}>
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id} className={styles.tabPane}>
              <div className="row align-items-center">
                <div className="col-md-6 col-xl-6 col-lg-6 col-12 d-flex justify-content-center align-items-center ">
                  <img
                    src={tab.image}
                    alt={tab.heading}
                    className={styles.characterImage}
                  />
                </div>
                <div className="col-md-6 col-md-6 col-xl-6 col-lg-6 col-12 p-xl-5 p-lg-5 p-md-3 ">
                  <h3 className={styles.rightContentHeading}>{tab.heading}</h3>
                  <p className={`${stylesAbout.aboutPara} mt-4`}>
                    {tab.description}
                  </p>
                  <div className="about-space">
                      <button className={`${stylesAbout.aboutButton} px-4 mt-3`}>
                        {tab.buttonText}
                        <span className={`${stylesAbout.aboutButtonArrow} ms-2`}>
                          <FiArrowUpRight className={stylesAbout.arrowDefault} />
                          <FiArrowRight className={stylesAbout.arrowHover} />
                        </span>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default CapabilitiesSection;
