import React from 'react';
import { MARKET_STATS } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-serif text-4xl text-stone-900 md:text-5xl">
            2025 by the numbers.
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            The data tells a story of resilience and growth. Crestmead continues to outperform local averages, driven by high demand for quality family homes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 border-t border-stone-200 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {MARKET_STATS.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <dt className="text-sm font-medium uppercase tracking-wide text-stone-500">
                {stat.label}
              </dt>
              <dd className="font-serif text-4xl font-medium text-stone-900 md:text-5xl">
                {stat.value}
              </dd>
              <dd className="text-sm text-zevesto">
                {stat.description}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;