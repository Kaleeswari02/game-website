'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import Capa1 from './../../../public/images/capa-1.png';
import Capa2 from './../../../public/images/capa-2.png';
import Capa3 from './../../../public/images/capa-3.png';
import styles from './capabilities.module.css';
import stylesAbout from '../about/about.module.css';

const tabs = [
  { id: '1', label: 'GAME ARTWORK', image: Capa1, heading: 'Game Artwork', buttonText:'Game Artwork' ,
    description: (
      <>
        Gamecrio Studios, a premier <a href="#" className={stylesAbout.link}>Casino Slot Game Artwork Company in the USA</a>, believes game artwork is more than just pixels on a screen—it’s a canvas for creativity, imagination, and storytelling. From concept art to final renders, every brushstroke and pixel is carefully crafted to evoke emotion, immerse players in new worlds, and bring our games to life.
      </>
    ) 
  },
  { id: '2', label: 'GAME DEVELOPMENT', image: Capa2, heading: 'Game Development', buttonText:'Game Development',
    description: (
      <>
        At Gamecrio, a leading <a href="#" className="text-primary fw-bold">Casino Slot Game Development Company in USA</a>, designing and developing games is a team effort driven by creativity, enthusiasm, and knowledge. We carefully plan, create, and optimize every element of our games—from AI systems to gameplay mechanics—to provide fluid, amazing gameplay that appeals players to keep playing.
      </>
    )
  },
  { id: '3', label: 'MULTIPLATFORM DEVELOPMENT', image: Capa3, heading: 'Multiplatform Development', buttonText:'Multiplatform Development',
    description: (
      <>
        Gamecrio Studios, a premier <a href="#" className="text-primary fw-bold">Casino Slot Game Artwork Company in the USA</a> we develop games for various platforms, including PC, console, mobile, and virtual reality. Our proficiency with several platforms enables us to optimize outreach and interaction while upholding a uniform and superior user experience across various devices.
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

      <div className={`${styles.tabsContainer} mt-5`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} mt-5 ${activeTab === tab.id ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={`${styles.tabContent} mt-5`}>
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id} className={styles.tabPane}>
              <div className="row align-items-center">
                <div className="col-md-6 d-flex justify-content-center align-items-center ">
                  <Image
                    src={tab.image}
                    alt={tab.heading}
                    className={styles.characterImage}
                  />
                </div>
                <div className="col-md-6 p-5">
                  <h3 className={styles.rightContentHeading}>{tab.heading}</h3>
                  <p className={`${stylesAbout.aboutPara} mt-4`}>
                    {tab.description}
                  </p>
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
          ) : null
        )}
      </div>
    </div>
  );
};

export default CapabilitiesSection;
