import heroImage from '../assets/hero1.jpg';

export const Hero = () => {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-16 md:mb-24 leading-tight">
          WE ARE BUILT TO <br />
          <span className="text-[#26D68C]">ACCELERATE CHANGE</span> THAT<br />
          SHAPES THE FUTURE
        </h1>

        <div className="flex flex-col gap-12 md:gap-16">
          <div>
            <img
              src={heroImage}
              alt="About us hero image"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          <div className="grid md:grid-cols-2">
            <div></div>
            <div className="max-w-[700px] text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                At iProspect, we offer a comprehensive suite of services designed to
                drive impactful growth. Our expertise spans personalized storytelling,
                dynamic creative optimization, full-funnel experience design, and
                advanced real-time measurement.
              </p>
              <p>
                By leveraging cutting-edge technology and deep data insights, we
                ensure your brand resonates with audiences across all touchpoints. Our
                approach integrates creativity with performance, empowering you to
                connect meaningfully, engage authentically, and achieve sustained
                business success in a multi-platform world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};