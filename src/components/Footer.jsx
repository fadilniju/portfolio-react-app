import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/fadilniju" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://t.me/HEREFADIL" target="_blank" rel="noreferrer">
          <i className="fab fa-telegram"></i>
        </a>
        <a href="https://x.com/HEREFADIL" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/nashrawar" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      
      <div className="copyright">© 2023 Fadil Muhammed | AI Developer from Malabar</div>
      <div className="credits">
        Built with ❤️ using <span className="deepseek-credit">Three.js</span>,{' '}
        <span className="deepseek-credit">Pollinations.ai</span>, and{' '}
        <a href="https://www.deepseek.com" target="_blank" rel="noreferrer" className="deepseek-credit">
          DeepSeek v3 by Nashrawar
        </a>
      </div>
    </footer>
  );
};

export default Footer;
