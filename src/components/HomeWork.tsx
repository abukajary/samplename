import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'GIVING GAMERS THE POWER TO SKIP A SHOWER',
    category: 'FMCG',
    year: '2024',
    url: '/work/1',
    image: '',
    logo: ''
  },
  {
    title: 'FULL FUNNEL SEO STRATEGY DRIVES INCREMENTAL TRAFFIC',
    category: 'REAL-ESTATE',
    year: '2024',
    url: '/work/2',
    image: '',
    logo: ''
  },
  {
    title: 'THE TIKTOK YOU STAY IN',
    category: 'Travel',
    year: '2024',
    url: '/work/3',
    image: '',
    logo: ''
  },
  {
    title: 'A REFRESHING DETOUR',
    category: 'FMCG',
    year: '2024',
    url: '/work/4',
    image: '',
    logo: ''
  }
];

export const HomeWork = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <span className="text-[#45CC82] font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase mb-6">
            Our work
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight uppercase mb-10 leading-none">
            Advancing brands
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[480px]">
            At iProspect, we accelerate growth that shapes the future. By blending creativity with data-driven insights, we craft bold, personalized stories that resonate across all platforms, transforming fleeting moments into lasting engagement.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16 md:gap-24 mb-24">
          {projects.map((project, idx) => (
            <Link 
              key={idx} 
              to={project.url} 
              className="group block cursor-pointer w-full max-w-[800px]"
            >
              <figure>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1a1a1a]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                    <img 
                      src={project.logo} 
                      alt="brand logo" 
                      className="h-6 md:h-8 mb-4 object-contain brightness-0 invert"
                      loading="lazy"
                    />
                    <h3 className="text-white text-xl md:text-3xl font-bold uppercase tracking-tight leading-snug max-w-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <figcaption className="flex justify-between items-center py-4 mt-2 border-t border-white/20 font-bold text-[10px] md:text-xs uppercase tracking-widest text-white">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/work"
            className="inline-block text-lg md:text-xl font-bold border-b-2 border-white pb-1 hover:text-[#45CC82] hover:border-[#45CC82] transition-colors"
          >
            View all
          </Link>
        </div>

      </div>
    </section>
  );
};