import React from 'react';

function Home() {
  const leaderboardData = [
    { rank: 1, player: "Player1", wins: 120 },
    { rank: 2, player: "Player2", wins: 98 },
    { rank: 3, player: "Player3", wins: 75 },
    { rank: 4, player: "Player4", wins: 50 },
    { rank: 5, player: "Player5", wins: 43 }
  ];

  const recentActivity = [
    "Player1 won a match",
    "Player3 won a match",
    "Player2 reached 100 wins",
    "Player1 won a match"
  ];

  const updates = [
    {
      title: "New Map Release",
      description: "Underground arena with dynamic lighting"
    },
    {
      title: "Balance Update v2.1",
      description: "Improved combat mechanics"
    }
  ];

  return (
    <div className="flex gap-6">
      {/* Main Leaderboard */}
      <div className="flex-1">
        <h1 className="text-6xl font-bold text-[#00FFFF] mb-12 text-center tracking-wider [text-shadow:_0_0_30px_rgb(0_255_255_/_30%)]">
          LEADERBOARD
        </h1>
        
        <div className="bg-[#0d1117]/80 rounded-2xl p-6 border border-[#1a1a1a] backdrop-blur-sm">
          <div className="grid grid-cols-3 text-xl font-bold mb-4 px-6 text-[#FF10F0]">
            <div>RANK</div>
            <div>PLAYER</div>
            <div className="text-right">WINS</div>
          </div>
          
          {leaderboardData.map((item) => (
            <div 
              key={item.rank}
              className="grid grid-cols-3 text-xl py-4 px-6 border-t border-[#1a1a1a] hover:bg-[#1a1a1a]/30 transition-colors"
            >
              <div className="text-[#FF10F0]">#{item.rank}</div>
              <div className="text-white">{item.player}</div>
              <div className="text-right text-[#39FF14]">{item.wins}</div>
            </div>
          ))}
        </div>

        <button className="mt-8 w-full py-4 text-xl font-bold border-2 border-[#FF10F0] text-[#FF10F0] hover:bg-[#FF10F0]/10 transition-colors rounded-xl">
          VIEW ALL
        </button>
      </div>

      {/* Side Panel */}
      <div className="w-96 space-y-6">
        {/* Recent Activity */}
        <div className="bg-[#0d1117]/80 rounded-2xl p-6 border border-[#1a1a1a] backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-[#FF10F0] mb-4">RECENT ACTIVITY</h2>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="text-gray-300">
                {activity}
              </div>
            ))}
          </div>
        </div>

        {/* Updates */}
        <div className="bg-[#0d1117]/80 rounded-2xl p-6 border border-[#1a1a1a] backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-[#39FF14] mb-4">LATEST UPDATES</h2>
          <div className="space-y-4">
            {updates.map((update, index) => (
              <div key={index} className="border-t border-[#1a1a1a] pt-4 first:border-0 first:pt-0">
                <h3 className="text-white font-bold mb-1">{update.title}</h3>
                <p className="text-gray-400 text-sm">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;