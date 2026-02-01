"use client";
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, ArrowRight, Shield, Globe, Trees, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface PropertyProps {
  property: {
    title: string;
    location: string;
    landmark?: string;
    status: string;
    image: string;
    beds: number;
    baths: number;
    area: number;
    slug: string;
  }
}

const PropertyCard = ({ property }: PropertyProps) => {
  return (
    <motion.div 
      // Scroll-triggered entry animation
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Interactive hover lift
      whileHover={{ y: -12 }} 
      className="group glass-card rounded-[2.5rem] overflow-hidden transition-all duration-500 flex flex-col h-full border border-slate-800 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* 1. Image Section with Smooth Zoom */}
      <div className="relative h-72 w-full overflow-hidden bg-slate-900">
        <motion.img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <span className="absolute top-5 left-5 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg border border-white/10">
          {property.status}
        </span>
      </div>

      {/* 2. Content Section */}
      <div className="p-8 flex flex-col flex-grow bg-slate-950/20 backdrop-blur-sm">
        <div className="space-y-3 mb-6">
          <h3 className="text-2xl font-serif font-bold text-white group-hover:text-blue-400 transition-colors duration-300 tracking-tight leading-snug">
            {property.title}
          </h3>
          
          <div className="space-y-1.5">
            <div className="flex items-center text-slate-300 text-sm font-light">
              <MapPin size={14} className="mr-2 text-blue-500" />
              {property.location}
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] pl-6 font-medium">
              Near {property.landmark || "Haridwar-Dehradun Highway"}
            </p>
          </div>
        </div>

        {/* 3. Amenities Icons Grid */}
        <div className="grid grid-cols-3 gap-2 mb-8 py-5 border-y border-slate-800/40">
          <div className="flex flex-col items-center gap-2 text-slate-400 group/icon">
            <Shield size={18} className="text-blue-500/60 group-hover/icon:text-blue-400 transition-colors" />
            <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Secure</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-slate-400 border-x border-slate-800/40 group/icon">
            <Globe size={18} className="text-blue-500/60 group-hover/icon:text-blue-400 transition-colors" />
            <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Wide Roads</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-slate-400 group/icon">
            <Trees size={18} className="text-blue-500/60 group-hover/icon:text-blue-400 transition-colors" />
            <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Parks</span>
          </div>
        </div>

        {/* 4. Metrics Grid */}
        <div className="flex justify-between items-center mb-8 px-2">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-slate-900/50 text-blue-500">
              <Bed size={16} />
            </div>
            <span className="text-sm text-slate-200 font-semibold">{property.beds} BHK</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-slate-900/50 text-blue-500">
              <Square size={16} />
            </div>
            <span className="text-sm text-slate-200 font-semibold">{property.area} Sq.Ft</span>
          </div>
        </div>

        {/* 5. Pricing & Dynamic Action Buttons */}
        <div className="mt-auto space-y-4">
          <div className="flex justify-between items-center bg-blue-500/5 p-4 rounded-2xl border border-blue-500/10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-extrabold">Investment</span>
            <span className="text-white font-bold text-sm tracking-tight">Price on Request</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Link 
              href={`/property/${property.slug}`}
              className="flex items-center justify-center gap-2 py-4 bg-slate-900 hover:bg-slate-800 text-white text-[10px] uppercase tracking-widest rounded-2xl font-bold border border-slate-800 transition-all active:scale-95"
            >
              Details
            </Link>
            <a 
              href={`https://wa.me/919897804999?text=Hello Tyagi Estates, I am interested in inquiring about ${property.title}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white text-[10px] uppercase tracking-widest rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;