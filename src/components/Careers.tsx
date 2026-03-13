import { ArrowUpRight } from 'lucide-react';
import recruiterImg from '../assets/recruiter.jpg';

export const Careers = () => {
  return (
    <section className="relative py-24 md:py-32 flex items-center min-h-[1200px] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={recruiterImg} 
          alt="Careers background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full flex flex-col items-center text-center">
        <span className="text-[#45CC82] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
          Careers
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-16 uppercase max-w-4xl">
          KICKSTART YOUR CAREER WITH iPROSPECT
        </h2>

        <div className="w-full max-w-2xl border-t border-white/20">
          <a
            href="https://dentsuaegis.wd3.myworkdayjobs.com/en-US/DAN_GLOBAL/?source=iProspect"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/20 hover:bg-white/5 transition-colors px-4 -mx-4 md:px-8 md:-mx-8"
          >
            <div className="flex flex-col items-start gap-2 mb-4 md:mb-0 text-left">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                Open roles
              </span>
              <span className="text-2xl md:text-3xl font-bold group-hover:text-[#45CC82] transition-colors">
                Open worldwide roles
              </span>
            </div>
            
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:border-[#45CC82] group-hover:bg-[#45CC82] transition-colors shrink-0 self-start md:self-auto">
              <ArrowUpRight size={20} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};