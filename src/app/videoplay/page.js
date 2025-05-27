'use client'
import { useState } from 'react';
import { Container, Modal, ModalBody } from 'reactstrap';
import Image from 'next/image';
import heroBg from '../../../public/images/video-play-bg.jpg'; // adjust path if needed
import styles from './videoplay.module.css';
import { FiPlay } from 'react-icons/fi';

const VideoPlay = () => {
      const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.videoPlaySection}>
      <Image src={heroBg} alt="Desert Background" fill className={styles.bgImage} />

      <Container className="text-center position-relative z-1">
         <div className={styles.playCircle} onClick={() => setModalOpen(true)}>
        <FiPlay className={styles.playIcon} />
        <svg className={styles.rotatingText} viewBox="0 0 100 100">
        <defs>
            <path id="circlePath"  d="M 50, 50   m -35, 0    a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
        </defs>
        <text>
            <textPath href="#circlePath">
            PLAY · PLAY · PLAY · PLAY · PLAY · PLAY
            </textPath>
        </text>
        </svg>
    </div>        

        <h1 className={styles.videoHeading}>
          WE MAKE IT <br/> <span className={styles.outlineText}>REAL</span>
        </h1>
        <p className={`${styles.subText} mt-3`}>
          Together, let’s explore new worlds, tell unforgettable stories, and push <br/> the boundaries of what gaming can be.
        </p>
      </Container>
        {/* Modal for YouTube Video */}
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)} centered size="lg">
        <ModalBody className={`${styles.modalBody}`} >
          <iframe
            src="https://www.youtube.com/embed/Rgj_r_Bu64o?autoplay=1"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen 
            className={`${styles.videoplayicon}`}
         
          ></iframe>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default VideoPlay;
