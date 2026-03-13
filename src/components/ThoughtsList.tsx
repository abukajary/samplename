import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 10;

const articles = [
  { tag: 'News', title: 'Nine Shortlists for iProspect UK at the Campaign Media Awards 2026', url: '/insights/1' },
  { tag: 'Blog', title: 'Why Unified Media Is the Foundation of Search Experience Optimization in 2026', url: '/insights/2' },
  { tag: 'Blog', title: 'CMOs turn to Contextual Signals to Maximize the Impact of Their AI and Influencer Investments', url: '/insights/3' },
  { tag: 'Blog', title: 'LinkedIn Live: Gen Z Reacts | Human Truths in the Algorithmic Era', url: '/insights/4' },
  { tag: 'Blog', title: 'UK Media Predictions 2026: A new era of growth', url: '/insights/5' },
  { tag: 'Blog', title: 'Shared Moments Hit Different | A Gen Z Perspective', url: '/insights/6' },
  { tag: 'News', title: 'Comic Relief Appoints iProspect UK for Digital Media and Innovation', url: '/insights/7' },
  { tag: 'Blog', title: 'CES 2026: How Agentic AI Innovation is Accelerating Unified Media', url: '/insights/8' },
  { tag: 'News', title: 'Dentsu Expands Tapestry Relationship with EMEAI Win Following Competitive Review', url: '/insights/9' },
  { tag: 'Blog', title: 'How Sports, Streaming, and Culture Are Powering Brazil’s Ad Spend Expansion in 2026', url: '/insights/10' },
  { tag: 'News', title: 'iProspect Named Agency of the Year in Global Media Awards', url: '/insights/11' },
  { tag: 'Blog', title: 'The Future of Commerce: Blending Digital and Physical Realities', url: '/insights/12' },
];

export const ThoughtsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-white text-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="flex flex-col">
          {currentArticles.map((article, idx) => (
            <Link 
              key={idx} 
              to={article.url} 
              className="group flex flex-col md:flex-row gap-8 md:gap-12 py-8 border-b border-[#0a0a0a]/20 last:border-b-0 cursor-pointer"
            >
              <div className="md:w-1/3 shrink-0">
                <div className="aspect-square md:aspect-[4/3] w-full bg-gray-200 rounded-sm overflow-hidden relative">
                   <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                </div>
              </div>

              <div className="md:w-2/3 flex flex-col justify-between py-2">
                <div>
                  <span className="inline-block bg-[#0a0a0a] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6">
                    {article.tag}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold leading-tight group-hover:text-[#45CC82] transition-colors duration-300">
                    {article.title}
                  </h3>
                </div>

                <div className="self-end mt-8">
                  <div className="w-12 h-12 rounded-full border border-[#0a0a0a] flex items-center justify-center group-hover:bg-[#45CC82] group-hover:border-[#45CC82] transition-colors duration-300">
                    <ArrowRight size={20} className="text-[#0a0a0a] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-24 flex items-center justify-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`cursor-pointer p-2 transition-opacity ${
                currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#45CC82] hover:opacity-70'
              }`}
            >
              <ChevronLeft size={32} />
            </button>
            
            <div className="flex items-center gap-4 font-bold text-lg">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`cursor-pointer transition-colors ${
                    currentPage === page ? 'text-[#45CC82]' : 'text-gray-400 hover:text-[#0a0a0a]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`cursor-pointer p-2 transition-opacity ${
                currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-[#45CC82] hover:opacity-70'
              }`}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};