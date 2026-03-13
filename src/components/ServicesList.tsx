import { Link } from 'react-router-dom'; // Так как мы юзаем роутер, правильнее использовать Link

type ServiceLink = {
  label: string;
  url: string;
};

type ServiceItem = {
  title: string;
  description: string;
  links?: ServiceLink[]; 
};

const servicesData: ServiceItem[] = [
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

export const ServicesList = () => {
  return (
    <section className="bg-white text-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {servicesData.map((service, idx) => (
          <div 
            key={idx} 
            className="grid md:grid-cols-12 gap-8 md:gap-16 py-12 md:py-16 border-b border-[#0a0a0a]/20 last:border-b-0"
          >
            <div className="md:col-span-5 lg:col-span-4">
              <h2 className="text-[#45CC82] text-3xl md:text-4xl font-bold tracking-tight">
                {service.title}
              </h2>
            </div>

            <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-8">
              <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-3xl">
                {service.description}
              </p>

              {service.links && service.links.length > 0 && (
                <div className="flex flex-col items-start gap-4">
                  {service.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      to={link.url}
                      className="inline-block text-sm md:text-base font-bold border-b-2 border-[#0a0a0a] pb-1 hover:text-[#45CC82] hover:border-[#45CC82] transition-colors"
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