
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="bg-indigo-700 text-white p-6 pb-12 rounded-b-[40px] shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>
          <h1 className="text-xl font-bold">My Aadhaar</h1>
          <div className="w-10 h-10 bg-indigo-500 rounded-full border-2 border-white overflow-hidden">
            <img src="https://picsum.photos/seed/profile/100/100" alt="Profile" />
          </div>
        </div>
        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20">
          <p className="text-xs uppercase tracking-widest opacity-80 mb-1">Aadhaar Balance</p>
          <p className="text-2xl font-bold">Verified ✅</p>
        </div>
      </div>

      <div className="flex-1 p-6 -mt-6">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Download Aadhaar', icon: '📥', color: 'bg-blue-50' },
            { label: 'Order PVC Card', icon: '💳', color: 'bg-green-50' },
            { label: 'Verify Email/Mobile', icon: '📧', color: 'bg-yellow-50' },
            { label: 'Check Status', icon: '🔍', color: 'bg-purple-50' },
            { label: 'Locate Center', icon: '📍', color: 'bg-red-50' },
            { label: 'Aadhaar Lock', icon: '🔒', color: 'bg-indigo-50' }
          ].map((item, i) => (
            <div key={i} className={`${item.color} p-4 rounded-2xl flex flex-col items-center justify-center space-y-2 border border-black/5 shadow-sm active:scale-95 transition-transform cursor-pointer`}>
              <span className="text-3xl">{item.icon}</span>
              <span className="text-xs font-bold text-gray-700 text-center leading-tight">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-indigo-900 rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-bold text-lg">Update Address</h3>
            <p className="text-xs opacity-70 mt-1">Keep your demographic details current with UIDAI online portals.</p>
            <button className="mt-4 bg-[#00D1FF] text-indigo-900 px-6 py-2 rounded-full text-xs font-bold">START NOW</button>
          </div>
          <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-indigo-700 rounded-full opacity-50"></div>
        </div>
      </div>

      <div className="p-6">
         <button onClick={() => window.location.reload()} className="w-full py-4 border-2 border-indigo-200 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
           Logout Securely
         </button>
      </div>
    </div>
  );
};

export default Dashboard;
