import { Bot } from 'lucide-react';
import { motion } from 'motion/react';

export default function AIChatButton() {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-16 h-16 bg-gradient-to-tr from-[#D4AF37] to-[#F9E5A8] rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-110 transition-all z-50 group"
    >
      <Bot className="w-7 h-7" />
      
      {/* Tooltip */}
      <div className="absolute right-20 px-4 py-2 bg-[#111] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold rounded-xl uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        24/7 AI Concierge
      </div>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-50"></span>
    </motion.button>
  );
}
