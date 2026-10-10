import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { CoreVietrealSection } from '../components/CoreVietrealSection';
import { PronounMatrixInteractive } from '../components/PronounMatrixInteractive';
import { EcosystemMatrix } from '../components/EcosystemMatrix';
import { ToneWaveSimulator } from '../components/ToneWaveSimulator';
import { QuickOnboarding } from '../components/QuickOnboarding';
import { ConsultationSection } from '../components/ConsultationSection';
import { VideoTourModal } from '../components/VideoTourModal';
import { PhraseDetailModal } from '../components/PhraseDetailModal';
import { SurvivalPhrase } from '../types';

export const HomePage: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedPhrase, setSelectedPhrase] = useState<SurvivalPhrase | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      
      {/* 1. Hero Section */}
      <Hero
        onOpenVideoTour={() => setIsVideoModalOpen(true)}
        onSelectPhrase={(phrase) => setSelectedPhrase(phrase)}
        onOpenTrial={() => scrollToSection('onboard')}
        onOpenDemo={() => scrollToSection('demo')}
      />

      {/* 2. Core App Highlight: VIETREAL 360° (4 Pillars) */}
      <CoreVietrealSection />

      {/* 3. Cultural Pronoun Matrix */}
      <PronounMatrixInteractive />

      {/* 4. Localized Ecosystem (13 Country Apps) */}
      <EcosystemMatrix onOpenVideoTour={() => setIsVideoModalOpen(true)} />

      {/* 5. Live Tone Wave Simulator */}
      <ToneWaveSimulator />

      {/* 6. Quick 1-Minute Onboarding Roadmap */}
      <QuickOnboarding onOpenConsultation={() => scrollToSection('request')} />

      {/* 7. Consultation & Request Form */}
      <ConsultationSection />

      {/* Modals */}
      <VideoTourModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <PhraseDetailModal
        phrase={selectedPhrase}
        onClose={() => setSelectedPhrase(null)}
      />

    </div>
  );
};
