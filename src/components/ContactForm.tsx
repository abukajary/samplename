import { ChevronDown, ArrowRight } from 'lucide-react';

export const ContactForm = () => {
  return (
    <section className="bg-white text-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Левая колонка */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 uppercase">
              Где нас найти
            </h2>

            <div className="bg-[#f5f5f5] p-8 rounded-sm mt-12">
              <h3 className="text-2xl font-bold mb-8 uppercase">PULSE MEDIA</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                    Адрес
                  </div>
                  <a 
                    href="https://go.2gis.com/qwwex" // Тут можешь вставить реальную ссылку на 2GIS или Google Maps
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:text-[#45CC82] transition-colors"
                  >
                    Алматы, ул. Калдаякова 34/29, 5 этаж
                  </a>
                </div>
                
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                    Почта
                  </div>
                  <a 
                    href="mailto:info@pulsemedia.kz" 
                    className="text-lg hover:text-[#45CC82] transition-colors"
                  >
                    info@pulsemedia.kz
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка: Форма */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 uppercase">
              Напишите нам
            </h2>

            <form className="flex flex-col gap-8">
              <div className="grid md:grid-cols-2 gap-8 gap-y-12">
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Имя*</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors" />
                </div>
                
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Фамилия*</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors" />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Должность</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors" />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email*</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors" />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Название компании*</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors" />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Город*</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors cursor-pointer">
                      <option value="almaty">Алматы</option>
                      <option value="astana">Астана</option>
                      <option value="shymkent">Шымкент</option>
                      <option value="other">Другой</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none pb-2 text-gray-500">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Комментарий</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors resize-none"></textarea>
              </div>

              <div className="flex flex-col gap-6 mt-4">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex-shrink-0 w-6 h-6 border-2 border-gray-300 group-hover:border-[#0a0a0a] transition-colors mt-0.5">
                    <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                    <div className="absolute inset-0 bg-[#0a0a0a] scale-0 peer-checked:scale-100 transition-transform"></div>
                  </div>
                  <span className="text-sm md:text-base text-gray-600 leading-snug">
                    Я хочу получать новости и рассылки от Pulse Media в маркетинговых целях
                  </span>
                </label>

                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex-shrink-0 w-6 h-6 border-2 border-gray-300 group-hover:border-[#0a0a0a] transition-colors mt-0.5">
                    <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                    <div className="absolute inset-0 bg-[#0a0a0a] scale-0 peer-checked:scale-100 transition-transform"></div>
                  </div>
                  <span className="text-sm md:text-base text-gray-600 leading-snug">
                    Я ознакомился(лась) и согласен(на) с <a href="/legal/privacy-policy" className="underline hover:text-[#45CC82]">Политикой конфиденциальности</a>*
                  </span>
                </label>
              </div>

              <button 
                type="button" 
                className="group flex items-center gap-4 bg-[#0a0a0a] text-white px-8 py-4 w-fit mt-4 hover:bg-[#45CC82] transition-colors duration-300"
              >
                <span className="font-bold uppercase tracking-widest text-sm">Отправить</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};