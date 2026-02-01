const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-32 pb-20">
      {/* 1. Background Section with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
          alt="Premium Architecture" 
          className="w-full h-full object-cover opacity-30 scale-110 animate-slow-zoom"
        />
        {/* Deep Gradient Overlay to prevent Navbar content clash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/40 to-[#020617] z-10"></div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-6">
        {/* 2. Branding Badge - Fixed cursor */}
        <div className="mb-8 inline-block tracking-[0.5em] uppercase text-[10px] md:text-xs font-bold text-blue-500 border-b border-blue-500/30 pb-3 cursor-default select-none">
          Established 2005 • A Legacy of Trust
        </div>

        {/* 3. Updated Tagline - Fixed I-beam cursor */}
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight cursor-default select-none">
          Shaping Land into <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 italic">
            Landmarks.
          </span>
        </h1>

        {/* 4. Description - Removed typing cursor */}
        <p className="text-base md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed cursor-default select-none">
          Transforming the regional landscape for over 20 years. Tyagi Estates specializes in 
          identifying high-growth zones to build secure, integrated residential colonies.
        </p>

        {/* 5. Responsive Buttons - Kept cursor-pointer automatically via <a> tags */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a 
            href="#listings" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all shadow-2xl shadow-blue-500/20 hover:scale-105 active:scale-95"
          >
            Explore Projects
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto bg-transparent border border-slate-700 hover:bg-white/5 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;