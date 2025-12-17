import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="project-card h-100">
        <div className="card-img-wrapper">
          <Card.Img variant="top" src={project.img} />
          <div className="card-overlay">
            <Button variant="light" href={project.demo} target="_blank" size="sm" className="me-2">
              <FaExternalLinkAlt /> Live
            </Button>
            <Button variant="dark" href={project.repo} target="_blank" size="sm">
              <FaGithub /> Code
            </Button>
          </div>
        </div>
        <Card.Body>
          <Card.Title className="project-title">{project.title}</Card.Title>
          <Card.Text className="project-desc">
            {project.description}
          </Card.Text>
          <div className="tech-stack">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-badge">{t}</span>
            ))}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;