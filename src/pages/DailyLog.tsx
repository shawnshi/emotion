import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Mic, ChevronDown, ChevronUp } from 'lucide-react';
import { clsx } from 'clsx';

// Icons for symptoms
import { Frown, Coffee, Battery, Utensils } from 'lucide-react';

const DailyLog = () => {
  const navigate = useNavigate();
  const [isSymptomsOpen, setIsSymptomsOpen] = useState(true);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['Cramps', 'Bloating']);
  const [note, setNote] = useState('');

  const symptoms = [
    { id: 'cramps', label: 'Cramps', icon: <Frown className="w-4 h-4" /> },
    { id: 'bloating', label: 'Bloating', icon: <Coffee className="w-4 h-4" /> }, // Coffee as placeholder
    { id: 'headache', label: 'Headache', icon: <Frown className="w-4 h-4" /> },
    { id: 'cravings', label: 'Cravings', icon: <Utensils className="w-4 h-4" /> },
    { id: 'acne', label: 'Acne', icon: <Frown className="w-4 h-4" /> },
    { id: 'fatigue', label: 'Fatigue', icon: <Battery className="w-4 h-4" /> },
  ];

  const toggleSymptom = (label: string) => {
    if (selectedSymptoms.includes(label)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== label));
    } else {
      setSelectedSymptoms([...selectedSymptoms, label]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Today, October 26</h1>
        <button className="p-2 -mr-2">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Symptoms Section */}
      <div className="bg-app-card rounded-2xl overflow-hidden mb-4 border border-white/5">
        <button
          className="w-full flex items-center justify-between p-4"
          onClick={() => setIsSymptomsOpen(!isSymptomsOpen)}
        >
          <span className="font-medium">Symptoms</span>
          {isSymptomsOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {isSymptomsOpen && (
          <div className="p-4 pt-0 flex flex-wrap gap-3">
            {symptoms.map((symptom) => {
              const isSelected = selectedSymptoms.includes(symptom.label);
              return (
                <button
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.label)}
                  className={clsx(
                    "flex items-center gap-2 px-4 py-3 rounded-xl text-sm transition-colors",
                    isSelected
                      ? "bg-app-card border border-app-pink/50 text-app-pink"
                      : "bg-app-dark/30 hover:bg-app-dark/50 text-app-text-muted"
                  )}
                  style={isSelected ? { backgroundColor: 'rgba(233, 56, 146, 0.1)' } : {}}
                >
                  {symptom.icon}
                  {symptom.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Mood Section */}
      <div className="bg-app-card rounded-2xl p-4 mb-4 flex justify-between items-center border border-white/5">
        <span className="font-medium">Mood</span>
        <ChevronDown className="w-5 h-5" />
      </div>

      {/* Energy Section */}
      <div className="bg-app-card rounded-2xl p-4 mb-6 flex justify-between items-center border border-white/5">
        <span className="font-medium">Energy</span>
        <ChevronDown className="w-5 h-5" />
      </div>

      {/* Journal Section */}
      <div className="mb-6 flex-1 flex flex-col">
        <label className="font-medium mb-3 block">Journal</label>
        <div className="bg-app-card rounded-2xl p-4 flex-1 relative border border-white/5">
          <textarea
            className="w-full h-full bg-transparent resize-none outline-none text-app-text placeholder-app-text-muted/50"
            placeholder="Add a note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button className="absolute bottom-4 right-4 w-10 h-10 bg-app-pink rounded-full flex items-center justify-center shadow-lg shadow-app-pink/40">
            <Mic className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <button className="w-full bg-app-pink hover:bg-app-pink-light text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-app-pink/30">
        Save Log
      </button>
    </div>
  );
};

export default DailyLog;
