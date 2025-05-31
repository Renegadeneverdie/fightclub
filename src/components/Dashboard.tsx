import React, { useState } from 'react';
import { Home, User2, Calendar } from 'lucide-react';
import Profile from './sections/Profile';
import Events from './sections/Events';
import HomeSection from './sections/Home';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'profile':
        return <Profile />;
      case 'events':
        return <Events />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2a1a2a] text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-[#1a1a1a] bg-black/20 backdrop-blur-sm flex flex-col">
        <div className="flex-1" /> {/* Spacer */}
        <div className="space-y-2 p-6">
          <div 
            className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors ${
              activeSection === 'home' ? 'text-[#39FF14] bg-[#39FF14]/10' : 'text-gray-400 hover:text-[#39FF14] hover:bg-[#39FF14]/5'
            }`}
            onClick={() => setActiveSection('home')}
          >
            <Home size={24} />
            <span className="text-lg">Home</span>
          </div>

          <div 
            className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors ${
              activeSection === 'profile' ? 'text-[#FF10F0] bg-[#FF10F0]/10' : 'text-gray-400 hover:text-[#FF10F0] hover:bg-[#FF10F0]/5'
            }`}
            onClick={() => setActiveSection('profile')}
          >
            <User2 size={24} />
            <span className="text-lg">Profile</span>
          </div>

          <div 
            className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors ${
              activeSection === 'events' ? 'text-[#00FFFF] bg-[#00FFFF]/10' : 'text-gray-400 hover:text-[#00FFFF] hover:bg-[#00FFFF]/5'
            }`}
            onClick={() => setActiveSection('events')}
          >
            <Calendar size={24} />
            <span className="text-lg">Events</span>
          </div>
        </div>
        <div className="flex-1" /> {/* Spacer */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {renderSection()}
      </div>
    </div>
  );
}

export default Dashboard;