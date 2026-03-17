import heroImage2 from '../assets/hero2.jpg';

export const ServicesHero = () => {
  return (
    <section className="relative h-[80vh] h-screen flex items-center text-white">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage2}
          alt="Pulse Media Partnership"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight uppercase">
            <span className="text-[#45CC82]">Стратегическое</span><br />
            Партнерство
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
            Мы строим долгосрочные и взаимовыгодные отношения с брендами. Объединяя наружную рекламу, digital-каналы и аналитику, Pulse Media обеспечивает максимальную видимость вашего бизнеса в ключевых городах Казахстана.
          </p>
        </div>
      </div>
    </section>
  );
};