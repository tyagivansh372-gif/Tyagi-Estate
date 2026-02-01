import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-white tracking-widest">TYAGI ESTATES</h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Established 2005. Shaping land into landmarks with a legacy of trust and community development.
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest">Connect</h4>
          <ul className="text-slate-400 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Mail size={16} className="text-blue-500" /> vanshika4929@gmail.com</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest">Visit Us</h4>
          <p className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
            <MapPin size={16} className="text-blue-500 mt-1" />
            Main Office,Paper mill road , Sahranpur , Uttar Pradesh India
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-slate-900 flex justify-between items-center text-slate-600 text-[10px] uppercase tracking-widest">
        <p>© 2026 Tyagi Estates. Built with ❤️ for Pitaji.</p>
        <div className="flex gap-4">
          <Instagram size={16} className="hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}