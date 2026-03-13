export const ContactHero = () => {
  return (
    <section className="bg-[#0a0a0a] text-white pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-16 md:mb-24 uppercase">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 border-t border-white/20 pt-12">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-[#45CC82] font-bold text-xs tracking-[0.2em] uppercase">
              General inquiries
            </h3>
            <a 
              href="mailto:hello@iprospect.com" 
              className="text-2xl md:text-4xl font-light hover:text-[#45CC82] transition-colors"
            >
              hello@iprospect.com
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[#45CC82] font-bold text-xs tracking-[0.2em] uppercase">
              Press contact
            </h3>
            <a 
              href="mailto:hello@iprospect.com" 
              className="text-2xl md:text-4xl font-light hover:text-[#45CC82] transition-colors"
            >
              hello@iprospect.com
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};