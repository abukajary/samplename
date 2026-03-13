import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectHero = ({ project }: { project: any }) => {
  return (
    <section className="bg-[#0a0a0a] text-white pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="max-w-4xl">
          
          <Link to="/work" className="group inline-flex items-center gap-4 mb-12 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
              <ArrowLeft size={18} />
            </div>
            <span className="text-[#45CC82] font-bold text-xs tracking-[0.2em] uppercase">
              Back to work
            </span>
          </Link>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight uppercase">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            {project.subtitle}
          </p>
          
        </div>
      </div>
    </section>
  );
};