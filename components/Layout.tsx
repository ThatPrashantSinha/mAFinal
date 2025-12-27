
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  bgClass?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, bgClass = "bg-white" }) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100 p-0 sm:p-4">
      <div className={`relative w-full max-w-[420px] h-screen sm:h-[844px] overflow-hidden sm:rounded-[40px] shadow-2xl ${bgClass}`}>
        {/* Device Notch Emulation (Optional/Hidden on mobile) */}

        
        {/* Main Content Area */}
        <div className="h-full w-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
