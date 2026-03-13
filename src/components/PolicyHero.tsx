type PolicyHeroProps = {
  title: string;
  lastUpdate: string;
};

export const PolicyHero = ({ title, lastUpdate }: PolicyHeroProps) => {
  return (
    <section className="bg-[#0a0a0a] text-white pt-32 pb-20 md:pt-48 md:pb-32 border-b border-white/20">
      <div className="max-w-[800px] mx-auto px-6">
        <p className="text-[#45CC82] font-bold text-xs tracking-[0.2em] uppercase mb-6">
          Last update: {lastUpdate}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {title}
        </h1>
      </div>
    </section>
  );
};