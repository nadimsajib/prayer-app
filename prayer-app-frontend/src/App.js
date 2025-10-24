import React, { useState, useEffect } from 'react';
import { MapPin, Clock, BookOpen, Heart } from 'lucide-react';

export default function IslamicApp() {
  const [location, setLocation] = useState('Dhaka, Bangladesh');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
  const [isEditing, setIsEditing] = useState(false);
  const [tempLocation, setTempLocation] = useState(location);
  const [activeTab, setActiveTab] = useState('home');
  const [timeRemaining, setTimeRemaining] = useState({ hours: 1, minutes: 53, seconds: 24 });

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Countdown timer for next prayer
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeRemaining(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset when timer reaches 0
          return { hours: 1, minutes: 53, seconds: 24 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(countdown);
  }, []);

  const cities = [
    'Dhaka, Bangladesh',
    'Makkah, Saudi Arabia',
    'Madinah, Saudi Arabia',
    'Dubai, UAE',
    'Istanbul, Turkey',
    'Cairo, Egypt',
    'Karachi, Pakistan',
    'Jakarta, Indonesia'
  ];

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    setIsEditing(false);
  };

  const prayerTimes = [
    { name: 'Fajr', time: '5:12 AM', active: false },
    { name: 'Dhuhr', time: '12:15 PM', active: false },
    { name: 'Asr', time: '3:45 PM', active: true },
    { name: 'Maghrib', time: '5:38 PM', active: false },
    { name: 'Isha', time: '7:00 PM', active: false }
  ];

  const nextPrayer = 'Maghrib';

  const hadith = "The best of you are those who are best to their families. - Prophet Muhammad (ﷺ)";
  const quran = "And He found you lost and guided you. (Surah Ad-Duha, 93:7)";

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="p-6 pb-24 relative z-10">
        <div className="max-w-2xl mx-auto space-y-4">
          
          {activeTab === 'home' && (
            <>
              {/* Change Location Section */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <h3 className="text-lg font-semibold text-gray-800">Change Location</h3>
                  </div>
                </div>
                
                {isEditing ? (
                  <div className="space-y-3">
                    <select 
                      value={tempLocation}
                      onChange={(e) => setTempLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
                    >
                      {cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                      ))}
                    </select>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleLocationChange(tempLocation)}
                        className="flex-1 bg-teal-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-teal-700 transition"
                      >
                        Update
                      </button>
                      <button 
                        onClick={() => {
                          setIsEditing(false);
                          setTempLocation(location);
                        }}
                        className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-medium text-gray-800">{location}</p>
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="bg-teal-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-teal-700 transition"
                    >
                      Change
                    </button>
                  </div>
                )}
              </div>

              {/* Location & Time Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Location</h3>
                  </div>
                  <p className="text-lg font-medium text-gray-800">{location}</p>
                </div>
                
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Current Time</h3>
                  </div>
                  <p className="text-lg font-medium text-gray-800">{currentTime}</p>
                </div>
              </div>

              {/* Next Prayer Countdown */}
              <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-6 shadow-lg text-white">
                <div className="text-center">
                  <p className="text-sm font-medium opacity-90 mb-2">Next Prayer</p>
                  <h3 className="text-3xl font-bold mb-4">{nextPrayer}</h3>
                  <div className="flex justify-center gap-3 items-center">
                    <div className="bg-white bg-opacity-20 rounded-xl px-4 py-3 min-w-[70px]">
                      <div className="text-3xl font-bold">{String(timeRemaining.hours).padStart(2, '0')}</div>
                      <div className="text-xs opacity-90 mt-1">Hours</div>
                    </div>
                    <div className="text-2xl font-bold">:</div>
                    <div className="bg-white bg-opacity-20 rounded-xl px-4 py-3 min-w-[70px]">
                      <div className="text-3xl font-bold">{String(timeRemaining.minutes).padStart(2, '0')}</div>
                      <div className="text-xs opacity-90 mt-1">Minutes</div>
                    </div>
                    <div className="text-2xl font-bold">:</div>
                    <div className="bg-white bg-opacity-20 rounded-xl px-4 py-3 min-w-[70px]">
                      <div className="text-3xl font-bold">{String(timeRemaining.seconds).padStart(2, '0')}</div>
                      <div className="text-xs opacity-90 mt-1">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prayer Times Section */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Today's Prayer Times</h2>
                <div className="grid grid-cols-5 gap-4">
                  {prayerTimes.map((prayer, index) => (
                    <div 
                      key={index}
                      className={`rounded-2xl p-5 text-center transition-all ${
                        prayer.active 
                          ? 'bg-teal-600 text-white shadow-lg scale-105' 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="text-sm font-semibold mb-3">{prayer.name}</div>
                      <div className={`text-lg font-bold ${prayer.active ? 'text-white' : 'text-teal-600'}`}>
                        {prayer.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'hadith' && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 shadow-sm border border-amber-100 min-h-[400px]">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-bold text-gray-800">Daily Hadith</h3>
              </div>
              <p className="text-gray-700 leading-relaxed italic text-lg">{hadith}</p>
            </div>
          )}

          {activeTab === 'quran' && (
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-sm border border-emerald-100 min-h-[400px]">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-gray-800">Daily Quran</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg italic">{quran}</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex justify-around items-center">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition ${
                activeTab === 'home' ? 'text-teal-600 bg-teal-50' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Clock className="w-6 h-6" />
              <span className="text-sm font-medium">Home</span>
            </button>
            
            <button
              onClick={() => setActiveTab('hadith')}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition ${
                activeTab === 'hadith' ? 'text-amber-600 bg-amber-50' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Heart className="w-6 h-6" />
              <span className="text-sm font-medium">Hadith</span>
            </button>
            
            <button
              onClick={() => setActiveTab('quran')}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition ${
                activeTab === 'quran' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <BookOpen className="w-6 h-6" />
              <span className="text-sm font-medium">Quran</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}