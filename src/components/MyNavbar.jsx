import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../styles/MyNavbar.css';

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand 
            as={Link} 
            to="home" 
            smooth={true} 
            duration={1000}
            style={{cursor: 'pointer'}}
        >
            Portfolio.
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
              <Link 
                key={item}
                to={item} 
                spy={true} 
                smooth={true}   
                offset={-80}    
                duration={1000} 
                className="nav-link nav-link-custom"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;