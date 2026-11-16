import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { ChurchSection } from './components/ChurchSection';
import { KpiDashboardSection } from './components/KpiDashboardSection';
import { CrmTelecomSection } from './components/CrmTelecomSection';
import { KidsGamesSection } from './components/KidsGamesSection';
import { FooterContact } from './components/FooterContact';
import { ProjectModal } from './components/ProjectModal';
import { WhatsAppFloat } from './components/WhatsAppButton';
import { PROJECTS } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Theme: 'dark' (Dark Slate Executive, default) or 'light' (Clean Light SaaS)
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const paramPalette = params.get('palette');
    if (paramPalette === 'claro' || paramPalette === 'light') return 'light';
    if (paramPalette === 'dark' || paramPalette === 'slate') return 'dark';
    return localStorage.getItem('scm_theme') || 'dark';
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('scm_theme', next);
      return next;
    });
  };

  const themeClass = theme === 'light' ? 'palette-claro' : 'palette-dark-slate';

  const openProjectById = (id) => {
    const found = PROJECTS.find((p) => p.id === id);
    if (found) setSelectedProject(found);
  };

  return (
    <div className={`min-h-screen bg-[#0B0F17] text-slate-100 ${themeClass}`}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero onOpenFeatured={openProjectById} />

        <div className={theme === 'light' ? 'light-zone' : ''}>
          <ProjectsCarousel onSelectProject={setSelectedProject} />

          <ChurchSection onOpenChurchModal={() => openProjectById('gestao-igrejas')} />

          <KpiDashboardSection />

          <CrmTelecomSection onOpenCrmModal={() => openProjectById('crm-telecom')} />

          <KidsGamesSection onOpenKidsModal={() => openProjectById('jogos-infantis')} />
        </div>
      </main>

      <FooterContact />

      <WhatsAppFloat />

      <ProjectModal
        project={selectedProject}
        onSelectProject={setSelectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
