import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/why.png";

const PlumbingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M16 6H12V4C12 2.9 11.1 2 10 2H6C4.9 2 4 2.9 4 4V7H2V9H16C17.1 9 18 9.9 18 11V15H16.5C15.7 15 15 15.7 15 16.5V17H19V16.5C19 14.6 20.6 13 22.5 13H23V11C23 8.2 20.8 6 18 6H16ZM14.5 19C14.5 20.93 16.07 22.5 18 22.5C19.93 22.5 21.5 20.93 21.5 19C21.5 17.6 20.6 15.5 18 13C15.4 15.5 14.5 17.6 14.5 19Z" />
  </svg>
);

const HeatingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M5 8V18H7V8H5ZM9 8V18H11V8H9ZM13 8V18H15V8H13ZM17 8V18H19V8H17ZM5 20H19C20.1 20 21 19.1 21 18V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V18C3 19.1 3.9 20 5 20ZM7 2C7.5 3 6 4 6 5C6 5.5 6.4 6 7 6C7.6 6 8 5.5 8 5C8 3.5 9 3 9 2C8.5 1 10 0 10 -1C10 -1.5 9.6 -2 9 -2C8.4 -2 8 -1.5 8 -1C8 0.5 7 1 7 2ZM11 2C11.5 3 10 4 10 5C10 5.5 10.4 6 11 6C11.6 6 12 5.5 12 5C12 3.5 13 3 13 2C12.5 1 14 0 14 -1C14 -1.5 13.6 -2 13 -2C12.4 -2 12 -1.5 12 -1C12 0.5 11 1 11 2ZM15 2C15.5 3 14 4 14 5C14 5.5 14.4 6 15 6C15.6 6 16 5.5 16 5C16 3.5 17 3 17 2C16.5 1 18 0 18 -1C18 -1.5 17.6 -2 17 -2C16.4 -2 16 -1.5 16 -1C16 0.5 15 1 15 2ZM19 2C19.5 3 18 4 18 5C18 5.5 18.4 6 19 6C19.6 6 20 5.5 20 5C20 3.5 21 3 21 2C20.5 1 22 0 22 -1C22 -1.5 21.6 -2 21 -2C20.4 -2 20 -1.5 20 -1C20 0.5 19 1 19 2Z" fillRule="evenodd" />
  </svg>
);

const ACUnitIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M2 7C2 5.9 2.9 5 4 5H20C21.1 5 22 5.9 22 7V13C22 14.1 21.1 15 20 15H4C2.9 15 2 14.1 2 13V7ZM4 7V13H20V7H4ZM15 9H18V11H15V9ZM6 9H13V11H6V9ZM6 17H8C8.55 17 9 17.45 9 18V21C9 21.55 8.55 22 8 22H6C5.45 22 5 21.55 5 21V18C5 17.45 5.45 17 6 17ZM10 17H12C12.55 17 13 17.45 13 18V20C13 20.55 12.55 21 12 21H10C9.45 21 9 20.55 9 20V18C9 17.45 9.45 17 10 17ZM14 17H16C16.55 17 17 17.45 17 18V19C17 19.55 16.55 20 16 20H14C13.45 20 13 19.55 13 19V18C13 17.45 13.45 17 14 17Z" />
  </svg>
);

const PipesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M21 4V10H20C20 12.76 17.76 15 15 15H9C7.34 15 6 16.34 6 18V20H2V18C2 14.14 5.14 11 9 11H15C15.55 11 16 10.55 16 10V4H21ZM12 4H15V6H12V4ZM16.5 4H19.5V8H16.5V4ZM3.5 13H6.5V17H3.5V13ZM6.5 19H9.5V23H6.5V19ZM16 18L13 21H11L14 18H16ZM19 18L16 21H14L17 18H19ZM22 18L19 21H17L20 18H22Z" />
  </svg>
);

const GaugeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12H22C22 6.48 17.52 2 12 2ZM11 7V12H16V10H13V7H11ZM2 14H22V16H2V14ZM6 18H18V20H6V18Z" />
  </svg>
);

const WaterHeaterActiveIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="5" y="3" width="14" height="17" rx="1" fill="#223a5c" />
    <path d="M12 11C13.65 11 15 9.65 15 8C15 6.35 12 4 12 4C12 4 9 6.35 9 8C9 9.65 10.35 11 12 11ZM12 8.5C12.28 8.5 12.5 8.72 12.5 9C12.5 9.28 12.28 9.5 12 9.5C11.72 9.5 11.5 9.28 11.5 9C11.5 8.72 11.72 8.5 12 8.5Z" fill="#e0292e" />
    <circle cx="12" cy="15" r="2" fill="#e0292e" />
    <circle cx="12" cy="15" r="1" fill="#ffffff" />
    <rect x="7" y="20" width="3" height="2" rx="1" fill="#e0292e" />
    <rect x="14" y="20" width="3" height="2" rx="1" fill="#e0292e" />
  </svg>
);

const tiles = [
  { label: "Plumbing", icon: PlumbingIcon },
  { label: "Heating", icon: HeatingIcon },
  { label: "Water Heater", icon: WaterHeaterActiveIcon, active: true },
  { label: "Cooling", icon: ACUnitIcon },
  { label: "Drain And Sewers", icon: PipesIcon },
  { label: "Indoor Air Quality", icon: GaugeIcon },
];

export function HeroSection() {
  return (
    <section className="relative section-slab">
      <Navbar />

      <div className="container-x pt-36 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="pt-10 lg:pt-16">
            <h1 className="font-display text-[clamp(40px,5.2vw,64px)] leading-[1.04] text-primary">
              Maintain First<br />
              Repair Second<br />
              Replace Last
            </h1>
            <p className="mt-5 text-base md:text-lg text-gray-600 max-w-xl">
              Reliable plumbing, heating, and air conditioning systems turn a house into a home. With locations in Santa Rosa and San Rafael, we are Marin & Sonoma Counties' one-stop shop for complete comfort solutions.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary h-11 px-7">Book Now</Button>
              <Button variant="outline" className="btn-outline h-11 px-7">Get A Free Quote</Button>
            </div>
            <div className="mt-7 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["R", "E", "B"].map((letter) => (
                  <div
                    key={letter}
                    className="h-9 w-9 rounded-full bg-primary text-white text-xs flex items-center justify-center border-2 border-white"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="hero-badge px-4 py-2">
                <div className="text-sm font-semibold text-primary">4.9 Stars</div>
                <div className="text-xs text-gray-500">500 Reviews in Google</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex justify-center">
              <div className="h-[380px] w-[380px] rounded-full bg-primary" />
            </div>
            <div className="absolute right-0 top-0 h-[420px] hero-ribbon" />
            <motion.img
              src={heroImg}
              alt="Technician"
              className="relative z-10 h-[400px] w-[330px] object-cover rounded-full shadow-2xl grayscale"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute bottom-10 right-10 hero-badge px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Same Day Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="service-grid mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className={`service-tile px-4 py-6 text-center ${tile.active ? "active" : ""}`}
            >
              <div className={`service-icon mx-auto h-16 w-16 flex items-center justify-center ${tile.active ? "" : "text-gray-300"}`}>
                <tile.icon className="h-14 w-14" />
              </div>
              <div className="service-label mt-4">{tile.label}</div>
              <div className="service-link mt-4 font-bold">Learn More</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}