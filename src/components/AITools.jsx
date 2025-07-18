import React, { useState } from 'react';

const AITools = () => {
  const [enhancedPrompt, setEnhancedPrompt] = useState('');
  
  const generateImage = () => {
    const prompt = document.getElementById('image-prompt')?.value;
    if (!prompt) return;
    
    // Implementation would go here
    alert(`Generating image for: ${prompt}`);
  };
  
  const enhancePrompt = () => {
    const prompt = document.getElementById('prompt-enhancer')?.value;
    if (!prompt) return;
    
    setEnhancedPrompt(`Highly detailed, 4K resolution, professional digital art, ${prompt}, intricate details, vibrant colors, cinematic lighting, masterpiece`);
  };

  return (
    <section id="ai-tools">
      <h2 className="section-title">AI Tools</h2>
      
      <div className="tools-container">
        <div className="tool-card">
          <div className="tool-header">
            <div className="tool-icon">
              <i className="fas fa-image"></i>
            </div>
            <h3>AI Image Generator</h3>
          </div>
          
          <div className="input-group">
            <label htmlFor="image-prompt">Describe your vision</label>
            <textarea 
              id="image-prompt" 
              placeholder="What image would you like to create?"
              defaultValue="futuristic city at night with neon lights"
            />
          </div>
          
          <button className="btn" onClick={generateImage}>Generate Image</button>
          
          <div className="result-container" id="image-result">
            <div className="loading" id="image-loading">
              <div className="spinner"></div>
              <p>Creating your AI masterpiece...</p>
            </div>
            <p>Your AI-generated image will appear here</p>
            <button className="download-btn" id="image-download">Download Image</button>
          </div>
        </div>
        
        <div className="tool-card">
          <div className="tool-header">
            <div className="tool-icon">
              <i className="fas fa-magic"></i>
            </div>
            <h3>Prompt Enhancer</h3>
          </div>
          
          <div className="input-group">
            <label htmlFor="prompt-enhancer">Enter your basic prompt</label>
            <textarea 
              id="prompt-enhancer" 
              placeholder="Describe what you want to create..."
              defaultValue="a beautiful landscape"
            />
          </div>
          
          <button className="btn" onClick={enhancePrompt}>Enhance Prompt</button>
          
          <div className="result-container" id="enhanced-result">
            {enhancedPrompt ? (
              <p><strong>Enhanced Prompt:</strong><br/>{enhancedPrompt}</p>
            ) : (
              <p>Your enhanced prompt will appear here</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;
