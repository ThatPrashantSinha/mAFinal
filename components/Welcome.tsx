
import React, { useState } from 'react';
import { AadhaarLogo } from '../constants';

interface WelcomeProps {
  onContinue: (lang: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onContinue }) => {
  const [selectedLang, setSelectedLang] = useState('English');

  return (
    <div className="h-full bg-gradient-to-b from-[#6b46c1] to-[#3b5998] flex flex-col text-white relative overflow-hidden">
      {/* Mandala Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 100 100" className="absolute top-[20%] left-[-10%] w-[120%] h-[120%] text-white fill-current animate-[spin_60s_linear_infinite]">
          <path d="M50 0 L52 40 L90 10 L60 50 L100 50 L60 50 L90 90 L52 60 L50 100 L48 60 L10 90 L40 50 L0 50 L40 50 L10 10 L48 40 Z" />
          <circle cx="50" cy="50" r="5" />
        </svg>
      </div>

      {/* Top White Section */}
      <div className="bg-white rounded-b-[40px] pt-10 pb-6 flex flex-col items-center justify-center shadow-xl z-10">
        <AadhaarLogo />
      </div>

      {/* Main Branding Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-4 z-10">
        <div className="text-center space-y-0.5">
          <p className="text-xl font-normal opacity-90">Welcome to</p>
          <h1 className="text-[52px] font-bold tracking-tight leading-none">mAadhaar</h1>
          <p className="text-[11px] tracking-[0.25em] font-medium opacity-80 mt-1 uppercase">THE UNIFIED AADHAAR APP</p>
        </div>
      </div>

      {/* Actions Section */}
      <div className="p-8 pb-12 space-y-4 z-10">
        {/* Language Button - Cyan as per screenshot */}
        <button 
          onClick={() => setSelectedLang('English')}
          className="w-full h-14 bg-[#00B4D8] rounded-[14px] flex items-center justify-between px-6 transition-all shadow-lg active:scale-95"
        >
          <span className="text-white text-lg font-bold">English</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </button>

        {/* Continue Button - Blue as per screenshot */}
        <button 
          onClick={() => onContinue(selectedLang)}
          className="w-full h-14 bg-[#4c73df] hover:bg-[#3b5998] rounded-[14px] text-white font-semibold text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center"
        >
          Continue
        </button>
      </div>

      {/* Bottom Mandala Decor Element (Bottom Left) */}
      <div className="absolute bottom-[-60px] left-[-60px] w-48 h-48 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Welcome;
