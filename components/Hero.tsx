import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-stone-900 text-stone-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/architecture2/1920/1080" 
          alt="Modern Home Architecture" 
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="animate-fade-in-up max-w-4xl">
          <p className="mb-4 font-sans text-sm font-bold tracking-[0.2em] text-zevesto uppercase">
            Zevesto Property Group
          </p>
          <h1 className="mb-6 font-serif text-5xl font-light leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Own a home where <br/>
            <span className="italic text-stone-300">value grows</span> naturally.
          </h1>
          <p className="mb-8 max-w-xl text-lg font-light leading-relaxed text-stone-300 md:text-xl">
            Crestmead 2025 Year in Review. An in-depth look at the property movements defining our neighborhood, curated by Rob Ford.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <button 
              onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 rounded-full border border-stone-50/30 bg-stone-50/10 px-8 py-3 text-sm font-semibold backdrop-blur-sm transition hover:bg-stone-50 hover:text-stone-900"
            >
              Explore Market Data
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <a 
              href="mailto:rob.ford@zevesto.com.au"
              className="flex items-center justify-center gap-2 rounded-full bg-zevesto px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Talk to Rob
            </a>
          </div>
        </div>
      </div>

      {/* Floating Glass Card */}
      <div className="absolute bottom-12 right-6 hidden w-80 rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-md md:block lg:right-24">
        <div className="mb-2 text-xs font-bold uppercase tracking-wider text-stone-400">Market Pulse</div>
        <div className="text-3xl font-serif text-white">High Demand</div>
        <div className="mt-2 text-sm text-stone-300">
          Buyer inquiries are up 24% this quarter. Now is the strategic time to list.
        </div>
      </div>
    </section>
  );
};

export default Hero;