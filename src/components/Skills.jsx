import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import skillsData from '../data/skillsData';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <Container>
        <div className="section-header text-center mb-5">
          <h2>Skills</h2>
          <div className="line-separator"></div>
        </div>
        <Row className="justify-content-center">
          {skillsData.map((skillGroup, index) => (
            <Col md={5} key={index} className="mb-4">
              <div className="skill-card">
                <h3 className="skill-title">{skillGroup.category}</h3>
                <div className="skill-list">
                  {skillGroup.items.map((item, idx) => (
                    <span key={idx} className="skill-badge">{item}</span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;