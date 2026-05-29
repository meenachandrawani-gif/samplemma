import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "The Aura Ring changed my entire home office vibe. It’s not just a lamp, it’s a modern art piece.",
    author: "Elena R.",
    role: "Interior Designer"
  },
  {
    text: "Seamless app integration. I have the Zenith bar set up to match the sunset every evening. Absolutely incredible.",
    author: "Marcus T.",
    role: "Tech Entrepreneur"
  },
  {
    text: "The build quality is phenomenal. You can feel the luxury in the materials, and the light diffusion is perfect.",
    author: "Sarah L.",
    role: "Architect"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="col-span-1 lg:col-span-3 lg:row-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col overflow-y-auto no-scrollbar min-h-[300px]">
      <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Guest Voice</h3>
      
      <div className="flex flex-col gap-6 w-full h-full justify-center">
        {reviews.slice(0, 2).map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-dark-900 font-bold text-[10px]">
                {review.author[0]}
              </div>
              <span className="text-xs font-bold">{review.author}</span>
            </div>
            <p className="text-sm italic text-white/70 leading-relaxed mb-3">"{review.text}"</p>
            <div className="flex text-gold-400 text-[10px]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3 h-3 fill-current" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
