import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';
import personalInfo from '../data/personalInfo';
import profileImg from '../assets/profile.png';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          
          <Col lg={5} md={12} className="mb-4 mb-lg-0 text-center">
             <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="hero-img-wrapper"
             >
                <div className="glowing-ring"></div>
                <img src={profileImg} alt="Profile" className="hero-img" />
             </motion.div>
          </Col>

          <Col lg={7} md={12} className="text-start">
            <motion.div
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="hero-subtitle">Hello, I am</h3>
              <h1 className="hero-title">{personalInfo.name}</h1>
              <h2 className="hero-role">{personalInfo.role}</h2>
              
              <p className="hero-desc">
                {personalInfo.bio}
              </p>
              
              <div className="hero-btns mt-4 d-flex justify-content-start flex-wrap gap-3">
                <Button 
                  href={personalInfo.cvPdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  download
                  className="btn-primary-custom d-flex align-items-center"
                >
                  <FaDownload className="me-2" /> Download CV
                </Button>
                
                <Button 
                  as={Link} to="contact" smooth={true} offset={-80} duration={1000}
                  className="btn-outline-custom"
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;