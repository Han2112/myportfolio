import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaPaperPlane } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [btnText, setBtnText] = useState("Send Message");

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#3a0ca3', 
    color: '#ffffff',       
    iconColor: '#f72585',  
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnText("Sending...");

    emailjs.sendForm(
        'service_wjta4uh',  
        'template_m01turs',  
        form.current, 
        'KMSM3FBM73eNyLvmS'   
    )
      .then((result) => {
          console.log(result.text);
          setBtnText("Message Sent!");
          
          Toast.fire({
            icon: 'success',
            title: 'Message has been sent!'
          });

          e.target.reset();
          setTimeout(() => setBtnText("Send Message"), 3000);
      }, (error) => {
          console.log(error.text);
          setBtnText("Failed");
          
          Toast.fire({
            icon: 'error',
            title: 'Failed to send message.',
            text: 'Please try again later.'
          });
      });
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-header text-center mb-5">
          <h2>Contact Me</h2>
          <div className="line-separator"></div>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-card">
              <h4 className="text-center mb-4 text-white">Let's Work Together!</h4>
              
              <Form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" name="user_name" placeholder="Your Name" required className="custom-input" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number / WhatsApp</Form.Label>
                      <Form.Control type="tel" name="user_phone" placeholder="+62 ..." required className="custom-input" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" name="user_email" placeholder="email@example.com" required className="custom-input" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Write your project details or just say hi..." required className="custom-input" />
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" className="btn-send px-5 py-2">
                    {btnText} <FaPaperPlane className="ms-2" />
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default Contact;