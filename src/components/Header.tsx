import { useState, useEffect } from 'react';
import { Globe, ArrowRight, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type Language = { label: string; active?: boolean; };
type Market = { name: string; langs: Language[]; };

const markets: Market[] = [
  { name: 'Global', langs: [{ label: 'English', active: true }] },
  { name: 'Canada', langs: [{ label: 'English' }, { label: 'French' }] },
  { name: 'Denmark', langs: [{ label: 'English' }] },
  { name: 'Germany', langs: [{ label: 'German' }] },
  { name: 'Latin America', langs: [{ label: 'Spanish' }] },
  { name: 'Spain', langs: [{ label: 'Spanish' }, { label: 'English' }] },
  { name: 'United Kingdom', langs: [{ label: 'English' }] },
  { name: 'United States', langs: [{ label: 'English' }] },
];

export const Header = ({ transparentAtTop = false }: { transparentAtTop?: boolean }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 10);
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
  }, [isSidebarOpen]);

  const bgClass = transparentAtTop && isAtTop && !isSidebarOpen 
    ? 'bg-transparent' 
    : 'bg-[#0a0a0a]';

  const isActive = (path: string) => {
    if (location.pathname === '/') return true;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[60] text-white transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${bgClass}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between border-b border-white/20">
          <Link to="/" className="text-2xl font-bold tracking-widest relative z-[70]">
            SAMPLEnAME
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative z-[70]">
            <Link 
              to="/about" 
              className={`transition-colors hover:text-gray-400 ${isActive('/about') ? 'text-gray-400' : 'text-white'}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors hover:text-gray-400 ${isActive('/services') ? 'text-gray-400' : 'text-white'}`}
            >
              Services
            </Link>
            <Link 
              to="/work" 
              className={`transition-colors hover:text-gray-400 ${isActive('/work') ? 'text-gray-400' : 'text-white'}`}
            >
              Work
            </Link>
            <Link 
              to="/insights" 
              className={`transition-colors hover:text-gray-400 ${isActive('/insights') ? 'text-gray-400' : 'text-white'}`}
            >
              Thoughts & Views
            </Link>
          </nav>

          <div className="flex items-center gap-6 text-sm font-medium relative z-[70]">
            <button onClick={() => setIsSidebarOpen(true)} className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors cursor-pointer">
              <Globe size={18} />
              Global
            </button>
            <Link to="/contact" className={`flex items-center gap-2 transition-colors hover:text-gray-300 'text-white'}`}>
              Get in touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </header>

      <div 
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        data-lenis-prevent="true"
        className={`fixed top-0 right-0 h-[100dvh] w-full md:w-[400px] bg-white text-[#0a0a0a] z-[90] p-8 md:p-12 overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={() => setIsSidebarOpen(false)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
          <X size={24} />
        </button>

        <div className="mt-12 space-y-8">
          {markets.map((market, idx) => (
            <div key={idx} className="flex flex-col gap-1 cursor-pointer">
              <span className="font-bold text-lg">{market.name}</span>
              <div className="flex gap-4 text-sm">
                {market.langs.map((lang, langIdx) => (
                  <button key={langIdx} className={`cursor-pointer transition-colors ${lang.active ? 'text-[#45CC82]' : 'text-gray-500 hover:text-gray-900'}`}>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};