import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;
    
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    alert(`Thank you for your message, ${name}! I will get back to you soon.`);
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2 className="section-title">Let's Connect</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-text">
              <h3>Location</h3>
              <p>Malabar, India (Remote Worldwide)</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-text">
              <h3>Email</h3>
              <a href="mailto:fadilmuhammed526@gmail.com">fadilmuhammed526@gmail.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="contact-text">
              <h3>Instagram</h3>
              <a href="https://www.instagram.com/nashrawar" target="_blank" rel="noreferrer">@nashrawar</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fab fa-telegram"></i>
            </div>
            <div className="contact-text">
              <h3>Telegram Bot</h3>
              <a href="https://t.me/NashrawarAIBot" target="_blank" rel="noreferrer">t.me/NashrawarAIBot</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="contact-text">
              <h3>Resume</h3>
              <a href="#" target="_blank" rel="noreferrer">Download PDF</a>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <p style={{ marginBottom: '20px', color: 'var(--text)' }}>
            Looking for an AI developer who delivers results? Let's discuss how I can contribute to your team.
          </p>
          
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Your email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">How can I help?</label>
              <textarea id="message" name="message" required placeholder="Tell me about your project..." />
            </div>
            
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
