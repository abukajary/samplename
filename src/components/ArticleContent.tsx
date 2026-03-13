import { Link2, Facebook, Linkedin, MessageCircle, Mail } from 'lucide-react';

export const ArticleContent = ({ content }: { content: string }) => {
  return (
    <section className="bg-white text-[#0a0a0a] py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-6">
        
        <article 
          className="
            text-lg md:text-xl leading-relaxed text-gray-800
            [&_h3]:text-2xl [&_h3]:md:text-3xl [&_h3]:font-bold [&_h3]:mt-12 [&_h3]:mb-6 [&_h3]:text-[#0a0a0a]
            [&_p]:mb-6
            [&_a]:text-[#45CC82] [&_a]:underline [&_a]:hover:text-[#0a0a0a] [&_a]:transition-colors
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul_li]:mb-2
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol_li]:mb-2
            [&_strong]:font-bold [&_strong]:text-[#0a0a0a]
            [&_img]:w-full [&_img]:h-auto [&_img]:rounded-sm [&_img]:my-12 [&_img]:bg-gray-200
            [&_picture]:block
            [&_em]:italic [&_em]:text-gray-500 [&_em]:block [&_em]:-mt-8 [&_em]:mb-8 [&_em]:text-sm
          "
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="mt-24 pt-8 border-t border-gray-200">
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">
            Share this article
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 bg-[#0a0a0a] text-white px-4 py-2 hover:bg-[#45CC82] transition-colors rounded-sm">
              <Link2 size={16} />
              <span className="text-sm font-bold">Copy link</span>
            </button>
            <span className="text-gray-400 text-sm mx-2">or</span>
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#45CC82] hover:text-[#45CC82] transition-colors">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#45CC82] hover:text-[#45CC82] transition-colors">
              <Linkedin size={18} />
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#45CC82] hover:text-[#45CC82] transition-colors">
              <MessageCircle size={18} />
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#45CC82] hover:text-[#45CC82] transition-colors">
              <Mail size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};