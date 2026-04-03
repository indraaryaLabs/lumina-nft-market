import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { fadeUp, scrollViewport } from '../utils/animations';

const StatItem = ({ label, value, suffix }) => {
  const numericValue = parseInt(value, 10);
  const { count, ref } = useCountUp(numericValue, 2000);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ color: '#a1a1aa', fontSize: '14px', fontWeight: 600, marginBottom: '2px', letterSpacing: '0.02em' }}>
        {label}
      </p>
      <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, color: 'white', fontVariantNumeric: 'tabular-nums', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
        {isNaN(numericValue) ? value : count}
        {suffix}
      </h3>
    </div>
  );
};

const StatsBar = () => (
  <motion.section
    className="container-stats"
    style={{ marginTop: '-40px', position: 'relative', zIndex: 30, marginBottom: '80px' }}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={scrollViewport}
  >
    <div
      className="glass glow-accent stats-box-responsive"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(20, 20, 20, 0.6)',
        backdropFilter: 'blur(30px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '100px', background: 'rgba(217,249,95,0.1)', filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="flex gap-6 md:gap-16 flex-wrap justify-center w-full md:w-auto">
        <StatItem label="Artwork" value="27" suffix="k+" />
        <StatItem label="Auction" value="25" suffix="k+" />
        <StatItem label="Artist" value="12" suffix="k+" />
      </div>

      <div className="flex flex-col items-center md:items-start gap-5 mt-4 md:mt-0">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ color: '#e4e4e7', fontSize: '18px', fontWeight: 600 }}>Art</span>
          <span style={{ color: 'white', fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' }}>3.4 ETH</span>
        </div>
        
        {/* Avatar Images */}
        <div style={{ display: 'flex', position: 'relative' }}>
          {[
            '/images/avatar_1.png',
            '/images/avatar_2.png',
            '/images/avatar_3.png',
            '/images/avatar_4.png',
            '/images/avatar_5.png'
          ].map((bg, i) => (
            <motion.div
              key={i}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '2px solid rgba(20,20,20,0.8)',
                marginLeft: i > 0 ? '-16px' : 0,
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                position: 'relative',
              }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ y: -5, zIndex: 10 }}
            />
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default StatsBar;
