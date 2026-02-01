"use client";
import { motion } from "framer-motion";
import { urlFor } from '@/lib/sanity';
import { MapPin, MessageCircle, ArrowLeft, BedDouble, Bath, Ruler, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function PropertyDetailClient({ property }: { property: any }) {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 pb-20 cursor-default select-none">
      
      {/* 1. HERO REVEAL: Clearance for Navbar */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-end pb-12 pt-32 md:pt-44 px-6 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.2 }}
          src={urlFor(property.mainImage).url()} 
          className="absolute inset-0 w-full h-full object-cover"
          alt={property.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <Link href="/#listings" className="text-blue-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white italic tracking-tighter leading-none">
              {property.title}
            </h1>
            <p className="flex items-center gap-3 text-lg md:text-2xl font-light mt-6 text-slate-400">
              <MapPin className="text-blue-500" /> {property.location}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. ADAPTIVE CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-20 mt-12">
        
        <div className="lg:col-span-2 space-y-20">
          {/* Snap-Scrolling Gallery: Responsive widths */}
          <section>
            <h3 className="text-white font-bold uppercase text-[10px] tracking-[0.4em] mb-8 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-blue-500" /> Site Gallery
            </h3>
            {/* Added flex-nowrap and cursor-grab for interactivity */}
            <div className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing">
              {property.gallery?.map((img: any, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="snap-center flex-shrink-0 w-[85vw] md:w-[650px] h-64 md:h-[450px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl"
                >
                  <img src={urlFor(img).url()} className="w-full h-full object-cover select-none" alt={`Gallery view ${i + 1}`} />
                </motion.div>
              ))}
            </div>
            {/* Visual cue for mobile users */}
            <p className="text-[9px] uppercase tracking-[0.3em] text-slate-600 text-center mt-2 animate-pulse">
              Swipe to explore the estate
            </p>
          </section>

          {/* DYNAMIC METRICS: Visual Reveal */}
          <div className="grid grid-cols-3 gap-4 py-16 border-y border-white/5 text-center">
            {[
              { icon: BedDouble, label: "BHK", value: property.details?.bedrooms },
              { icon: Bath, label: "Baths", value: property.details?.bathrooms },
              { icon: Ruler, label: "Sq. Ft", value: property.details?.area }
            ].map((spec, i) => (
              <div key={i}>
                <spec.icon className="mx-auto text-blue-500 mb-4" size={32} />
                <p className="text-2xl md:text-4xl font-serif font-bold text-white">{spec.value || 0}</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-bold">{spec.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. REFINED INQUIRY CARD: Sticky for Desktop, Bottom for Mobile */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="sticky top-32 md:top-40 bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[3rem] md:rounded-[3.5rem] shadow-3xl text-center"
          >
            <p className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Tyagi Estates Premium</p>
            <h4 className="text-3xl md:text-4xl font-serif text-white mb-8 font-bold tracking-tight italic">Price on Request</h4>
            
            <a 
              href={`https://wa.me/919760004929?text=Interested in ${property.title}`}
              className="flex items-center justify-center gap-4 w-full py-5 md:py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-bold text-lg md:text-xl transition-all shadow-xl shadow-blue-500/20 active:scale-95"
            >
              <MessageCircle size={24} /> Inquire Now
            </a>

            <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
              <p className="text-[11px] text-slate-500 leading-relaxed font-light italic">
                Our 20-year legacy ensures transparent dealing since 2005.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}