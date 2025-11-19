import React from 'react';
import { AGENT_BIO } from '../constants';

const AgentProfile: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:px-8">
        <div className="relative h-96 w-full flex-shrink-0 overflow-hidden lg:h-[500px] lg:w-[400px]">
          {/* Placeholder for Agent Photo - Using a professional looking person from picsum */}
          <img 
            src="https://picsum.photos/seed/businessman/500/700" 
            alt={AGENT_BIO.name} 
            className="h-full w-full object-cover grayscale filter transition duration-500 hover:grayscale-0"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/90 to-transparent p-6 text-white">
            <p className="font-serif text-2xl">{AGENT_BIO.name}</p>
            <p className="text-sm font-light text-stone-300">{AGENT_BIO.title}</p>
          </div>
        </div>

        <div className="flex max-w-2xl flex-col justify-center">
          <div className="mb-6 inline-block border-b border-stone-200 pb-2 font-sans text-xs font-bold uppercase tracking-widest text-stone-400">
            Your Local Expert
          </div>
          <h2 className="mb-6 font-serif text-4xl text-stone-900 sm:text-5xl">
            Strategic advice. <br />
            Exceptional results.
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-stone-600">
            {AGENT_BIO.description}
          </p>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col border-l-2 border-zevesto pl-4">
              <span className="text-xs uppercase text-stone-400">Contact</span>
              <span className="font-bold text-stone-900">{AGENT_BIO.contact}</span>
            </div>
            <div className="flex flex-col border-l-2 border-zevesto pl-4">
              <span className="text-xs uppercase text-stone-400">Email</span>
              <span className="font-bold text-stone-900">{AGENT_BIO.email}</span>
            </div>
          </div>

          <div className="mt-10">
            <button className="bg-stone-900 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-zevesto">
              Request an Appraisal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentProfile;