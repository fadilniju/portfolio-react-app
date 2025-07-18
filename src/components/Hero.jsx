// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // Set up Three.js scene for animated line art
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    camera.position.z = 5;
    
    // Create lines
    const lines = [];
    const lineCount = 100;
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x64ffda,
      transparent: true,
      opacity: 0.7
    });
    
    for (let i = 0; i < lineCount; i++) {
      const points = [];
      for (let j = 0; j < 50; j++) {
        points.push(new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ));
      }
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      line.userData = {
        originalPositions: points.map(p => p.clone()),
        amplitude: Math.random() * 2 + 1,
        frequency: Math.random() * 0.1 + 0.01,
        offset: Math.random() * 100
      };
      
      scene.add(line);
      lines.push(line);
    }
    
    // Mouse move interaction
    const mouse = new THREE.Vector2();
    window.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      lines.forEach(line => {
        const positions = line.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          const idx = i / 3;
          const originalPos = line.userData.originalPositions[idx];
          
          // Add wave-like motion
          const wave = Math.sin(elapsedTime * line.userData.frequency + idx * 0.1 + line.userData.offset) * line.userData.amplitude;
          
          // Add mouse interaction
          const mouseEffect = mouse.length() > 0 ? 
            (1 - Math.min(1, originalPos.distanceTo(new THREE.Vector3(mouse.x * 10, mouse.y * 10, 0)) / 10) * 3 : 0;
          
          positions[i] = originalPos.x + wave * 0.3 + mouse.x * mouseEffect;
          positions[i + 1] = originalPos.y + wave * 0.5 + mouse.y * mouseEffect;
          positions[i + 2] = originalPos.z + wave * 0.2;
        }
        
        line.geometry.attributes.position.needsUpdate = true;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);
  
  return (
    <section id="home" className="hero" style={{ background: 'black' }}>
      <canvas ref={canvasRef} className="line-art-canvas"></canvas>
      
      <div className="hero-content">
        <h1>
          <span className="text-pop">Transforming</span>{' '}
          <span className="text-pop">Ideas</span>{' '}
          <span className="text-pop">into</span>{' '}
          <span className="text-pop">AI-Powered</span>{' '}
          <span className="text-pop">Solutions</span>
        </h1>
        <h2>
          <span className="text-pop">Full-Stack Developer</span>{' '}
          <span className="text-pop">&</span>{' '}
          <span className="text-pop">AI Specialist</span>
        </h2>
        <p>
          <span className="text-pop">
            I build intelligent web applications that solve complex business challenges and deliver measurable results for global enterprises.
          </span>
        </p>
        
        <div className="value-prop">
          <p>
            <span className="text-pop">🚀 87% of my AI implementations deliver ROI within 6 months</span>
          </p>
        </div>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn text-pop">View My Work</a>
          <a href="#contact" className="btn secondary text-pop">Hire Me</a>
        </div>
      </div>
      
      <div className="profile-container floating">
        <div className="profile-image"></div>
      </div>
    </section>
  );
};

export default Hero;
