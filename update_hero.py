import re

with open("src/routes/pharmacy.tsx", "r", encoding="utf-8") as f:
    text = f.read()

# Using regex to find the section block
new_hero = """      {/* CTC-STYLE HERO SECTION */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden bg-white mt-[64px] lg:mt-[80px]">
        {/* Background Image Layer underneath everything */}
        <img src={pharmacyImg} alt="Pharmacy" className="absolute inset-0 w-full lg:w-[65%] h-full object-cover object-center" />

        {/* Decorative Floating Blobs (Grey rounded triangles) - Left side over image */}
        <div className="absolute top-[20%] left-[35%] w-24 h-24 bg-white/80 backdrop-blur-sm rounded-[30px] rounded-tl-full transform rotate-12 z-10 hidden lg:block opacity-60"></div>
        <div className="absolute top-[45%] left-[42%] w-16 h-16 bg-white/80 backdrop-blur-sm rounded-[20px] rounded-tr-full transform rotate-45 z-10 hidden lg:block opacity-60"></div>
        
        {/* Slanted White Background Area overlaying the right side */}
        <div className="absolute inset-0 z-20 pointer-events-none" style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 25% 100%)' }}>
            <div className="absolute inset-0 bg-[#f4f7f9]"></div>
            {/* Light grey swoosh at the bottom right */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[75%] bg-[#e2e8f0] rounded-tl-[120px] opacity-50"></div>
        </div>

        {/* The Blue Diagonal Ribbons */}
        {/* Main Solid Light Blue */}
        <div className="absolute top-0 bottom-0 z-30 bg-[#72aefd] w-[18%] lg:w-[12%] transform -skew-x-[22deg]" style={{ left: '38%', transformOrigin: 'top' }}></div>
        {/* Secondary Blue behind it */}
        <div className="absolute top-0 bottom-0 z-20 bg-[#bddaff] w-[18%] lg:w-[12%] transform -skew-x-[22deg]" style={{ left: '44%', transformOrigin: 'top' }}></div>

        {/* Content Container positioned precisely */}
        <div className="absolute inset-x-0 inset-y-0 z-40 flex items-center justify-end pointer-events-none">
          <div className="w-full lg:w-[55%] pr-8 md:pr-16 lg:pr-[10%] pl-8 pt-20 pb-16 flex flex-col items-center lg:items-end text-center lg:text-right pointer-events-auto">
              
              {/* Top row with Socials and @ */}
              <div className="flex items-center gap-4 mb-8 text-[#5b9cf6] group">
                <span className="text-[#3b82f6] text-[15px] font-medium tracking-wide">@SubgeoHealth</span>
                <div className="flex gap-2">
                  <a href="#" className="w-[34px] h-[34px] rounded-full bg-[#5b9cf6] text-white flex items-center justify-center hover:bg-[#2563eb] transition-colors"><Linkedin className="w-4 h-4 " fill="currentColor"/></a>
                  <a href="#" className="w-[34px] h-[34px] rounded-full bg-[#5b9cf6] text-white flex items-center justify-center hover:bg-[#2563eb] transition-colors"><Twitter className="w-4 h-4 " fill="currentColor"/></a>
                  <a href="#" className="w-[34px] h-[34px] rounded-full bg-[#5b9cf6] text-white flex items-center justify-center hover:bg-[#2563eb] transition-colors"><Facebook className="w-4 h-4 " fill="currentColor"/></a>
                  <a href="#" className="w-[34px] h-[34px] rounded-full bg-[#5b9cf6] text-white flex items-center justify-center hover:bg-[#2563eb] transition-colors"><Instagram className="w-4 h-4"/></a>
                </div>
              </div>

              {/* Main Text */}
              <h1 className="font-display text-[clamp(44px,6vw,72px)] leading-[1.0] tracking-tight font-bold text-[#5b9cf6] mb-1">
                 Subgeo Pharmacy
              </h1>
              <h2 className="font-display text-[clamp(32px,5vw,56px)] leading-[1.05] tracking-tight font-black text-[#1e40af] mb-12">
                 Healthcare for life.
              </h2>

              {/* CTA */}
              <Button className="rounded-md bg-[#5b9cf6] hover:bg-[#3b82f6] text-white h-14 px-12 text-[16px] font-semibold tracking-wide border-0 shadow-lg shadow-blue-500/30">
                 Check It Now
              </Button>

              {/* Bottom Contact */}
              <div className="mt-16 text-[#8bbfff] text-[17px] font-medium tracking-wide translate-y-8">
                 support@subgeo.co.ke
              </div>
          </div>
        </div>

      </section>"""

# Find everything between <Navbar /> and {/* Global brands */}
start_idx = text.find("<Navbar />")
end_idx = text.find("{/* Global brands */}")

if start_idx != -1 and end_idx != -1:
    new_text = text[:start_idx + len("<Navbar />")] + "\n\n" + new_hero + "\n\n          " + text[end_idx:]
    
    # Also add lucide icons to imports (Linkedin, Facebook, etc)
    # Check if they exist, if not, append to lucide-react import
    if "Facebook" not in new_text:
        import_stmt = 'import { ArrowRight, ArrowUpRight, Check, Clock, Phone, Pill, Heart, Shield, TrendingUp, Play } from "lucide-react";'
        new_import = 'import { ArrowRight, ArrowUpRight, Check, Clock, Phone, Pill, Heart, Shield, TrendingUp, Play, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";'
        new_text = new_text.replace(import_stmt, new_import)
        
    with open("src/routes/pharmacy.tsx", "w", encoding="utf-8") as f:
        f.write(new_text)
    print("Success: Hero Updated")
else:
    print("Error: Could not find markers")