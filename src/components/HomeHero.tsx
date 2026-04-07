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

      {/* СЛОЙ 1: Размытый фон */}
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
        {/* Более сильное затемнение по всему экрану, чтобы белый текст читался */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* --- ЦЕНТРАЛЬНЫЙ ТЕКСТ (КРУПНЫЙ СЛОГАН) --- */}
      <div className="max-w-[1440px] mx-auto absolute inset-0 z-20 flex flex-col justify-center px-6 py-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none uppercase text-white drop-shadow-lg">
          В ритме города.<br />
          Создаем охват
        </h1>
        <p className="hidden md:flex text-3xl md:text-5xl lg:text-6xl font-semibold leading-none tracking-wide text-white uppercase pt-20">
          Pulse media
        </p>
      </div>

      {/* --- НИЖНЯЯ НАВИГАЦИЯ --- */}
      <div className="absolute bottom-12 left-0 w-full z-20">

        {/* Десктопная версия (по краям) */}
        <div className="hidden md:flex max-w-[1440px] mx-auto px-6 items-end justify-between">
          <div className="flex-1 pb-1">
            <p className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-wide text-white/90 uppercase">

            </p>
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

        {/* Мобильная версия (по центру) */}
        <div className="flex flex-col items-center justify-center gap-4 md:hidden px-6 text-center">
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