import React, { useState } from 'react';
import { SurvivalPhrase } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { playToneByName } from '../utils/audioSynthesizer';
import { X, Volume2, Sparkles, Lightbulb, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

interface PhraseDetailModalProps {
  phrase: SurvivalPhrase | null;
  onClose: () => void;
}

export const PhraseDetailModal: React.FC<PhraseDetailModalProps> = ({ phrase, onClose }) => {
  const { language } = useLanguage();
  const [playingToneIndex, setPlayingToneIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  if (!phrase) return null;

  const playEntirePhraseTones = () => {
    phrase.toneSequence.forEach((tone, idx) => {
      setTimeout(() => {
        setPlayingToneIndex(idx);
        playToneByName(tone);
      }, idx * 450);
    });
    setTimeout(() => {
      setPlayingToneIndex(null);
    }, phrase.toneSequence.length * 450);
  };

  const playSingleTone = (toneName: string, idx: number) => {
    setPlayingToneIndex(idx);
    playToneByName(toneName);
    setTimeout(() => setPlayingToneIndex(null), 600);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phrase.vietnamese);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#0F172A] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Glow */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400" />

        <div className="p-6 sm:p-8">
          
          {/* Header Row */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2.5 rounded-xl bg-slate-800/90 border border-slate-700">
                {phrase.icon}
              </span>
              <div>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase">
                  {language === 'vi' ? phrase.categoryLabelVi : phrase.categoryLabelEn}
                </span>
                <h3 className="text-lg font-bold text-slate-100 mt-1">
                  {language === 'vi' ? phrase.situationVi : phrase.situationEn}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Phrase Card */}
          <div className="bg-[#0B0F17] rounded-xl p-5 border border-slate-800 mb-6">
            <div className="text-xs text-slate-400 uppercase font-mono tracking-wider mb-1 flex items-center justify-between">
              <span>{language === 'vi' ? 'Tiếng Việt Bản Xứ' : 'Native Vietnamese'}</span>
              <button
                onClick={copyToClipboard}
                className="text-[11px] text-cyan-400 hover:underline cursor-pointer"
              >
                {copied ? (language === 'vi' ? '✓ Đã sao chép' : '✓ Copied!') : (language === 'vi' ? 'Sao chép câu' : 'Copy phrase')}
              </button>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 mb-2">
              "{phrase.vietnamese}"
            </div>
            <div className="text-sm font-medium text-slate-300 mb-3">
              🇬🇧 {phrase.english}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs text-amber-300 font-mono">
                🗣️ Phiên âm Expat: <span className="text-white italic">{phrase.phonetic}</span>
              </div>

              <button
                onClick={playEntirePhraseTones}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition-all cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span>{language === 'vi' ? 'Nghe Mô Phỏng Điệu' : 'Play Pitch Contour'}</span>
              </button>
            </div>
          </div>

          {/* Tone Contour Visualizer for this phrase */}
          <div className="mb-6">
            <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'vi' ? 'Trình tự thanh điệu trong câu (bấm để nghe từng chữ):' : 'Tone sequence per word (click each tone to hear pitch):'}</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {phrase.vietnamese.replace(/[!,?.]/g, '').split(' ').map((word, idx) => {
                const toneName = phrase.toneSequence[idx] || 'ngang';
                const isPlaying = playingToneIndex === idx;

                const toneColors: Record<string, string> = {
                  ngang: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300',
                  huyen: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300',
                  sac: 'border-amber-500/50 bg-amber-500/10 text-amber-300',
                  hoi: 'border-purple-500/50 bg-purple-500/10 text-purple-300',
                  nga: 'border-pink-500/50 bg-pink-500/10 text-pink-300',
                  nang: 'border-red-500/50 bg-red-500/10 text-red-300'
                };

                return (
                  <button
                    key={idx}
                    onClick={() => playSingleTone(toneName, idx)}
                    className={`px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer flex flex-col items-center ${
                      isPlaying
                        ? 'ring-2 ring-cyan-400 scale-105 bg-cyan-500/30'
                        : toneColors[toneName] || 'border-slate-700 bg-slate-800 text-slate-300'
                    }`}
                  >
                    <span className="font-bold text-white">{word}</span>
                    <span className="text-[10px] uppercase font-mono opacity-80">{toneName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Expat Cultural Survival Tip */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 block mb-0.5">
                {language === 'vi' ? 'Bí Quyết Văn Hóa Bản Địa (Expat Secret):' : 'Local Cultural Nuance (Expat Secret):'}
              </strong>
              <span>
                {language === 'vi' ? phrase.expatTipVi : phrase.expatTipEn}
              </span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              VIETREAL 360° Real-World Lab
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer"
            >
              {language === 'vi' ? 'Đóng cửa sổ' : 'Close'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
