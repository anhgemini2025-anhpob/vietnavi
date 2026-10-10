import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COUNTRY_APPS } from '../data/ecosystem';
import { CountryApp } from '../types';
import { 
  Globe2, 
  Search, 
  ExternalLink, 
  Play, 
  Sparkles, 
  Volume2, 
  CheckCircle2,
  ChevronRight,
  Clock,
  Video,
  ArrowRight
} from 'lucide-react';
import { playToneByName } from '../utils/audioSynthesizer';

interface EcosystemMatrixProps {
  onOpenVideoTour?: () => void;
}

export const EcosystemMatrix: React.FC<EcosystemMatrixProps> = ({ onOpenVideoTour }) => {
  const { language, t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Interactive reader-driven selection: Default to ThaiViet (which has live video), or user can click any
  const [selectedAppId, setSelectedAppId] = useState<string>('thviet');

  const filteredApps = COUNTRY_APPS.filter((app) => {
    const matchesRegion = selectedRegion === 'All' || app.region === selectedRegion;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !query ||
      app.countryNameVi.toLowerCase().includes(query) ||
      app.countryNameEn.toLowerCase().includes(query) ||
      app.nativeTitle.toLowerCase().includes(query) ||
      app.subtitleVi.toLowerCase().includes(query) ||
      app.subtitleEn.toLowerCase().includes(query) ||
      app.code.toLowerCase().includes(query);

    return matchesRegion && matchesSearch;
  });

  const activeApp = COUNTRY_APPS.find((app) => app.id === selectedAppId) || filteredApps[0] || COUNTRY_APPS[0];

  const handlePlaySampleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    playToneByName('sac');
  };

  return (
    <section id="ecosystem" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-[#090D16] relative transition-colors">
      
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold uppercase">
            <Globe2 className="w-3.5 h-3.5" />
            <span>{t('ecosystem.section.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t('ecosystem.title')}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {t('ecosystem.subtitle')}
          </p>

          <p className="text-[11px] sm:text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
            {language === 'vi' 
              ? '👉 Nhấp vào biểu tượng ngôn ngữ bên dưới để mở chi tiết & khám phá ứng dụng:'
              : '👉 Click any language icon below to inspect details & launch app:'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Region Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {['All', 'Asia', 'Europe', 'Americas'].map((region) => {
              const labelMap: Record<string, string> = {
                All: t('ecosystem.filter.all'),
                Asia: t('ecosystem.filter.asia'),
                Europe: t('ecosystem.filter.europe'),
                Americas: t('ecosystem.filter.americas')
              };

              const isActive = selectedRegion === region;

              return (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {labelMap[region]}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('ecosystem.search.placeholder')}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:outline-none text-xs text-slate-900 dark:text-white placeholder-slate-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* 13 Language Icons Bar / Selector (Compact, Visual, Interactive) */}
        <div className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-13 gap-2">
            {filteredApps.map((app) => {
              const isSelected = activeApp.id === app.id;
              return (
                <button
                  key={app.id}
                  onClick={() => setSelectedAppId(app.id)}
                  className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer relative group ${
                    isSelected
                      ? 'bg-cyan-500/15 border-2 border-cyan-500 shadow-md shadow-cyan-500/20 scale-105'
                      : 'bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                  title={`${app.countryNameVi} (${app.code.toUpperCase()})`}
                >
                  {/* Flag / Logo */}
                  <div className="relative mb-1">
                    {app.logo ? (
                      <img 
                        src={app.logo} 
                        alt={app.countryNameVi} 
                        className="w-7 h-7 object-contain rounded-full shadow-sm"
                        onError={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-2xl leading-none">{app.flag}</span>
                    )}
                    {app.hasVideo && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-500 border border-white dark:border-slate-900" title="Có video demo" />
                    )}
                  </div>

                  {/* Language code & name */}
                  <span className={`text-[11px] font-bold tracking-tight truncate max-w-full ${
                    isSelected ? 'text-cyan-700 dark:text-cyan-300' : 'text-slate-800 dark:text-slate-200'
                  }`}>
                    {language === 'vi' ? app.countryNameVi : app.countryNameEn}
                  </span>

                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                    {app.code}
                  </span>

                  {isSelected && (
                    <span className="absolute -bottom-1 w-2 h-2 rounded-full bg-cyan-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Language Detail Card (Interactive Disclosure - Only chosen item is displayed) */}
        {activeApp && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-[#0F1626] dark:to-[#0A0F1A] border-2 border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/30 transition-all animate-fade-in">
            
            {/* Header: Flag, Name, Native Script, PWA Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1.5 shadow-sm shrink-0">
                  {activeApp.logo ? (
                    <img 
                      src={activeApp.logo} 
                      alt={activeApp.countryNameVi} 
                      className="w-full h-full object-contain rounded-xl" 
                    />
                  ) : (
                    <span className="text-3xl">{activeApp.flag}</span>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                      {language === 'vi' ? activeApp.subtitleVi : activeApp.subtitleEn}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-bold uppercase">
                      {activeApp.code}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5 font-mono">
                    {activeApp.nativeTitle}
                  </div>
                </div>
              </div>

              {/* Status pill */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                  ● PWA Live
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {activeApp.region}
                </span>
              </div>
            </div>

            {/* Native Teaser Quote */}
            <div className="my-5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
              "{activeApp.nativeTeaser}"
            </div>

            {/* Grid 2 Columns: Left = Tailored Features & Phonetics, Right = Video (Real vs In Development) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* Left Column: Key tailored features & Sample Phrase */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{language === 'vi' ? 'May đo ngữ âm riêng biệt:' : 'Tailored linguistic focus:'}</span>
                  </h4>
                  <div className="space-y-2">
                    {activeApp.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">
                          {language === 'vi' ? feat.vi : feat.en}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phonetic Focus Pill */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-300 font-mono">
                  <span className="font-bold">Đặc thù phát âm: </span>
                  <span>{language === 'vi' ? activeApp.phoneticFocus.vi : activeApp.phoneticFocus.en}</span>
                </div>

                {/* Sample Survival Phrase */}
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="space-y-1 truncate">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {language === 'vi' ? 'Câu giao tiếp mẫu:' : 'Sample phrase:'}
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      "{activeApp.samplePhrase.vi}"
                    </div>
                    <div className="text-[11px] text-cyan-600 dark:text-cyan-400 truncate">
                      {activeApp.samplePhrase.native}
                    </div>
                  </div>
                  <button
                    onClick={handlePlaySampleAudio}
                    className="p-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500 text-cyan-700 dark:text-cyan-300 hover:text-slate-950 border border-cyan-500/30 transition-all cursor-pointer shrink-0"
                    title="Nghe phát âm"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: VIDEO CONTAINER (Only ThaiViet has video, others say "Đang phát triển") */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Video Demo Trải Nghiệm</span>
                </h4>

                {activeApp.hasVideo && activeApp.videoUrl ? (
                  /* ThaiViet Live Video Player */
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-cyan-500/40 shadow-lg group">
                    <video
                      src={activeApp.videoUrl}
                      controls
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                      ● ThaiViet 35s Official
                    </div>
                  </div>
                ) : (
                  /* Other apps: Video is empty and clearly marked "Đang phát triển" */
                  <div className="relative rounded-2xl aspect-video bg-slate-100 dark:bg-slate-950 border border-dashed border-slate-300 dark:border-slate-800 flex flex-col items-center justify-center p-6 text-center space-y-2.5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-400">
                      <Clock className="w-6 h-6 animate-pulse text-amber-500" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold uppercase">
                        Đang phát triển (Coming Soon)
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-xs mx-auto">
                        {language === 'vi' 
                          ? 'Video trải nghiệm thực tế cho ứng dụng này đang được ghi hình sản xuất.' 
                          : 'Production showcase video for this native app is in development.'}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                      {language === 'vi' ? 'Bấm nút "Khám Phá" bên dưới để dùng thử trực tiếp Web PWA' : 'Click "Explore" below to test the live web app'}
                    </span>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Direct Launch CTA Button */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                URL: <span className="text-slate-700 dark:text-slate-200 font-bold">{activeApp.url}</span>
              </div>

              <a
                href={activeApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>{language === 'vi' ? `Khám Phá Ứng Dụng ${activeApp.subtitleVi}` : `Explore App (${activeApp.code.toUpperCase()})`}</span>
                <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
