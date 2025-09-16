import { useEffect } from 'react';
import { Header } from './components/Header';
import { GridBackground } from './components/GridBackground';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { AboutContactSection } from './components/AboutContactSection';
import { ThankYouSection } from './components/ThankYouSection';

export default function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-foreground relative">
      <GridBackground />
      <Header />
      
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <AboutContactSection />
        <ThankYouSection />
      </main>
    </div>
  );
}