import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EngineeringMindset } from './components/EngineeringMindset';
import { InteractiveSkillUniverse } from './components/InteractiveSkillUniverse';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Journey } from './components/Journey';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { RecruiterModeModal } from './components/RecruiterModeModal';

export function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);

  return (
    <>
      <CustomCursor />

      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      <div className={`portfolio-app ${preloaderDone ? 'app-visible' : 'app-hidden'}`}>
        <Navbar onRecruiterMode={() => setRecruiterOpen(true)} />

        <main id="main-content">
          <Hero />
          <About />
          <EngineeringMindset />
          <InteractiveSkillUniverse />
          <FeaturedProjects />
          <Journey />
          <InteractiveTerminal />
          <ResumeCTA />
          <Contact />
        </main>

        <Footer />

        <RecruiterModeModal
          isOpen={recruiterOpen}
          onClose={() => setRecruiterOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
