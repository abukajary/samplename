import { Link } from 'react-router-dom';
import homeAboutImg from '../assets/home-about.jpg'; // Закинь сюда картинку

export const HomeAbout = () => {
  return (
    <section className="bg-white text-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="mb-16">
          <span className="text-[#45CC82] font-bold text-xs tracking-[0.2em] uppercase block mb-4">
            About us
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-none">
            Accelerating <br /> growth
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-end">
          
          <div className="w-full">
            <div className="aspect-[4/3] w-full relative overflow-hidden bg-gray-200">
              <img 
                src={homeAboutImg} 
                alt="iProspect woman on the phone" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-6 max-w-md">
              <p>
                In this time of enormous change where media is more important than ever before, people are longing for humanity - for real connection, for truth and for what binds us together.
              </p>
              <p>
                Our unique understanding of the intersection of culture, content, data, and technology powers how we build brands out of every moment of connection. For today, and for tomorrow.
              </p>
            </div>
            
            <Link 
              to="/about"
              className="inline-block text-xl md:text-2xl font-bold border-b-2 border-[#0a0a0a] pb-1 hover:text-[#45CC82] hover:border-[#45CC82] transition-colors w-fit"
            >
              About
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};