const statsData = [
  { title: 'Лет на рынке', value: '12' },
  { title: 'Рекламных кампаний', value: '1000+' },
  { title: 'Крупных клиентов', value: '50+' },
  { title: 'Довольных клиентов', value: '100%' },
];

export const Stats = () => {
  return (
    <section className="bg-white text-[#0a0a0a]">
      <div className="max-w-[1440px] mx-auto px-6 pt-24 pb-12">
        <span className="text-[#45CC82] font-bold text-xs tracking-[0.2em] uppercase block mb-4">
          В цифрах
        </span>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
          Фокус на результат
        </h2>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#45CC82] p-6 h-48 md:h-72 flex flex-col justify-between"
            >
              <p className="text-[#0a0a0a] font-bold text-sm uppercase">
                {stat.title}
              </p>
              <p className="text-white text-4xl md:text-6xl font-bold self-end tracking-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};