import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ToneWaveSimulator } from '../components/ToneWaveSimulator';
import { SURVIVAL_PHRASES } from '../data/ecosystem';
import { PhraseDetailModal } from '../components/PhraseDetailModal';
import { SurvivalPhrase } from '../types';
import { ArrowLeft, Headphones, Sparkles, Volume2, Mic, Play, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DemoPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedPhrase, setSelectedPhrase] = useState<SurvivalPhrase | null>(null);

  return (
    <div className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Trang Chủ Hệ Sinh Thái</span>
          </Link>
        </div>

        {/* Demo Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#10192A] to-[#0A1A22] border border-cyan-500/40 shadow-2xl mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold uppercase">
              <Headphones className="w-3.5 h-3.5" />
              <span>Acoustic Frequency & Voice Pitch Lab</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Phòng Luyện Âm & Mô Phỏng Sóng Thanh Điệu Trực Tuyến
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Trải nghiệm thực tế công nghệ đo cao độ âm thanh (Pitch Contour FFT) của VIETREAL 360°. Nghe sự biến thiên tần số của 6 thanh điệu Việt Nam và thực hành các mẫu câu sinh tồn phổ biến nhất của người nước ngoài tại Việt Nam.
            </p>
          </div>
        </div>

        {/* Tone Wave Simulator Component */}
        <ToneWaveSimulator />

        {/* Survival Phrases Practice Lab */}
        <div className="my-16 p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold">
              Thực Hành Khẩu Ngữ Đời Sống
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Kho Câu Giao Tiếp Sinh Tồn Đầy Đủ
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Nhấp vào từng câu để mở bảng phiên âm chi tiết, nghe từng thanh và xem bí kíp văn hóa:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SURVIVAL_PHRASES.map((phrase) => (
              <button
                key={phrase.id}
                onClick={() => setSelectedPhrase(phrase)}
                className="p-5 rounded-2xl bg-slate-950/80 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/50 text-left transition-all cursor-pointer flex flex-col justify-between group h-52 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {phrase.icon}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase font-bold">
                      {phrase.categoryLabelVi}
                    </span>
                  </div>

                  <div className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    "{phrase.vietnamese}"
                  </div>

                  <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                    🇬🇧 {phrase.english}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-amber-300 truncate max-w-[170px]">{phrase.phonetic}</span>
                  <span className="text-cyan-400 font-bold group-hover:underline flex items-center gap-1">
                    Luyện âm →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Phrase Detail Modal */}
        <PhraseDetailModal
          phrase={selectedPhrase}
          onClose={() => setSelectedPhrase(null)}
        />

      </div>
    </div>
  );
};
