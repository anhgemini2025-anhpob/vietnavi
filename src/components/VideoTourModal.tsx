import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2, RotateCcw, Video, Radio } from 'lucide-react';
import { playToneByName } from '../utils/audioSynthesizer';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [mode, setMode] = useState<'th' | 'jp' | 'kr' | 'la' | 'zh' | 'kh' | 'in' | 'simulation'>('th');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoClips: Record<'th' | 'jp' | 'kr' | 'la' | 'zh' | 'kh' | 'in', { url: string; label: string }> = {
    th: { url: '/video/thviet-video.mp4', label: '🇹🇭 THViet (35s)' },
    jp: { url: '/video/jpviet-video.mp4', label: '🇯🇵 JPViet Clip' },
    kr: { url: '/video/krviet-video.mp4', label: '🇰🇷 KRViet Clip' },
    la: { url: 'https://www.youtube.com/watch?v=bKhv0hFiiQo', label: '🇱🇦 LaoViet Clip' },
    zh: { url: '/video/zhviet-video.mp4', label: '🇨🇳 ZHViet Clip' },
    in: { url: 'https://www.youtube.com/watch?v=Vy9qnonnyWs', label: '🇮🇳 InViet Clip' },
    kh: { url: '', label: '🇰🇭 KHViet Clip' }
  };

  const scenes = [
    {
      titleVi: 'Cảnh 1: Gọi phở gia truyền tại quán ăn vỉa hè',
      titleEn: 'Scene 1: Ordering Pho at a local street stall',
      vietnamese: 'Em ơi, cho anh một tô phở bò tái chín, nhiều ớt không hành!',
      english: 'Sister, one rare & well-done beef pho, lots of chili, no scallions please!',
      pitch: 'Sắc → Ngang → Huyền → Sắc → Nặng',
      tag: 'Ẩm thực đường phố'
    },
    {
      titleVi: 'Cảnh 2: Trả giá mua quà lưu niệm ở Chợ Bến Thành',
      titleEn: 'Scene 2: Bargaining for souvenirs at Ben Thanh Market',
      vietnamese: 'Chị ơi, cái nón lá này bớt cho em hai mươi ngàn được không?',
      english: 'Sister, could you discount 20,000 VND on this conical hat for me?',
      pitch: 'Ngang → Sắc → Ngang → Sắc → Nặng',
      tag: 'Kỹ năng đi chợ'
    },
    {
      titleVi: 'Cảnh 3: Gặp gỡ đối tác tại văn phòng quận 1',
      titleEn: 'Scene 3: Greeting partners at District 1 corporate office',
      vietnamese: 'Rất hân hạnh được hợp tác cùng quý công ty trong dự án này!',
      english: 'It is an immense pleasure to collaborate with your firm on this project!',
      pitch: 'Nặng → Ngang → Nặng → Nặng → Sắc',
      tag: 'Tiếng Việt thương mại'
    }
  ];

  useEffect(() => {
    if (!isOpen || mode !== 'simulation') return;
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentScene((prev) => (prev + 1) % scenes.length);
        if (!isMuted) {
          playToneByName('sac');
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, isMuted, mode, scenes.length]);

  if (!isOpen) return null;

  const current = scenes[currentScene];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#090D16] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3.5 bg-slate-900/90 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase">
              VIDEO SHOWCASE • VIETREAL 360°
            </span>

            {/* Mode Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800">
              {(['th', 'jp', 'kr', 'la', 'zh', 'in', 'kh'] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setMode(k)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    mode === k
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Video className="w-3 h-3" />
                  <span>{videoClips[k].label}</span>
                </button>
              ))}
              <button
                onClick={() => setMode('simulation')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                  mode === 'simulation'
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Radio className="w-3 h-3" />
                <span>360° Sim</span>
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Video Canvas Area */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-slate-950 via-[#0B0F17] to-cyan-950/40 flex items-center justify-center overflow-hidden">
          
          {mode !== 'simulation' ? (
            /* Real Video Player */
            videoClips[mode].url ? (
              videoClips[mode].url.includes('youtube.com') || videoClips[mode].url.includes('youtu.be') ? (
                <iframe
                  key={videoClips[mode].url}
                  src={`https://www.youtube.com/embed/${
                    videoClips[mode].url.match(/(?:youtu\.be\/|watch\?v=)([\w-]{11})/)?.[1] || 'bKhv0hFiiQo'
                  }?autoplay=1&rel=0`}
                  title={videoClips[mode].label}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <video
                  key={videoClips[mode].url}
                  ref={videoRef}
                  src={videoClips[mode].url}
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
                </a>
              </div>
            )
          ) : (
            /* Interactive Simulation Mode */
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10">
              
              {/* Top Bar inside Video */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30 text-xs text-cyan-300 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{current.tag}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <div className="px-2.5 py-1 rounded bg-black/70 border border-slate-800 text-[11px] font-mono text-emerald-400">
                    HD 1080p
                  </div>
                </div>
              </div>

              {/* Center Dynamic Tone Wave Overlay */}
              <div className="my-auto text-center max-w-2xl mx-auto space-y-4">
                <div className="text-xs font-mono text-slate-400 tracking-widest uppercase">
                  {language === 'vi' ? current.titleVi : current.titleEn}
                </div>

                {/* Speech Subtitles with Neon Glow */}
                <div className="p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-cyan-500/40 shadow-xl shadow-cyan-950/40">
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-emerald-300">
                    "{current.vietnamese}"
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
                    🇬🇧 {current.english}
                  </p>
                </div>

                {/* Pitch waveform indicator */}
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300 font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Pitch Wave: {current.pitch}</span>
                </div>
              </div>

              {/* Bottom Controls Bar inside Video */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/30 cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setCurrentScene((prev) => (prev + 1) % scenes.length)}
                    className="p-2 rounded-xl bg-black/60 hover:bg-black/90 border border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer text-xs flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{language === 'vi' ? 'Đổi tình huống' : 'Next Scene'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {scenes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentScene(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentScene === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer Info */}
        <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              {language === 'vi' 
                ? 'Video chính thức hiện có: THViet, JPViet, KRViet, LaoViet, ZHViet & KHViet (sẵn sàng cổng YouTube).' 
                : 'Official Videos: THViet, JPViet, KRViet, LaoViet, ZHViet & KHViet (YouTube-ready).'}
            </span>
          </div>

          <a
            href="https://vietreal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold hover:brightness-110 transition-all text-xs flex items-center gap-1.5 shrink-0"
          >
            <span>{language === 'vi' ? 'Thực hành trên VIETREAL App' : 'Launch VIETREAL App'}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
