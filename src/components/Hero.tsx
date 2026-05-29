import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="col-span-1 lg:col-span-8 lg:row-span-7 relative flex items-center justify-center p-8 md:p-12 overflow-hidden bg-gradient-to-br from-[#111] to-[#050505] border border-white/10 rounded-3xl min-h-[500px]">
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #D4AF37 0%, transparent 60%)" }}></div>
      <div className="w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-400/5 text-gold-400 text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            Smart Lighting Reimagined
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            Light your space, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 text-glow">elevate your life.</span>
          </h1>
          
          <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
            Experience the perfect harmony of luxury home decor and intelligent ambient lighting. Create the mood, instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <a href="#products" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-400 text-dark-900 font-medium flex items-center justify-center gap-2 hover:bg-gold-500 hover:scale-105 transition-all">
              Explore Collection <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 rounded-full border border-text-secondary/30 text-text-primary font-medium flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-all">
              See How It Works
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] w-full flex justify-center items-center"
        >
          {/* Abstract representation of a luxury lamp/fixture */}
          <div className="relative w-64 h-96">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-text-secondary/20 to-gold-400/80"></div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-32 left-1/2 -translate-x-1/2 w-48 h-12 rounded-full border border-gold-400/50 bg-bg-primary shadow-[0_0_60px_rgba(212,175,55,0.4)] flex items-center justify-center"
            >
              <div className="w-40 h-8 rounded-full bg-gold-400/20 box-glow"></div>
            </motion.div>
            
            {/* Glowing orb below */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-48 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gold-400/20 blur-2xl"
            ></motion.div>
          </div>
          
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold-400/10 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-gold-400/5 pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
}
