
import React from 'react';

export const AadhaarLogo: React.FC<{ className?: string }> = ({ className = "w-32" }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <img 
      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/512px-Aadhaar_Logo.svg.png" 
      alt="Aadhaar Logo"
      className="w-full h-auto object-contain"
      style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.05))' }}
    />
  </div>
);

export const ONBOARDING_SLIDES = [
  {
    id: 1,
    title: "Dashboard Services",
    description: "This section covers an array of Aadhaar services at your finger tip to help you download an Aadhaar, Order an Aadhaar reprint, Update Address, Verify an Aadhaar and Generate Offline eKYC & VID or scan a QR code.",
    image: "https://picsum.photos/seed/aadhaar1/400/400"
  },
  {
    id: 2,
    title: "My Aadhaar",
    description: "Personalize your Aadhaar services. Lock/Unlock biometrics, view history and more from the 'My Aadhaar' section.",
    image: "https://picsum.photos/seed/aadhaar2/400/400"
  },
  {
    id: 3,
    title: "Secure & Trusted",
    description: "Your data is encrypted and secure with UIDAI. Use TOTP for enhanced security during authentication.",
    image: "https://picsum.photos/seed/aadhaar3/400/400"
  }
];
