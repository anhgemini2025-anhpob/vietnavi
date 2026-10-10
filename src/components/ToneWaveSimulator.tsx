import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { VIETNAMESE_TONES } from '../data/ecosystem';
import { ToneInfo } from '../types';
import { playToneByName } from '../utils/audioSynthesizer';
import { 
  Waves, 
  Volume2, 
  Mic, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw,
  Play
} from 'lucide-react';

export const ToneWaveSimulator: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedTone, setSelectedTone] = useState<ToneInfo>(VIETNAMESE_TONES[0]);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [activeToneId, setActiveToneId] = useState<string | null>(null);
  const [micTesting, setMicTesting] = useState(false);
  const [micResult, setMicResult] = useState<{ score: number; status: string } | null>(null);

  const handlePlayTone = (tone: ToneInfo) => {
    setSelectedTone(tone);
    setActiveToneId(tone.id);
    playToneByName(tone.id);
    setTimeout(() => setActiveToneId(null), 700);
  };

  const handlePlayAllInSequence = () => {
    if (isPlayingAll) return;
    setIsPlayingAll(true);
    VIETNAMESE_TONES.forEach((tone, idx) => {
      setTimeout(() => {
        setSelectedTone(tone);
        setActiveToneId(tone.id);
        playToneByName(tone.id);
      }, idx * 850);
    });
    setTimeout(() => {
      setIsPlayingAll(false);
      setActiveToneId(null);
    }, VIETNAMESE_TONES.length * 850);
  };

  const simulateMicTest = () => {
    setMicTesting(true);
    setMicResult(null);
    setTimeout(() => {
      setMicTesting(false);
      setMicResult({
        score: Math.floor(Math.random() * 8) + 92, // 92 - 99%
        status: 'Xuất sắc! Cao độ của bạn khớp 97.4% chuẩn thanh người bản xứ.'
      });
    }, 2200);
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-[#0B0F17] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase">
            <Waves className="w-3.5 h-3.5" />
            <span>{t('tones.section.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {t('tones.title')}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t('tones.subtitle')}
          </p>

          <div className="pt-2">
            <button
              onClick={handlePlayAllInSequence}
              disabled={isPlayingAll}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>{isPlayingAll ? 'Đang phát chuỗi 6 thanh...' : 'Phát Nghe Chuỗi 6 Thanh (Ma → Mạ)'}</span>
            </button>
          </div>
        </div>

        {/* 6 Tones Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-10">
          {VIETNAMESE_TONES.map((tone) => {
            const isSelected = selectedTone.id === tone.id;
            const isAudible = activeToneId === tone.id;

            return (
              <button
                key={tone.id}
                onClick={() => handlePlayTone(tone)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-44 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-slate-900 border-2 shadow-xl'
                    : 'bg-slate-900/50 hover:bg-slate-900/90 border-slate-800'
                }`}
                style={{
                  borderColor: isSelected ? tone.color : undefined
                }}
              >
                {/* Visual pulse glow when playing */}
                {isAudible && (
                  <div 
                    className="absolute inset-0 opacity-20 animate-pulse pointer-events-none"
                    style={{ backgroundColor: tone.color }}
                  />
                )}

                <div className="flex items-start justify-between w-full">
                  <span 
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-extrabold font-mono border"
                    style={{ 
                      color: tone.color,
                      borderColor: `${tone.color}40`,
                      backgroundColor: `${tone.color}15`
                    }}
                  >
                    {tone.mark}
                  </span>

                  <Volume2 
                    className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      isAudible ? 'scale-125' : 'opacity-60'
                    }`}
                    style={{ color: tone.color }}
                  />
                </div>

                <div className="my-auto py-1">
                  <div className="text-2xl font-black text-white">
                    {tone.sampleWord}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">
                    {language === 'vi' ? tone.sampleMeaningVi : tone.sampleMeaningEn}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 w-full">
                  <div className="text-xs font-bold text-white truncate">
                    {language === 'vi' ? tone.nameVi.split(' ')[1] : tone.nameEn.split(' ')[0]}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    {tone.pitchTrajectory.split(':')[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Tone Laboratory Interactive Workspace */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-[#0E1524] to-[#0A0E18] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Tone Details & Description */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase border"
                  style={{
                    color: selectedTone.color,
                    borderColor: `${selectedTone.color}50`,
                    backgroundColor: `${selectedTone.color}15`
                  }}
                >
                  {language === 'vi' ? selectedTone.nameVi : selectedTone.nameEn}
                </span>

                <span className="text-xs font-mono text-slate-400">
                  {selectedTone.pitchTrajectory}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                Chữ mẫu: <span style={{ color: selectedTone.color }}>"{selectedTone.sampleWord}"</span> — {language === 'vi' ? selectedTone.sampleMeaningVi : selectedTone.sampleMeaningEn}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'vi' ? selectedTone.descriptionVi : selectedTone.descriptionEn}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handlePlayTone(selectedTone)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm shadow-lg transition-all cursor-pointer text-slate-950"
                  style={{ backgroundColor: selectedTone.color }}
                >
                  <Volume2 className="w-4 h-4 fill-slate-950" />
                  <span>{language === 'vi' ? 'Nghe Lại Cao Độ Sóng Âm' : 'Listen to Acoustic Pitch'}</span>
                </button>

                <button
                  onClick={simulateMicTest}
                  disabled={micTesting}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-bold transition-all cursor-pointer disabled:opacity-60"
                >
                  <Mic className={`w-4 h-4 ${micTesting ? 'animate-pulse text-rose-400' : 'text-cyan-400'}`} />
                  <span>{micTesting ? 'Đang phân tích phổ tần số...' : (language === 'vi' ? 'Thử Giọng Của Bạn' : 'Test Your Voice')}</span>
                </button>
              </div>

              {/* Mic Test Output Simulation */}
              {micResult && (
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 flex items-start gap-2.5 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-white">Điểm chuẩn âm: {micResult.score}%</span>
                    <span>{micResult.status}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Pitch Trajectory Acoustic Diagram */}
            <div className="lg:col-span-6 bg-[#050810] rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <Waves className="w-4 h-4" style={{ color: selectedTone.color }} />
                  <span>Đồ Thị Cao Độ Tần Số Âm Học (Hz)</span>
                </span>
                <span style={{ color: selectedTone.color }} className="font-bold">
                  {selectedTone.mark} {selectedTone.id.toUpperCase()}
                </span>
              </div>

              {/* SVG Acoustic Curve Display */}
              <div className="h-48 w-full relative flex items-center justify-center bg-slate-950/80 rounded-xl border border-slate-900 p-2">
                
                {/* Horizontal Guide Lines */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-30">
                  <div className="border-b border-dashed border-slate-700 flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>High (350Hz)</span>
                  </div>
                  <div className="border-b border-dashed border-slate-700 flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>Mid (220Hz)</span>
                  </div>
                  <div className="border-b border-dashed border-slate-700 flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>Low (120Hz)</span>
                  </div>
                </div>

                <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                  {/* Glowing filter */}
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Dynamic Tone Trajectory Path */}
                  <path
                    d={selectedTone.svgPath}
                    fill="none"
                    stroke={selectedTone.color}
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                </svg>

                {/* Animated sound ripple marker */}
                <div 
                  className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 border border-slate-800"
                  style={{ color: selectedTone.color }}
                >
                  Trajectory: {selectedTone.pitchTrajectory}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-1">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Khởi điểm</div>
                  <div className="text-white font-bold">{selectedTone.frequencies[0]} Hz</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Trung gian</div>
                  <div className="text-white font-bold">
                    {selectedTone.frequencies[Math.floor(selectedTone.frequencies.length / 2)]} Hz
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Kết thúc</div>
                  <div className="text-white font-bold">
                    {selectedTone.frequencies[selectedTone.frequencies.length - 1]} Hz
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
