/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Apply dark class to document element
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans p-4 md:p-6 flex flex-col gap-4 overflow-hidden relative selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      <ParticlesBackground />
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gold-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="flex flex-col h-full z-10 w-full max-w-[1440px] mx-auto overflow-y-auto no-scrollbar gap-4 pb-12">
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 lg:auto-rows-[minmax(60px,auto)] gap-4">
          <Hero />
          <Products />
          <HowItWorks />
          <Pricing />
          <Reviews />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

