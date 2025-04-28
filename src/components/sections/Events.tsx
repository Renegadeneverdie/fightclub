import React from 'react';

function Events() {
  const events = [
    {
      title: "Weekend Tournament",
      date: "March 15, 2024",
      prize: "$1,000",
      participants: "32/64"
    },
    {
      title: "Championship Finals",
      date: "March 20, 2024",
      prize: "$5,000",
      participants: "16/16"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#00FFFF] mb-8">Upcoming Events</h1>
      
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="bg-[#0d1117] rounded-xl p-6 border border-[#1a1a1a]">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400">{event.date}</p>
              </div>
              <div className="text-right">
                <p className="text-[#39FF14] text-xl font-bold mb-2">{event.prize}</p>
                <p className="text-gray-400">{event.participants} players</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events