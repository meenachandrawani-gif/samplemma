import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white/5 border border-white/10 rounded-2xl relative z-10 shrink-0 mt-4 px-6 md:px-12 py-8">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-semibold tracking-tighter flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-gold-600 to-gold-400 block" />
              <span className="text-glow">AuraNest</span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Elevating spaces through intelligent, sculptural light.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-text-secondary/10 hover:bg-gold-400 hover:text-dark-900 transition-colors rounded-full text-text-secondary">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-text-secondary/10 hover:bg-gold-400 hover:text-dark-900 transition-colors rounded-full text-text-secondary">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-text-secondary/10 hover:bg-gold-400 hover:text-dark-900 transition-colors rounded-full text-text-secondary">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Aura Ring</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Lumina Panels</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Zenith Bar</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-text-secondary mb-4">Subscribe for exclusive designs and early access.</p>
            <form className="flex border border-text-secondary/20 rounded-full overflow-hidden p-1 focus-within:border-gold-400 transition-colors bg-bg-primary">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-transparent outline-none px-4 text-sm"
              />
              <button type="submit" className="bg-gold-400 text-dark-900 px-4 py-2 text-sm font-medium rounded-full hover:bg-gold-500 transition-colors">
                Join
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-text-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} AuraNest. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-400">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
