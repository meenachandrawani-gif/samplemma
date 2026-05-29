import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ParticlesBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Orb 1 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '10%', left: '20%' }}
      />
      {/* Orb 2 */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gold-500/10 blur-[100px]"
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '60%', right: '10%' }}
      />
      {/* Orb 3 */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '30%', left: '60%' }}
      />
    </div>
  );
}
