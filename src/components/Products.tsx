import { motion } from 'motion/react';
import { Sparkles, MoveRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Aura Ring Lamp",
    desc: "A minimalist floating halo light for ambient desk setups.",
    price: "$249",
    category: "Smart Lamps",
    features: ["16M Colors", "Voice Control", "Dimmable"]
  },
  {
    id: 2,
    name: "Lumina Wall Panels",
    desc: "Modular LED panels that sync with your music and life.",
    price: "$199",
    category: "LED Panels",
    features: ["Music Sync", "Touch Reactive", "Modular"]
  },
  {
    id: 3,
    name: "Zenith Ambient Bar",
    desc: "Sleek corner lighting to wash your walls with soft hues.",
    price: "$149",
    category: "Ambient Lights",
    features: ["App Controlled", "Timers", "Warm/Cool"]
  }
];

export default function Products() {
  return (
    <section id="products" className="col-span-1 lg:col-span-4 lg:row-span-4 bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-y-auto no-scrollbar min-h-[400px]">
      <div className="w-full h-full flex flex-col">
        
        <div className="flex flex-col items-center text-center mb-6">
          <div className="mb-2 inline-flex items-center gap-2 text-gold-400 font-medium tracking-widest text-xs uppercase">
            <Sparkles className="w-3 h-3" /> The Collection
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Curated Illumination</h2>
        </div>

        <div className="flex flex-col gap-6">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="h-64 rounded-2xl bg-gradient-to-br from-bg-primary to-bg-secondary w-full mb-8 relative overflow-hidden flex justify-center items-center">
                {/* Abstract visualization of product */}
                <div className="w-32 h-32 rounded-full bg-gold-400/10 box-glow blur-xl absolute"></div>
                <div className="z-10 text-gold-400 opacity-50 group-hover:opacity-100 transition-opacity">
                  {product.category}
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-medium">{product.name}</h3>
                <span className="text-xl font-light text-gold-400">{product.price}</span>
              </div>
              <p className="text-text-secondary mb-6 flex-grow">{product.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {product.features.map(f => (
                  <span key={f} className="text-xs px-3 py-1 rounded-full border border-gold-400/20 text-text-secondary bg-gold-400/5">
                    {f}
                  </span>
                ))}
              </div>
              
              <button className="w-full py-3 rounded-full border border-gold-400/30 text-gold-400 flex items-center justify-center gap-2 group-hover:bg-gold-400 group-hover:text-dark-900 transition-colors">
                View Details <MoveRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
