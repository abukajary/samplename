import { useParams } from 'react-router-dom';
import { ArticleHero } from '../components/ArticleHero';
import { ArticleContent } from '../components/ArticleContent';

const mockHtmlContent = `
  <p>The days of constantly scrolling through search results, comparing costs, and trying to find the right product at the right price are long gone. AI shopping is here. With ChatGPT’s instant checkout, the route from intent to buy has been reduced into a single conversation.</p>
  <h3>Conversational commerce: The 'what' and 'how'?</h3>
  <p><a rel="noopener noreferrer" target="_blank" href="https://openai.com/">ChatGPT’s Instant Checkout</a> was released on 29th September 2025. It’s powered by <strong>Agentic Commerce Protocol (ACP)</strong>.</p>
  <ul class="bullet">
    <li><strong>Discovery:</strong> Brands can update their existing product feeds.</li>
    <li><strong>Checkout:</strong> When users search for products, ChatGPT collects fulfilment info.</li>
  </ul>
  <img alt="ACP Flow" src="https://d1ccy0aelhau86.cloudfront.net/images/Agentic_Commerce_Protocol.jpg" loading="lazy" />
  <p><em>Credit: OpenAI</em></p>
  <p>If you'd like to learn more, don't hesitate to <a href="/contact">get in touch.</a></p>
`;

const articlesDB = [
  { 
    id: '1', 
    tag: 'News', 
    title: 'Nine Shortlists for iProspect UK at the Campaign Media Awards 2026', 
    date: 'March 10, 2026', 
    author: 'By Editorial Team',
    content: mockHtmlContent
  },
];

export const ArticlePage = () => {
  const { id } = useParams();
  
  const article = articlesDB.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white text-2xl">
        Article not found
      </div>
    );
  }

  return (
    <main>
      <ArticleHero article={article} />
      <ArticleContent content={article.content} />
    </main>
  );
};