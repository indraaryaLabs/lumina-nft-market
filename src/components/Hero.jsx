import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroTextReveal, staggerContainer, buttonHover, buttonTap } from '../utils/animations';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-12">
      <div className="container-main">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
            width: '100%',
            paddingTop: '120px',
            paddingBottom: '80px',
          }}
        >
          {/* Text + Image side by side on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center w-full">
            {/* Left Column — Text */}
            <motion.div
              style={{ position: 'relative', zIndex: 20 }}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >


              {/* Hero Title */}
              <motion.h1
                style={{
                  fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: '24px',
                  fontFamily: 'Inter, sans-serif'
                }}
                variants={heroTextReveal}
                custom={1}
              >
                <span style={{ color: 'white', display: 'block' }}>Discover</span>
                <span style={{ color: 'white', display: 'block' }}>Digital Art and</span>
                <span style={{ color: 'white', display: 'block' }}>Collect NFTs.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                style={{
                  fontSize: '15px',
                  color: '#a1a1aa',
                  maxWidth: '480px',
                  lineHeight: 1.7,
                  marginBottom: '40px',
                }}
                variants={heroTextReveal}
                custom={2}
              >
                Lumina is a shared liquidity NFT market smart contract which is used by multiple website to provide the users the best possible experience.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '32px' }}
                variants={heroTextReveal}
                custom={3}
              >
                <motion.a
                  href="#started"
                  style={{
                    padding: '12px 32px',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--color-accent)',
                    color: '#000',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    boxShadow: '0 8px 30px rgba(217,249,95,0.2)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
                <motion.a
                  href="#learn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s',
                  }}
                  whileHover={{ opacity: 0.7, x: 5 }}
                >
                  Learn More
                  <ArrowRight size={16} style={{ color: 'white' }} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column — Mobile Artwork (Visible only on small screens) */}
            <div className="flex md:hidden relative justify-center w-full h-auto mt-12 pb-8">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square max-w-[300px] bg-[var(--color-accent)] blur-[80px] opacity-40 rounded-full" />
               <img 
                 src="/images/hero_face.png" 
                 alt="NFT Artwork" 
                 className="relative w-[115%] max-w-[450px] -ml-[7.5%] h-auto object-contain pointer-events-none z-20" 
               />
            </div>
            
            {/* Placeholder for layout spacing so text doesn't span full width on desktop */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>

      {/* Artwork Anchored to the very bottom of the Hero Section so it NEVER floats up when zooming out */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-50px', /* Tuck neatly exactly behind StatsBar negative margin */
          right: 'max(5%, calc(50vw - 600px))', /* Position roughly at the right side of container */
          width: '500px', 
          height: '600px',
          zIndex: 20,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
        className="hero-artwork hidden md:flex"
      >
        <motion.div
          style={{ position: 'relative', width: '100%', height: '100%' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Main Huge Yellow Blob */}
          <motion.div 
            style={{
              position: 'absolute',
              top: '5%',
              left: '-20%',
              width: '550px',
              height: '600px',
              borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
              background: 'var(--color-accent)',
              opacity: 0.9,
              zIndex: -1,
              filter: 'blur(8px)',
            }}
            animate={{ 
              borderRadius: ['40% 60% 70% 30% / 40% 50% 60% 50%', '50% 50% 50% 50% / 50% 50% 50% 50%', '40% 60% 70% 30% / 40% 50% 60% 50%'] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Small floating yellow dot top left */}
          <motion.div 
            style={{
              position: 'absolute',
              top: '15%',
              left: '-15%',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'var(--color-accent)',
            }}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />

          {/* Medium green circle bottom right */}
          <motion.div 
            style={{
              position: 'absolute',
              bottom: '15%',
              right: '-10%',
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: '#a3e635',
              opacity: 0.85,
              zIndex: -2,
              filter: 'blur(4px)',
            }}
            animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Second green circle bottom left */}
          <motion.div 
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '-15%',
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: '#4ade80',
              opacity: 0.8,
              zIndex: -2,
              filter: 'blur(2px)',
            }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />

          {/* Image Placeholder */}
          <div 
            style={{
              position: 'absolute',
              bottom: '0', 
              left: '50%',
              transform: 'translateX(-50%)',
              width: '750px', 
              height: '880px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              zIndex: 20, 
            }}
          >
             <img src="/images/hero_face.png" alt="NFT Artwork" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }} />
          </div>
          
          {/* Floating EnDasmu NFT graphic placeholder */}
          <div 
            style={{
              position: 'absolute',
              top: '10%',
              right: '-10%',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '1px dashed rgba(255,255,255,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'spin 20s linear infinite',
              zIndex: 25,
            }}
          >
            <span style={{ position: 'absolute', top: -5, fontSize: '10px', color: 'white', whiteSpace: 'nowrap', transform: 'rotate(15deg)', letterSpacing: '2px' }}>LUMINA NFTS</span>
            <span style={{ position: 'absolute', bottom: -5, fontSize: '10px', color: 'white', whiteSpace: 'nowrap', transform: 'rotate(195deg)', letterSpacing: '2px' }}>LUMINA NFTS</span>
          </div>
          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
