import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, scrollViewport } from '../utils/animations';

const TrendingGrid = () => (
  <section className="container-main" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '80px',
      alignItems: 'center'
    }} className="trending-layout">
      
      {/* Left side: 2x2 Grid of CSS placeholder images */}
      <motion.div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px'
        }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={scrollViewport}
      >
        {/* Grid Images */}
        <div style={{ aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
           <img src="/images/grid_1.png" alt="NFT Art 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
           <img src="/images/grid_2.png" alt="NFT Art 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
           <img src="/images/grid_3.png" alt="NFT Art 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
           <img src="/images/grid_4.png" alt="NFT Art 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </motion.div>

      {/* Right side: Text details */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={scrollViewport}
      >
        <p style={{ color: 'var(--color-accent)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
          Popular Item
        </p>
        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, color: 'white', lineHeight: 1.1, marginBottom: '24px', fontFamily: 'Inter, sans-serif' }}>
          Hot Trending<br/>On This<br/>Week.
        </h2>
        <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.8, maxWidth: '400px', marginBottom: '40px' }}>
          Various kinds of NFTs that are trending the trend will be reset every week. Dont miss out on the best NFTs every week.
        </p>
        <motion.a 
          href="#trending" 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'white', textDecoration: 'none' }}
          whileHover={{ x: 5, opacity: 0.7 }}
        >
          See all <ArrowRight size={16} />
        </motion.a>
      </motion.div>

    </div>

    <style>{`
      @media (min-width: 1024px) {
        .trending-layout { grid-template-columns: 1fr 1fr !important; }
      }
    `}</style>
  </section>
);

export default TrendingGrid;
