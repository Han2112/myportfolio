import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaFolderOpen, FaExternalLinkAlt } from 'react-icons/fa';
import experienceData from '../data/experienceData';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <div className="section-header text-center mb-5">
          <h2>Career Journey</h2>
          <div className="line-separator"></div>
        </div>

        <div className="timeline-wrapper">
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>

              <div className="timeline-content">
                <div className="d-flex align-items-start">
                  
                  {item.logo && (
                    <div className="logo-wrapper me-3">
                      <img src={item.logo} alt={item.company} className="exp-logo" />
                    </div>
                  )}

                  <div className="w-100">
                    <div className="exp-header">
                      <h3 className="exp-role">{item.role}</h3>
                      <span className="exp-date">
                        <FaCalendarAlt className="me-2"/>{item.date}
                      </span>
                    </div>
                    
                    <h4 className="exp-company">{item.company}</h4>
                    <p className="exp-desc">{item.description}</p>

                    <div className="exp-tech">
                      {item.tech.map((t, i) => (
                        <span key={i} className="tech-badge">{t}</span>
                      ))}
                    </div>

                    {item.docUrl && (
                      <div className="exp-action mt-3">
                        <a href={item.docUrl} target="_blank" rel="noreferrer" className="btn-doc">
                          <FaFolderOpen className="me-2" /> View Documentation <FaExternalLinkAlt className="ms-1" size={12}/>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;