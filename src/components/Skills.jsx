import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Technical Expertise</h2>
      
      <div className="skills-container">
        <div className="skill-category floating">
          <h3><i className="fas fa-brain"></i> AI & Machine Learning</h3>
          <div className="skill-list">
            <span className="skill">Computer Vision</span>
            <span className="skill">NLP</span>
            <span className="skill">Generative AI</span>
            <span className="skill">TensorFlow</span>
            <span className="skill">PyTorch</span>
            <span className="skill">OpenAI API</span>
          </div>
        </div>
        
        <div className="skill-category floating">
          <h3><i className="fas fa-laptop-code"></i> Frontend Development</h3>
          <div className="skill-list">
            <span className="skill">React</span>
            <span className="skill">Vue.js</span>
            <span className="skill">JavaScript</span>
            <span className="skill">TypeScript</span>
            <span className="skill">CSS3</span>
            <span className="skill">Responsive Design</span>
          </div>
        </div>
        
        <div className="skill-category floating">
          <h3><i className="fas fa-server"></i> Backend & DevOps</h3>
          <div className="skill-list">
            <span className="skill">Node.js</span>
            <span className="skill">Python</span>
            <span className="skill">Express</span>
            <span className="skill">Docker</span>
            <span className="skill">AWS</span>
            <span className="skill">CI/CD</span>
          </div>
        </div>
      </div>
      
      <h3 className="section-title" style={{ marginTop: '80px' }}>Impact Metrics</h3>
      
      <div className="stats-container">
        <div className="stat-card floating">
          <div className="stat-number">15+</div>
          <div className="stat-text">AI Projects Deployed</div>
        </div>
        
        <div className="stat-card floating">
          <div className="stat-number">40%</div>
          <div className="stat-text">Average Efficiency Gain</div>
        </div>
        
        <div className="stat-card floating">
          <div className="stat-number">99.8%</div>
          <div className="stat-text">System Uptime</div>
        </div>
        
        <div className="stat-card floating">
          <div className="stat-number">100%</div>
          <div className="stat-text">Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
