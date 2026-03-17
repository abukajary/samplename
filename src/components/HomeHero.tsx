import { ChevronDown } from 'lucide-react';
// Предположим, вы переименовали файл вassets, чтобы было понятно, что он вертикальный
import homeHeroImg from '../assets/home-hero-portrait.jpg'; 

export const HomeHero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full text-white overflow-hidden bg-black">
      
      {/* --- БЛОК ФОНА С БЛЮРОМ --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Это изображение растянуто и сильно размыто */}
        <img 
          src={homeHeroImg} 
          alt="Hero background blur" 
          className="w-full h-full object-cover scale-110 blur-3xl opacity-50" 
        />
        {/* Дополнительный темный оверлей для читаемости текста */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* --- БЛОК ЧЕТКОГО ИЗОБРАЖЕНИЯ ПО ЦЕНТРУ --- */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {/* Это изображение не обрезается (object-contain) и стоит по центру */}
        <img 
          src={homeHeroImg} 
          alt="Pulse Media" 
          className="h-full w-auto object-contain" 
        />
      </div>

      {/* --- ТЕКСТОВЫЙ КОНТЕНТ (ПОВЕРХ ВСЕГО) --- */}
      {/* Убедимся, что z-index выше, чем у центрального фото */}
      <div className="absolute bottom-12 left-0 w-full z-20">
        <div className="max-w-[1440px] mx-auto px-6 flex items-end justify-between">
          
          <div className="flex-1 pb-1 hidden md:block">
            <p className="text-[11px] font-semibold leading-none tracking-wide text-white/90 uppercase">
              Pulse media
            </p>
          </div>

          <div className="flex-none text-center">
            <h1 className="text-[#45CC82] text-[16px] font-bold leading-none uppercase mx-auto text-balance bg-black/20 py-1 px-2 rounded-sm backdrop-blur-sm md:bg-transparent md:p-0 md:backdrop-blur-none">
              В ритме города. Создаем охват
            </h1>
          </div>

          <div className="flex-1 flex justify-end">
            <button 
              onClick={handleScroll}
              className="flex items-center gap-1.5 text-[11px] font-semibold leading-none hover:text-[#45CC82] transition-colors cursor-pointer text-white/90"
            >
              <span>Вниз</span>
              <ChevronDown size={14} className="mt-0.5" strokeWidth={2.5} />
            </button>
          </div>

        </div>

        <div className="block md:hidden max-w-[1440px] mx-auto px-6 mt-6">
           <p className="text-[11px] font-semibold leading-none tracking-wide text-white/70 text-center uppercase">
              Pulse media
            </p>
        </div>
      </div>
      
    </section>
  );
};