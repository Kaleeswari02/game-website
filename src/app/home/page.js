'use client'
import './home.css';
import { FiArrowUpRight } from 'react-icons/fi'; // import arrow icon
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
export default function HomeSection(){
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
                                <div><p className='banner-para mb-xl-5'>An award-winning India-based Casino Slot Game Development Company pushing the boundaries of narrative and serious games. Our passion for innovation drives us to develop groundbreaking games across genres, seamlessly blending engaging gameplay with meaningful narratives. Whether it’s creating stunning visuals, intuitive mechanics, or emotionally resonant stories, Gamecrio is dedicated to delivering exceptional quality in every project. As a leading game development company in India, we take pride in crafting experiences that engage players worldwide.</p></div>
                                <div className='banner-sec-btn mb-xl-0 mb-lg-0 mb-md-0 mb-5'><button className='mb-xl-5 banner-btn'>GET IN TOUCH <span className='banner-btn-arrow'><FiArrowUpRight /></span></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-12 mt-xl-5 mt-lg-5 mt-md-5 mb-xl-5 mb-lg-5">
                            <div className="banner-image mt-xl-5 mt-lg-5 mt-md-5 p-xl-5" ref={tigerRef}>
                                 <img className='banner-image-sec mt-xl-5 mt-lg-3' src='/images/banner-right.png' alt="Description of image" />
                            </div>
                        </div>
                        {/* <div className='col-xl-1 col-lg-1 col-md-1 mb-xl-5 mb-lg-5'></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}