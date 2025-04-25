
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="w-full py-4 px-4 md:px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <div className="absolute inset-0 bg-healer-primary rounded-full opacity-70 animate-pulse-gentle"></div>
            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
              <span className="text-healer-primary font-serif font-bold text-lg md:text-xl">S</span>
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-serif font-bold text-gradient">StoryHealer</h1>
        </div>
        <nav>
          <ul className="flex gap-6 items-center">
            <li>
              <button 
                onClick={() => navigate('/create')}
                className="text-sm md:text-base font-medium text-healer-primary hover:text-healer-tertiary transition-colors"
              >
                Create Story
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate('/library')}
                className="text-sm md:text-base font-medium text-healer-primary hover:text-healer-tertiary transition-colors"
              >
                My Library
              </button>
            </li>
            <li>
              <button className="healing-button text-sm px-4 py-2 md:px-6 md:py-2">
                Begin Healing
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
