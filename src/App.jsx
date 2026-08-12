import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
