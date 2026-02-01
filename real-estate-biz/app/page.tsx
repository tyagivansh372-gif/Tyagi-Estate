import Hero from '@/components/Hero';
import PropertyCard from '@/components/PropertyCard';
import { client, urlFor } from '../lib/sanity';
import { ShieldCheck, BarChart3, Globe, Milestone } from 'lucide-react';

interface SanityProperty {
  title: string;
  location: string;
  landmark?: string;
  status: string;
  slug: string;
  details: {
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
  mainImage: any;
}

const query = `*[_type == "property"]{
  title,
  location,
  landmark,
  status,
  "slug": slug.current,
  details,
  mainImage
}`;

export default async function Home() {
  let properties: SanityProperty[] = [];

  try {
    properties = await client.fetch(query);
  } catch (error) {
    console.error("Connection to Sanity failed:", error);
  }

  return (
    <main className="min-h-screen bg-[#020617]">
      {/* 1. HERO SECTION */}
      <Hero />
      
      {/* 2. WHY INVEST WITH US? (NEW) */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">The Tyagi Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Why Invest with Us?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-blue-500" size={32} />,
                title: "20+ Years of Trust",
                desc: "A legacy of transparency and successful colony development since 2005."
              },
              {
                icon: <BarChart3 className="text-blue-500" size={32} />,
                title: "High ROI Locations",
                desc: "Strategically selected plots in high-growth corridors for maximum value appreciation."
              },
              {
                icon: <Milestone className="text-blue-500" size={32} />,
                title: "Legal Clarity",
                desc: "100% verified documentation and clear titles for every square inch of land."
              },
              {
                icon: <Globe className="text-blue-500" size={32} />,
                title: "Planned Colonies",
                desc: "Integrated residential spaces with wide roads, parks, and 24/7 security."
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PORTFOLIO */}
      <section id="listings" className="max-w-7xl mx-auto px-4 py-32">
        <div className="mb-20 text-center">
          <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Our Projects</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Featured Portfolio</h3>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-400 mx-auto mt-6 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {properties.length > 0 ? (
            properties.map((prop, index) => (
              <PropertyCard 
                key={index} 
                property={{
                  ...prop,
                  image: prop.mainImage 
                    ? urlFor(prop.mainImage).width(800).url() 
                    : 'https://via.placeholder.com/800x600',
                  beds: prop.details?.bedrooms || 0,
                  baths: prop.details?.bathrooms || 0,
                  area: prop.details?.area || 0,
                }} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-slate-900/20 rounded-3xl border border-dashed border-slate-800">
              <p className="text-slate-600 text-lg font-serif">Awaiting property records for new colonies...</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. LEGACY / ABOUT SECTION */}
      <section id="about" className="relative py-32 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-700 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" 
                 className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                 alt="Tyagi Estates Legacy"
               />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 rounded-3xl shadow-2xl">
               <span className="block text-5xl font-bold text-white font-serif">20+</span>
               <span className="text-[10px] uppercase tracking-[0.2em] text-blue-100 font-bold">Years of Trust</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-blue-500 font-bold tracking-[0.4em] uppercase text-xs">Our Story</h2>
              <h3 className="text-5xl font-serif font-bold text-white leading-tight">Establishing Roots Since 2005.</h3>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Tyagi Estates was founded with a single vision: to transform land into legacies. 
              For over two decades, we've specialized in identifying high-growth zones and 
              transforming them into integrated residential colonies that prioritize safety and value appreciation.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-slate-800">
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Integrity</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Transparent dealings and 100% legal clarity in every plot.</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Vision</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Master-planned colonies designed for future generations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHATSAPP CTA */}
      <section className="py-32 text-center px-4">
         <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Get In Touch</h2>
         <h3 className="text-4xl font-serif text-white mb-10">Start a conversation with Tyagi Estates</h3>
         <a 
           href="https://wa.me/919760004929?text=Hello Tyagi Estates, I am interested in inquiring about your available properties." 
           target="_blank" 
           rel="noopener noreferrer"
           className="inline-flex items-center gap-4 bg-white hover:bg-blue-50 text-slate-900 px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:scale-105"
         >
           Chat on WhatsApp
         </a>
      </section>
      <section id="consulting" className="py-32 bg-slate-950 border-t border-slate-900 scroll-mt-24">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Real Estate Solutions</h2>
      <h3 className="text-4xl md:text-5xl font-serif text-white">Renting & Selling Consulting</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-12 rounded-[3rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/20 transition-all">
        <h4 className="text-2xl font-bold text-white mb-6">Strategic Selling</h4>
        <p className="text-slate-400 leading-relaxed font-light">
          We help you sell your property at the right price, to the right buyer, without hassle.        </p>

<ul>
  <li>• Correct market price guidance</li>
<li>• Genuine buyer connections</li>
<li>• Negotiation & deal handling</li>
<li>• Full paperwork support</li>
</ul>

      </div>

      <div className="p-12 rounded-[3rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/20 transition-all">
        <h4 className="text-2xl font-bold text-white mb-6">Rental Management</h4>
        <p className="text-slate-400 leading-relaxed font-light">
          Whether you want to rent out your property or find a place to stay, we manage everything smoothly.        </p>

          <ol>
<li>• Verified tenants & property listings
</li>
<li>• Help for renters to find homes/plots
</li>
<li>• Rent agreement & legal support
</li>
<li>• Owner–tenant coordination</li>
</ol>
         {/* </ul> */}
      </div>
    </div>

  </div>
</section>
    </main>
  );
}