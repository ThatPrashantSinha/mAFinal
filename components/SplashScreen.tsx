
import React, { useEffect } from 'react';
import { AadhaarLogo } from '../constants';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-full flex flex-col bg-white relative overflow-hidden">
      {/* Top White Area with Curve */}
      <div className="h-[38%] bg-white flex flex-col items-center justify-center relative z-20 px-12">
        <AadhaarLogo className="w-56" />
      </div>

      {/* The Curve Divider */}
      <div className="absolute top-[28%] left-0 w-full z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#7c3aed" 
            fillOpacity="1" 
            d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Main Bottom Section */}
      <div className="flex-1 bg-gradient-to-b from-[#7c3aed] to-[#3b82f6] relative flex flex-col items-center justify-center overflow-hidden">
        
        {/* Ray / Sunburst Background Pattern */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
          <div className="w-[150%] h-[150%] animate-[spin_120s_linear_infinite] origin-center opacity-40">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              {[...Array(24)].map((_, i) => (
                <path 
                  key={i} 
                  d="M50 50 L52 0 L48 0 Z" 
                  style={{ transform: `rotate(${i * 15}deg)`, transformOrigin: '50% 50%' }}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Circular Mandala Overlay (Center) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 pointer-events-none">
           <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
             <path d="M50 0 C60 20 80 40 100 50 C80 60 60 80 50 100 C40 80 20 60 0 50 C20 40 40 20 50 0" />
             <circle cx="50" cy="50" r="15" />
           </svg>
        </div>

        {/* Corner Mandala patterns */}
        <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 opacity-15 pointer-events-none rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
            <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
          </svg>
        </div>

        {/* Loading Spinner - Rotating circular dot spinner with slowed rotation speed */}
        <div className="relative w-16 h-16 z-30 animate-spin" style={{ animationDuration: '3s' }}>
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{ 
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 30}deg) translate(28px)`,
                opacity: 0.1 + (i * 0.08),
                marginTop: '-4px',
                marginLeft: '-4px'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
