import heroImage from '../assets/hero1.jpg';

export const Hero = () => {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-16 md:mb-24 leading-tight uppercase">
          МЫ СОЗДАЕМ <br />
          <span className="text-[#45CC82]">СТРАТЕГИЧЕСКИЕ РЕШЕНИЯ</span> ДЛЯ<br />
          РОСТА БИЗНЕСА
        </h1>

        <div className="flex flex-col gap-12 md:gap-16">
          <div>
            <img
              src={heroImage}
              alt="Pulse Media team"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          <div className="grid md:grid-cols-2">
            <div></div>
            <div className="max-w-[700px] text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                Pulse Media стремится помогать брендам эффективно взаимодействовать со своей аудиторией через стратегические медиа решения. Мы объединяем наружную рекламу, цифровые каналы и другие медиа платформы, создавая интегрированные кампании, которые обеспечивают максимальный охват, видимость и измеримый результат.
              </p>
              <p>
                Наша миссия — делать рекламу более точной, заметной и эффективной, помогая бизнесу расти в условиях современной городской медиасреды.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};