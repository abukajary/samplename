import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      <section className="py-24 md:py-32 text-center px-6">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          <span className="text-[#45CC82]">ACCELERATE</span> YOUR<br />
          BRANDS GROWTH.
        </h2>
        <a
          href="/contact"
          className="inline-block text-lg font-medium border-b border-white pb-1 hover:text-[#45CC82] hover:border-[#45CC82] transition-colors"
        >
          Start the conversation
        </a>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-16 text-sm">
          
          <div className="col-span-2 md:col-span-1 mb-8 md:mb-0">
             <a href="/" className="text-2xl font-bold tracking-widest block mb-1">
                SAMPLEnAME
             </a>
             <span className="text-[10px] uppercase tracking-wider block text-gray-400">
               Brands Accelerated
             </span>
          </div>

          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-xs uppercase tracking-wider mb-2">Company</h5>
            <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="/work" className="text-gray-400 hover:text-white transition-colors">Work</a>
            <a href="/insights" className="text-gray-400 hover:text-white transition-colors">Thoughts & Views</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Get in touch</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-xs uppercase tracking-wider mb-2">Careers</h5>
            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
              Open worldwide roles
              <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-xs uppercase tracking-wider mb-2">Socials</h5>
            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
              Facebook
              <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
              Linkedin
              <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-xs uppercase tracking-wider mb-2">Legal</h5>
            <Link to="/legal/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy policy</Link>
            <Link to="/legal/modern-slavery-act" className="text-gray-400 hover:text-white transition-colors">Modern Slavery Act</Link>
            <Link to="/legal/accessibility" className="text-gray-400 hover:text-white transition-colors">Accessibility</Link>
            <Link to="/legal/interest-based-advertising-notice" className="text-gray-400 hover:text-white transition-colors">Interest-based advertising notice</Link>
            <Link to="/legal/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/legal/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms and conditions</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 text-xs text-gray-400">
           <div>
             <span className="block mb-1 text-white text-sm">a somename company</span>
             <span>© 2026 SAMPLEnAME?. All rights reserved.</span>
           </div>
        </div>
      </div>
    </footer>
  );
};