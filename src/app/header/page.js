"use client"
import { useEffect, useState } from 'react';
import "./header.css";
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
export default function Header() {
  return (
    <>
    <div className={`container-fluid header-fluid fixed-top transition-all`} >
      <div className="header-area p-xl-1 p-lg-1 p-md-2">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2">
            <div className='logo-image p-xl-1'> 
            <Link href="/">
            <img className='logo-image-bg' src='/images/logo-white.svg' alt="Description of image" width={150} height={60}/>
            </Link></div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8">
            <nav className="navbar-area mt-xl-4">
              <ul className="nabar-section">
                <li><Link className="nav-item" href="#home">Home</Link></li>
                <li><Link className="nav-item" href="#about">About us</Link></li>
                <li><Link className="nav-item" href="#Services">Services</Link></li>
                <li><Link className="nav-item" href="/portfolio">Portfolio</Link></li>
                <li><Link className="nav-item" href="#">Testimonials</Link></li>
                <li><Link className="nav-item" href="#">Careers</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 mt-xl-2">
            <div className='button-space'>
            <a href="tel:9942998598">
            <button
              className='contact-btn'>
              Contact Us
            </button>
          </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
