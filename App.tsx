import React from 'react';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import CategoryShowcase from './components/CategoryShowcase';
import AgentProfile from './components/AgentProfile';
import Footer from './components/Footer';
import MarketChat from './components/MarketChat';

function App() {
  return (
    <main className="min-h-screen w-full bg-stone-50 selection:bg-zevesto selection:text-white">
      <Hero />
      <StatsSection />
      <CategoryShowcase />
      <AgentProfile />
      <Footer />
      <MarketChat />
    </main>
  );
}

export default App;