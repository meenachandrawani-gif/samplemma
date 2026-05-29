import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pseudo-submit
    alert("Thanks for your message! Our team will get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="col-span-1 lg:col-span-6 lg:row-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col min-h-[300px]">
      <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Connect with Us</h3>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1 h-full">
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            required
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-gold-400 text-white"
            placeholder="Name"
          />
          <input 
            type="email" 
            required
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-gold-400 text-white"
            placeholder="Email"
          />
        </div>
        
        <textarea 
          required
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
          className="flex-1 min-h-[80px] bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-gold-400 resize-none text-white"
          placeholder="Project Details"
        ></textarea>
        
        <button type="submit" className="bg-white/10 hover:bg-gold-400 hover:text-dark-900 transition-colors rounded-lg py-3 text-xs font-bold uppercase tracking-widest w-full">
          Send Inquiry
        </button>
      </form>
    </section>
  );
}
