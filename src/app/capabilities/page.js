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
Bringing ideas to life through stunning visuals and smooth motion, our 2D and 3D animation services are designed to elevate digital content across industries. From stylized characters to realistic product simulations, we craft high quality assets for games, apps, explainer videos, and marketing campaigns. Whether it's dynamic environments, lifelike movement, or concept art for development, our expert team uses tools like Blender, Maya, and ZBrush to produce polished, production ready visuals.<br/><br/>Every animation we create tells a story, captures attention, and delivers impact. 
We collaborate closely with clients throughout the creative process to ensure the final output aligns perfectly with their vision. Rigorous quality checks and iterative feedback loops guarantee animations meet the highest standards and perform seamlessly across platforms.
      </>
    ) 
  },
  { id: '2', label: 'GAME DEVELOPMENT', image: '/images/services-img2.png', heading: 'Game Development', buttonText:'KNOW MORE',
    description: (
      <>
    We build immersive and engaging games that captivate players across platforms. From concept design and storyboarding to coding and deployment, our experienced developers and artists collaborate to create rich, interactive worlds with smooth gameplay and stunning visuals. Using powerful engines like Unity and Unreal, we develop 2D and 3D games tailored to your target audience whether it’s casual mobile games, AR/VR experiences, or full-scale PC and console titles.<br/><br/> Our focus is on seamless mechanics, compelling narratives, and optimized performance to deliver games that entertain, inspire, and drive engagement. We work closely with clients throughout the development process to ensure every detail aligns with their vision and goals. After launch, we offer ongoing support and updates to keep your game fresh and players engaged over time.


      </>
    )
  },
  { id: '3', label: 'VIDEO EDITING', image: '/images/services-img3.png', heading: 'Video Editing', buttonText:'KNOW MORE',
    description: (
      <>
Our video editing services transform raw footage into polished, compelling stories that captivate audiences. Whether it’s promotional videos, product demos, or training content, we expertly craft smooth transitions, clear audio, dynamic effects, and engaging motion graphics to bring your vision to life. Using industry leading tools like Adobe Premiere Pro and After Effects, we ensure every video is visually striking and communicates your message effectively.<br/><br/> From color correction to sound design, we handle every detail to produce videos that inform, inspire, and leave a lasting impact. We collaborate closely with clients throughout the editing process to ensure the final cut perfectly matches their goals and expectations. Additionally, our efficient workflow and quick turnaround times mean you receive high quality videos exactly when you need them.

      </>
    )
  },
   { id: '4', label: 'VIRTUAL REALITY (VR)', image: '/images/services-img4.png', heading: 'Virtual Reality', buttonText:'KNOW MORE',
    description: (
      <>
   We create immersive AR and VR experiences that blend the digital and physical worlds to engage users like never before. From interactive training simulations and virtual product demos to AR games integrated with real world gym equipment, our team designs cutting edge applications that deliver realistic visuals and intuitive interactions. Using platforms like Unity and Unreal Engine, we develop scalable, high performance AR/VR solutions tailored to your business needs. <br/><br/> Whether enhancing user engagement or creating innovative marketing tools, our AR/VR services help you stand out in a rapidly evolving digital landscape. We collaborate closely with clients throughout development to ensure each experience aligns perfectly with their vision and goals. Post-launch, we provide continuous support and updates to keep your AR/VR applications fresh and fully optimized.

      </>
    )
  },
    { id: '5', label: 'BLOCKCHAIN', image: '/images/services-img5.png', heading: 'Blockchain', buttonText:'KNOW MORE',
    description: (
      <>
  We develop secure, scalable blockchain applications tailored to your business needs. From smart contracts and token creation to decentralized finance (DeFi) platforms and crypto wallets, our team builds robust Web3 solutions that drive transparency, trust, and efficiency. Whether launching a new ICO, creating custom crypto projects, or integrating blockchain into existing systems, we leverage the latest technologies to deliver reliable, high-performance products. <br/><br/> Our full stack blockchain development ensures seamless user experiences combined with strong security standards, helping your business innovate and stay ahead in the decentralized future.


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
              <div className="row">
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
                      {/* <button className={`${stylesAbout.aboutButton} px-4 mt-3`}>
                        {tab.buttonText}
                        <span className={`${stylesAbout.aboutButtonArrow} ms-2`}>
                          <FiArrowUpRight className={stylesAbout.arrowDefault} />
                          <FiArrowRight className={stylesAbout.arrowHover} />
                        </span>
                      </button> */}
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
