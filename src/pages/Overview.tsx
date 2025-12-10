import { useNavigate } from 'react-router-dom';
import { Menu, Bell, Plus, Smile, Flame, Frown } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 35 },
  { name: 'Thu', value: 50 },
  { name: 'Fri', value: 20 },
  { name: 'Sat', value: 60 },
  { name: 'Sun', value: 40 },
];

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen p-6 pb-24 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button className="p-2 -ml-2">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">My Overview</h1>
        <button className="p-2 -mr-2">
          <Bell className="w-6 h-6" />
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-app-card rounded-2xl p-4 flex flex-col gap-2">
          <div className="text-app-pink">
            <Smile className="w-6 h-6" />
          </div>
          <h3 className="font-semibold">Mood</h3>
          <p className="text-sm text-app-text-muted">Overall: Balanced</p>
        </div>
        <div className="bg-app-card rounded-2xl p-4 flex flex-col gap-2">
          <div className="text-app-pink">
            <Flame className="w-6 h-6" />
          </div>
          <h3 className="font-semibold">Energy</h3>
          <p className="text-sm text-app-text-muted">Average: Moderate</p>
        </div>
      </div>

      <div className="bg-app-card rounded-2xl p-4 flex flex-col gap-2 mb-6 w-1/2">
        <div className="text-app-pink">
          <Frown className="w-6 h-6" />
        </div>
        <h3 className="font-semibold">Symptoms</h3>
        <p className="text-sm text-app-text-muted">Top: Bloating</p>
      </div>

      {/* Chart */}
      <div className="bg-app-card rounded-3xl p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <p className="text-sm mb-1">Energy Levels this Week</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold">Moderate</h2>
            <span className="text-green-500 text-sm font-bold">+5%</span>
          </div>
          <p className="text-xs text-app-text-muted mt-1">Oct 16-22</p>
        </div>

        <div className="h-48 w-full mt-auto mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e93892" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#e93892" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#e93892"
                strokeWidth={3}
                fillOpacity={1}
                fill="none"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-between text-xs text-app-text-muted px-2">
          {data.map((d) => (
            <span key={d.name}>{d.name}</span>
          ))}
        </div>

        <p className="text-xs text-app-text-muted mt-6 leading-relaxed">
          Your energy dipped mid-week, which is common during this phase.
        </p>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => navigate('/log')}
        className="fixed bottom-6 right-6 w-16 h-16 bg-app-pink rounded-full flex items-center justify-center shadow-lg shadow-app-pink/40 hover:scale-105 transition-transform"
      >
        <Plus className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};

export default Overview;
