import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

const servicesData = [
  {
    title: 'Real World Experience Design',
    description: 'In today’s algorithm-driven world, every moment is a chance to connect, shop, share, or belong. Our digital marketing services create seamless cross-platform ecosystems that blend media, content, and commerce. Powered by 8,000+ media specialists, we test, refine, and scale ideas in real time to meet people where they are and move with them wherever they go.',
    links: [
      { label: 'Performance Marketing Services: Transforming Businesses', url: '/services/performance-marketing/' }
    ]
  },
  {
    title: 'Business Transformation',
    description: 'We go beyond optimizing media, we rewire growth. In our most transformative partnerships, we’re not seen as a media agency, but as architects of progress. Our vision is to transform the way media is transacted through transparency, addressability and automation across all media channels.',
    links: [
      { label: 'Digital Strategy Services', url: '/services/digital-strategy/' }
    ]
  },
  {
    title: 'Digital Marketing Hyper-Specialists',
    description: 'Brands need more than generalists - they need precision, orchestration, and the power of human ingenuity combined with artificial intelligence. We bring together deep expertise across all major digital marketing channels, to create a single, adaptive system that delivers measurable growth. Our channel specialisms include:',
    links: [
      { label: 'Search Engine Optimization Services (SEO)', url: '/services/seo/' },
      { label: 'Paid Search (PPC) Services', url: '/services/paid-search/' },
      { label: 'Programmatic Advertising Services', url: '/services/programmatic-advertising-services/' },
      { label: 'Retail Media Advertising', url: '/services/retail-media-advertising/' },
      { label: 'Paid Social Services', url: '/services/paid-social-services/' },
      { label: 'Video Advertising Services', url: '/services/video-advertising-services/' },
      { label: 'Digital OOH Advertising', url: '/services/digital-ooh-advertising/' },
      { label: 'Affiliate Marketing & Agile Measurement Solutions', url: '/services/affiliate-marketing/' }
    ]
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
            Services
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight uppercase leading-none max-w-4xl">
            Global digital marketing
          </h2>
        </div>

        <div className="border-t border-[#0a0a0a]">
          {servicesData.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-[#0a0a0a] overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group"
                >
                  <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#45CC82]' : 'text-[#0a0a0a] group-hover:text-gray-600'}`}>
                    {service.title}
                  </h3>
                  <div className={`transition-colors duration-300 ${isOpen ? 'text-[#45CC82]' : 'text-[#0a0a0a]'}`}>
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

        <div className="mt-16 md:mt-24 flex justify-center">
          <Link 
            to="/services"
            className="inline-block text-lg md:text-xl font-bold border-b-2 border-[#0a0a0a] pb-1 hover:text-[#45CC82] hover:border-[#45CC82] transition-colors"
          >
            View all
          </Link>
        </div>

      </div>
    </section>
  );
};