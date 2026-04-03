import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LoadingScreen = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
        exit={{ 
          opacity: 0,
          transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
        }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Code2 className="text-[var(--color-accent)]" size={36} />
          <span className="text-2xl font-bold tracking-tight text-white">
            Dev<span className="text-[var(--color-accent)]">.</span>Space
          </span>
        </motion.div>

        {/* Loading bar container */}
        <motion.div
          className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #d9f95f, #4ade80, #d9f95f)',
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-6 text-xs font-mono text-white/30 tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Initializing
        </motion.p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default LoadingScreen;
