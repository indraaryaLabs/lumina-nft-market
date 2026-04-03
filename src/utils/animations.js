/* ==========================================
   FRAMER MOTION — Animation Variants & Helpers
   ========================================== */

// Fade up animation for general sections
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// Fade in from left
export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Fade in from right
export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Scale up animation
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Staggered container
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Staggered items
export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Hero text reveal (character by character or line by line)
export const heroTextReveal = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// Image reveal with clip path
export const imageReveal = {
  hidden: { 
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Timeline line draw
export const drawLine = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

// Card hover effect
export const cardHover = {
  rest: { 
    scale: 1, 
    borderColor: "rgba(255, 255, 255, 0.06)",
  },
  hover: { 
    scale: 1.02,
    borderColor: "rgba(217, 249, 95, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Progress bar fill
export const progressFill = (width) => ({
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: `${width}%`,
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

// Navbar slide down
export const navSlide = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Mobile menu animation
export const mobileMenu = {
  hidden: { 
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

// Count up helper (not a variant but a utility)
export const countUpConfig = {
  duration: 2,
  ease: [0.25, 0.46, 0.45, 0.94],
};

// Default viewport config for scroll animations
export const scrollViewport = {
  once: true,
  margin: "-80px",
  amount: 0.2,
};

// Button hover animation
export const buttonHover = {
  scale: 1.03,
  transition: { duration: 0.2 },
};

export const buttonTap = {
  scale: 0.97,
};
