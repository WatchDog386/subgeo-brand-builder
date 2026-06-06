# SUBGEO Premium Design System Documentation

## Overview
The SUBGEO website has been redesigned with a premium, billion-dollar-quality aesthetic inspired by leading global brands: Apple, Stripe, Linear, Tesla, Framer, Airbnb, Nike, Roche, and Alto Pharmacy.

## Design Philosophy

### Visual Identity
- **Luxury Minimalism**: Clean, spacious layouts with purposeful whitespace
- **Premium Gradients**: Soft, sophisticated color transitions and glassmorphism effects
- **Cinematic Layouts**: Full-screen sections with hero imagery and parallax effects
- **Modern Typography**: Premium font families (Inter, SF Pro Display) with optimized hierarchy
- **Elegant Shadows**: Subtle elevation system creating depth without heaviness

### Core Values
- **Investor-Level Polish**: Every pixel is intentional and refined
- **Accessible Excellence**: Premium design that remains user-friendly
- **Motion with Purpose**: Smooth animations that enhance, not distract
- **Dark Mode Ready**: Beautiful in both light and dark modes
- **Healthcare Professionalism**: Trust and reliability through design

## Color Palette

### Primary Brand Color
- **Luxury Blue**: `#5FA8FF` (Roche/Novartis inspired)
  - Light: `#E0EFFF`
  - Dark: `#1E76FF`

### Accent Colors
- **Cyan**: `#00D9FF` (Framer-style vibrant)
- **Purple**: `#B366FF` (Modern, energetic)
- **Pink**: `#FF6B9D` (Nike-style energetic)
- **Orange**: `#FF9D54` (Warm, inviting)

### Neutral Colors
- **Light**: `#FAFBFC` → `#EAECF0`
- **Dark**: `#1F2937` → `#111827` (Linear-style dark)

### Status Colors
- **Success**: `#10B981` (Healthcare green)
- **Warning**: `#F59E0B`
- **Error**: `#EF4444`
- **Info**: `#3B82F6`

## Typography System

### Font Families
```css
Display: "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont
Body: "Inter", -apple-system, BlinkMacSystemFont
Mono: "Fira Code", "Monaco"
Serif: "Source Serif 4"
```

### Font Sizes & Hierarchy
- **Display Large**: 72px (bold, -2px tracking)
- **Heading XL**: 40px (bold, -0.8px tracking)
- **Heading Large**: 32px (bold)
- **Heading Medium**: 24px (semibold)
- **Body Large**: 18px
- **Body Medium**: 16px
- **Body Small**: 14px
- **Label Small**: 12px

## Component System

### Premium Layout Components (`PremiumLayout.tsx`)

#### PremiumHero
Fullscreen hero sections with animated gradients and cinematic backgrounds.
```tsx
<PremiumHero
  eyebrow="CATEGORY"
  title="Headline"
  subtitle="Subheadline"
  background="gradient" | "dark" | "light"
  cta={{ label: "Action", onClick: () => {} }}
/>
```

#### PremiumSection
Reusable section wrapper with animated reveals on scroll.
```tsx
<PremiumSection
  variant="default" | "dark" | "glass" | "gradient"
  title="Section Title"
  subtitle="Section subtitle"
>
  {children}
</PremiumSection>
```

#### PremiumCard
Premium card component with hover effects and gradients.
```tsx
<PremiumCard
  icon={<Icon />}
  title="Card Title"
  description="Description"
  variant="default" | "glass" | "gradient" | "dark"
/>
```

#### StatsDisplay
Animated statistics counter with scroll-triggered animations.
```tsx
<StatsDisplay stats={[
  { number: "6", label: "Branches" },
  // ...
]} />
```

### Premium Animation Components (`PremiumAnimations.tsx`)

#### RevealOnScroll
Smooth scroll-triggered reveal animations.
```tsx
<RevealOnScroll direction="up" | "down" | "left" | "right" delay={0.2}>
  {children}
</RevealOnScroll>
```

#### ParallaxSection
Parallax scroll effect for depth.
```tsx
<ParallaxSection offset={50}>
  {children}
</ParallaxSection>
```

#### StaggerContainer
Staggered animation for child elements.
```tsx
<StaggerContainer staggerDelay={0.1}>
  {children}
</StaggerContainer>
```

#### AnimatedGradientText
Animated gradient text effect.
```tsx
<AnimatedGradientText duration={3}>
  Gradient Text
</AnimatedGradientText>
```

#### BlurFadeIn
Blur-in animation with smooth fade.
```tsx
<BlurFadeIn blur={10} duration={0.6}>
  {children}
</BlurFadeIn>
```

### Premium Grid Components (`PremiumGrid.tsx`)

#### ImageCard
Premium image card with overlay and CTAs.
```tsx
<ImageCard
  image="/path/to/image.jpg"
  title="Card Title"
  subtitle="Category"
  description="Description"
  badge="Featured"
  overlay={true}
/>
```

#### FeatureGrid
Responsive feature grid with icons.
```tsx
<FeatureGrid
  features={[
    { icon: <Icon />, title: "Feature", description: "..." }
  ]}
  columns={3}
/>
```

#### BentoGrid
Modern bento-style layout for mixed content.
```tsx
<BentoGrid items={[
  {
    title: "Item",
    description: "...",
    gradient: "linear-gradient(...)"
  }
]} />
```

## Glassmorphism Effects

### Glass Styles
```css
.glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12);
}

.glass-dark {
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
```

## Gradient System

### Premium Gradients
```css
/* Stripe-inspired */
.gradient-premium {
  background: linear-gradient(135deg, #5FA8FF 0%, #3F8FFF 100%);
}

/* Framer-style vibrant */
.gradient-vibrant {
  background: linear-gradient(135deg, #00D9FF 0%, #B366FF 100%);
}

/* Nike-style energetic */
.gradient-warm {
  background: linear-gradient(135deg, #FF9D54 0%, #FF6B9D 100%);
}

/* Linear-style dark */
.gradient-dark {
  background: linear-gradient(135deg, #1F2937 0%, #111827 100%);
}

/* Healthcare */
.gradient-health {
  background: linear-gradient(135deg, #10B981 0%, #5FA8FF 100%);
}
```

## Animation & Easing

### Easing Functions
- **Apple**: `cubic-bezier(0.16, 1, 0.3, 1)` - Smooth, natural
- **Linear**: `cubic-bezier(0, 0, 1, 1)` - Technical precision
- **Framer**: `cubic-bezier(0.34, 1.56, 0.64, 1)` - Bouncy, energetic
- **Subtle**: `cubic-bezier(0.4, 0, 0.2, 1)` - Standard easing

### Duration Tokens
- **Instant**: 150ms
- **Fast**: 200ms
- **Base**: 300ms (default)
- **Slow**: 500ms
- **Slower**: 700ms
- **Slowest**: 1000ms

### Key Animations
- **Floating**: 6s ease-in-out infinite
- **Pulse Subtle**: 3s cubic-bezier ease infinite
- **Gradient Shift**: 8s ease infinite
- **Blur In**: 600ms cubic-bezier(0.4, 0, 0.2, 1)
- **Slide Up**: 500ms cubic-bezier(0.4, 0, 0.2, 1)

## Shadow System (Elevation)

### Elevation Levels
```css
/* Level 1 - Subtle */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

/* Level 2 - Card */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06);

/* Level 3 - Hover */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);

/* Level 4 - Prominent */
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);

/* Level 5 - Maximum */
box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
```

## Border Radius System

```css
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px    /* Most common */
--radius-xl: 24px
--radius-2xl: 32px
--radius-3xl: 48px
--radius-full: 9999px
```

## Spacing System

All spacing follows an 8px grid:
- xs: 4px
- sm: 8px
- md: 16px (common)
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 80px

## Responsive Design

### Breakpoints (Mobile-First)
```
xs:  320px (mobile)
sm:  640px (landscape phone)
md:  768px (tablet)
lg:  1024px (small laptop)
xl:  1280px (desktop)
2xl: 1536px (large screen)
```

## Navigation & Interaction Patterns

### Premium Buttons
- **Primary**: Gradient background with shadow
- **Secondary**: Muted background
- **Outline**: Border only, hover fill
- **Ghost**: Text only, hover background
- **Glass**: Glassmorphism effect

### Hover & Active States
- Smooth 300ms transitions
- Subtle scale (1.02x) and shadow elevation
- Color opacity changes (not brightness)
- Cursor changes indicate interactivity

## Page Structure

### Home Page Sections
1. **Hero**: Fullscreen cinematic intro
2. **Pillars**: Brand values with feature cards
3. **Services**: Service offerings in grid
4. **Branches**: Premium branch showcase
5. **Impact Stats**: Animated statistics
6. **Story**: Brand narrative with parallax
7. **Testimonials**: Client testimonials
8. **News & Insights**: Bento-style news grid
9. **CTA Band**: Final call-to-action with gradient
10. **Footer**: Multi-column premium footer

## Design System Features

### Light Mode
- Clean white backgrounds
- Dark text for maximum readability
- Subtle shadows and borders
- Glass effects with white base

### Dark Mode
- Dark neutral backgrounds (--neutral-900)
- Light text (--neutral-50)
- Stronger shadows for depth
- Glass effects with dark base

### Accessibility
- Minimum contrast ratios met
- Keyboard navigation supported
- Focus indicators visible
- ARIA labels on interactive elements

## Performance Optimization

### Animation Best Practices
- Use `transform` and `opacity` for 60fps animations
- Utilize `will-change` for complex animations
- Lazy-load images with `loading="lazy"`
- Debounce scroll events
- Use `viewport` to trigger animations only when visible

### CSS Optimization
- Tailwind utility-first approach
- Minimal custom CSS
- Component-scoped styles
- DRY principle with shared utilities

## Integration with TanStack

- **React Router**: Smooth page transitions
- **Framer Motion**: All animation logic
- **Tailwind CSS**: Utility styling
- **Radix UI**: Accessible components

## Customization Guide

### Changing Colors
1. Update `/src/lib/design-system.ts`
2. Modify `/src/styles.css` CSS variables
3. Update Tailwind theme if needed

### Adding Animations
1. Create animation keyframes in `styles.css`
2. Or use Framer Motion in components
3. Follow existing easing patterns

### Creating New Sections
1. Use `PremiumSection` wrapper
2. Implement reveal animations with `RevealOnScroll`
3. Follow spacing system (8px grid)
4. Use gradient system for visual interest

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+

## Future Enhancements
- [ ] Add more branch category pages
- [ ] Implement dark mode toggle UI
- [ ] Add search functionality
- [ ] Create appointment booking flow
- [ ] Add customer testimonial slider
- [ ] Implement blog/news system
- [ ] Add analytics tracking
- [ ] Create admin dashboard

---

**Design System Version**: 1.0  
**Last Updated**: 2026-05-14  
**Maintained by**: SUBGEO Design & Development Team
