import React from 'react';

function Profile() {
  return (
    <div className="max-w-4xl mx-auto flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="bg-[#0d1117]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#1a1a1a] w-full shadow-[0_0_50px_-12px_rgba(255,16,240,0.25)]">
        <div className="flex gap-8">
          {/* Profile Picture Section */}
          <div className="w-44 h-44 relative group">
            <div className="w-full h-full rounded-xl bg-[#1a1a1a]/60 border-2 border-[#FF10F0] overflow-hidden transition-all duration-300 group-hover:border-[#FF10F0]/80">
              <img 
                src="/images/tyler.png" 
                alt="Tyler"
                className="w-full h-full object-cover object-top transform transition-transform group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF10F0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          </div>

          {/* Stats Section */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-[#FF10F0] mb-8 [text-shadow:_0_0_30px_rgba(255,16,240,0.3)]">
              Player123
            </h1>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a]/20 p-4 rounded-lg border border-[#1a1a1a]/50">
                <h3 className="text-[#39FF14] text-lg mb-1 [text-shadow:_0_0_20px_rgba(57,255,20,0.3)]">KILLS</h3>
                <p className="text-3xl font-bold">1,025</p>
              </div>
              
              <div className="bg-[#1a1a1a]/20 p-4 rounded-lg border border-[#1a1a1a]/50">
                <h3 className="text-[#39FF14] text-lg mb-1 [text-shadow:_0_0_20px_rgba(57,255,20,0.3)]">PLAY TIME</h3>
                <p className="text-3xl font-bold">150h</p>
              </div>
              
              <div className="bg-[#1a1a1a]/20 p-4 rounded-lg border border-[#1a1a1a]/50">
                <h3 className="text-[#39FF14] text-lg mb-1 [text-shadow:_0_0_20px_rgba(57,255,20,0.3)]">EVENTS WON</h3>
                <p className="text-3xl font-bold">8</p>
              </div>
              
              <div className="bg-[#1a1a1a]/20 p-4 rounded-lg border border-[#1a1a1a]/50">
                <h3 className="text-[#39FF14] text-lg mb-1 [text-shadow:_0_0_20px_rgba(57,255,20,0.3)]">CURRENT RANK</h3>
                <p className="text-3xl font-bold">Champion</p>
              </div>
            </div>

            <div className="mt-6 bg-[#1a1a1a]/20 p-4 rounded-lg border border-[#1a1a1a]/50">
              <h3 className="text-[#39FF14] text-lg mb-2 [text-shadow:_0_0_20px_rgba(57,255,20,0.3)]">TITLES</h3>
              <div className="flex gap-3">
                <span className="px-3 py-1.5 rounded-md bg-[#FF10F0]/10 text-[#FF10F0] font-bold">Champion</span>
                <span className="px-3 py-1.5 rounded-md bg-[#FF10F0]/10 text-[#FF10F0] font-bold">Contender</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;