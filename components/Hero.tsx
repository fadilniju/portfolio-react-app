// components/Hero.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    const lines: THREE.Line[] = [];
    const lineCount = 100;
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x64ffda,
      transparent: true,
      opacity: 0.7,
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
        offset: Math.random() * 100,
      };

      scene.add(line);
      lines.push(line);
    }

    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      lines.forEach(line => {
        const positions = line.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          const idx = i / 3;
          const originalPos = line.userData.originalPositions[idx];
          const wave = Math.sin(elapsedTime * line.userData.frequency + idx * 0.1 + line.userData.offset) * line.userData.amplitude;
          const mouseEffect = mouse.length() > 0 ? (1 - Math.min(1, originalPos.distanceTo(new THREE.Vector3(mouse.x * 10, mouse.y * 10, 0)) / 10)) * 3 : 0;
          
          positions[i] = originalPos.x + wave * 0.3 + mouse.x * mouseEffect;
          positions[i + 1] = originalPos.y + wave * 0.5 + mouse.y * mouseEffect;
          positions[i + 2] = originalPos.z + wave * 0.2;
        }
        line.geometry.attributes.position.needsUpdate = true;
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.children.forEach(child => {
          if(child instanceof THREE.Line) {
              child.geometry.dispose();
              (child.material as THREE.Material).dispose();
          }
      })
    };
  }, []);

  return (
    <section id="home" className="h-screen flex items-center px-[10%] relative overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
      <div className="max-w-[700px] z-10 pt-20 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-5 text-lightest-slate font-bold leading-tight animate-fade-in-up [animation-delay:100ms]">
          <span className="text-green text-shadow-glow">Transforming</span> Ideas into <span className="text-green text-shadow-glow">AI-Powered</span> Solutions
        </h1>
        <h2 className="text-xl sm:text-2xl mb-7 text-slate font-normal animate-fade-in-up [animation-delay:200ms]">
          Full-Stack Developer & AI Specialist
        </h2>
        <p className="text-lg sm:text-xl mb-10 max-w-[600px] text-slate animate-fade-in-up [animation-delay:300ms]">
          I build intelligent web applications that solve complex business challenges and deliver measurable results for global enterprises.
        </p>
        <div className="bg-green-tint border-l-4 border-green p-5 my-7 rounded-r-lg animate-fade-in-up [animation-delay:400ms]">
          <p className="text-base sm:text-lg m-0 text-light-slate">🚀 87% of my AI implementations deliver ROI within 6 months</p>
        </div>
        <div className="flex gap-4 animate-fade-in-up [animation-delay:500ms]">
          <a href="#projects" className="px-7 py-3 border-2 border-green text-green rounded-md hover:bg-green-tint transition-colors duration-300">View My Work</a>
          <a href="#contact" className="px-7 py-3 bg-green text-dark-navy font-bold rounded-md hover:opacity-90 transition-opacity duration-300">Hire Me</a>
        </div>
      </div>
      <div className="hidden lg:block absolute right-[10%] top-1/2 w-[350px] h-[350px] rounded-lg overflow-hidden border border-green/20 shadow-[0_0_30px_rgba(100,255,218,0.2)] transition-all duration-500 z-[5] animate-fade-in-right animate-float hover:scale-105 hover:shadow-[0_0_50px_rgba(100,255,218,0.3)]">
        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "linear-gradient(135deg, rgba(138,43,226,0.2), rgba(0,191,255,0.2)), url('https://i.postimg.cc/sX4bvbpZ/photo-2025-07-16-16-33-34-removebg-preview.png')"}}></div>
      </div>
    </section>
  );
};

export default Hero;
