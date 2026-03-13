const awardsData = [
  { org: 'RECMA', title: 'Highest-Growth Media Network Globally', year: '2024' },
  { org: 'Digital Cinema Media Awards', title: 'Best Long-term Use of Cinema, iProspect UK x IKEA', year: '2023' },
  { org: 'Advertising Week Africa', title: 'Future is Female Awards, iProspect Kenya', year: '2023' },
  { org: 'Effie Awards Latin America', title: 'Influencer, iProspect Brazil x FYS', year: '2023' },
  { org: 'MediaPost', title: 'Search/Performance Agency of the Year, iProspect USA', year: '2023' },
];

export const Awards = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-[#45CC82] font-bold text-xs tracking-[0.2em] uppercase mb-8">
          Awards
        </h2>

        <div className="border-t border-white/20">
          {awardsData.map((award, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-white/20 items-center text-sm md:text-base"
            >
              <div className="md:col-span-4 font-bold">
                {award.org}
              </div>
              <div className="md:col-span-7 text-[#45CC82]">
                {award.title}
              </div>
              <div className="md:col-span-1 font-bold md:text-right">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};