// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AITools from './components/AITools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading Portfolio...</p>
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <AITools />
          <Contact />
          <Footer />
          <Chatbot isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen} />
        </>
      )}
    </div>
  );
}

export default App;
