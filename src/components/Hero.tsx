import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SURVIVAL_PHRASES } from '../data/ecosystem';
import { SurvivalPhrase } from '../types';
import { 
  Play, 
  Sparkles, 
  Volume2, 
  ArrowRight, 
  Smartphone, 
  ShieldCheck, 
  Zap,
  Globe2,
  Headphones
} from 'lucide-react';

interface HeroProps {
  onOpenVideoTour: () => void;
  onSelectPhrase: (phrase: SurvivalPhrase) => void;
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenVideoTour, 
  onSelectPhrase, 
  onOpenTrial,
  onOpenDemo
}) => {
  const { language, t } = useLanguage();
  const [activePhraseHover, setActivePhraseHover] = useState<string | null>(null);

  const quickPhrases = SURVIVAL_PHRASES.slice(0, 5);

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-emerald-500/10 to-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">
              {t('hero.badge')}
            </span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              {language === 'vi' ? 'Nói tiếng Việt thật —' : 'Speak real Vietnamese —'}
            </span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              {language === 'vi' ? 'Ngay từ bài học đầu tiên.' : 'From your very first lesson.'}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            {t('hero.subtitle')}
          </p>

          {/* Main Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              <Zap className="w-5 h-5 fill-slate-950 group-hover:animate-bounce" />
              <span>{t('hero.cta.trial')}</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#111827]/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 text-slate-200 font-bold text-sm sm:text-base shadow-lg transition-all cursor-pointer"
            >
              <Headphones className="w-4 h-4 text-cyan-400" />
              <span>{t('hero.cta.demo')}</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-cyan-400 font-extrabold text-lg sm:text-xl font-mono">10,000+</div>
              <div className="text-xs text-slate-400">{t('hero.stats.learners')}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-emerald-400 font-extrabold text-lg sm:text-xl font-mono">13 Apps</div>
              <div className="text-xs text-slate-400">{t('hero.stats.countries')}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-amber-400 font-extrabold text-lg sm:text-xl font-mono">98.5%</div>
              <div className="text-xs text-slate-400">{t('hero.stats.accuracy')}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-rose-400 font-extrabold text-lg sm:text-xl font-mono">Offline PWA</div>
              <div className="text-xs text-slate-400">Zero App Store Wait</div>
            </div>
          </div>
        </div>

        {/* Hero Video Showcase Card (Responsive 16:9 Container) */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-cyan-500/30 via-slate-800/50 to-emerald-500/20 border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 group">
            
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#070A10] border border-slate-800">
              
              {/* Background Mockup Visual with Simulated App UI */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F17] via-[#0D1524] to-[#081B26] flex flex-col justify-between p-6 sm:p-10">
                
                {/* Visual App Simulation Preview inside Video Box */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-cyan-300 font-semibold">
                      VIETREAL 360° Real-World Simulator v2.6
                    </span>
                  </div>

                  {/* 360 Video Tour Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold font-mono">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{t('hero.video.badge')}</span>
                  </div>
                </div>

                {/* Center Content Mockup */}
                <div className="my-auto text-center space-y-4 max-w-xl mx-auto">
                  <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {language === 'vi' ? 'TRẢI NGHIỆM TƯƠNG TÁC THỰC TẾ' : 'INTERACTIVE EXPAT EXPERIENCE'}
                  </span>
                  
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    {language === 'vi' 
                      ? 'Thực Hành Giao Tiếp Sống Động Cùng Gia Sư AI & Phân Tích Sóng Âm' 
                      : 'Live AI Role-Play & Real-Time Pitch Frequency Wave Tracking'}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto hidden sm:block">
                    {language === 'vi'
                      ? 'Bấm nút để mở video tour 360° và phòng thí nghiệm ngữ âm thực chiến.'
                      : 'Click below to launch the 360° interactive tour and test simulated street scenarios.'}
                  </p>
                </div>

                {/* Tone waveform mini badge */}
                <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">● 6 Tones:</span>
                    <span className="hidden sm:inline">Ngang (—) • Huyền (\) • Sắc (/) • Hỏi (?) • Ngã (~) • Nặng (.)</span>
                    <span className="sm:hidden">6 Tone Contours</span>
                  </div>
                  <div className="text-emerald-400 font-bold">
                    Sound Synthesizer Ready
                  </div>
                </div>

              </div>

              {/* Glowing Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px] transition-all group-hover:bg-black/20">
                <button
                  onClick={onOpenVideoTour}
                  className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 shadow-2xl shadow-cyan-500/60 hover:scale-110 active:scale-95 transition-transform cursor-pointer group/btn"
                  aria-label="Play 360 Video Tour"
                >
                  <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" />
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-950 ml-1 group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Quick Action Bar (ORDER PHỞ, COFFEE, HOW MUCH, GRAB, RENT) */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="p-4 sm:p-6 rounded-2xl bg-[#0F172A]/80 border border-slate-800 backdrop-blur-xl shadow-xl">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t('hero.quick.title')}</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {language === 'vi' ? 'Bấm vào câu bất kỳ để thử phát âm:' : 'Click any button to test phrase:'}
              </span>
            </div>

            {/* Quick Action Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              {quickPhrases.map((phrase) => (
                <button
                  key={phrase.id}
                  onClick={() => onSelectPhrase(phrase)}
                  onMouseEnter={() => setActivePhraseHover(phrase.id)}
                  onMouseLeave={() => setActivePhraseHover(null)}
                  className="px-3.5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-left transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-lg group-hover:scale-110 transition-transform shrink-0">
                      {phrase.icon}
                    </span>
                    <div className="truncate">
                      <div className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 truncate">
                        {language === 'vi' ? phrase.categoryLabelVi : phrase.categoryLabelEn}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {phrase.vietnamese.split(',')[0]}
                      </div>
                    </div>
                  </div>
                  <Volume2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 shrink-0 ml-1" />
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
