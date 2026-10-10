import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Globe, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Download, 
  MessageSquare, 
  Sparkles, 
  Home, 
  Compass, 
  Headphones, 
  Users, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { PwaInstallModal } from './PwaInstallModal';

interface HeaderProps {
  onOpenConsultation?: () => void;
  onOpenTrial?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenTrial }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPwaModalOpen, setIsPwaModalOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { label: t('nav.home'), path: '/', hash: '#top', icon: Home },
    { label: t('nav.vietreal'), path: '/vietreal', hash: '#vietreal', icon: Zap },
    { label: t('nav.ecosystem'), path: '/ecosystem', hash: '#ecosystem', icon: Globe },
    { label: t('nav.tones'), path: '/demo', hash: '#tones', icon: Headphones },
    { label: t('nav.pronouns'), path: '/vietreal', hash: '#pronouns', icon: Users },
  ];

  const handleConsultClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const el = document.getElementById('contact') || document.getElementById('request');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0B0F17]/90 dark:bg-[#0B0F17]/90 bg-white/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 transition-colors shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Brand Identity */}
            <Link to="/" className="flex items-center gap-3 sm:gap-3.5 group text-left shrink-0">
              <div className="relative">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-900 border border-slate-700/60 dark:border-cyan-500/30 p-1 shadow-md group-hover:border-cyan-400 transition-colors flex items-center justify-center overflow-hidden">
                  <img 
                    src="/brand/logo.jpg" 
                    alt="DUY ANH LAB" 
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-[#0B0F17]"></span>
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold tracking-tight text-slate-900 dark:text-white text-base sm:text-lg group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    VIETREAL <span className="text-cyan-600 dark:text-cyan-400">360°</span>
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 hidden md:inline-block font-semibold">
                    VIETNAVI
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">DUY ANH LAB</span>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">digital</span>
                </div>
              </div>
            </Link>

            {/* Middle: Clean Pills Desktop Nav with Icons */}
            <nav className="hidden xl:flex items-center gap-1.5">
              {navLinks.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={idx}
                    to={isHome ? item.hash : item.path}
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick Action Controls */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              
              {/* Light / Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                type="button"
                className="p-2 sm:px-2.5 sm:py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all text-xs font-semibold cursor-pointer shadow-sm flex items-center gap-1.5"
                title={theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark')}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform" />
                )}
                <span className="hidden md:inline text-[11px] font-mono">
                  {theme === 'dark' ? 'Tối' : 'Sáng'}
                </span>
              </button>

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                type="button"
                className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all hover:bg-slate-200 dark:hover:bg-slate-800 shadow-sm cursor-pointer"
                title="Toggle Vietnamese / English"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{language === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}</span>
              </button>

              {/* Install PWA Button (Matching lamchame style) */}
              <button
                onClick={() => setIsPwaModalOpen(true)}
                type="button"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-cyan-500" />
                <span>{t('nav.installPwa')}</span>
              </button>

              {/* Consultation / Trao Đổi CTA (Matching amber button in screenshot 2) */}
              <button
                onClick={handleConsultClick}
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs sm:text-sm font-extrabold shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                <span>{t('nav.consultation')}</span>
              </button>

              {/* Mobile Drawer Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 xl:hidden cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/98 dark:bg-[#0B0F17]/98 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={idx}
                    to={isHome ? item.hash : item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className="w-4 h-4 text-cyan-500" />
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsPwaModalOpen(true);
                }}
                className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>{language === 'vi' ? 'Hướng dẫn ghim App ra màn hình điện thoại' : 'How to Pin App to Phone Home Screen'}</span>
              </button>

              <button
                onClick={handleConsultClick}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-extrabold text-xs shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>{t('nav.consultation')}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* PWA Install Modal */}
      <PwaInstallModal
        isOpen={isPwaModalOpen}
        onClose={() => setIsPwaModalOpen(false)}
      />
    </>
  );
};
