import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ArticleHero = ({ article }: { article: any }) => {
  return (
    <section className="bg-[#0a0a0a] text-white pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="max-w-4xl">
          
          <Link to="/insights" className="group inline-flex items-center gap-4 mb-12 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
              <ArrowLeft size={18} />
            </div>
            <span className="text-[#45CC82] font-bold text-xs tracking-[0.2em] uppercase">
              Back to insights
            </span>
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-10 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-6 mb-8 text-sm">
            <span className="inline-block bg-white text-[#0a0a0a] font-bold uppercase tracking-widest px-3 py-1">
              {article.tag}
            </span>
            <span className="text-gray-400 font-medium">
              {article.date}
            </span>
          </div>
          
          <span className="text-gray-300 text-lg md:text-xl font-light">
            {article.author}
          </span>
          
        </div>
      </div>
    </section>
  );
};