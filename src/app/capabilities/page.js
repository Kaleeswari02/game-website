import { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';
import Image from 'next/image';
import { FiArrowUpRight ,FiArrowRight} from 'react-icons/fi';
import Capa1 from './../../../public/images/capa-1.png'; 
import Capa2 from './../../../public/images/capa-2.png'; 
import Capa3 from './../../../public/images/capa-3.png'; 
import styles from './capabilities.module.css';
import stylesAbout from '../about/about.module.css'

const CapabilitiesSection = () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <div className={`${styles.capaSection} container-fluid  py-5`}>
      <h2 className="text-center">
        <span className={`${styles.capaHeading}`}>OUR</span> 
        <span className={`${styles.textOutline} ms-3`}>CAPABILITIES</span>
      </h2>

      <Nav tabs className="justify-content-center mt-4 border-bottom">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => setActiveTab('1')}
          >
            GAME ARTWORK
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => setActiveTab('2')}
          >
            GAME DEVELOPMENT
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => setActiveTab('3')}
          >
            MULTIPLATFORM DEVELOPMENT
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab} className="mt-4">
       <TabPane tabId="1">
        <Row className="align-items-center">
            <Col md={6} className="d-flex justify-content-center align-items-center">
            <Image
                src={Capa1}
                alt="Queen Character"
                className={styles.characterImage}
            />
            </Col>
            <Col md={6}>
            <h3 className={`${stylesAbout.aboutHeading}`}>Game Artwork</h3>
            <p className={`${stylesAbout.aboutPara} mt-3`}>
                Gamecrio Studios, a premier <a href="#" className={`${stylesAbout.aboutPara}`}>
                    Casino Slot Game Artwork Company in the USA</a>, believes game artwork is more than just pixels on a 
                    screen—it’s a canvas for creativity, imagination, and storytelling. From concept art to final renders, 
                    every brushstroke and pixel is carefully crafted to evoke emotion,
                     immerse players in new worlds, and bring our games to life.
            </p>
        
              <button className={`${stylesAbout.aboutButton} px-4 mt-3`}>
               ARTWORK SUPPORT
                <span className={`${stylesAbout.aboutButtonArrow} ms-2`}>
                <FiArrowUpRight className={stylesAbout.arrowDefault} />
                <FiArrowRight className={stylesAbout.arrowHover} />
                </span>
            </button>
            </Col>
        </Row>
        </TabPane>

        <TabPane tabId="2">
        <Row className="align-items-center">
            <Col md={6} className="d-flex justify-content-center align-items-center">
            <Image
                src={Capa2}
                alt="Queen Character"
                className={styles.characterImage}
            />
            </Col>
            <Col md={6}>
            <h3 className={`${stylesAbout.aboutHeading}`}>Game Artwork</h3>
            <p className={`${stylesAbout.aboutPara} mt-3`}>
               At Gamecrio, a leading  <a href="#" className="text-primary fw-bold"> Casino Slot Game Development Company in USA </a>, 
                    designing and developing games is a team effort driven by creativity, enthusiasm, and knowledge. We carefully plan, create, and optimize every element of our games—from AI systems to gameplay mechanics—to provide fluid, amazing gameplay that appeals players to keep playing.
            </p>
            <button className={`${stylesAbout.aboutButton} px-4 mt-3`}>
               ARTWORK SUPPORT
                <span className={`${stylesAbout.aboutButtonArrow} ms-2`}>
                <FiArrowUpRight className={stylesAbout.arrowDefault} />
                <FiArrowRight className={stylesAbout.arrowHover} />
                </span>
            </button>
            </Col>
        </Row>
        </TabPane>

        <TabPane tabId="3">
        <Row className="align-items-center">
            <Col md={6} className="d-flex justify-content-center align-items-center">
            <Image
                src={Capa3}
                alt="Queen Character"
                className={styles.characterImage}
            />
            </Col>
            <Col md={6}>
            <h3 className={`${stylesAbout.aboutHeading}`}>Game Artwork</h3>
            <p className={`${stylesAbout.aboutPara} mt-3`}>
                Gamecrio Studios, a premier <a href="#" className="text-primary fw-bold">Casino Slot Game Artwork Company in the USA</a>we develop games for various platforms, including PC, console, mobile, and virtual reality. Our proficiency with several platforms enables us to optimize outreach and interaction while upholding a uniform and superior user experience across various devices.
            </p>
             <button className={`${stylesAbout.aboutButton} px-4 mt-3`}>
               ARTWORK SUPPORT
                <span className={`${stylesAbout.aboutButtonArrow} ms-2`}>
                <FiArrowUpRight className={stylesAbout.arrowDefault} />
                <FiArrowRight className={stylesAbout.arrowHover} />
                </span>
            </button>
            </Col>
        </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default CapabilitiesSection;
