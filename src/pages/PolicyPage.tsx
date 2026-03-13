import { useParams } from 'react-router-dom';
import { policiesData } from '../data/policies';
import { PolicyHero } from '../components/PolicyHero';
import { ArticleContent } from '../components/ArticleContent';

export const PolicyPage = () => {
  const { id } = useParams();
  
  const policy = policiesData.find((p) => p.id === id);

  if (!policy) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white text-2xl">
        Policy not found
      </div>
    );
  }

  return (
    <main>
      <PolicyHero title={policy.title} lastUpdate={policy.lastUpdate} />
      <ArticleContent content={policy.content} />
    </main>
  );
};