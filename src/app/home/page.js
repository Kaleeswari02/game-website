'use client'
import './home.css';
import { FiArrowUpRight } from 'react-icons/fi'; // import arrow icon
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useModal } from '../context/ModalContext';
gsap.registerPlugin(ScrollTrigger);
export default function HomeSection(){
    const { openModal } = useModal();
  
    const tigerRef = useRef(null);
    const sectionRef = useRef(null);
      useGSAP(() => {
    gsap.fromTo(
      tigerRef.current,
      { x: '-100px' },
      {
        x: '100px',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, { scope: sectionRef }); 
    return(
      
        <>
            
            <div className="container-fluid background-section" id='home'>
                <div ref={sectionRef} className="container background-content">
                    <div className="row ">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-12 mt-xl-5 mt-lg-5 mt-md-5 mb-xl-5 mb-lg-5">
                            <div className="banner-content mt-xl-5 mt-lg-5 mt-md-2 mb-md-3">
                                <div className="mt-xl-5 mt-lg-5 mt-md-5">
                                <h2><span className='banner-h1'>WE MAKE</span><br/><span className='banner-h2'>GAMES</span></h2>
                                <div><p className='banner-para mb-xl-5'>At Beeyoond, we create immersive AR/VR gaming experiences that connect with real world machines like treadmills, bikes, and rowing systems. We use powerful 2D and 3D animations to show natural movement and machine action, and we produce high quality videos that clearly explain how equipment works. Whether you're building an interactive game or showcasing a product, we help businesses create exciting digital experiences that feel real and keep users engaged.
</p></div>
                                <div className='banner-sec-btn mb-xl-0 mb-lg-0 mb-md-0 mb-5'><button onClick={openModal} className='mb-xl-5 banner-btn'>GET IN TOUCH <span className='banner-btn-arrow'><FiArrowUpRight /></span></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-12 mt-xl-5 mt-lg-5 mt-md-5 mb-xl-5 mb-lg-5">
                            <div className="banner-image mt-xl-5 mt-lg-5 mt-md-5 p-xl-5" ref={tigerRef}>
                                 <img className='banner-image-sec' src='/images/bannersec01.png' alt="Description of image" />
                            </div>
                        </div>
                        {/* <div className='col-xl-1 col-lg-1 col-md-1 mb-xl-5 mb-lg-5'></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}