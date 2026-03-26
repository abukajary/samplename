import { Link } from 'react-router-dom';
import billboardImg from '../assets/billboard-placeholder.jpg';
import allur_logo from '../assets/allur_logo.png'
import coca_cola_logo from '../assets/coca_cola_logo.png'
import pepsi_logo from '../assets/pepsi_logo.png'
import green_apple_logo from '../assets/green_apple_logo.jpg'
import galmart_logo from '../assets/galmart_logo.webp'
import esentai_logo from '../assets/esentai_logo.jpg'
import merc_logo from '../assets/merc_logo.png'
import forte_logo from '../assets/forte_logo.png'
import beeline_logo from '../assets/Beeline_logo.jpg'
import kcell_logo from '../assets/Kcell_wordmark.svg'
import lv_logo from '../assets/lv_logo.png'

type ServiceLink = {
  label: string;
  url: string;
};

type ServiceItem = {
  title: string;
  subtitle?: string;
  description: string;
  links?: ServiceLink[]; 
};

// 5 основных пунктов
const servicesData: ServiceItem[] = [
  {
    title: 'Почему нас выбирают',
    subtitle: '12 лет опыта на рынке',
    description: 'Pulse Media работает на рынке медиаразмещения более 12 лет и реализовала сотни рекламных кампаний для различных отраслей бизнеса.'
  },
  {
    title: 'Широкая сеть площадок',
    description: 'Мы сотрудничаем с крупнейшими операторами наружной рекламы, digital платформами и медиа площадками, что позволяет нам обеспечивать максимальное покрытие аудитории.',
  },
  {
    title: 'Экспертиза (OOH & DOOH)',
    description: 'Pulse Media специализируется на интеграции наружной рекламы (OOH / DOOH) и digital каналов, создавая комплексные рекламные кампании.',
  },
  {
    title: 'Прозрачность и аналитика',
    description: 'Мы предоставляем клиентам подробную отчетность, аналитику и данные по эффективности рекламных кампаний.',
  },
  {
    title: 'Индивидуальный подход',
    description: 'Каждый проект разрабатывается с учетом целей бизнеса, особенностей аудитории и бюджета клиента.',
  }
];

// Заглушки для логотипов брендов
const partnersLogos = [
  { name: 'Аллюр', url: allur_logo },
  { name: 'Доскар', url: '' },
  { name: 'Кока-кола', url: coca_cola_logo },
  { name: 'Пепси', url: pepsi_logo },
  { name: 'Зеленое яблоко', url: green_apple_logo },
  { name: 'Галмарт', url: galmart_logo },
  { name: 'Есентай', url: esentai_logo },
  { name: 'Мерседес', url: merc_logo },
  { name: 'Форте', url: forte_logo },
  { name: 'Билайн', url: beeline_logo },
  { name: 'KCELL', url: kcell_logo },
  { name: 'Louis Vuitton', url: lv_logo },
];

export const ServicesList = () => {
  return (
    <section className="bg-white text-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Блок 1: Список преимуществ */}
        {servicesData.map((service, idx) => (
          <div 
            key={idx} 
            className="grid md:grid-cols-12 gap-8 md:gap-16 py-12 md:py-16 border-b border-[#0a0a0a]/20 last:border-b-0"
          >
            <div className="md:col-span-5 lg:col-span-4">
              <h2 className="text-[#45CC82] text-3xl md:text-4xl font-bold tracking-tight uppercase">
                {service.title}
              </h2>
            </div>

            <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6">
              {service.subtitle && (
                <p className="text-xl font-bold text-[#0a0a0a] uppercase tracking-widest">
                  {service.subtitle}
                </p>
              )}
              
              <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-3xl">
                {service.description}
              </p>

              {service.links && service.links.length > 0 && (
                <div className="flex flex-col items-start gap-4 mt-4">
                  {service.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      to={link.url}
                      className="inline-block text-sm md:text-base font-bold uppercase tracking-widest border-b-2 border-[#0a0a0a] pb-1 hover:text-[#45CC82] hover:border-[#45CC82] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Блок 2: Нам доверяют (Партнеры) */}
        <div className="mt-16 md:mt-24 pt-16 md:pt-24 border-t border-[#0a0a0a]">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
            
            <div className="lg:col-span-5">
              <h2 className="text-[#45CC82] text-3xl md:text-4xl font-bold tracking-tight uppercase mb-8">
                Нам доверяют
              </h2>
              
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-gray-200">
                <img 
                  src={billboardImg}
                  alt="City Billboard Placeholder" 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <p className="text-gray-800 text-base md:text-lg leading-relaxed mt-8 mb-6">
                Мы гордимся сотрудничеством с ведущими локальными и международными брендами, обеспечивая им лучшее размещение.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 h-full content-start">
                {partnersLogos.map((logo, idx) => (
                  <div 
                    key={idx} 
                    className="aspect-video flex items-center justify-center border border-gray-200 p-4 bg-gray-50 hover:bg-white hover:border-[#45CC82] transition-all duration-300 group"
                  >
                    {/* ВОТ ТУТ ГЛАВНОЕ ИЗМЕНЕНИЕ: Проверяем, есть ли url */}
                    {logo.url ? (
                      <img 
                        src={logo.url} 
                        alt={logo.name} 
                        className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    ) : (
                      <span className="font-bold text-gray-400 text-center uppercase text-xs tracking-widest group-hover:text-[#45CC82] transition-colors">
                        {logo.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};