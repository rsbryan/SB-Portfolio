import React, { useState, useEffect } from 'react';
import { useKeyboard } from '../../hooks/useKeyboard';
import { PageType } from '../../types';

interface TerminalProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType | null;
}

export const Terminal: React.FC<TerminalProps> = ({ onNavigate, currentPage }) => {
  const [input, setInput] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const validCommands: PageType[] = ['about', 'projects', 'skills', 'experience', 'contact'];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const getFilteredSuggestions = () => {
    if (!input) return validCommands;
    return validCommands.filter(cmd => cmd.toLowerCase().startsWith(input.toLowerCase()));
  };

  const handleKeyPress = (key: string) => {
    // Prevent overflow by limiting input length
    if (input.length < 50) {
      setInput((prev) => prev + key);
    }
  };

  const handleEnter = () => {
    const command = input.trim().toLowerCase() as PageType;
    if (validCommands.includes(command)) {
      onNavigate(command);
    } else {
      const filtered = getFilteredSuggestions();
      if (filtered.length === 1) {
        onNavigate(filtered[0]);
      }
    }
    setInput('');
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEscape = () => {
    setInput('');
  };

  useKeyboard(handleKeyPress, handleEnter, handleBackspace, handleEscape);

  const filteredSuggestions = getFilteredSuggestions();

  return (
    <div className="terminal-interface">
      <div className="status-bar">
        <span className="status-item">Currently: Coding from La Jolla</span>
      </div>
      
      <div className="typing-area">
        <div className="suggestions">
          {filteredSuggestions.map((cmd) => (
            <span
              key={cmd}
              className={`suggestion ${currentPage === cmd ? 'active' : ''}`}
              onClick={() => {
                setInput(cmd);
                setTimeout(() => handleEnter(), 100);
              }}
            >
              {cmd}
            </span>
          ))}
        </div>
        
        <div className="command-line">
          <span className="input-text">
            {input}
            <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </span>
        </div>
      </div>
    </div>
  );
};