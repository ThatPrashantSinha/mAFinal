
import React, { useState } from 'react';
import { ONBOARDING_SLIDES } from '../constants';

interface OnboardingProps {
  onSkip: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onSkip }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = ONBOARDING_SLIDES[currentSlide];

  const handleNext = () => {
    if (currentSlide < ONBOARDING_SLIDES.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onSkip();
    }
  };

  return (
    <div className="h-full bg-gradient-to-b from-[#4c51bf] to-[#6b46c1] flex flex-col text-white">
      <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-12">
        {/* Slide Image Placeholder Replacement */}
        <div className="w-64 h-64 bg-white/10 rounded-3xl flex items-center justify-center p-6 backdrop-blur-sm relative shadow-xl overflow-hidden">
           <div className="absolute inset-0 bg-blue-500/20 animate-pulse"></div>
           <div className="relative z-10 w-full h-full bg-blue-100 rounded-xl flex items-center justify-center border-4 border-white/50">
              <div className="w-4/5 h-4/5 bg-blue-200 rounded-lg flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full mb-4 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  </div>
                  <div className="w-full h-2 bg-blue-300 rounded mb-2"></div>
                  <div className="w-2/3 h-2 bg-blue-300 rounded"></div>
              </div>
           </div>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">{slide.title}</h2>
          <p className="text-sm opacity-90 leading-relaxed px-4">
            {slide.description}
          </p>
        </div>

        {/* Dots */}
        <div className="flex space-x-2">
          {ONBOARDING_SLIDES.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-[#00D1FF]' : 'w-2 bg-white/40'}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="p-8 pb-12 flex justify-center">
        <button 
          onClick={handleNext}
          className="bg-[#557e74] hover:bg-[#43645c] text-white px-12 py-3 rounded-md font-medium text-lg min-w-[140px] transition-colors shadow-lg"
        >
          {currentSlide === ONBOARDING_SLIDES.length - 1 ? 'Get Started' : 'Skip'}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
