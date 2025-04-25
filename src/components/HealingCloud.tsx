
import React from 'react';

interface HealingCloudProps {
  className?: string;
}

const HealingCloud: React.FC<HealingCloudProps> = ({ className = '' }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className="relative w-32 h-24 md:w-40 md:h-32">
        <div className="absolute top-6 left-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white opacity-80 floating-cloud" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute top-2 left-12 w-14 h-14 md:w-18 md:h-18 rounded-full bg-white opacity-90 floating-cloud" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-0 left-8 w-18 h-18 md:w-24 md:h-24 rounded-full bg-white opacity-70 floating-cloud" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-8 left-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white opacity-60 floating-cloud" style={{animationDelay: '0.7s'}}></div>
      </div>
    </div>
  );
};

export default HealingCloud;
