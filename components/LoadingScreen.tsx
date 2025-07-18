// components/LoadingScreen.tsx
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-dark-navy z-[10000]">
      <div className="w-20 h-20 border-8 border-green/30 border-t-green rounded-full animate-spin mb-5"></div>
      <p className="text-lg text-green">Loading Portfolio...</p>
    </div>
  );
};

export default LoadingScreen;
