import { Link } from 'react-router-dom';

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

// Тексты взяты прямо из твоего ТЗ
const servicesData: ServiceItem[] = [
  {
    title: 'Почему нас выбирают',
    subtitle: '12 лет опыта на рынке',
    description: 'Pulse Media работает на рынке медиаразмещения более 12 лет и реализовала сотни рекламных кампаний для различных отраслей бизнеса.',
    links: [
      { label: 'Смотреть наши кейсы', url: '/work' }
    ]
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
  },
  {
    title: 'Нам доверяют',
    description: 'Аллюр, Доскар, Кока-кола, Пепси, Зеленое яблоко, Галмарт, Есентай, Мерседес бенц, Форте, Билайн, KCELL, Louis Vuitton, Celine, Givenchy, Loewe, Hennessy, Kenzo Parfums, TAG Heuer, Hublot и другие.',
    links: [
      { label: 'Связаться с нами', url: '/contact' }
    ]
  }
];

export const ServicesList = () => {
  return (
    <section className="bg-white text-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {servicesData.map((service, idx) => (
          <div 
            key={idx} 
            className="grid md:grid-cols-12 gap-8 md:gap-16 py-12 md:py-16 border-b border-[#0a0a0a]/20 last:border-b-0"
          >
            {/* Левая колонка - Заголовок */}
            <div className="md:col-span-5 lg:col-span-4">
              <h2 className="text-[#45CC82] text-3xl md:text-4xl font-bold tracking-tight uppercase">
                {service.title}
              </h2>
            </div>

            {/* Правая колонка - Описание и ссылки */}
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

      </div>
    </section>
  );
};