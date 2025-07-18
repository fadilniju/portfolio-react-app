import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        <div className="project-card floating">
          <div className="project-img">
            <i className="fab fa-telegram"></i>
          </div>
          <div className="project-content">
            <h3>Pollinations AI Telegram Bot</h3>
            <p>Revolutionized content creation for 15K+ users with an AI-powered Telegram bot generating images, text, and voice content on demand.</p>
            <div className="tech-stack">
              <span className="tech">Python</span>
              <span className="tech">Pyrogram</span>
              <span className="tech">Pollinations API</span>
              <span className="tech">Telegram Bot API</span>
            </div>
            <a href="https://t.me/NashrawarAIBot" target="_blank" className="btn">Launch Bot</a>
          </div>
        </div>
        
        <div className="project-card floating">
          <div className="project-img">
            <i className="fas fa-brain"></i>
          </div>
          <div className="project-content">
            <h3>Multimodal AI Assistant</h3>
            <p>An enterprise-grade AI assistant that understands both text and images, reducing customer service response times by 65%.</p>
            <div className="tech-stack">
              <span className="tech">Python</span>
              <span className="tech">TensorFlow</span>
              <span className="tech">CLIP</span>
              <span className="tech">GPT-4</span>
            </div>
            <a href="#" className="btn">Case Study</a>
          </div>
        </div>
        
        <div className="project-card floating">
          <div className="project-img">
            <i className="fas fa-chart-network"></i>
          </div>
          <div className="project-content">
            <h3>Neural Style Transfer Platform</h3>
            <p>A scalable platform that transforms user photos into artworks using neural networks, processing 5K+ images daily.</p>
            <div className="tech-stack">
              <span className="tech">TensorFlow.js</span>
              <span className="tech">React</span>
              <span className="tech">Node.js</span>
              <span className="tech">WebGL</span>
            </div>
            <a href="#" className="btn">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
