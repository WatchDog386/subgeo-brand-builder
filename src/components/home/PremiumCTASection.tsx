import { Button } from "@/components/ui/button";

export function PremiumCTASection() {
  return (
    <section className="bg-[#111315] text-white py-10">
      <div className="container-x flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold uppercase tracking-[0.12em]">Subgeo Services, Inc.</div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            className="h-11 px-4 bg-transparent border border-white/25 rounded-[4px] text-[11px] uppercase tracking-[0.2em] text-white placeholder:text-white/40 w-full sm:w-[280px]"
          />
          <Button className="btn-primary h-11 px-6">Book Now</Button>
        </div>
      </div>
    </section>
  );
}