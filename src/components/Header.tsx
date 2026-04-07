import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type Language = { label: string; active?: boolean; };
type Market = { name: string; langs: Language[]; };

const markets: Market[] = [
  { name: 'Русский', langs: [{ label: 'Русский язык', active: true }] },
  { name: 'Қазақша', langs: [{ label: 'Қазақ тілі' }]},
  { name: 'English', langs: [{ label: 'English' }] },
];

export const Header = ({ transparentAtTop = false }: { transparentAtTop?: boolean }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    document.body.style.overflow = (isSidebarOpen || isMobileMenuOpen) ? 'hidden' : 'auto';
  }, [isSidebarOpen, isMobileMenuOpen]);

  const bgClass = transparentAtTop && isAtTop && !isSidebarOpen && !isMobileMenuOpen 
    ? 'bg-transparent' 
    : 'bg-[#0a0a0a]';

  const isActive = (path: string) => {
    if (location.pathname === '/') return true;
    return location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[60] text-white transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${bgClass}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between border-b border-white/20">
          <div className="flex items-center gap-4 z-[70]">
            <button 
              className="md:hidden p-1 -ml-1 text-white cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="text-2xl font-bold tracking-widest relative uppercase" onClick={closeMobileMenu}>
              Pulse Media
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative z-[70]">
            <Link 
              to="/about" 
              className={`transition-colors hover:text-gray-300 text-white`}
            >
              О нас
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors hover:text-gray-300 text-white`}
            >
              Партнерство
            </Link> 
            <Link 
              to="/contact" 
              className={`transition-colors hover:text-gray-300 text-white`}
            >
              Контакты
            </Link> 
          </nav>

          <div className="flex items-center gap-4 md:gap-6 text-sm font-medium relative z-[70]">
            {/* Резерв под другие кнопки, если понадобятся */}
          </div>
        </div>
      </header>

      {/* --- МОБИЛЬНОЕ МЕНЮ --- */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a] text-white z-[80] transition-transform duration-500 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-20 px-6 flex items-center justify-between border-b border-white/20 shrink-0">
          {/* Логотип в мобильном меню теперь кликабельный и реагирует */}
          <Link to="/" onClick={closeMobileMenu} className="text-2xl font-bold tracking-widest uppercase">
            PULSE MEDIA
          </Link>
          <button onClick={closeMobileMenu} className="p-2 -mr-2 cursor-pointer">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-12 gap-8 text-3xl font-bold overflow-y-auto">
          <Link to="/about" onClick={closeMobileMenu} className={`transition-colors ${isActive('/about') ? 'text-[#45CC82]' : 'text-white'}`}>
            О нас
          </Link>
          <Link to="/services" onClick={closeMobileMenu} className={`transition-colors ${isActive('/services') ? 'text-[#45CC82]' : 'text-white'}`}>
            Партнерство
          </Link>
          {/* Контакты теперь выглядят абсолютно так же, как остальные пункты */}
          <Link to="/contact" onClick={closeMobileMenu} className={`transition-colors ${isActive('/contact') ? 'text-[#45CC82]' : 'text-white'}`}>
            Контакты
          </Link>
        </nav>
      </div>

      <div 
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] transition-opacity duration-300 hidden md:block ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* --- САЙДБАР ДЛЯ ЯЗЫКОВ (если используешь) --- */}
      <aside
        data-lenis-prevent="true"
        className={`fixed top-0 right-0 h-[100dvh] w-full md:w-[400px] bg-white text-[#0a0a0a] z-[90] p-8 md:p-12 overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end md:block">
          <button onClick={() => setIsSidebarOpen(false)} className="md:absolute md:top-6 md:right-6 p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <X size={24} />
          </button>
        </div>

        <div className="mt-8 md:mt-12 space-y-8">
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
