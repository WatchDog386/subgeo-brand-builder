import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/premium/PremiumAnimations";
import { 
  Droplets, 
  Flame, 
  Thermometer, 
  Snowflake, 
  Wrench, 
  Gauge 
} from "lucide-react";

const services = [
  { 
    title: "Pharmacy", 
    icon: Droplets,
    href: "/pharmacy"
  },
  { 
    title: "Beauty Salon", 
    icon: Flame,
    href: "/beauty"
  },
  { 
    title: "Subgeo Industrial", 
    icon: Thermometer,
    href: "/subgeo-industrial",
    active: true
  },
  { 
    title: "Prescriptions", 
    icon: Snowflake,
    href: "/pharmacy"
  },
  { 
    title: "Skincare", 
    icon: Wrench,
    href: "/beauty"
  },
  { 
    title: "Plumbing Works", 
    icon: Gauge,
    href: "/subgeo-industrial"
  },
];

export function BranchesGridSection() {
  return (
    <section className="section-shell py-16 md:py-20">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200 border border-gray-200">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = service.active;
            
            return (
              <RevealOnScroll key={service.title} delay={index * 0.08}>
                <div 
                  className={`
                    relative bg-white p-6 md:p-8 flex flex-col items-center text-center
                    transition-all duration-300 group
                  `}
                >
                  {/* Icon */}
                  <div className={`
                    mb-4 transition-colors duration-300
                    ${isActive ? 'text-primary' : 'text-gray-300 group-hover:text-gray-400'}
                  `}>
                    <Icon 
                      size={48} 
                      strokeWidth={1.5}
                      className={isActive ? 'drop-shadow-sm' : ''}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`
                    text-base font-semibold mb-6 transition-colors duration-300
                    ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500'}
                  `}>
                    {service.title}
                  </h3>
                  
                  {/* Learn More Link */}
                  <Button 
                    variant="link"
                    className={`
                      p-0 h-auto font-semibold text-xs uppercase tracking-wide
                      transition-all duration-300 mt-auto
                      ${isActive 
                        ? 'text-red-600 hover:text-red-700' 
                        : 'text-gray-300 hover:text-gray-400'
                      }
                    `}
                    onClick={() => window.location.href = service.href}
                  >
                    Learn More
                  </Button>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}