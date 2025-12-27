
import React, { useState } from 'react';

interface MobileRegistrationProps {
  onNext: (phone: string) => void;
  technicalError?: boolean;
}

const MobileRegistration: React.FC<MobileRegistrationProps> = ({ onNext, technicalError }) => {
  const [phone, setPhone] = useState('');

  const isValid = phone.length === 10 && /^\d+$/.test(phone) && !technicalError;

  return (
    <div className="h-full bg-white flex flex-col p-6 pt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-10">Register Your Mobile Number</h1>
      
      <div className="space-y-10 flex-1">
        <div className="space-y-6">
          <label className="text-xl text-gray-500 font-normal">Enter Mobile Number</label>
          <div className="relative border-b-[1.5px] border-[#91a3da] pb-2">
            <input 
              type="tel"
              maxLength={10}
              placeholder="XXXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              className="bg-transparent text-[#2d3748] text-3xl tracking-[0.1em] outline-none w-full placeholder:text-[#e2e8f0] font-light"
            />
          </div>
        </div>

        <div className="pt-2">
          {technicalError && (
            <div className="mb-4 p-4 bg-red-50 border border-red-100 rounded-xl">
              <p className="text-red-600 text-sm font-medium text-center">
                We're currently experiencing technical difficulties. Please try again later.
              </p>
            </div>
          )}
          <button 
            disabled={!isValid}
            onClick={() => onNext(phone)}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all border ${
              isValid 
                ? 'bg-indigo-600 text-white border-indigo-600 active:scale-[0.98]' 
                : 'bg-[#f3f4f6] text-[#a0aec0] border-[#e2e8f0]'
            }`}
          >
            Next
          </button>
        </div>

        <p className="text-[13px] text-gray-400 leading-relaxed font-normal mt-4">
          By continuing, you authorize UIDAI to send an OTP to this mobile number for authentication purposes. Standard SMS charges may apply.
        </p>
      </div>

      {/* Numeric Keypad - kept for functionality but styled subtly */}
      <div className="grid grid-cols-3 gap-2 bg-gray-50 p-4 rounded-2xl mb-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'DEL'].map((val, idx) => (
          <button 
            key={idx}
            disabled={val === '' || technicalError}
            onClick={() => {
              if (val === 'DEL') {
                setPhone(prev => prev.slice(0, -1));
              } else if (typeof val === 'number' && phone.length < 10) {
                setPhone(prev => prev + val);
              }
            }}
            className={`h-14 flex items-center justify-center rounded-lg font-semibold text-xl transition-colors ${val === '' ? 'bg-transparent' : 'bg-white shadow-sm text-gray-700 active:bg-gray-100'}`}
          >
            {val === 'DEL' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 002.828 0L21 9a2 2 0 000-2.828L12.414 1.586a2 2 0 00-2.828 0L3 12z" />
              </svg>
            ) : val}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileRegistration;
