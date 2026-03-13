import { ChevronDown } from 'lucide-react';
import homeHeroImg from '../assets/home-hero.webp';

export const HomeHero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={homeHeroImg} 
          alt="Hero background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="absolute bottom-12 left-0 w-full z-10">
        <div className="max-w-[1440px] mx-auto px-6 flex items-end justify-between">
          
          <div className="flex-1 pb-1 hidden md:block">
            <p className="text-[11px] font-semibold leading-none tracking-wide text-white">
              Brands Accelerated
            </p>
          </div>

          <div className="flex-none text-center">
            <h1 className="text-[#45CC82] text-[16px] font-bold leading-none uppercase max-w-[230px] mx-auto text-balance">
              Defining a new era of brand building
            </h1>
          </div>

          <div className="flex-1 flex justify-end">
            <button 
              onClick={handleScroll}
              className="flex items-center gap-1.5 text-[11px] font-semibold leading-none hover:text-[#45CC82] transition-colors cursor-pointer"
            >
              <span>Scroll</span>
              <ChevronDown size={14} className="mt-0.5" strokeWidth={2.5} />
            </button>
          </div>

        </div>

        <div className="block md:hidden max-w-[1440px] mx-auto px-6 mt-6">
           <p className="text-[11px] font-semibold leading-none tracking-wide text-white/70 text-center">
              Brands Accelerated
            </p>
        </div>
      </div>
      
    </section>
  );
};