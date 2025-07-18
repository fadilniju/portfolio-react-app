import React, { useState, useEffect, useRef } from 'react';

const Chatbot = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([
    { text: "🤖 Hello! I'm Fadil's AI assistant. How can I help you today?", sender: 'bot' },
    { text: "💡 Try asking about my technical skills, project experience, or how I can help your business.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: `👤 ${inputValue}`, sender: 'user' }]);
    setInputValue('');
    
    // Simulate bot response after delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: `🤖 I'm an AI assistant. For real responses, this would connect to an API. You asked: "${inputValue}"`, 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div className="chatbot-icon" id="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-robot"></i>
      </div>
      
      <div className={`chatbot-window ${isOpen ? 'active' : ''}`} id="chatbot-window">
        <div className="chat-header">
          <h3>AI Assistant</h3>
          <button className="close-chat" onClick={() => setIsOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="chat-messages" id="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-container">
          <input 
            type="text" 
            className="chat-input" 
            id="chat-input" 
            placeholder="Ask about my qualifications..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button className="send-btn" onClick={sendMessage}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
