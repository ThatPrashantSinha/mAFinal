
import React, { useState } from 'react';
import { AppStep } from './types';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';
import Consent from './components/Consent';
import Welcome from './components/Welcome';
import MobileRegistration from './components/MobileRegistration';
import OtpVerification from './components/OtpVerification';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.SPLASH);
  const [phone, setPhone] = useState('');
  const [resendCount, setResendCount] = useState(0);
  const [hasTechnicalError, setHasTechnicalError] = useState(false);

  const handleSplashComplete = () => setStep(AppStep.ONBOARDING);
  const handleOnboardingSkip = () => setStep(AppStep.CONSENT);
  const handleConsent = () => setStep(AppStep.WELCOME);
  const handleWelcomeContinue = () => setStep(AppStep.REGISTER_MOBILE);
  
  const handleMobileNext = (num: string) => {
    if (hasTechnicalError) return;
    setPhone(num);
    setStep(AppStep.OTP_VERIFICATION);
  };
  
  const handleOtpSubmit = () => {
    console.log("OTP Submitted - Staying on verification page as per requirements.");
  };

  const handleResendAttempt = () => {
    if (hasTechnicalError) return;
    
    const newCount = resendCount + 1;
    setResendCount(newCount);
    
    if (newCount >= 4) {
      setHasTechnicalError(true);
      // Show the error on the OTP page for 2 seconds before redirecting
      setTimeout(() => {
        setStep(AppStep.REGISTER_MOBILE);
      }, 2000);
    }
  };

  const renderStep = () => {
    switch (step) {
      case AppStep.SPLASH:
        return <SplashScreen onComplete={handleSplashComplete} />;
      case AppStep.ONBOARDING:
        return <Onboarding onSkip={handleOnboardingSkip} />;
      case AppStep.CONSENT:
        return <Consent onConsent={handleConsent} onClose={() => setStep(AppStep.ONBOARDING)} />;
      case AppStep.WELCOME:
        return <Welcome onContinue={handleWelcomeContinue} />;
      case AppStep.REGISTER_MOBILE:
        return (
          <MobileRegistration 
            onNext={handleMobileNext} 
            technicalError={hasTechnicalError} 
          />
        );
      case AppStep.OTP_VERIFICATION:
        return (
          <OtpVerification 
            phone={phone} 
            onSubmit={handleOtpSubmit} 
            onResend={handleResendAttempt}
            technicalError={hasTechnicalError}
          />
        );
      case AppStep.DASHBOARD:
        return <Dashboard />;
      default:
        return null;
    }
  };

  const getLayoutBg = () => {
    if (step === AppStep.SPLASH) return "bg-white";
    if (step === AppStep.ONBOARDING) return "bg-[#6d28d9]";
    if (step === AppStep.WELCOME) return "bg-[#3b5998]";
    return "bg-white";
  };

  return (
    <Layout bgClass={getLayoutBg()}>
      {renderStep()}
    </Layout>
  );
};

export default App;
