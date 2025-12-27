
import React, { useState, useEffect } from 'react';

interface OtpVerificationProps {
  onSubmit: (otp: string) => void;
  onResend: () => void;
  phone: string;
  technicalError?: boolean;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({ onSubmit, onResend, phone, technicalError }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (timer > 0 && !technicalError) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer, technicalError]);

  const handleChange = (index: number, val: string) => {
    if (val.length > 1 || technicalError) return;
    setError(null);
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
    
    // Auto focus next
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    if (technicalError) return;
    setIsVerifying(true);
    setError(null);
    
    // Simulate network delay
    setTimeout(() => {
      setIsVerifying(false);
      setError("Incorrect OTP. Please try again.");
      setOtp(['', '', '', '', '', '']);
      const firstInput = document.getElementById('otp-0');
      firstInput?.focus();
      onSubmit(otp.join(''));
    }, 1500);
  };

  const handleResend = () => {
    if (timer === 0 && !technicalError) {
      onResend();
      if (!technicalError) {
        setTimer(30);
        setError(null);
        setOtp(['', '', '', '', '', '']);
      }
    }
  };

  const isComplete = otp.every(digit => digit !== '') && !technicalError;

  return (
    <div className="h-full bg-white flex flex-col p-6 pt-10">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-10">Register Your Mobile Number</h1>
      
      <div className="flex-1 flex flex-col items-center">
        <p className="text-[#718096] text-lg mb-8 font-normal">Enter OTP code here</p>
        
        <div className="flex justify-center gap-4 mb-6">
          {otp.map((digit, i) => (
            <div key={i} className="flex flex-col items-center">
              <input 
                id={`otp-${i}`}
                type="tel"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value.replace(/\D/g, ''))}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && !digit && i > 0) {
                    const prevInput = document.getElementById(`otp-${i - 1}`);
                    prevInput?.focus();
                  }
                }}
                disabled={isVerifying || !!technicalError}
                className="w-10 text-center text-4xl font-normal text-gray-800 bg-transparent outline-none pb-1"
              />
              <div className="w-10 h-[2px] bg-[#91a3da]"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 px-4">
          {technicalError ? (
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl mt-4">
              <p className="text-red-600 text-sm font-medium">
                We're currently experiencing technical difficulties. Please try again later.
              </p>
            </div>
          ) : (
            <>
              <p className="text-[14px] text-gray-400">
                {timer > 0 ? (
                  <>Resend OTP is disabled for <span className="font-medium text-gray-500">{timer} secs</span>. <span className="text-gray-300">Resend</span></>
                ) : (
                  <>Didn't receive code? <button onClick={handleResend} className="text-indigo-600 font-bold">Resend</button></>
                )}
              </p>
              {error && (
                <p className="text-red-500 text-xs font-medium mt-4 animate-pulse">{error}</p>
              )}
            </>
          )}
        </div>

        <div className="w-full mt-12 px-2">
           <button 
            disabled={!isComplete || isVerifying || !!technicalError}
            onClick={handleVerify}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-md flex items-center justify-center space-x-2 ${
              isComplete && !isVerifying && !technicalError
                ? 'bg-indigo-600 text-white active:scale-[0.98]' 
                : 'bg-[#f3f4f6] text-[#a0aec0]'
            }`}
          >
            {isVerifying ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <span>Verify & Proceed</span>
            )}
          </button>
        </div>
      </div>

      {/* Numeric Keypad */}
      <div className="grid grid-cols-3 gap-2 bg-gray-50 p-4 rounded-2xl mb-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'DEL'].map((val, idx) => (
          <button 
            key={idx}
            disabled={val === '' || isVerifying || !!technicalError}
            onClick={() => {
              if (val === 'DEL') {
                const firstEmptyIdx = otp.findIndex(d => d === '');
                const targetIdx = firstEmptyIdx === -1 ? 5 : firstEmptyIdx - 1;
                if (targetIdx >= 0) {
                  const newOtp = [...otp];
                  newOtp[targetIdx] = '';
                  setOtp(newOtp);
                  const targetInput = document.getElementById(`otp-${targetIdx}`);
                  targetInput?.focus();
                }
              } else if (typeof val === 'number') {
                const emptyIdx = otp.findIndex(d => d === '');
                if (emptyIdx !== -1) handleChange(emptyIdx, val.toString());
              }
            }}
            className={`h-14 flex items-center justify-center rounded-lg font-semibold text-xl transition-colors ${val === '' ? 'bg-transparent' : 'bg-white shadow-sm text-gray-700 active:bg-gray-100 disabled:opacity-50'}`}
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

export default OtpVerification;
