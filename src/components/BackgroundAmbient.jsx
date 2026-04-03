import React from 'react';
import { motion } from 'framer-motion';

/**
 * Ambient background with floating organic gradient blobs 
 * inspired by the reference UI's green/yellow organic shapes
 */
const BackgroundAmbient = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    {/* Primary radial gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(217,249,95,0.06),transparent)]" />
    
    {/* Floating blob — top right (large, soft) */}
    <motion.div
      className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(217,249,95,0.08) 0%, rgba(74,222,128,0.04) 40%, transparent 70%)',
        filter: 'blur(80px)',
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Floating blob — left side */}
    <motion.div
      className="absolute top-[30%] -left-[15%] w-[600px] h-[600px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(217,249,95,0.05) 0%, rgba(74,222,128,0.03) 50%, transparent 70%)',
        filter: 'blur(100px)',
      }}
      animate={{
        x: [0, 40, -10, 0],
        y: [0, 30, -40, 0],
        scale: [1, 0.9, 1.05, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Floating blob — bottom center */}
    <motion.div
      className="absolute bottom-[5%] left-[30%] w-[500px] h-[500px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(217,249,95,0.04) 0%, rgba(74,222,128,0.02) 40%, transparent 70%)',
        filter: 'blur(120px)',
      }}
      animate={{
        x: [0, -30, 40, 0],
        y: [0, 20, -30, 0],
        scale: [1, 1.08, 0.92, 1],
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Small accent blob — mid right */}
    <motion.div
      className="absolute top-[60%] right-[5%] w-[300px] h-[300px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(217,249,95,0.06) 0%, transparent 60%)',
        filter: 'blur(60px)',
      }}
      animate={{
        x: [0, -20, 15, 0],
        y: [0, 25, -15, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Subtle grid pattern overlay */}
    <div 
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }}
    />
  </div>
);

export default BackgroundAmbient;
