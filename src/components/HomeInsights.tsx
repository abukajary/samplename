import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const insights = [
  { tag: 'News', title: 'Nine Shortlists for iProspect UK at the Campaign Media Awards 2026', url: '/insights/1' },
  { tag: 'Blog', title: 'Why Unified Media Is the Foundation of Search Experience Optimization in 2026', url: '/insights/2' },
  { tag: 'Blog', title: 'CMOs turn to Contextual Signals to Maximize the Impact of Their AI and Influencer Investments', url: '/insights/3' }
];

export const HomeInsights = () => {
  return (
    <section className="bg-white text-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="mb-16">
          <span className="text-[#45CC82] font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase block mb-4">
            Our insights
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight uppercase leading-none">
            Leading with thought
          </h2>
        </div>

        <div className="border-t border-[#0a0a0a]">
          {insights.map((insight, idx) => (
            <Link 
              key={idx} 
              to={insight.url} 
              className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 py-8 border-b border-[#0a0a0a] hover:bg-gray-50 transition-colors"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
              </div>

              <div className="flex-grow">
                <span className="inline-block border border-[#0a0a0a] text-[#0a0a0a] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  {insight.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-bold leading-snug group-hover:text-[#45CC82] transition-colors pr-12">
                  {insight.title}
                </h3>
              </div>

              <div className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center">
                <ArrowRight size={24} className="text-[#0a0a0a] group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link 
            to="/insights"
            className="inline-block text-lg font-bold border-b-2 border-[#0a0a0a] pb-1 hover:text-[#45CC82] hover:border-[#45CC82] transition-colors"
          >
            View all
          </Link>
        </div>

      </div>
    </section>
  );
};