/**
 * Premium Animation Components
 * Scroll-triggered reveals, parallax, and Framer Motion effects
 */

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ==================== REVEAL ON SCROLL ==================== */
export interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

export const RevealOnScroll: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className = "",
}) => {
  const directions = {
    up: { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: -40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] as const }}
      variants={directions[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ==================== PAGE TRANSITION ==================== */
export interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ==================== PARALLAX SECTION ==================== */
export interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  offset = 50,
  className = "",
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

/* ==================== STAGGERED CHILDREN ==================== */
export interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  className = "",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

/* ==================== NUMBER COUNTER ==================== */
export interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const count = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <motion.span ref={ref} className={className}>
      <motion.span>
        {count && <CountDisplay count={count} suffix={suffix} prefix={prefix} />}
      </motion.span>
    </motion.span>
  );
};

const CountDisplay = ({
  count,
  suffix,
  prefix,
}: {
  count: any;
  suffix: string;
  prefix: string;
}) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = count.onChange((value: number) => {
      setDisplayValue(Math.round(value));
    });

    return () => unsubscribe();
  }, [count]);

  return (
    <>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </>
  );
};

/* ==================== GRADIENT TEXT ANIMATION ==================== */
export interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  className = "",
  duration = 3,
}) => {
  return (
    <motion.div
      animate={{
        backgroundPosition: ["0% center", "100% center", "0% center"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "200% 200%",
        background: "linear-gradient(90deg, #5FA8FF, #00D9FF, #B366FF, #5FA8FF)",
      }}
      className={`bg-clip-text text-transparent ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* ==================== FLOATING CARD ==================== */
export interface FloatingCardProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  delay?: number;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  offset = 10,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -offset, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ==================== FLOATING GRADIENT ORB ==================== */
export interface FloatingGradientOrbProps {
  className?: string;
  size?: number;
  delay?: number;
  intensity?: number;
}

export const FloatingGradientOrb: React.FC<FloatingGradientOrbProps> = ({
  className = "",
  size = 320,
  delay = 0,
  intensity = 18,
}) => {
  return (
    <motion.div
      aria-hidden="true"
      animate={{
        x: [0, intensity, 0, -intensity, 0],
        y: [0, -intensity, 0, intensity, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 30% 30%, rgba(95,168,255,0.45), rgba(95,168,255,0.16) 38%, rgba(179,102,255,0.08) 62%, transparent 72%)",
      }}
    />
  );
};

/* ==================== BLUR FADE IN ==================== */
export interface BlurFadeProps {
  children: ReactNode;
  blur?: number;
  className?: string;
  duration?: number;
  delay?: number;
}

export const BlurFadeIn: React.FC<BlurFadeProps> = ({
  children,
  blur = 10,
  className = "",
  duration = 0.6,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: `blur(${blur}px)` }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ==================== WORD REVEAL ==================== */
export interface WordRevealProps {
  text: string;
  className?: string;
}

export const WordReveal: React.FC<WordRevealProps> = ({ text, className = "" }) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {words.map((word, idx) => (
        <motion.span key={idx} variants={wordVariants} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

/* ==================== SCROLL PROGRESS BAR ==================== */
export interface ScrollProgressBarProps {
  className?: string;
  color?: string;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  className = "",
  color = "bg-primary",
}) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className={`fixed top-0 left-0 right-0 h-1 ${color} origin-left z-50 ${className}`}
    />
  );
};

/* ==================== HOVER SCALE CARD ==================== */
export interface HoverScaleCardProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export const HoverScaleCard: React.FC<HoverScaleCardProps> = ({
  children,
  scale = 1.05,
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
      className={`origin-center ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* ==================== GRADIENT BORDER ==================== */
export interface GradientBorderProps {
  children: ReactNode;
  gradient?: string;
  borderWidth?: number;
  className?: string;
}

export const GradientBorder: React.FC<GradientBorderProps> = ({
  children,
  gradient = "linear-gradient(135deg, #5FA8FF, #00D9FF)",
  borderWidth = 2,
  className = "",
}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: gradient,
        padding: `${borderWidth}px`,
        borderRadius: "16px",
      }}
    >
      <div
        className="bg-white dark:bg-neutral-900 rounded-[calc(16px-2px)]"
        style={{ padding: "24px" }}
      >
        {children}
      </div>
    </div>
  );
};

/* ==================== TEXT GRADIENT ==================== */
export interface TextGradientProps {
  children: ReactNode;
  gradient?: string;
  className?: string;
}

export const TextGradient: React.FC<TextGradientProps> = ({
  children,
  gradient = "linear-gradient(135deg, #5FA8FF, #3F8FFF)",
  className = "",
}) => {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
};
