import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SURVIVAL_PHRASES } from '../data/ecosystem';
import { SurvivalPhrase } from '../types';
import { 
  Play, 
  Sparkles, 
  Volume2, 
  ArrowRight, 
  Zap,
  Globe2,
  Headphones,
  Sliders,
  Smartphone,
  CheckCircle2,
  Video
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
  const [isPlayingHeroVideo, setIsPlayingHeroVideo] = useState(false);
  const [heroVideoApp, setHeroVideoApp] = useState<'th' | 'jp' | 'kr' | 'la' | 'zh' | 'kh'>('th');

  const heroVideos = {
    th: {
      url: '/video/thviet-video.mp4',
      labelVi: '🇹🇭 Clip App THViet (Thái Lan)',
      labelEn: '🇹🇭 THViet Clip (Thailand)',
      badgeVi: 'TRẢI NGHIỆM THỰC TẾ APP NGƯỜI THÁI HỌC TIẾNG VIỆT',
      badgeEn: 'REAL DEMO: THAIVIET LEARNING APP'
    },
    jp: {
      url: '/video/jpviet-video.mp4',
      labelVi: '🇯🇵 Clip App JPViet (Nhật Bản)',
      labelEn: '🇯🇵 JPViet Clip (Japan)',
      badgeVi: 'TRẢI NGHIỆM THỰC TẾ APP NGƯỜI NHẬT HỌC TIẾNG VIỆT',
      badgeEn: 'REAL DEMO: JPVIET LEARNING APP'
    },
    kr: {
      url: '/video/krviet-video.mp4',
      labelVi: '🇰🇷 Clip App KRViet (Hàn Quốc)',
      labelEn: '🇰🇷 KRViet Clip (South Korea)',
      badgeVi: 'TRẢI NGHIỆM THỰC TẾ APP NGƯỜI HÀN HỌC TIẾNG VIỆT',
      badgeEn: 'REAL DEMO: KRVIET LEARNING APP'
    },
    la: {
      url: 'https://www.youtube.com/watch?v=bKhv0hFiiQo',
      labelVi: '🇱🇦 Clip App LaoViet (Lào)',
      labelEn: '🇱🇦 LaoViet Clip (Laos)',
      badgeVi: 'TRẢI NGHIỆM THỰC TẾ APP NGƯỜI LÀO HỌC TIẾNG VIỆT',
      badgeEn: 'REAL DEMO: LAOVIET LEARNING APP'
    },
    zh: {
      url: '/video/zhviet-video.mp4',
      labelVi: '🇨🇳 Clip App ZHViet (Trung Quốc)',
      labelEn: '🇨🇳 ZHViet Clip (China)',
      badgeVi: 'TRẢI NGHIỆM THỰC TẾ APP NGƯỜI HOA HỌC TIẾNG VIỆT',
      badgeEn: 'REAL DEMO: ZHVIET LEARNING APP'
    },
    kh: {
      url: '', // Chừa sẵn phần đính link YouTube (Ví dụ: https://www.youtube.com/watch?v=...)
      labelVi: '🇰🇭 Clip App KHViet (Khmer)',
      labelEn: '🇰🇭 KHViet Clip (Khmer)',
      badgeVi: 'TRẢI NGHIỆM THỰC TẾ APP NGƯỜI KHMER HỌC TIẾNG VIỆT',
      badgeEn: 'REAL DEMO: KHMERVIET LEARNING APP'
    }
  };

  const quickPhrases = SURVIVAL_PHRASES.slice(0, 5);

  return (
    <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[450px] bg-gradient-to-tr from-cyan-500/15 via-emerald-500/10 to-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 dark:bg-slate-900/90 bg-white border border-cyan-500/30 shadow-md shadow-cyan-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wide text-cyan-700 dark:text-cyan-300 uppercase">
              {t('hero.badge')}
            </span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            <span className="block">
              {language === 'vi' ? 'Nói tiếng Việt thật —' : 'Speak real Vietnamese —'}
            </span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400">
              {language === 'vi' ? 'Ngay từ bài học đầu tiên.' : 'From your very first lesson.'}
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            {t('hero.subtitle')}
          </p>

          {/* Main Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              <Zap className="w-4 h-4 fill-slate-950 group-hover:animate-bounce" />
              <span>{t('hero.cta.trial')}</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 hover:border-cyan-500 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer"
            >
              <Headphones className="w-4 h-4 text-cyan-500" />
              <span>{t('hero.cta.demo')}</span>
            </button>
          </div>

          {/* 4 Realistic Feature Highlights (Cá nhân hóa, 13 ngôn ngữ tailor, 6 thanh, PWA) */}
          <div className="pt-6 sm:pt-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-4xl mx-auto text-left">
            
            {/* 1. Cá nhân hóa */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Sliders className="w-4 h-4 text-cyan-500" />
                <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase">Lộ Trình</span>
              </div>
              <div className="text-slate-900 dark:text-white font-extrabold text-xs sm:text-sm">
                {t('hero.stats.learners')}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {t('hero.stats.learners.sub')}
              </div>
            </div>

            {/* 2. 13 Ngôn ngữ tailor */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Globe2 className="w-4 h-4 text-emerald-500" />
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">13 Ngôn Ngữ</span>
              </div>
              <div className="text-slate-900 dark:text-white font-extrabold text-xs sm:text-sm">
                {t('hero.stats.tailor')}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {t('hero.stats.tailor.sub')}
              </div>
            </div>

            {/* 3. Chuẩn 6 thanh */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold uppercase">Âm Học</span>
              </div>
              <div className="text-slate-900 dark:text-white font-extrabold text-xs sm:text-sm">
                {t('hero.stats.tones')}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {t('hero.stats.tones.sub')}
              </div>
            </div>

            {/* 4. PWA Cài Màn hình */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-purple-500/40 transition-all shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Smartphone className="w-4 h-4 text-purple-500" />
                <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400 font-bold uppercase">Cài Đặt</span>
              </div>
              <div className="text-slate-900 dark:text-white font-extrabold text-xs sm:text-sm">
                {t('hero.stats.pwa')}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {t('hero.stats.pwa.sub')}
              </div>
            </div>

          </div>
        </div>

        {/* Video Player Box (THViet, JPViet, KRViet, LaoViet, ZHViet Real Video Clips) */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
          
          {/* Video App Selector Pills above player */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            {(['th', 'jp', 'kr', 'la', 'zh', 'kh'] as const).map((key) => {
              const isSelected = heroVideoApp === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setHeroVideoApp(key);
                    setIsPlayingHeroVideo(true);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>{language === 'vi' ? heroVideos[key].labelVi : heroVideos[key].labelEn}</span>
                </button>
              );
            })}
          </div>

          <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-cyan-500/20 via-slate-800/40 to-emerald-500/20 border border-cyan-500/30 shadow-2xl overflow-hidden group">
            
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              
              {isPlayingHeroVideo ? (
                heroVideos[heroVideoApp].url ? (
                  heroVideos[heroVideoApp].url.includes('youtube.com') || heroVideos[heroVideoApp].url.includes('youtu.be') ? (
                    <iframe
                      key={heroVideos[heroVideoApp].url}
                      src={`https://www.youtube.com/embed/${
                        heroVideos[heroVideoApp].url.match(/(?:youtu\.be\/|watch\?v=)([\w-]{11})/)?.[1] || 'bKhv0hFiiQo'
                      }?autoplay=1&rel=0`}
                      title="Hero Video Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <video
                      key={heroVideos[heroVideoApp].url}
                      src={heroVideos[heroVideoApp].url}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  /* Reserved YouTube slot for KHViet */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-tr from-[#160A10] via-[#0E1524] to-[#0A1624] space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                      <Video className="w-7 h-7 text-red-400 animate-pulse" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                        KhmerViet • Sẵn Sàng Cổng Nhúng Video YouTube
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white mt-2">
                        Clip Giới Thiệu App Người Khmer Học Tiếng Việt
                      </h3>
                      <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
                        Khu vực này đã được chừa sẵn để đính video clip YouTube. Ứng dụng Web PWA đã chính thức hoạt động tại khviet.vercel.app.
                      </p>
                    </div>
                    <a
                      href="https://khviet.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-500 via-amber-500 to-emerald-400 text-slate-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer"
                    >
                      <span>Khám Phá App KhmerViet (khviet.vercel.app)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )
              ) : (
                <div className="w-full h-full relative flex flex-col justify-between p-5 sm:p-8 bg-gradient-to-tr from-[#080D18] via-[#0D1526] to-[#0A1A24]">
                  
                  {/* Top Bar inside Video Preview */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] font-mono text-cyan-300 font-semibold truncate">
                        {heroVideoApp === 'la' ? 'LAOVIET' : heroVideoApp === 'kh' ? 'KHMERVIET' : `${heroVideoApp.toUpperCase()}VIET`} &amp; VIETREAL 360° Real-World Demo
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-[11px] font-mono font-bold">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>{heroVideoApp === 'kh' ? 'Reserved YouTube Slot' : 'Official Video Clip'}</span>
                    </div>
                  </div>

                  {/* Center Call to Action */}
                  <div className="my-auto text-center space-y-3">
                    <span className="inline-block text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
                      {language === 'vi' ? heroVideos[heroVideoApp].badgeVi : heroVideos[heroVideoApp].badgeEn}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-extrabold text-white">
                      {heroVideoApp === 'kh' 
                        ? 'KhmerViet — Dạy & Học Tiếng Việt Cho Người Khmer'
                        : language === 'vi' ? 'Thực Hành Giao Tiếp Sống Động Cùng Video Giới Thiệu' : 'Interactive Street Scenarios & Phonetic Video Tour'}
                    </h3>
                    <p className="text-xs text-slate-400 max-w-md mx-auto hidden sm:block">
                      {heroVideoApp === 'kh'
                        ? 'Chừa sẵn khu vực đính link YouTube. Bấm để mở cổng video hoặc truy cập thẳng Web PWA.'
                        : language === 'vi' ? 'Bấm nút phát bên dưới để xem trực tiếp video quảng cáo thực tế.' : 'Click play below to watch the official promotional video clip.'}
                    </p>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] hover:bg-black/15 transition-all">
                    <button
                      onClick={() => setIsPlayingHeroVideo(true)}
                      className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 shadow-2xl shadow-cyan-500/50 hover:scale-110 active:scale-95 transition-transform cursor-pointer group/btn"
                      aria-label="Play video"
                    >
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-slate-950 ml-1 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Bottom bar */}
                  <div className="flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px] font-mono text-slate-400 relative z-10">
                    <span className="text-cyan-400">● Video: THViet • JPViet • KRViet • LaoViet • ZHViet • KHViet</span>
                    <button
                      onClick={onOpenVideoTour}
                      className="text-emerald-400 hover:underline flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <span>Mở phòng mô phỏng 360°</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>
        </div>

        {/* Quick Survival Phrases Bar */}
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md">
            
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{t('hero.quick.title')}</span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono hidden sm:inline">
                {language === 'vi' ? 'Bấm để nghe & luyện giọng:' : 'Click to test phrase:'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {quickPhrases.map((phrase) => (
                <button
                  key={phrase.id}
                  onClick={() => onSelectPhrase(phrase)}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-left transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-base group-hover:scale-110 transition-transform shrink-0">
                      {phrase.icon}
                    </span>
                    <div className="truncate">
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 truncate">
                        {language === 'vi' ? phrase.categoryLabelVi : phrase.categoryLabelEn}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate font-mono">
                        {phrase.vietnamese.split(',')[0]}
                      </div>
                    </div>
                  </div>
                  <Volume2 className="w-3 h-3 text-slate-400 group-hover:text-cyan-500 shrink-0 ml-1" />
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
