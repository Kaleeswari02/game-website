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
      <div className="header-area mt-xl-3">
        <div className="row">
          <div className="col-xl-2">
            <Link href="/">
            <img className='logo-image-bg' src='/images/logo.png' alt="Description of image" width={150} height={60}/>
            </Link>
          </div>
          <div className="col-xl-8">
            <nav className="navbar-area">
              <ul className="nabar-section">
                <li><Link className="nav-item" href="/">Home</Link></li>
                <li><Link className="nav-item" href="#">About us</Link></li>
                <li><Link className="nav-item" href="#">Services</Link></li>
                <li><Link className="nav-item" href="/portfolio">Portfolio</Link></li>
                <li><Link className="nav-item" href="#">Testimonials</Link></li>
                <li><Link className="nav-item" href="#">Careers</Link></li>
                <li><Link className="nav-item" href="/contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-xl-2 mt-xl-2">
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

    </>
  );
}
