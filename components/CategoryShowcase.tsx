import React from 'react';
import { FEATURED_PROPERTIES } from '../constants';

const CategoryShowcase: React.FC = () => {
  return (
    <section className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-zevesto">Curated Selection</span>
            <h2 className="mt-2 font-serif text-4xl text-stone-900">Benchmark Sales</h2>
          </div>
          <p className="mt-4 max-w-md text-sm text-stone-600 md:mt-0 md:text-right">
            A selection of properties that defined the market tempo in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {FEATURED_PROPERTIES.map((property) => (
            <article key={property.id} className="group flex flex-col overflow-hidden bg-white shadow-sm transition duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full overflow-hidden md:h-80">
                <img 
                  src={property.imageUrl} 
                  alt={property.address} 
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-stone-900 px-6 py-3 text-white">
                  <p className="font-serif text-xl italic">{property.category}</p>
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between border-b border-stone-100 pb-4">
                  <h3 className="font-sans text-lg font-bold text-stone-900">{property.address}</h3>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">SOLD</span>
                </div>
                
                <div className="mb-6 flex gap-6 text-sm text-stone-500">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                    {property.bedrooms} Bed
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    {property.bathrooms} Bath
                  </span>
                  <span className="flex items-center gap-1">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0014 7z" /></svg>
                    {property.carSpaces} Car
                  </span>
                </div>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-600">
                  {property.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase text-stone-400">Sold Price</span>
                    <span className="font-serif text-2xl text-zevesto">{property.price}</span>
                  </div>
                  <div className="text-xs text-stone-400">
                    {property.soldDate}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;