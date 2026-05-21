/**
 * Premium Layout Components
 * Inspired by Apple, Stripe, Tesla, Framer
 */

import React from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

/* ==================== HERO SECTION ==================== */
export interface HeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  cta?: {
    label: string;
    href?: string;
    onClick?: () => void;
    secondary?: {
      label: string;
      href?: string;
      onClick?: () => void;
    };
  };
  background?: "gradient" | "dark" | "light" | "video";
  layout?: "classic" | "magazine";
  backgroundImage?: string;
  children?: ReactNode;
  className?: string;
  fullscreen?: boolean;
  showDots?: boolean;
}

export const PremiumHero: React.FC<HeroProps> = ({
  eyebrow,
  title,
  subtitle,
  cta,
  background = "gradient",
  layout = "classic",
  backgroundImage,
  children,
  className = "",
  fullscreen = true,
  showDots = true,
}) => {
  const bgClasses = {
    gradient: "gradient-premium",
    dark: "gradient-dark",
    light: "bg-white",
    video: "",
  };

  // Do not force a white background for magazine layout when a backgroundImage is provided.
  const effectiveBg = backgroundImage ? bgClasses[background] : layout === "magazine" ? "bg-white" : bgClasses[background];

  return (
    <section
      className={`relative w-full overflow-hidden ${
        fullscreen ? "min-h-screen" : "py-24"
      } flex items-center justify-center ${effectiveBg} ${className} is-hero`}
    >
      {layout === "magazine" ? (
        <div className="relative w-full">
          {backgroundImage && (
            <>
              <img src={backgroundImage} alt="Hero background" className="absolute inset-0 w-full h-full object-cover" />
              {/* Top-weighted overlay only — keep image bottom clear to avoid a visible dark band */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0)_30%)]" />
            </>
          )}

          <motion.div className={`relative z-10 container-x text-center hero-magazine ${backgroundImage ? "text-white" : ""}`}>
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="eyebrow mb-6 text-primary"
              >
                {eyebrow}
              </motion.div>
            )}

            <div className="hero-magazine-inner">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  className="hero-magazine-title"
                >
                  {title}
                </motion.div>
                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-4 text-lg text-muted-foreground max-w-xl"
                  >
                    {subtitle}
                  </motion.p>
                )}

                {cta && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="hero-cta mt-8 flex items-center justify-center gap-4"
                  >
                    <motion.button
                      onClick={cta.onClick}
                      className="btn-pill-pink font-semibold"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {cta.label}
                    </motion.button>
                    {cta.secondary && (
                      <motion.button
                        onClick={cta.secondary.onClick}
                        className="rounded-sm h-12 px-6 border-2 border-[#ff5b78] text-[#ff5b78] bg-white/0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {cta.secondary.label}
                      </motion.button>
                    )}
                  </motion.div>
                )}
              </div>
              {showDots && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="hero-dots">
                    <div className="hero-dot" />
                    <div className="hero-dot" />
                    <div className="hero-dot" />
                    <div className="hero-dot" />
                    <div className="hero-dot" />
                    <div className="hero-dot active" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      ) : (
        <>
          { /* existing classic layout below */ }
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 container-x text-center"
      >
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="eyebrow mb-6 text-primary"
          >
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`text-5xl md:text-7xl font-bold leading-tight mb-6 ${
            background === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed ${
              background === "light" ? "text-gray-600" : "text-gray-200"
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={cta.onClick}
              className="px-8 py-4 bg-white text-primary font-semibold rounded-sm hover-lift shadow-elevation-3"
            >
              {cta.label}
            </button>
            {cta.secondary && (
              <button
                onClick={cta.secondary.onClick}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover-lift transition-smooth"
              >
                {cta.secondary.label}
              </button>
            )}
          </motion.div>
        )}

        {children}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
      </>
      )}
    </section>
  );
};

/* ==================== PREMIUM SECTION ==================== */
export interface PremiumSectionProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  variant?: "default" | "dark" | "glass" | "gradient";
  className?: string;
  containerClass?: string;
  animated?: boolean;
  titleStyle?: React.CSSProperties;
}

export const PremiumSection: React.FC<PremiumSectionProps> = ({
  title,
  subtitle,
  children,
  variant = "default",
  className = "",
  containerClass = "",
  animated = true,
  titleStyle,
}) => {
  const variantClasses = {
    default: "section-hero-match",
    dark: "section-dark-nav",
    glass: "glass",
    gradient: "gradient-premium",
  };

  const textColor = {
    default: "text-gray-900",
    dark: "text-white",
    glass: "text-gray-900",
    gradient: "text-white",
  };

  return (
    <motion.section
      initial={animated ? { opacity: 0, y: 40 } : {}}
      whileInView={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`w-full py-20 md:py-32 ${variantClasses[variant]} ${className}`}
    >
      <div className={`container-x ${containerClass}`}>
        {(title || subtitle) && (
          <motion.div
            initial={animated ? { opacity: 0, y: 20 } : {}}
            whileInView={animated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            {title && (
                  (() => {
                    const headingClass =
                      variant === "dark"
                        ? "hero-magazine-title font-hero text-white relative z-10"
                        : "hero-magazine-title font-hero text-[var(--hero-foreground)]";

                    const subtitleClass = variant === "dark" ? "text-white/90" : "text-[var(--hero-foreground)]/80";

                    const headingStyle =
                      variant === "dark"
                        ? { whiteSpace: "normal" }
                        : { fontSize: "clamp(40px, 6vw, 86px)", lineHeight: 0.95 };

                    const mergedHeadingStyle = { ...headingStyle, ...titleStyle };

                    return (
                      <h2 className={headingClass} style={mergedHeadingStyle}>
                        {title}
                      </h2>
                    );
                  })()
                )}
            {subtitle && (
              <p className={`text-lg md:text-xl opacity-75 ${variant === "dark" ? "text-white/90" : "text-[var(--hero-foreground)]/80"}`}>{subtitle}</p>
            )}
          </motion.div>
        )}

        {children}
      </div>
    </motion.section>
  );
};

/* ==================== PREMIUM CARD ==================== */
export interface PremiumCardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  cta?: {
    label: string;
    onClick?: () => void;
  };
  variant?: "default" | "glass" | "gradient" | "dark";
  className?: string;
  children?: ReactNode;
}

export const PremiumCard: React.FC<PremiumCardProps> = ({
  icon,
  title,
  description,
  cta,
  variant = "default",
  className = "",
  children,
}) => {
  const variantClasses = {
    default: "bg-white border border-gray-200 shadow-elevation-2",
    glass: "glass",
    gradient: "gradient-premium",
    dark: "bg-neutral-900 border border-gray-800",
  };

  const textColor = {
    default: "text-gray-900",
    glass: "text-gray-900",
    gradient: "text-white",
    dark: "text-white",
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`${variantClasses[variant]} rounded-sm p-8 ${className} hover-lift`}
    >
      {icon && (
        <div className={`mb-6 text-3xl ${variant === "dark" ? "text-primary" : ""}`}>{icon}</div>
      )}

      <h3 className={`text-2xl font-bold mb-3 ${variant === "dark" ? "text-white" : "text-[var(--hero-foreground)]"}`}>{title}</h3>

      {description && <p className={`mb-6 opacity-75 ${textColor[variant]}`}>{description}</p>}

      {children}

      {cta && (
        <button
          className={`mt-6 font-semibold transition-smooth ${
            variant === "gradient"
              ? "text-white hover:opacity-90"
              : variant === "dark"
                ? "text-primary hover:opacity-80"
                : "text-primary hover:opacity-80"
          }`}
        >
          {cta.label} →
        </button>
      )}
    </motion.div>
  );
};

/* ==================== PREMIUM BUTTON ==================== */
export interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: ReactNode;
  children: ReactNode;
  as?: React.ElementType;
}

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      children,
      className = "",
      as: Component = "button",
      ...props
    },
    ref,
  ) => {
    const variantClasses = {
      primary:
        "bg-primary text-white hover:bg-primary/90 shadow-elevation-2 hover:shadow-elevation-3",
      secondary: "bg-secondary text-foreground hover:bg-secondary/80 shadow-elevation-1",
      outline: "border-2 border-primary text-primary hover:bg-primary/5 transition-smooth",
      ghost: "text-primary hover:bg-primary/10 transition-smooth",
      glass: "glass text-foreground hover:backdrop-blur-heavy transition-smooth",
    };

    const sizeClasses = {
        sm: "px-4 py-2 text-sm rounded-sm",
        md: "px-6 py-3 text-base rounded-sm",
        lg: "px-8 py-4 text-lg rounded-sm",
        xl: "px-10 py-5 text-xl rounded-sm",
    };

    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Component
          ref={ref}
          className={`${variantClasses[variant]} ${sizeClasses[size]} font-semibold transition-smooth flex items-center gap-2 cursor-pointer no-underline ${className}`}
          {...props}
        >
          {icon && <span>{icon}</span>}
          {children}
        </Component>
      </motion.div>
    );
  },
);

/* ==================== FLOATING GRADIENT BACKGROUND ==================== */
export const FloatingGradientBackground: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 0.95, 1],
          x: [0, 50, -30, 0],
          y: [0, -50, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 0.9, 1.05, 1],
          x: [0, -50, 30, 0],
          y: [0, 50, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent-cyan/20 to-transparent rounded-full blur-3xl"
      />

      {children}
    </div>
  );
};

/* ==================== STATS DISPLAY ==================== */
export interface StatProps {
  number: string;
  label: string;
  suffix?: string;
}

export interface StatsDisplayProps {
  stats: StatProps[];
  className?: string;
}

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, className }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${className ?? ""}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="text-4xl md:text-5xl font-bold text-current mb-2 font-hero"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stat.number}
            {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
          </motion.div>
          <p className="text-current/90">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

/* ==================== TESTIMONIAL CARD ==================== */
export interface TestimonialProps {
  quote: string;
  author: string;
  title?: string;
  image?: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, title, image }) => {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass rounded-sm p-8 hover-lift">
      <p className="text-lg mb-6 text-gray-900 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-4">
        {image && <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />}
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          {title && <p className="text-sm text-gray-600">{title}</p>}
        </div>
      </div>
    </motion.div>
  );
};
