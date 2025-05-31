'use client'
import { FaFacebook,FaInstagram,FaLinkedin } from "react-icons/fa";
import './footer.css';
import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
export default function Footerarea(){
    const tigerRef = useRef(null);
    const sectionRef = useRef(null);
      useGSAP(() => {
    gsap.fromTo(
      tigerRef.current,
      { x: '-150px' },
      {
        x: '150px',
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
        <div className="container-fluid footer-bg">
            <div className="container mt-xl-5" >
                <div className="footer-socialmedia p-5">
                    <ul className="footer-space">
                        <li><Link href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target="_blank" ><FaFacebook className="footer-icon"/>  <span className="footer-icon-text">Facebook</span> </Link></li>
                        <li><Link href="https://www.instagram.com/p/DJoxDdohR6f/?img_index=5&igsh=bjYxZHlpZzVibDB1" target="_blank" ><FaInstagram className="footer-icon"/><span className="footer-icon-text">Instagram</span> </Link></li>
                        <li><Link href="https://www.linkedin.com/company/beeyoondgaming/?originalSubdomain=in" target="_blank" ><FaLinkedin className="footer-icon"/><span className="footer-icon-text">LinkedIn</span> </Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container-fluid footer-bg-two ">
            <div className="conatiner footer-pad" ref={sectionRef}>
                <div className="row">
                    <div className="col-xl-5 col-md-5 col-lg-5 col-12 footer-area-div">
                        <div className="footer-image-section ">
                            <img src="/images/footer-img.png" alt="footer-image" className="footer-img-set" ref={tigerRef}/>
                            <h2 className="footer-heading ml-xl-5">Let's create something cool?</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-2 col-lg-2 col-12 footer-area-divone">
                        <div className="footer-service-section p-xl-5 p-lg-3 p-md-2 mt-xl-5 mt-lg-5">
                            <h2 className="footer-subhead mt-xl-5">Our Services</h2>
                            <p className="footer-para mt-xl-3">2D/3D Animation</p>
                            <p className="footer-para">Video Editing</p>
                            <p className="footer-para">AI & Automation</p>
                            <p className="footer-para">Game Development</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-2 col-lg-2 col-12 footer-area-divone">
                        <div className="footer-career-section p-xl-5 p-lg-3 p-md-2 mt-xl-5  mt-lg-5">
                            <h2 className="footer-subhead mt-xl-5">Others</h2>
                            <p className="footer-para mt-xl-3">About us</p>
                            <p className="footer-para">Portfolio</p>
                            <p className="footer-para">Testimonals</p>
                            <p className="footer-para">Careers</p>
                            <p className="footer-para">Contact Us</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-3 col-lg-3 col-12 footer-area-divone">
                        <div className="footer-career-section p-xl-5 p-lg-3 p-md-2 mt-xl-5  mt-lg-5">
                            <h2 className="footer-subhead mt-xl-5">Address</h2>
                            <p className="footer-para mt-xl-3">Annai Therasa Street, Kalavasal, Madurai, Tamil Nadu 625016</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrights p-3">
                     <p>© 2025 beeyoondgaming. All rights reserved.</p>
            </div>
        </div>
    </>
    )
}