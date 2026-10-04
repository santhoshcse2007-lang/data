import React from 'react';
import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenBookingDemo: () => void;
  onOpenGetStarted: () => void;
  onOpenChangelog: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBookingDemo,
  onOpenGetStarted,
  onOpenChangelog,
}) => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center mt-20 sm:mt-24 md:mt-32 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto pb-16">
      {/* 1. Tagline Pill */}
      <div className="flex justify-center mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
        <button
          type="button"
          onClick={onOpenChangelog}
          className="group inline-flex items-center h-[38px] px-3.5 rounded-[10px] bg-[rgba(85,80,110,0.4)] backdrop-blur border border-[rgba(164,132,215,0.5)] shadow-lg shadow-black/20 hover:border-[rgba(164,132,215,0.8)] hover:bg-[rgba(85,80,110,0.55)] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b39fc]"
        >
          {/* Inner Badge */}
          <span className="bg-[#7b39fc] rounded-[6px] px-2 py-0.5 text-xs text-white font-cabin font-medium mr-2.5 shadow-sm">
            New
          </span>

          {/* Tagline Text */}
          <span className="font-cabin font-medium text-[14px] text-white tracking-wide">
            Say Hello to Datacore v3.2
          </span>

          <ArrowRight className="w-3.5 h-3.5 text-white/70 ml-2 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
        </button>
      </div>

      {/* 2. Headline */}
      <h1 className="font-instrument text-white text-5xl sm:text-6xl md:text-7xl lg:text-[96px] leading-[1.1] max-w-[1080px] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)] text-balance">
        Book your perfect stay instantly{' '}
        <span className="font-instrument italic font-normal px-1.5 sm:px-2.5 text-[0.98em] text-white">
          and
        </span>{' '}
        hassle-free
      </h1>

      {/* 3. Subtext */}
      <p className="font-inter font-normal text-[16px] md:text-[18px] text-white/70 max-w-[662px] mx-auto mt-6 md:mt-8 leading-relaxed drop-shadow-sm">
        Discover handpicked hotels, resorts, and stays across your favorite
        destinations. Enjoy exclusive deals, fast booking, and 24/7 support.
      </p>

      {/* 4. Call to Action Buttons (Row) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-8 md:mt-10 w-full sm:w-auto">
        {/* Button 1: "Book a Free Demo" */}
        <button
          type="button"
          onClick={onOpenBookingDemo}
          className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-[#7b39fc] hover:bg-[#8c4dff] rounded-[10px] font-cabin font-medium text-[16px] text-white shadow-xl shadow-[#7b39fc]/30 hover:shadow-[#7b39fc]/50 active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span>Book a Free Demo</span>
        </button>

        {/* Button 2: "Get Started Now" */}
        <button
          type="button"
          onClick={onOpenGetStarted}
          className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-[#2b2344] hover:bg-[#392f58] rounded-[10px] font-cabin font-medium text-[16px] text-[#f6f7f9] border border-white/10 hover:border-white/20 active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b39fc]"
        >
          <span>Get Started Now</span>
        </button>
      </div>

      {/* Subtle Proof / Trust Markers */}
      <div className="mt-14 sm:mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-inter text-white/60">
        <div className="flex items-center gap-1.5">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-white/80 font-medium">4.98 / 5</span>
          <span>(12,400+ luxury stays)</span>
        </div>
        <div className="hidden sm:inline text-white/30">•</div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#7b39fc]" />
          <span>Guaranteed best rate & verified hosts</span>
        </div>
        <div className="hidden sm:inline text-white/30">•</div>
        <div className="flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-purple-300" />
          <span>Instant booking confirmation</span>
        </div>
      </div>
    </section>
  );
};
