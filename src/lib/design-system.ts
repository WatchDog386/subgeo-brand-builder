/**
 * SUBGEO Premium Design System
 * Inspired by Apple, Stripe, Linear, Tesla, Framer, Airbnb, Nike, Roche, Alto Pharmacy
 */

// ==================== COLOR PALETTE ====================
export const colors = {
  // Primary Brand (Luxury Blue - Roche/Novartis inspired)
  primary: {
    50: "#F0F7FF",
    100: "#E0EFFF",
    200: "#C0DEFF",
    300: "#A0CDFF",
    400: "#80BCFF",
    500: "#5FA8FF",
    600: "#3F8FFF",
    700: "#1E76FF",
    800: "#1556CC",
    900: "#0D3BA3",
  },

  // Dark Modern (Linear-style)
  neutral: {
    50: "#FAFBFC",
    100: "#F5F7FA",
    200: "#EAECF0",
    300: "#D5DAE2",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },

  // Accent Premium Gradient
  accent: {
    cyan: "#00D9FF",
    purple: "#B366FF",
    pink: "#FF6B9D",
    orange: "#FF9D54",
  },

  // Status Colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",

  // Glassmorphism
  glass: {
    light: "rgba(255, 255, 255, 0.8)",
    lightMuted: "rgba(255, 255, 255, 0.5)",
    dark: "rgba(17, 24, 39, 0.8)",
    darkMuted: "rgba(17, 24, 39, 0.5)",
  },
};

// ==================== TYPOGRAPHY ====================
export const typography = {
  fontFamily: {
    display: '"SF Pro Display", "Inter Tight", "Geist", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    sans: '"Inter", "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"Fira Code", "Monaco", "Courier New", monospace',
  },

  fontSize: {
    // Display sizes (Apple-style)
    display: {
      lg: { fontSize: "72px", lineHeight: "1.1", letterSpacing: "-2px" },
      md: { fontSize: "56px", lineHeight: "1.15", letterSpacing: "-1.5px" },
      sm: { fontSize: "48px", lineHeight: "1.2", letterSpacing: "-1px" },
    },

    // Heading sizes (Stripe-style hierarchy)
    heading: {
      xl: { fontSize: "40px", lineHeight: "1.25", letterSpacing: "-0.8px" },
      lg: { fontSize: "32px", lineHeight: "1.3", letterSpacing: "-0.6px" },
      md: { fontSize: "24px", lineHeight: "1.35", letterSpacing: "-0.4px" },
      sm: { fontSize: "20px", lineHeight: "1.4", letterSpacing: "-0.2px" },
      xs: { fontSize: "18px", lineHeight: "1.5", letterSpacing: "0" },
    },

    // Body text (Linear-style clean)
    body: {
      lg: { fontSize: "18px", lineHeight: "1.6", letterSpacing: "0" },
      md: { fontSize: "16px", lineHeight: "1.6", letterSpacing: "0" },
      sm: { fontSize: "14px", lineHeight: "1.57", letterSpacing: "0" },
      xs: { fontSize: "13px", lineHeight: "1.54", letterSpacing: "0.25px" },
    },

    // Labels and UI text (Airbnb-style clean)
    label: {
      lg: { fontSize: "16px", lineHeight: "1.5", letterSpacing: "0" },
      md: { fontSize: "14px", lineHeight: "1.57", letterSpacing: "0" },
      sm: { fontSize: "12px", lineHeight: "1.67", letterSpacing: "0.5px" },
      xs: { fontSize: "11px", lineHeight: "1.64", letterSpacing: "0.75px" },
    },
  },

  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
};

// ==================== SPACING SYSTEM ====================
export const spacing = {
  0: "0",
  px: "1px",
  0.5: "2px",
  1: "4px",
  1.5: "6px",
  2: "8px",
  2.5: "10px",
  3: "12px",
  3.5: "14px",
  4: "16px",
  4.5: "18px",
  5: "20px",
  5.5: "22px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "80px",
  24: "96px",
  28: "112px",
  32: "128px",
  36: "144px",
  40: "160px",
  44: "176px",
  48: "192px",
  52: "208px",
  56: "224px",
  60: "240px",
  64: "256px",
  72: "288px",
  80: "320px",
  96: "384px",
};

// ==================== SHADOWS (Premium Glassmorphism) ====================
export const shadows = {
  // Subtle elevation shadows (Apple-style)
  xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
  md: "0 4px 6px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
<<<<<<< HEAD
  2xl: "0 25px 50px rgba(0, 0, 0, 0.15)",
=======
  "2xl": "0 25px 50px rgba(0, 0, 0, 0.15)",
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396

  // Premium glow shadows (Framer-style)
  glow: {
    sm: "0 0 8px rgba(95, 168, 255, 0.3)",
    md: "0 0 16px rgba(95, 168, 255, 0.4)",
    lg: "0 0 32px rgba(95, 168, 255, 0.5)",
    xl: "0 0 48px rgba(95, 168, 255, 0.6)",
  },

  // Glassmorphism shadows
  glass: "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
  glassDark: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
};

// ==================== BORDER RADIUS ====================
export const borderRadius = {
  none: "0",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
<<<<<<< HEAD
  2xl: "32px",
  3xl: "48px",
=======
  "2xl": "32px",
  "3xl": "48px",
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
  full: "9999px",
};

// ==================== GRADIENTS ====================
export const gradients = {
  // Stripe-style premium gradients
  premium: "linear-gradient(135deg, #5FA8FF 0%, #3F8FFF 100%)",
  premiumLight: "linear-gradient(135deg, #E0EFFF 0%, #C0DEFF 100%)",

  // Tesla-style cinematic
  cinematic: "linear-gradient(180deg, #1F2937 0%, #111827 100%)",
  cinematicLight: "linear-gradient(180deg, #F5F7FA 0%, #EAECF0 100%)",

  // Framer-style vibrant
  vibrant: "linear-gradient(135deg, #00D9FF 0%, #B366FF 100%)",
  vibrantWarm: "linear-gradient(135deg, #FF9D54 0%, #FF6B9D 100%)",

  // Apple-style subtle
  subtle: "linear-gradient(135deg, #FAFBFC 0%, #F5F7FA 100%)",

  // Linear-style dark
  dark: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
  darkAccent: "linear-gradient(135deg, #1E76FF 0%, #1556CC 100%)",

  // Nike-style energetic
  energetic: "linear-gradient(135deg, #FF6B9D 0%, #FF9D54 100%)",

  // Healthcare (Roche/Alto Pharmacy)
  healthcare: "linear-gradient(135deg, #10B981 0%, #5FA8FF 100%)",
};

// ==================== ANIMATION/MOTION ====================
export const animation = {
  durations: {
    instant: "150ms",
    fast: "200ms",
    base: "300ms",
    slow: "500ms",
    slower: "700ms",
    slowest: "1000ms",
  },

  easing: {
    // Apple-style easing
    apple: "cubic-bezier(0.16, 1, 0.3, 1)",
    // Linear-style easing
    linear: "cubic-bezier(0, 0, 1, 1)",
    // Framer-style easing
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    // Subtle easing
    subtle: "cubic-bezier(0.4, 0, 0.2, 1)",
    // Bounce easing
    bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
  },

  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

// ==================== COMPONENT PATTERNS ====================
export const componentPatterns = {
  // Button sizes (Stripe-style)
  button: {
    lg: {
      padding: "16px 28px",
      fontSize: "18px",
      borderRadius: "12px",
    },
    md: {
      padding: "12px 20px",
      fontSize: "16px",
      borderRadius: "8px",
    },
    sm: {
      padding: "8px 16px",
      fontSize: "14px",
      borderRadius: "6px",
    },
    xs: {
      padding: "6px 12px",
      fontSize: "12px",
      borderRadius: "4px",
    },
  },

  // Card patterns (Apple-style)
  card: {
    base: {
      borderRadius: "16px",
      padding: "24px",
      backdropFilter: "blur(20px)",
      background: "rgba(255, 255, 255, 0.8)",
    },
    hover: {
      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      transform: "translateY(-4px)",
      boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
    },
  },

  // Input patterns (Linear-style)
  input: {
    base: {
      padding: "10px 14px",
      fontSize: "14px",
      borderRadius: "8px",
      border: "1px solid #EAECF0",
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
    focus: {
      borderColor: "#5FA8FF",
      boxShadow: "0 0 0 3px rgba(95, 168, 255, 0.1)",
    },
  },
};

// ==================== BREAKPOINTS (Mobile-first) ====================
export const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// ==================== Z-INDEX SYSTEM ====================
export const zIndex = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 100,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  notification: 80,
  max: 9999,
};

// ==================== UTILITY FUNCTIONS ====================
export const createGradient = (colors: string[]) => {
  return `linear-gradient(135deg, ${colors.join(", ")})`;
};

export const createGlassEffect = (isDark = false) => ({
  backgroundColor: isDark ? "rgba(17, 24, 39, 0.7)" : "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(20px)",
  border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: isDark ? shadows.glassDark : shadows.glass,
});

export const createElevation = (level: 1 | 2 | 3 | 4 | 5) => {
  const elevations = {
    1: `0 1px 3px rgba(0, 0, 0, 0.05)`,
    2: `0 4px 6px rgba(0, 0, 0, 0.08)`,
    3: `0 10px 15px rgba(0, 0, 0, 0.1)`,
    4: `0 20px 25px rgba(0, 0, 0, 0.1)`,
    5: `0 25px 50px rgba(0, 0, 0, 0.15)`,
  };
  return elevations[level];
};
