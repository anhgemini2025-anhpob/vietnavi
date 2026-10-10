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
  Filter, 
  Volume2, 
  CheckCircle2,
  BookmarkCheck,
  ChevronRight
} from 'lucide-react';

interface EcosystemMatrixProps {
  onOpenVideoTour?: () => void;
}

export const EcosystemMatrix: React.FC<EcosystemMatrixProps> = ({ onOpenVideoTour }) => {
  const { language, t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAppModal, setSelectedAppModal] = useState<CountryApp | null>(null);

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

  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-[#090D16] relative">
      
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase">
            <Globe2 className="w-3.5 h-3.5" />
            <span>{t('ecosystem.section.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {t('ecosystem.title')}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t('ecosystem.subtitle')}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
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
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-750 border border-slate-700/60'
                  }`}
                >
                  {labelMap[region]}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('ecosystem.search.placeholder')}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/60 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* 13 Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="group rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#0F1626] to-[#0A0F1A] border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40 relative overflow-hidden"
            >
              
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Flag, Country & Domain Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 shadow-sm shrink-0">
                      {app.flag}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          {language === 'vi' ? app.countryNameVi : app.countryNameEn}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                          {app.region}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5 truncate max-w-[190px]">
                        {app.url.replace('https://', '')}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold shrink-0">
                    Live PWA
                  </span>
                </div>

                {/* Native Language Title (Hero feature for foreigners) */}
                <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                  {app.nativeTitle}
                </h3>
                
                {/* Subtitle in VI / EN */}
                <p className="text-xs font-medium text-slate-300 mt-1">
                  {language === 'vi' ? app.subtitleVi : app.subtitleEn}
                </p>

                {/* Native Feature Teaser (Target nation language) */}
                <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800/90 text-xs text-slate-300 italic leading-relaxed">
                  "{app.nativeTeaser}"
                </div>

                {/* Video Clip Placeholder with custom play button */}
                <div className="mt-4 relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-950 border border-slate-800 group/video cursor-pointer"
                  onClick={() => onOpenVideoTour ? onOpenVideoTour() : window.open(app.url, '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                  
                  {/* Subtle video background art */}
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center z-10 relative">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/40 group-hover/video:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-300 font-bold mt-2">
                      VIDEO PREVIEW • {app.code.toUpperCase()}
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-3 z-20 text-[10px] font-mono text-slate-300">
                    {language === 'vi' ? 'Xem demo giao diện gốc' : 'Native UI preview'}
                  </div>
                </div>

                {/* Key Features Bullet List */}
                <div className="mt-4 space-y-1.5 text-xs text-slate-300">
                  {app.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">
                        {language === 'vi' ? feat.vi : feat.en}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Phonetic Specialty Focus Tag */}
                <div className="mt-3.5 pt-3 border-t border-slate-800/80 text-[11px] text-amber-300 font-mono flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">
                    {language === 'vi' ? app.phoneticFocus.vi : app.phoneticFocus.en}
                  </span>
                </div>

              </div>

              {/* Bottom Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 text-slate-200 hover:text-slate-950 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-md"
                >
                  <span>{t('ecosystem.launch')} ({app.code.toUpperCase()})</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search Result Fallback */}
        {filteredApps.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900 border border-slate-800 max-w-lg mx-auto">
            <Globe2 className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">Không tìm thấy ứng dụng phù hợp</h3>
            <p className="text-xs text-slate-400 mt-1">
              Thử tìm kiếm với từ khóa khác hoặc bấm nút "Tất cả" để xem toàn bộ 13 ứng dụng.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedRegion('All'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
            >
              Xem tất cả 13 ứng dụng
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
