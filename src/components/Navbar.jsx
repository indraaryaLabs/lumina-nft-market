import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navSlide, mobileMenu, staggerItem } from '../utils/animations';

const Navbar = ({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 50,
          transition: 'all 0.4s ease',
          padding: isScrolled ? '12px 0' : '20px 0',
          ...(isScrolled
            ? {
                background: 'rgba(5,5,5,0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
              }
            : { background: 'transparent' }),
        }}
        variants={navSlide}
        initial="hidden"
        animate="visible"
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="navbar-logo"
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'white',
              }}
            >
              Lumina
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '24px',
            }}
            className="nav-links-desktop"
          >
            {['Collection', 'Market Place', 'Community'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleNavClick(e, `#${label.toLowerCase().replace(' ', '-')}`)}
                style={{
                  padding: '8px',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#e4e4e7',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#e4e4e7';
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="nav-cta-desktop" style={{ display: 'none' }}>
            <motion.a
              href="#connect"
              onClick={(e) => handleNavClick(e, '#connect')}
              style={{
                padding: '10px 24px',
                borderRadius: '9999px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                fontWeight: 500,
                fontSize: '13px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s',
              }}
              whileHover={{ scale: 1.05, borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
              whileTap={{ scale: 0.95 }}
            >
              Connect Walet
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="nav-mobile-toggle"
            style={{
              display: 'flex',
              width: '40px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#d4d4d8',
              cursor: 'pointer',
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            style={{ position: 'fixed', inset: 0, zIndex: 40 }}
            className="nav-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(4px)',
              }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="glass"
              style={{
                position: 'absolute',
                top: '72px',
                left: '16px',
                right: '16px',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              }}
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {['Collection', 'Market Place', 'Community'].map((label) => {
                  const href = `#${label.toLowerCase().replace(' ', '-')}`;
                  return (
                    <motion.a
                      key={href}
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      style={{
                        padding: '12px 16px',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#d4d4d8',
                        textDecoration: 'none',
                        borderRadius: '12px',
                        transition: 'all 0.2s',
                      }}
                      variants={staggerItem}
                    >
                      {label}
                    </motion.a>
                  );
                })}
                <motion.div
                  style={{
                    paddingTop: '16px',
                    marginTop: '8px',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                  }}
                  variants={staggerItem}
                >
                  <a
                    href="#connect"
                    onClick={(e) => handleNavClick(e, '#connect')}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '12px 16px',
                      textAlign: 'center',
                      borderRadius: '12px',
                      backgroundColor: 'var(--color-accent)',
                      color: '#000',
                      fontWeight: 600,
                      fontSize: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    Connect Wallet
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive show/hide */}
      <style>{`
        .nav-links-desktop, .nav-cta-desktop { display: none !important; }
        .nav-mobile-toggle { display: flex !important; }
        @media (min-width: 768px) {
          .nav-links-desktop, .nav-cta-desktop { display: flex !important; }
          .nav-mobile-toggle { display: none !important; }
          .nav-mobile-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
