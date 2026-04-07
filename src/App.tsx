import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
// import { Awards } from './components/Awards';
// import { Leadership } from './components/Leadership';
import { ServicesHero } from './components/ServicesHero';
import { ServicesList } from './components/ServicesList';
import { WorkHero } from './components/WorkHero';
import { WorkList } from './components/WorkList';
import { ThoughtsHero } from './components/ThoughtsHero';
import { ThoughtsList } from './components/ThoughtsList';
import { ArticlePage } from './pages/ArticlePage';
import { ProjectPage } from './pages/ProjectPage';
import { ContactHero } from './components/ContactHero';
import { ContactForm } from './components/ContactForm';
import { PolicyPage } from './pages/PolicyPage';
import { ScrollToTop } from './components/ScrollToTop';
import { HomeHero } from './components/HomeHero';
import { HomeAbout } from './components/HomeAbout';
// import { HomeServices } from './components/HomeServices';

const HomePage = () => (
  <main>
    <HomeHero />
  </main>
);

const AboutPage = () => (
  <main className="pt-20">
    <Hero />
    <HomeAbout />
    <Stats />
  </main>
);

const WorkPage = () => (
  <main>
    <WorkHero />
    <WorkList />
  </main>
);

const ServicesPage = () => (
  <main>
    <ServicesHero />
    <ServicesList />
  </main>
);

const ThoughtsPage = () => (
  <main>
    <ThoughtsHero />
    <ThoughtsList />
  </main>
);

const ContactPage = () => (
  <main>
    <ContactHero />
    <ContactForm />
  </main>
);

const AppContent = () => {
  const location = useLocation();
  const isTransparentTop = location.pathname === '/services';

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Header transparentAtTop={isTransparentTop} />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:id" element={<ProjectPage />} />
          <Route path="/insights" element={<ThoughtsPage />} />
          <Route path="/insights/:id" element={<ArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal/:id" element={<PolicyPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;