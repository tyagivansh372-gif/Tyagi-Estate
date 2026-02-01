"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. Detect scroll to adjust styling dynamically
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '/#listings' },
    { name: 'Consulting', href: '/#consulting' },
    { name: 'Our Legacy', href: '/#about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 transition-all duration-500 ${scrolled ? 'translate-y-[-5px]' : ''}`}>
      <div className="max-w-7xl mx-auto relative">
        <div className="bg-slate-950/60 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-full px-4 md:px-8 py-3 flex justify-between items-center shadow-2xl">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-xl overflow-hidden flex-shrink-0 transition-transform group-hover:scale-105"> 
              <img 
                src="/logo.png" 
                alt="Tyagi Estates" 
                className="h-full w-full object-cover" 
              />
            </div>
            <span className="text-white font-serif font-bold tracking-tighter text-lg md:text-xl hidden sm:block">
              TYAGI ESTATES
            </span>
          </Link>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-300">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-blue-400 transition-colors select-none"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons Container */}
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/919760004929" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95"
            >
              <MessageCircle size={14} className="md:size-4" /> 
              <span className="hidden xs:block">Inquire</span>
            </a>

            {/* 3. Mobile Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 4. Responsive Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full mt-4 left-0 right-0 md:hidden bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-3xl overflow-hidden"
            >
              <div className="flex flex-col gap-8 text-center">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-xl font-serif italic tracking-wide hover:text-blue-400 transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="h-[1px] w-12 bg-slate-800 mx-auto" />
                <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold">
                  Established 2005 • Dehradun
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;