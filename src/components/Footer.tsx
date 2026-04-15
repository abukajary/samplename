import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
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

      <div className="max-w-[1440px] mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-t border-white/10 py-12">
          
          <div>
            <Link to="/" className="text-2xl font-bold tracking-widest block mb-2">
              PULSE MEDIA
            </Link>
            <span className="text-xs uppercase tracking-widest text-gray-500">
              В ритме города
            </span>
          </div>

          <nav className="flex flex-col md:flex-row gap-6 md:gap-8">
            <Link to="/" className="text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-[#45CC82] transition-colors">Главная</Link>
            <Link to="/about" className="text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-[#45CC82] transition-colors">О нас</Link>
            <Link to="/services" className="text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-[#45CC82] transition-colors">Сотрудничество</Link>
            <Link to="/contact" className="text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-[#45CC82] transition-colors">Контакты</Link>
          </nav>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-white/10 pt-8 text-xs text-gray-500">
          <p>Партнер DASM Group</p>
          <p>© 2026 PULSE MEDIA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
