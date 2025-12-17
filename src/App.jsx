import React from 'react';
import MyNavbar from './components/MyNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import './styles/App.css'; 

function App() {
  return (
    <div className="app-container">
      <MyNavbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact /> 
      <Footer/>
    </div>
  );
}

export default App;