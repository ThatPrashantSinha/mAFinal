
export enum AppStep {
  SPLASH = 'SPLASH',
  ONBOARDING = 'ONBOARDING',
  CONSENT = 'CONSENT',
  WELCOME = 'WELCOME',
  REGISTER_MOBILE = 'REGISTER_MOBILE',
  OTP_VERIFICATION = 'OTP_VERIFICATION',
  DASHBOARD = 'DASHBOARD'
}

export interface OnboardingSlide {
  id: number;
  title: string;
  description: string;
  image: string;
}
