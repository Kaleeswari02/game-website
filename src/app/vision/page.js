'use client'
import Image from 'next/image';
import { Container } from 'reactstrap';
import characterImg from '../../../public/images/vision1.png'; 
import labImg from '../../../public/images/vision2.png'; // Replace with your actual lab image
import styles from './vision.module.css';
import stylesAbout from '../about/about.module.css';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';

const Vision = () => {
  return (
    <section className={`${styles.visionSection} py-5`}>
      <Container>
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="mb-3 text-uppercase">
              <span className= {`${styles.visionHeading} d-block`}>Our</span>
              <span className={styles.textOutline}>Vision</span>
            </h2>
            <p className={`${stylesAbout.aboutPara} mt-4`}>
              At Gamecrio Studios, a leading <strong>Casino Slot Game Development Company in India</strong>, our vision is to revolutionize the gaming industry by seamlessly blending innovation, creativity, and inclusivity into every aspect of our work. We envision a future where gaming transcends entertainment and becomes a transformative medium for connection, expression, and empowerment.
            </p>
            <p className={`${stylesAbout.aboutPara} mt-4`}>
              Creativity is the heartbeat of our vision, infusing every pixel, line of code, and narrative arc with passion and originality. We believe in the power of storytelling to transport players to new worlds, challenge their perspectives, and evoke genuine emotions. Inclusivity is at the core of everything we do, as we create games that resonate with people from all walks of life.
            </p>
             <button className={`${stylesAbout.aboutButton} px-4 mt-3`}>
                    BOOK A CONSULTATION
                    <span className={`${stylesAbout.aboutButtonArrow} ms-2`}>
                      <FiArrowUpRight className={stylesAbout.arrowDefault} />
                      <FiArrowRight className={stylesAbout.arrowHover} />
                    </span>
                  </button>
          </div>

          {/* Right Side with stacked images */}
          <div className={`col-lg-6 ${styles.imageStackWrapper}`}>
            <div className={styles.imageStack}>
              <Image
                src={labImg}
                alt="Lab Background"
                className={styles.backgroundImg}
                priority
              />
              <Image
                src={characterImg}
                alt="Vision Character"
                className={styles.foregroundImg}
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Vision;
