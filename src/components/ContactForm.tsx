import { useState, type FormEvent } from 'react';
import { ChevronDown, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    company: '',
    city: 'almaty',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
      setError('Пожалуйста, заполните все обязательные поля (*)');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/send_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setIsSuccess(true);
        setFormData({
          firstName: '', lastName: '', jobTitle: '', email: '', company: '', city: 'almaty', message: ''
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.message || 'Ошибка сервера');
      }
    } catch (err) {
      console.error('Ошибка отправки:', err);
      setError('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white text-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 uppercase">
              Где нас найти
            </h2>

            <div className="bg-[#f5f5f5] p-8 rounded-sm mt-12">
              <h3 className="text-2xl font-bold mb-8 uppercase">PULSE MEDIA</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Адрес</div>
                  <a href="https://2gis.kz/almaty/search/%D0%A1%D0%B5%D1%80%D0%BA%D0%B5%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0%2091/geo/70030076204839202/76.897126%2C43.211874/tab/inside?m=76.89267%2C43.21126%2F16.23" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#45CC82] transition-colors">
                    Алматы, ул. Серкебаева 91
                  </a>
                </div>
                
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Почта</div>
                  <a href="mailto:info@pulsemedia.kz" className="text-lg hover:text-[#45CC82] transition-colors">
                    info@pulsemedia.kz
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 uppercase">
              Напишите нам
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid md:grid-cols-2 gap-8 gap-y-12">
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Имя*</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors" />
                </div>
                
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Фамилия*</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors" />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Должность</label>
                  <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors" />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email*</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors" />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Название компании*</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors" />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Город*</label>
                  <div className="relative">
                    <select name="city" value={formData.city} onChange={handleChange} className="w-full appearance-none bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors cursor-pointer">
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
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] pb-2 outline-none transition-colors resize-none"></textarea>
              </div>

              {error && <div className="text-red-500 text-sm font-medium">{error}</div>}

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`group flex items-center gap-4 px-8 py-4 w-fit mt-4 transition-colors duration-300 ${
                  isSuccess 
                    ? 'bg-[#45CC82] text-white cursor-default' 
                    : 'bg-[#0a0a0a] text-white hover:bg-[#45CC82]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="font-bold uppercase tracking-widest text-sm">Отправка...</span>
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : isSuccess ? (
                  <>
                    <span className="font-bold uppercase tracking-widest text-sm">Отправлено</span>
                    <CheckCircle2 size={18} />
                  </>
                ) : (
                  <>
                    <span className="font-bold uppercase tracking-widest text-sm">Отправить</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};