import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Верхняя часть с призывом к действию */}
      <section className="py-24 md:py-32 text-center px-6 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-none uppercase">
          <span className="text-[#45CC82]">Ускорьте</span> рост<br />
          вашего бренда
        </h2>
        <Link
          to="/contact"
          className="inline-block text-lg font-bold tracking-widest uppercase border-b-2 border-white pb-1 hover:text-[#45CC82] hover:border-[#45CC82] transition-colors"
        >
          Связаться с нами
        </Link>
      </section>

      {/* Основная часть футера с навигацией */}
      <div className="max-w-[1440px] mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-16 text-sm">
          
          {/* Логотип и слоган */}
          <div className="col-span-2 md:col-span-1 mb-8 md:mb-0">
             <Link to="/" className="text-2xl font-bold tracking-widest block mb-1">
               PULSE MEDIA
             </Link>
             <span className="text-[10px] uppercase tracking-wider block text-gray-400">
               В ритме города
             </span>
          </div>

          {/* Компания */}
          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-2">Компания</h5>
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Главная</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">О нас</Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Сотрудничество</Link>
            <Link to="/work" className="text-gray-300 hover:text-white transition-colors">Проекты</Link>
            <Link to="/insights" className="text-gray-300 hover:text-white transition-colors">Блог</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Контакты</Link>
          </div>

          {/* Социальные сети */}
          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-2">Соцсети</h5>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group">
              Instagram
              <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group">
              Facebook
              <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group">
              LinkedIn
              <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Карьера */}
          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-2">Карьера</h5>
            <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group">
              Открытые вакансии
              <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Юридическая информация */}
          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-2">Правовая информация</h5>
            <Link to="/legal/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="/legal/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">Пользовательское соглашение</Link>
            <Link to="/legal/cookie-policy" className="text-gray-300 hover:text-white transition-colors">Использование Cookie</Link>
          </div>

        </div>

        {/* Копирайт */}
        <div className="flex justify-between items-center border-t border-white/10 pt-8 text-xs text-gray-500">
           <span>© 2026 PULSE MEDIA. Все права защищены.</span>
        </div>
      </div>
    </footer>
  );
};