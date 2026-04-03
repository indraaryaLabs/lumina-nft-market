import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import BackgroundAmbient from './components/BackgroundAmbient';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold sections for performance
const StatsBar = lazy(() => import('./components/StatsBar'));
const ProjectsGrid = lazy(() => import('./components/ProjectsGrid'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Scroll listener for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <AnimatePresence mode="wait">
        <LoadingScreen isLoading={isLoading} />
      </AnimatePresence>

      <div className="min-h-screen bg-[var(--color-bg-primary)] text-zinc-200 font-sans overflow-x-hidden relative noise-overlay">
        <BackgroundAmbient />

        <Navbar
          isScrolled={isScrolled}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <main className="relative z-10">
          <Hero />
          
          <Suspense fallback={null}>
            <StatsBar />
            <ProjectsGrid />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default App;
