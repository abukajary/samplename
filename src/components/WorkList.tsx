import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 10;

const allProjects = Array.from({ length: 24 }, (_, i) => ({
  title: `PROJECT ${i + 1}`,
  category: i % 3 === 0 ? 'FMCG' : i % 2 === 0 ? 'TECH' : 'TRAVEL',
  year: '2024',
  url: `/work/${i + 1}`
}));

export const WorkList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = allProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-white text-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {currentProjects.map((project, idx) => (
            <Link key={idx} to={project.url} className="group block cursor-pointer">
              <figure>
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-200 rounded-sm">
                  <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                  
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-32 h-10 bg-white/20 backdrop-blur-sm animate-pulse rounded mb-6"></div>
                    <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <figcaption className="flex justify-between items-center py-4 mt-2 border-t border-[#0a0a0a] font-bold text-sm uppercase">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </figcaption>
              </figure>
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