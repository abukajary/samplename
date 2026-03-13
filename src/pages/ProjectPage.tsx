import { useParams } from 'react-router-dom';
import { ProjectHero } from '../components/ProjectHero';
import { ArticleContent } from '../components/ArticleContent'; // Переиспользуем готовый компонент

const mockHtmlContent = `
  <picture class="block mb-12">
    <img alt="Mitchum influencer" src="https://d1ccy0aelhau86.cloudfront.net/images/resized mitchum embed image.jpg" class="w-full h-auto rounded-sm bg-gray-200" loading="lazy">
  </picture>
  <h2>THE REALITY</h2>
  <p>Mitchum Male set out to increase awareness and affinity amongst young men in the UK. We set out to understand what makes the male audience tick and how we could resonate with them through media.</p>
  <h2>STRATEGY</h2>
  <p>We challenged gaming streamer Kevin Chapman to beat the Guinness World Record for “Longest Sports (Soccer) Video Game Marathon” and still smell fresh with Mitchum.</p>
  <h2>THE NUMBERS</h2>
  <h3>The Campaign</h3>
  <ul class="bullet">
    <li>Delivered 13 million video views and 790k Livestream views</li>
    <li>Broke one Guinness World Record</li>
  </ul>
  <div class="my-12 aspect-video bg-gray-200 rounded-sm overflow-hidden">
    <iframe title="Vimeo Video" src="https://player.vimeo.com/video/907513352?h=fa9a00d915&badge=0&autopause=0&player_id=0&app_id=58479" class="w-full h-full" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>
`;

const projectsDB = [
  { 
    id: '1', 
    title: 'GIVING GAMERS THE POWER TO SKIP A SHOWER', 
    subtitle: 'Mitchum',
    content: mockHtmlContent
  },
  { 
    id: '2', 
    title: 'FULL FUNNEL SEO STRATEGY DRIVES INCREMENTAL TRAFFIC', 
    subtitle: 'Dubai Properties',
    content: '<p>Content for Dubai Properties...</p>'
  }
];

export const ProjectPage = () => {
  const { id } = useParams();
  
  const project = projectsDB.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white text-2xl">
        Project not found
      </div>
    );
  }

  return (
    <main>
      <ProjectHero project={project} />
      <ArticleContent content={project.content} /> 
    </main>
  );
};