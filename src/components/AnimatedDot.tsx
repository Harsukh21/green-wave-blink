
import React from 'react';

const AnimatedDot = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative">
        {/* Main dot */}
        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse relative z-10"></div>
        
        {/* Wave rings */}
        <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-50" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute inset-0 w-4 h-4 bg-green-300 rounded-full animate-ping opacity-25" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default AnimatedDot;
