import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 py-12 text-stone-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-xl text-white">Zevesto Property Group</h3>
          <p className="mt-1 text-sm">Serving Crestmead & Surrounds</p>
        </div>
        <div className="text-xs text-stone-500">
          © 2025 Rob Ford Real Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;