import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter Kit",
    price: "$299",
    desc: "Perfect for single room ambiance.",
    features: ["1 Aura Ring Lamp", "Smart App Access", "Basic 1-Year Warranty", "Free Shipping"]
  },
  {
    name: "Pro Setup",
    price: "$499",
    desc: "Transform your main living space.",
    features: ["1 Aura Ring Lamp", "2 Zenith Ambient Bars", "Smart App Access", "2-Year VIP Warranty", "Priority Support"],
    popular: true
  },
  {
    name: "Elite Home",
    price: "$999",
    desc: "The ultimate whole-home experience.",
    features: ["2 Aura Ring Lamps", "4 Zenith Ambient Bars", "12 Lumina Wall Panels", "Lifetime Warranty", "White-glove Setup"]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="col-span-1 lg:col-span-3 lg:row-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col overflow-y-auto no-scrollbar min-h-[400px]">
      <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Pricing Plans</h3>
      
      <div className="flex flex-col gap-4">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-4 rounded-xl border flex flex-col ${
              plan.popular 
                ? 'bg-gold-400 border-gold-400 text-dark-900 shadow-[0_0_20px_rgba(212,175,55,0.2)]' 
                : 'bg-white/5 border-white/5 text-white'
            }`}
          >
            <div className={`flex justify-between items-center text-sm mb-1 ${plan.popular ? 'font-bold' : ''}`}>
              <span className={plan.popular ? 'uppercase' : ''}>{plan.name}</span>
              <span className="font-bold">{plan.price}</span>
            </div>
            <p className={`text-xs ${plan.popular ? 'text-dark-900/70 font-medium' : 'text-white/40'}`}>
              {plan.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
