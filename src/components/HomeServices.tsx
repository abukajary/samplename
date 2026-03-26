import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

const servicesData = [
  {
    title: '1.	Почему нас выбирают и нам доверяют',
    subtitle: '12 лет опыта на рынке',
    description: 'Pulse Media работает на рынке медиаразмещения более 12 лет и реализовала сотни рекламных кампаний для различных отраслей бизнеса',

  },
  {
    title: '2.	Широкая сеть медиа площадок',
    description: 'Мы сотрудничаем с крупнейшими операторами наружной рекламы, digital платформами и медиа площадками, что позволяет нам обеспечивать максимальное покрытие аудитории',
   
  },
  {
    title: '3.	Экспертиза в наружной и digital рекламе',
    description: 'Pulse Media специализируется на интеграции наружной рекламы (OOH / DOOH) и digital каналов, создавая комплексные рекламные кампании',
    
  },
  {
    title: '4.	Прозрачность и аналитика',
    description: 'Мы предоставляем клиентам подробную отчетность, аналитику и данные по эффективности рекламных кампаний',
    
  },
  {
    title: '5.	Индивидуальный подход',
    description: 'Каждый проект разрабатывается с учетом целей бизнеса, особенностей аудитории и бюджета клиента',
    
  }
];

export const HomeServices = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="mb-16 md:mb-24">
          <span className="text-[#45CC82] font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase block mb-4">
            ПАРТНЕРСТВО
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight uppercase leading-none max-w-4xl">
            Цифровой маркетинг
          </h2>
        </div>

        <div className="border-t border-[#0a0a0a]">
          {servicesData.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-[#0a0a0a] overflow-hidden "
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group cursor-pointer"
                >
                  <h3 className={`cursor-pointer text-xl md:text-2xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#45CC82]' : 'text-[#0a0a0a] group-hover:text-gray-600'}`}>
                    {service.title}
                  </h3>
                  <div className={`cursor-pointer ransition-colors duration-300 ${isOpen ? 'text-[#45CC82]' : 'text-[#0a0a0a]'}`}>
                    {isOpen ? <X size={28} strokeWidth={1.5} /> : <Plus size={28} strokeWidth={1.5} />}
                  </div>
                </button>

                <div 
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="hidden md:block"></div>
                      
                      <div className="flex flex-col gap-8 pr-4">
                        <p className={`text-base md:text-2xl leading-relaxed ${service.subtitle ? 'block' : 'hidden'}`}>
                          {service.subtitle}
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {service.description}
                        </p>
                        
                        {service.links && (
                          <div className="flex flex-col items-start gap-4">
                            {service.links.map((link, linkIdx) => (
                              <Link
                                key={linkIdx}
                                to={link.url}
                                className="inline-block text-xs md:text-sm font-bold border-b-2 border-[#0a0a0a] pb-0.5 hover:text-[#45CC82] hover:border-[#45CC82] transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-24 flex justify-center hidden">
          <Link 
            to="/services"
            className="inline-block text-lg md:text-xl font-bold border-b-2 border-[#0a0a0a] pb-1 hover:text-[#45CC82] hover:border-[#45CC82] transition-colors"
          >
            Смотреть все
          </Link>
        </div>

      </div>
    </section>
  );
};