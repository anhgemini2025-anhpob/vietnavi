import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, Sparkles, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation?: () => void;
  onOpenTrial?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenTrial }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { label: t('nav.vietreal'), path: '/vietreal', hash: '#vietreal' },
    { label: t('nav.ecosystem'), path: '/ecosystem', hash: '#ecosystem' },
    { label: t('nav.tones'), path: '/demo', hash: '#demo' },
    { label: t('nav.tryFree'), path: '/request', hash: '#onboard' },
    { label: t('nav.consultation'), path: '/request', hash: '#request' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0F17]/85 backdrop-blur-xl border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Badge */}
          <Link to="/" className="flex items-center gap-3.5 group text-left">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#06B6D4] via-[#10B981] to-[#F59E0B] p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center overflow-hidden">
                  <img 
                    src="/brand/logo.jpg" 
                    alt="DUY ANH LAB" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if logo image missing
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-sm tracking-wider">
                    VR
                  </span>
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0B0F17]"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-wide text-white text-base sm:text-lg group-hover:text-cyan-400 transition-colors">
                  VIETREAL <span className="text-cyan-400">360°</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hidden sm:inline-block">
                  ECOSYSTEM
                </span>
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
                <span>DUY ANH LAB</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400">digital</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item, idx) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={idx}
                  to={isHome ? item.hash : item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 text-xs font-semibold transition-all hover:bg-slate-800 shadow-sm"
              title="Toggle Vietnamese / English"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}</span>
              <span className="text-slate-500 text-[10px]">/</span>
              <span className="text-slate-400 text-[11px]">{language === 'vi' ? 'EN' : 'VI'}</span>
            </button>

            {/* Trial CTA */}
            {onOpenTrial ? (
              <button
                onClick={onOpenTrial}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>{language === 'vi' ? 'Học Thử Miễn Phí' : 'Start Free Trial'}</span>
              </button>
            ) : (
              <Link
                to="/request"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>{language === 'vi' ? 'Học Thử Miễn Phí' : 'Start Free Trial'}</span>
              </Link>
            )}

            {/* Request Consultation */}
            {onOpenConsultation ? (
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-slate-200 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <span>{language === 'vi' ? 'Yêu Cầu Tư Vấn' : 'Request Demo'}</span>
              </button>
            ) : (
              <Link
                to="/request"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
              >
                <span>{language === 'vi' ? 'Yêu Cầu Tư Vấn' : 'Request Demo'}</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button & Mobile Lang */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400"
            >
              {language === 'vi' ? '🇻🇳' : '🇬🇧'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F17]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                to={isHome ? item.hash : item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <Link
              to="/request"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-md"
            >
              {language === 'vi' ? 'Học Thử Miễn Phí (1 Phút)' : 'Start Free Trial (1 Min)'}
            </Link>
            <Link
              to="/request"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm"
            >
              {language === 'vi' ? 'Yêu Cầu Tư Vấn & Doanh Nghiệp' : 'Request Demo & Enterprise'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
