import heroImage2 from '../assets/hero2.jpg';

export const ServicesHero = () => {
  return (
    <section className="relative h-[80vh] h-screen flex items-center text-white">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage2}
          alt="Services hero image"
          className="w-full h-full object-cover"
        />
        <div className="absolute"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight uppercase">
            <span className="text-[#45CC82]">Digital Marketing</span><br />
            Services
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            We are an agency of brand builders with a performance mindset. At iProspect, we combine deep channel specialism with integrated strategy to turn intent into action, data into decisions, and media into business momentum.
          </p>
        </div>
      </div>
    </section>
  );
};