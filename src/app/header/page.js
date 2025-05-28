"use client"
import { useEffect, useState, useRef } from 'react';
import "./header.css";
import Link from 'next/link';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from 'react-toastify';
import { useModal } from '../context/ModalContext';

export default function Header() {
  const formRef = useRef();

  // const [modal, setModal] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();


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

  const toggle = () => setModal(!modal);

  const sendEmail = (data) => {
    emailjs
      .send("service_am2sw1d", "template_h7n0uvo", data, "aH6tkRSl3LIesgTSP")
      .then(
        () => {
        toast.success("Message sent successfully!");         
         reset(); 
          toggle(); 
        },
        (error) => {
          console.error(error.text);
          toast.danger("Failed to send message.");         
        }
      );
  };


  return (
    <>
      <div className={`container-fluid header-fluid fixed-top transition-all`} >
        <div className="header-area p-xl-1 p-lg-1 p-md-2">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2">
              <div className='logo-image p-xl-1'>
                <Link href="/">
                  <img className='logo-image-bg' src='/images/logo-white.svg' alt="Description of image" width={150} height={60} />
                </Link></div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8">
              <nav className="navbar-area mt-xl-4">
                <ul className="nabar-section">
                  <li><Link className="nav-item" href="/">Home</Link></li>
                  <li><Link className="nav-item" href="#about">About us</Link></li>
                  <li><Link className="nav-item" href="#Services">Services</Link></li>
                  <li><Link className="nav-item" href="#portfolio">Portfolio</Link></li>
                  <li><Link className="nav-item" href="#testimonal">Testimonials</Link></li>
                  <li><Link className="nav-item" href="/careers">Careers</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 mt-xl-2">
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
    </>
  );
}