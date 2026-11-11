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
  const params = new URLSearchParams(window.location.search);
  const palette = params.get('palette') || 'hibrido'; // 'hibrido' default
  const paletteClass =
    palette === 'azul'
      ? 'palette-azul'
      : palette === 'claro'
        ? 'palette-claro'
        : 'palette-hibrido';

  const openProjectById = (id) => {
    const found = PROJECTS.find((p) => p.id === id);
    if (found) setSelectedProject(found);
  };

  return (
    <div className={`min-h-screen bg-[#040B16] text-slate-100 ${paletteClass}`}>
      <Navbar />

      <main>
        <Hero onOpenFeatured={() => openProjectById('erp-empresarial')} />

        <div className="light-zone">
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
