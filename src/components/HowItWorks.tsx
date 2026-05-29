import { motion } from 'motion/react';
import { Smartphone, Wifi, Palette } from 'lucide-react';

const steps = [
  {
    icon: <Wifi className="w-8 h-8 text-gold-400" />,
    title: "1. Connect",
    desc: "Plug in your AuraNest device and it instantly connects to your home WiFi mesh."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-gold-400" />,
    title: "2. Control",
    desc: "Open the Aura App or use voice commands to control every fixture individually or in groups."
  },
  {
    icon: <Palette className="w-8 h-8 text-gold-400" />,
    title: "3. Customize",
    desc: "Choose from millions of colors, set dynamic scenes, schedules, and automation routines."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="col-span-1 lg:col-span-4 lg:row-span-3 bg-[#111] border border-[#D4AF37]/20 rounded-3xl p-6 flex flex-col overflow-y-auto no-scrollbar min-h-[300px]">
      <div className="w-full h-full flex flex-col">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">How It Works</h3>
        <p className="text-sm leading-snug text-white/70 mb-6">Seamlessly control 16M+ colors via the AuraHub app or simple voice gestures.</p>
        
        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center border border-gold-400/20">
                <div className="scale-75">{step.icon}</div>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1">{step.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
