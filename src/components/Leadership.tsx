import myImage from '../assets/myself.jpg';

export const Leadership = () => {
  return (
    <section className="bg-white text-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        <span className="text-[#45CC82] font-bold text-xs tracking-[0.2em] uppercase block mb-4">
          Leadership
        </span>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12">
          Guiding the Vision
        </h2>

        <div className="border-t border-[#0a0a0a] py-12 md:py-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-4 lg:col-span-3">
              <img
                src={myImage}
                alt="Leadership Profile"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="md:col-span-8 lg:col-span-9">
              <h3 className="text-2xl md:text-3xl font-bold mb-1">
                Abubakir Jarylgap
              </h3>
              <span className="text-[#45CC82] font-bold text-sm block mb-6">
                Risk Manager, Almaty
              </span>

              <div className="text-gray-800 space-y-6 text-sm md:text-base leading-relaxed max-w-4xl">
                <p>
                  Amanda Morrissey is responsible for the iProspect agency and brand globally and works closely with leadership and teams in over 90 markets to deliver digital-first end to end media solutions for clients. Skilled at leading through change, Amanda has teamed with local markets and area specialists to build and launch a new global agency proposition, one which brings together the science of performance marketing and the art of brand building.
                </p>
                <p>
                  A champion for local nuance and culture, she has instilled a supportive and collaborative infrastructure of experts and teams across the globe, who work together at pace and at scale to accelerate both domestic and international client growth. Amanda re-launched iProspect as a new global agency in March 2021 with this new proposition, enhanced capabilities and a brand-new identity.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#0a0a0a]"></div>
      </div>
    </section>
  );
};