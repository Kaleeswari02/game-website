// components/About.js
import Image from 'next/image';
import girlImg from './../../../public/images/char-1.png'; 
import tigerImg from './../../../public/images/char-2.png'; 
import styles from './about.module.css';
import { FiArrowUpRight } from 'react-icons/fi'; // import arrow icon


export default function About() {
  return (
      <div className={`container-fluid  mt-5 mt-xl-5 pt-5 ${styles.aboutSection}`}>
      <div className={`container`}>

        <div className="row align-items-center">
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <Image src={girlImg} alt="Girl Character" className={styles.characterImg} />
          </div>

          <div className="col-md-6 text-center text-md-start">
            
            <h2 className={`${styles.aboutHeading}`}>
              Casino Slot Game Development<br/> Company
            </h2>
            <div className='p-3'>
            <p className={`${styles.aboutPara} mt-3`}>
             Our studio is a hub of creativity where every pixel tells a story. From concept art to character design, our talented artists breathe life into every aspect of our games. We believe in pushing the boundaries of visual storytelling, creating captivating environments that draw players into rich, immersive worlds.
            </p>
            <p className={`${styles.aboutPara}`}>
              As a leading <strong className='text-black'>Casino Slot Game Development Company in the USA</strong>, our team of skilled engineers and programmers harness the latest tools and technologies to build seamless gaming experiences. Whether it’s crafting complex gameplay mechanics or optimizing performance across platforms, we are committed to delivering games that captivate and inspire.
            </p>
            <div className='text-center'>
            <button className= {`${styles.aboutButton}  px-4 mt-3`}>
              GET ASSISTANCE <span className={`${styles.aboutButtonArrow}`}><FiArrowUpRight /></span>
            </button>
            </div>
            </div>
          
          </div>

          <div className="col-md-3 text-center mt-4 mt-md-0">
            <Image src={tigerImg} alt="Tiger Character" className={styles.characterImg} />
          </div>
        </div>
        </div>
      </div>
  );
}
