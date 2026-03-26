import { ChevronDown } from 'lucide-react';
import homeHeroImg from '../assets/tokyo.jpg';

export const HomeHero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full text-white overflow-hidden bg-black">
      
      {/* СЛОЙ 1: Размытый фон (видно только на десктопе по бокам) */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
        <img 
          src={homeHeroImg} 
          alt="Hero background blur" 
          className="w-full h-full object-cover scale-110 blur-3xl opacity-50" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* СЛОЙ 2: Основная картинка */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <img 
          src={homeHeroImg} 
          alt="Pulse Media" 
          className="w-full h-full object-cover " 
        />
        {/* Затемнение для мобилок, чтобы текст читался поверх фото */}
        <div className="absolute inset-0 bg-black/40 md:hidden z-10"></div>
      </div>

      {/* --- ТЕКСТОВЫЙ КОНТЕНТ --- */}
      <div className="absolute bottom-12 left-0 w-full z-20">
        
        {/* Десктопная версия (раскидано по углам) */}
        <div className="hidden md:flex max-w-[1440px] mx-auto px-6 items-end justify-between">
          <div className="flex-1 pb-1">
            <p className="text-[11px] font-semibold leading-none tracking-wide text-white/90 uppercase">
              Pulse media
            </p>
          </div>

          <div className="flex-none text-center">
            <h1 className="text-[#45CC82] text-[16px] font-bold leading-none uppercase mx-auto text-balance">
              В ритме города. Создаем охват
            </h1>
          </div>

          <div className="flex-1 flex justify-end">
            <button 
              onClick={handleScroll}
              className="flex items-center gap-1.5 text-[11px] font-semibold leading-none hover:text-[#45CC82] transition-colors cursor-pointer text-white/90 uppercase"
            >
              <span>Вниз</span>
              <ChevronDown size={14} className="mt-0.5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Мобильная версия (всё по центру в столбик) */}
        <div className="flex flex-col items-center justify-center gap-4 md:hidden px-6 text-center">
          <h1 className="text-[#45CC82] text-[15px] font-bold leading-none uppercase text-balance">
            В ритме города. Создаем охват
          </h1>
          
          <p className="text-[10px] font-semibold tracking-widest text-white/70 uppercase">
            Pulse media
          </p>

          <button 
            onClick={handleScroll}
            className="flex flex-col items-center gap-1 mt-2 text-[10px] font-semibold tracking-widest hover:text-[#45CC82] transition-colors cursor-pointer text-white/90 uppercase"
          >
            <span>Вниз</span>
            <ChevronDown size={14} strokeWidth={2.5} />
          </button>
        </div>

      </div>
      
    </section>
  );
};