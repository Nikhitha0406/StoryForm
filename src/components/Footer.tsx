
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-8 bg-healer-light bg-opacity-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 bg-healer-primary rounded-full opacity-70"></div>
            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
              <span className="text-healer-primary font-serif font-bold text-sm">S</span>
            </div>
          </div>
          <p className="text-sm font-serif font-medium text-healer-tertiary">
            StoryHealer © {new Date().getFullYear()}
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-sm text-healer-tertiary hover:text-healer-primary transition-colors">
            About
          </a>
          <a href="#" className="text-sm text-healer-tertiary hover:text-healer-primary transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-healer-tertiary hover:text-healer-primary transition-colors">
            Terms
          </a>
        </div>
        
        <p className="text-xs text-healer-tertiary opacity-70">
          Healing through storytelling
        </p>
      </div>
    </footer>
  );
};

export default Footer;
