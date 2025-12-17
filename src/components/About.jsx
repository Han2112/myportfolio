import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="section-header text-center mb-5">
          <h2>About me</h2>
          <div className="line-separator"></div>
        </div>

        <Row className="align-items-center">
          
          {/* KOLOM KIRI: Teks Deskriptif (Human Readable) */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="about-subtitle">Network & Tech Enthusiast</h3>
              <p className="about-desc">
                I am an undergraduate student majoring in <strong>Telecommunication Engineering at Telkom University</strong> with a profound interest in technology, particularly in network infrastructure and system development.
              </p>
              <p className="about-desc">
                To me, connectivity goes beyond cables and signals; it's about constructing efficient and secure digital ecosystems. I am actively exploring <i>Cloud Computing</i>, <i>Network Security</i>, and modern system integrations.
              </p>
              
              <div className="about-badges mt-4">
                <span className="badge-item">🚀 Fast Learner</span>
                <span className="badge-item">💡 Problem Solver</span>
                <span className="badge-item">🎨 Detail Oriented</span>
              </div>
            </motion.div>
          </Col>

          {/* KOLOM KANAN: Code Editor Visual (Machine Readable) */}
          <Col lg={6}>
            <motion.div 
              className="code-window"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Header Jendela (Tombol Mac) */}
              <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="window-title">profile.json</span>
              </div>
              
              {/* Isi Kode */}
              <div className="window-body">
                <div className="code-line">
                  <span className="keyword">const</span> <span className="variable">developer</span> = <span className="bracket">{`{`}</span>
                </div>
                <div className="code-line indent">
                  <span className="key">nama:</span> <span className="string">"Raihan Ramadhan Setiawan"</span>,
                </div>
                <div className="code-line indent">
                  <span className="key">location:</span> <span className="string">"Indonesia"</span>,
                </div>
                <div className="code-line indent">
                  <span className="key">status:</span> <span className="string">"Open to Work"</span>,
                </div>
                <div className="code-line indent">
                  <span className="key">focus:</span> <span className="bracket">[</span>
                </div>
                <div className="code-line double-indent">
                  <span className="string">"Network"</span>, <span className="string">"WebDev"</span>, <span className="string">"IoT"</span>
                </div>
                <div className="code-line indent">
                  <span className="bracket">]</span>,
                </div>
                <div className="code-line indent">
                   <span className="key">motto:</span> <span className="function">()</span> <span className="keyword">=&gt;</span> <span className="string">"Conneting The World"</span>
                </div>
                <div className="code-line">
                  <span className="bracket">{`}`}</span>;
                </div>
              </div>
            </motion.div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default About;