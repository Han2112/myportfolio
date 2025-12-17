import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll'; 
import { animateScroll as scroll } from 'react-scroll';
import personalInfo from '../data/personalInfo';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="footer-section">
      <Container>
        <Row className="gy-4 justify-content-between">
          
          <Col lg={4} md={6}>
            <h3 className="footer-brand">{personalInfo.name}</h3>
            <p className="footer-desc">
              Building aesthetic and functional digital experiences. 
              Always open to new opportunities and collaboration.
            </p>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="footer-title">Navigation</h5>
            <ul className="footer-links">
              <li><Link to="home" smooth={true} duration={1000} offset={-80}>Home</Link></li>
              <li><Link to="about" smooth={true} duration={1000} offset={-80}>About</Link></li>
              <li><Link to="projects" smooth={true} duration={1000} offset={-80}>Projects</Link></li>
              <li><Link to="contact" smooth={true} duration={1000} offset={-80}>Contact</Link></li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="footer-title">Connect</h5>
            <div className="social-icons">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="social-link"><FaGithub /></a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="social-link"><FaLinkedin /></a>
              <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="social-link"><FaInstagram /></a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="copyright-text">
              © {new Date().getFullYear()} Designed & Built by 
              <span className="text-highlight"> {personalInfo.name}</span>.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <button onClick={scrollToTop} className="back-to-top-btn">
              Back to Top <FaArrowUp className="ms-2" />
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;