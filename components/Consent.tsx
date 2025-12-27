
import React from 'react';

interface ConsentProps {
  onConsent: () => void;
  onClose: () => void;
}

const Consent: React.FC<ConsentProps> = ({ onConsent, onClose }) => {
  return (
    <div className="h-full flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-[#3b5998] text-white p-4 flex items-center justify-center sticky top-0 z-10 shadow-md">
        <h1 className="text-lg font-medium">Resident Consent</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 text-gray-800 text-sm leading-relaxed">
        <p className="font-semibold">Read the following and provide your Consent by tapping on 'I Consent' button.</p>
        
        <p>UIDAI collects your Aadhaar Number and OTP in the mAadhaar :</p>
        
        <ol className="list-decimal pl-5 space-y-3">
          <li>To lock and unlock your biometrics as and when requested by you through mAadhaar application</li>
          <li>To update your mAadhaar profile</li>
          <li>To view Notification report</li>
          <li>To generate and fetch VID</li>
          <li>To lock Aadhaar</li>
          <li>To check any of the status request</li>
          <li>To help download Aadhaar or Order reprint of Aadhaar</li>
          <li>To help submit request for Address update or Aadhaar Validation Letter Request Services</li>
        </ol>

        <p>
          UIDAI will use the Aadhaar number to perform OTP based e-KYC authentication and receive your eKYC details from UIDAI CIDR (Central Identities Data Repository) including photograph.
        </p>

        <p className="text-xs text-gray-500 italic pb-20">
          Last updated: October 2023. By clicking 'I Consent', you agree to all UIDAI data policies and terms.
        </p>
      </div>

      {/* Footer Buttons */}
      <div className="grid grid-cols-2 h-14 border-t sticky bottom-0 bg-white">
        <button 
          onClick={onClose}
          className="flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors border-r"
        >
          CLOSE
        </button>
        <button 
          onClick={onConsent}
          className="flex items-center justify-center bg-[#51856b] hover:bg-[#436e59] text-white font-medium transition-colors"
        >
          I Consent
        </button>
      </div>
    </div>
  );
};

export default Consent;
