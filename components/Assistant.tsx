
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface AssistantProps {
  onNavigate: () => void;
}

const Assistant: React.FC<AssistantProps> = ({ onNavigate }) => {
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <button
        onClick={onNavigate}
        className="bg-red-600 hover:bg-red-700 text-white p-5 rounded-[1.5rem] shadow-2xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group"
      >
        <div className="relative">
          <MessageCircle size={28} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-red-600 animate-ping"></span>
        </div>
        <span className="font-bold text-sm tracking-widest uppercase pr-1">Chiedi Info</span>
      </button>
    </div>
  );
};

export default Assistant;
