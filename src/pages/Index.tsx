import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { EducationAchievements } from '@/components/EducationAchievements';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hussain Anajwala | AI/ML Engineer & Computer Engineering Student</title>
        <meta name="description" content="Final-year Computer Engineering student specializing in AI & ML. Building Computer Vision, Generative AI, and full-stack AI applications. Open to AI/ML & SDE internships." />
        <meta name="keywords" content="AI/ML intern, Computer Vision, Generative AI, RAG, PyTorch, FastAPI, React, LangChain, Mumbai, Computer Engineering student" />
        <meta name="theme-color" content="#0d1117" />
        <link rel="canonical" href="https://hussainanajwala.dpdns.org/" />
        <meta property="og:title" content="Hussain Anajwala | AI/ML Engineer & Computer Engineering Student" />
        <meta property="og:description" content="Final-year Computer Engineering student specializing in AI & ML. Building Computer Vision, Generative AI, and full-stack AI applications." />
        <meta property="og:url" content="https://hussainanajwala.dpdns.org/" />
        <meta name="twitter:title" content="Hussain Anajwala | AI/ML Engineer & Computer Engineering Student" />
        <meta name="twitter:description" content="Final-year Computer Engineering student specializing in AI & ML. Building Computer Vision, Generative AI, and full-stack AI applications." />
      </Helmet>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationAchievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </div>
  );
};

export default Index;
