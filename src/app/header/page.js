"use client"
import { useState, useRef } from 'react';
import "./header.css";
import Link from 'next/link';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from 'react-toastify';
import { useModal } from '../context/ModalContext';
import { CgMenuRight } from "react-icons/cg";

export default function Header() {
  const formRef = useRef();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);
  const { isModalOpen, openModal, closeModal } = useModal();

  const scrollToAndClose = (e, id) => {
    e.preventDefault();
    closeMenu();
    setTimeout(() => {
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup
      .string()
      .required("Message is required")
    // .max(500, "Message can't exceed 500 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });


  const sendEmail = (data) => {
    emailjs
      // .send("service_am2sw1d", "template_h7n0uvo", data, "aH6tkRSl3LIesgTSP")
      .send("service_6pnuomn", "template_cnsdo3r", data, "YDvctNu4CoXENihrU")
      
      .then(
        () => {
          toast.success("Message sent successfully!");
          reset();
          closeModal();

        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message.");
        }
      );
  };


  return (
    <>
      <div className='desktop-view'>
        <div className={`container-fluid header-fluid fixed-top transition-all desktop-view`} >
          <div className="header-area p-xl-1 p-lg-1 p-md-2">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-2">
                <div className='logo-image p-xl-1'>
                  <Link href="/">
                    <img className='logo-image-bg' src='/images/logo-white.svg' alt="Description of image" width={150} height={60} />
                  </Link></div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8">
                <nav className="navbar-area mt-xl-4 mt-lg-4">
                  <ul className="nabar-section">
                    <li><Link className="nav-item desk-nav" href="/">Home</Link></li>
                    <li><Link className="nav-item desk-nav" href="#about">About us</Link></li>
                    <li><Link className="nav-item desk-nav" href="#Services">Services</Link></li>
                    <li><Link className="nav-item desk-nav" href="#portfolio">Portfolio</Link></li>
                    <li><Link className="nav-item desk-nav" href="#testimonal">Testimonials</Link></li>
                    <li><Link className="nav-item desk-nav" href="/careers">Careers</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 mt-xl-2 mt-lg-2">
                <div className='button-space'>
                  <button onClick={openModal}
                    className='contact-btn'>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Modal */}
        {/* <Modal isOpen={modal} toggle={toggle} centered backdrop="static" >
          <ModalHeader toggle={toggle}>Contact Us</ModalHeader> */}
        <Modal isOpen={isModalOpen} toggle={closeModal} centered backdrop="static">
          <ModalHeader toggle={closeModal}>Contact Us</ModalHeader>
          <form ref={formRef} onSubmit={handleSubmit(sendEmail)}>
            <ModalBody>
              <FormGroup>
                <Label for="name">Name</Label>
                <input
                  id="name"
                  type="text"
                  autoComplete="off"
                  {...register("name")}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}

                />
                <div className="invalid-feedback">{errors.name?.message}</div>
              </FormGroup>

              <FormGroup>
                <Label for="email">Email</Label>
                <input
                  id="email"
                  type="email"
                  autoComplete="off"
                  {...register("email")}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div></FormGroup>

              <FormGroup>
                <Label for="message">Message</Label>
                <textarea
                  id="message"
                  type="textarea"
                  autoComplete="off"
                  rows={4}
                  {...register("message")}
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.message?.message}</div>
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button className='my-3' type="submit" color="primary">
                Submit
              </Button>
              {/* <Button color="secondary" onClick={toggle}>
                Cancel
              </Button> */}
            </ModalFooter>
          </form>
      </Modal>
    </div>
    <div className="mobile-view">
      <div className="container-fluid fixed-top mobile-view-bg">
        <div className="row">
          {/* Logo */}
          <div className="col-6">
            <div className="logo-sec m-2">
              <Link href="/">
                <img
                  className="logo-image-bg"
                  src="/images/logo.png"
                  alt="Logo"
                  width={150}
                  height={60}
                />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
            {/* Mobile Menu Button */}
            <div className="col-6">
              <div className="m-right">
                <button
                  type="button"
                  className="mobile-view-button"
                  onClick={toggleMenu}
                >
                  <CgMenuRight style={{ color: '#000000' }} />
                </button>
              </div>

              {/* Offcanvas Menu */}
              <div
                className={`offcanvas offcanvas-end background-design-mobile ${isMenuOpen ? 'show' : ''}`}
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">Beeyoond Gaming</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeMenu}
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <nav className="navbar-mobile-area">
                    <ul className="nabar-mobile-section">
                      <li><a className="nav-item" href="/">Home</a></li>
                      <li><a className="nav-item" href="#about" onClick={(e) => scrollToAndClose(e, '#about')}>About us</a></li>
                      <li><a className="nav-item" href="#Services" onClick={(e) => scrollToAndClose(e, '#Services')}>Services</a></li>
                      <li><a className="nav-item" href="#portfolio" onClick={(e) => scrollToAndClose(e, '#portfolio')}>Portfolio</a></li>
                      <li><a className="nav-item" href="#testimonal" onClick={(e) => scrollToAndClose(e, '#testimonal')}>Testimonials</a></li>
                      <li><Link className="nav-item" href="/careers">Careers</Link></li>
                    </ul>
                  </nav>
                  <button onClick={openModal} className='contact-btn'>Contact Us</button>
                  <Modal isOpen={isModalOpen} toggle={closeModal} centered backdrop="static">
                    <ModalHeader toggle={closeModal}>Contact Us</ModalHeader>
                    <form ref={formRef} onSubmit={handleSubmit(sendEmail)}>
                      <ModalBody>
                        <FormGroup>
                          <Label for="name">Name</Label>
                          <input
                            id="name"
                            type="text"
                            autoComplete="off"
                            {...register("name")}
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}

                          />
                          <div className="invalid-feedback">{errors.name?.message}</div>
                        </FormGroup>

                        <FormGroup>
                          <Label for="email">Email</Label>
                          <input
                            id="email"
                            type="email"
                            autoComplete="off"
                            {...register("email")}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          />
                          <div className="invalid-feedback">{errors.email?.message}</div></FormGroup>

                        <FormGroup>
                          <Label for="message">Message</Label>
                          <textarea
                            id="message"
                            type="textarea"
                            autoComplete="off"
                            rows={4}
                            {...register("message")}
                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                          />
                          <div className="invalid-feedback">{errors.message?.message}</div>
                        </FormGroup>
                      </ModalBody>

                      <ModalFooter>
                        <Button className='my-3' type="submit" color="primary">
                          Submit
                        </Button>
                        {/* <Button color="secondary" onClick={toggle}>
                          Cancel
                        </Button> */}
                      </ModalFooter>
                    </form>
                  </Modal>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>



  );
}