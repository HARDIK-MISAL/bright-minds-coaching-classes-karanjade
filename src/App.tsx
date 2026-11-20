import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProgramsSection, ProgramData } from './components/ProgramsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { MentalSpeedSimulator } from './components/MentalSpeedSimulator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackgroundParticles } from './components/BackgroundParticles';
import { FadeInUp } from './components/FadeInUp';
import { sanitizeUrl } from './utils/security';

// Code-split modals so they only load over network when requested by user
const CurriculumModal = lazy(() => import('./components/CurriculumModal').then(m => ({ default: m.CurriculumModal })));

export default function App() {
  const [selectedCurriculumProgram, setSelectedCurriculumProgram] = useState<ProgramData | null>(null);

  useEffect(() => {
    // Security: Validate URL hash against allowed anchor targets to prevent DOM-based manipulation
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const sanitized = sanitizeUrl(hash);
      if (sanitized === '#') {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  const handleExplorePrograms = useCallback(() => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSelectProgram = useCallback((program: ProgramData) => {
    setSelectedCurriculumProgram(program);
  }, []);

  const handleCloseCurriculum = useCallback(() => {
    setSelectedCurriculumProgram(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F8] via-[#FAF6F8] to-[#FFF1F6] text-[#0F172A] selection:bg-[#B51F60] selection:text-white relative overflow-x-hidden font-sans">
      {/* Background Particle Constellation */}
      <BackgroundParticles />

      {/* Hardware-accelerated ambient glows in signature magenta */}
      <div className="fixed inset-0 pointer-events-none z-0 hero-radial-glow" />
      <div
        className="fixed top-1/4 right-5 w-96 h-96 bg-rose-400/18 rounded-full blur-[130px] pointer-events-none animate-pulse-glow will-change-transform"
        style={{ transform: 'translateZ(0)' }}
      />
      <div
        className="fixed bottom-10 left-10 w-[28rem] h-[28rem] bg-[#B51F60]/14 rounded-full blur-[140px] pointer-events-none will-change-transform"
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Main Header with Top Announcement Bar */}
      <Header />

      {/* Main Content Sections - Arihant Academy Architecture */}
      <main className="relative z-10">
        <Hero onExplorePrograms={handleExplorePrograms} />
        <FadeInUp distance={32} threshold={0.06}>
          <ProgramsSection onSelectProgram={handleSelectProgram} />
        </FadeInUp>
        <FadeInUp distance={32} threshold={0.06}>
          <WhyChooseSection />
        </FadeInUp>
        <FadeInUp distance={32} threshold={0.06}>
          <MentalSpeedSimulator />
        </FadeInUp>
        <FadeInUp distance={32} threshold={0.06}>
          <TestimonialsSection />
        </FadeInUp>
        <FadeInUp distance={32} threshold={0.06}>
          <FAQSection />
        </FadeInUp>
        <FadeInUp distance={32} threshold={0.06}>
          <ContactSection />
        </FadeInUp>
      </main>

      {/* Footer & Floating WhatsApp */}
      <Footer />

      {/* Modals rendered on-demand with Suspense */}
      <Suspense fallback={null}>
        {selectedCurriculumProgram && (
          <CurriculumModal
            program={selectedCurriculumProgram}
            onClose={handleCloseCurriculum}
          />
        )}
      </Suspense>
    </div>
  );
}
