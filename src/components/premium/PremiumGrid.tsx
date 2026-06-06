/**
 * Premium Grid & Section Components
 * For showcasing branches, services, and products
 * SSR-Safe: Handles forwardRef/memo components properly
 */

import React, { ReactNode, ElementType } from "react";
import { motion } from "framer-motion";

/* ==================== GRID CONTAINER ==================== */
export interface GridContainerProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const GridContainer: React.FC<GridContainerProps> = ({
  children,
  columns = 3,
  gap = "lg",
  className = "",
}) => {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  return (
    <div className={`grid ${colClasses[columns]} ${gapClasses[gap]} ${className}`}>{children}</div>
  );
};

/* ==================== IMAGE CARD ==================== */
export interface ImageCardProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  cta?: {
    label: string;
    onClick?: () => void;
  };
  overlay?: boolean;
  className?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  image,
  title,
  subtitle,
  description,
  badge,
  cta,
  overlay = true,
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative overflow-hidden rounded-sm group cursor-pointer ${className}`}
    >
      <img
        src={image}
        alt={title}
<<<<<<< HEAD
        className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
=======
        className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
      />

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full"
        >
          {badge}
        </motion.div>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 p-6 text-white ${
          overlay ? "translate-y-4 group-hover:translate-y-0" : ""
        } transition-transform duration-300`}
      >
        {subtitle && (
          <p className="text-xs uppercase tracking-widest mb-2 opacity-75">{subtitle}</p>
        )}

        <h3 className="text-2xl font-bold font-hero text-[var(--hero-foreground)] mb-2">{title}</h3>

        {description && <p className="text-sm opacity-90 mb-4">{description}</p>}

        {cta && (
          <button className="text-white font-semibold hover:opacity-80 transition-opacity">
            {cta.label} →
          </button>
        )}
      </div>
    </motion.div>
  );
};

/* ==================== FEATURE GRID ==================== */
export interface FeatureItemProps {
  icon: ReactNode | ElementType; // ✅ Support both JSX elements AND component types
  title: string;
  description: string;
  size?: "sm" | "md" | "lg";
}

export interface FeatureGridProps {
  features: FeatureItemProps[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  columns = 3,
  className = "",
}) => {
  const colClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const sizeClasses = {
    sm: {
      iconSize: "text-3xl",
      padding: "p-4",
      titleSize: "text-lg",
    },
    md: {
      iconSize: "text-4xl",
      padding: "p-6",
      titleSize: "text-xl",
    },
    lg: {
      iconSize: "text-5xl",
      padding: "p-8",
      titleSize: "text-2xl",
    },
  };

  // ✅ SSR-Safe Icon Renderer: Handles JSX elements, component types, forwardRef, memo
  const renderIcon = (icon: ReactNode | ElementType | undefined, sizeClass: any) => {
    // Case 1: Undefined or null - render nothing
    if (icon == null) return null;

    // Case 2: Already a valid React element (JSX like <Icon />)
    if (React.isValidElement(icon)) {
      return icon;
    }

    // Case 3: It's a component type/function (including forwardRef/memo wrapped components)
    // This handles the {$$typeof, render} object pattern from React internals
    if (
      typeof icon === "function" ||
      (typeof icon === "object" && icon !== null && "$$typeof" in icon)
    ) {
      // React.createElement properly handles forwardRef/memo during SSR
      return React.createElement(icon as ElementType, {
        className: sizeClass.iconSize,
        // Preserve any existing className if icon was already an element with props
        ...(React.isValidElement(icon) ? (icon.props as any) : {}),
      });
    }

    // Case 4: Fallback - render as-is (string, number, etc.)
    return icon;
  };

  return (
    <div className={`grid ${colClasses[columns]} gap-8 ${className}`}>
      {features.map((feature, index) => {
        const sizeClass = sizeClasses[feature.size || "md"];

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className={`glass rounded-sm hover-lift ${sizeClass.padding}`}
          >
            <div className={`mb-4 text-primary ${sizeClass.iconSize}`}>
              {renderIcon(feature.icon, sizeClass)}
            </div>
            <h3 className={`font-hero font-bold mb-2 text-[var(--hero-foreground)] ${sizeClass.titleSize}`}>
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

/* ==================== BENTO GRID ==================== */
export interface BentoItemProps {
  title: string;
  description?: string;
  image?: string;
  gradient?: string;
  span?: "col-span-1" | "col-span-2" | "row-span-2";
  className?: string;
  children?: ReactNode;
}

export interface BentoGridProps {
  items: BentoItemProps[];
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ items, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {items.map((item, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className={`relative rounded-sm overflow-hidden h-72 ${item.span || "col-span-1"} ${item.className}`}
          style={{
            background: item.gradient || "linear-gradient(135deg, #5FA8FF, #3F8FFF)",
          }}
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold font-hero text-white mb-2">{item.title}</h3>
            {item.description && <p className="text-sm opacity-90 mb-4">{item.description}</p>}
            {item.children && item.children}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* ==================== COMPARISON TABLE ==================== */
export interface ComparisonItem {
  name: string;
  features: Record<string, boolean | string>;
}

export interface ComparisonTableProps {
  items: ComparisonItem[];
  featureLabels: Record<string, string>;
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  items,
  featureLabels,
  className = "",
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <motion.table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <th className="text-left py-4 px-6 font-bold text-gray-900 dark:text-white">
              Features
            </th>
            {items.map((item, idx) => (
              <th
                key={idx}
                className="text-center py-4 px-6 font-bold text-gray-900 dark:text-white"
              >
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(featureLabels).map(([key, label], idx) => (
            <motion.tr
              key={key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="border-b border-gray-100 dark:border-gray-800"
            >
              <td className="py-4 px-6 text-gray-900 dark:text-white font-medium">{label}</td>
              {items.map((item, itemIdx) => {
                const value = item.features[key];
                const isIncluded = typeof value === "boolean" ? value : true;

                return (
                  <td key={itemIdx} className="text-center py-4 px-6">
                    {isIncluded ? (
                      typeof value === "string" ? (
                        <span className="text-gray-900 dark:text-white font-medium">{value}</span>
                      ) : (
                        <svg
                          className="w-5 h-5 mx-auto text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )
                    ) : (
                      <svg
                        className="w-5 h-5 mx-auto text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </td>
                );
              })}
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

/* ==================== TIMELINE ==================== */
export interface TimelineEventProps {
  title: string;
  description: string;
  date: string;
  icon?: ReactNode;
}

export interface TimelineProps {
  events: TimelineEventProps[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ events, className = "" }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-8"
        >
          {/* Line connector */}
          {index < events.length - 1 && (
            <div className="absolute left-3 top-12 h-8 w-1 bg-gradient-premium rounded-full" />
          )}

          {/* Circle marker */}
          <div className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>

          {/* Content */}
          <div className="glass rounded-xl p-6">
            <div className="flex items-start gap-4">
              {event.icon && (
                <div className="text-2xl text-primary mt-1">
                  {React.isValidElement(event.icon)
                    ? event.icon
                    : typeof event.icon === "function"
                      ? React.createElement(event.icon as ElementType)
                      : event.icon}
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm font-semibold text-primary mb-1">{event.date}</p>
                <h3 className="text-xl font-bold font-hero text-[var(--hero-foreground)] mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* ==================== CENTERED CONTENT ==================== */
export interface CenteredContentProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  maxWidth?: string;
  className?: string;
}

export const CenteredContent: React.FC<CenteredContentProps> = ({
  eyebrow,
  title,
  description,
  children,
  maxWidth = "max-w-3xl",
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`${maxWidth} mx-auto text-center ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}

      {title && (
        <h2 className="text-4xl md:text-5xl font-bold font-hero mb-6 text-current leading-tight">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-lg md:text-xl text-current/80 mb-8 leading-relaxed">
          {description}
        </p>
      )}

      {children}
    </motion.div>
  );
};
