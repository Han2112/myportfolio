import React, { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';
import '../styles/Projects.css';

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 992) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const chunks = [];
  for (let i = 0; i < projectsData.length; i += columns) {
      chunks.push(projectsData.slice(i, i + columns));
  }

  return (
    <section id="projects" className="section-padding">
      <Container>
        <div className="section-header text-center mb-5">
          <h2>Project Portfolio</h2>
          <div className="line-separator"></div>
        </div>
        
        <Carousel 
            activeIndex={index} 
            onSelect={handleSelect} 
            indicators={true} 
            interval={3000} 
            pause="hover"
            className="project-carousel"
        >
          {chunks.map((chunk, chunkIndex) => (
             <Carousel.Item key={chunkIndex}>
               <Row className="justify-content-center">
                  {chunk.map((project) => (
                     <Col lg={4} md={6} sm={12} key={project.id} className="mb-4">
                        <ProjectCard project={project} />
                     </Col>
                  ))}
               </Row>
             </Carousel.Item>
          ))}
        </Carousel>

      </Container>
    </section>
  );
};

export default Projects;