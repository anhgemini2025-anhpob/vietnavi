import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Waves, 
  Users2, 
  Bot, 
  Smartphone, 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Volume2,
  Mic,
  Activity,
  Layers,
  Download
} from 'lucide-react';
import { playToneByName } from '../utils/audioSynthesizer';

export const CoreVietrealSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [learnerToneScore, setLearnerToneScore] = useState<number>(98);
  const [selectedPronounPair, setSelectedPronounPair] = useState<'peer' | 'elder' | 'service'>('peer');

  const pillars = [
    {
      id: 'tone-wave',
      icon: Waves,
      title: t('pillar1.title'),
      desc: t('pillar1.desc'),
      tag: 'Acoustic AI Engine',
      color: 'from-cyan-500 to-blue-500',
      badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300'
    },
    {
      id: 'pronouns',
      icon: Users2,
      title: t('pillar2.title'),
      desc: t('pillar2.desc'),
      tag: 'Social Hierarchy Tree',
      color: 'from-emerald-500 to-teal-500',
      badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
    },
    {
      id: 'roleplay',
      icon: Bot,
      title: t('pillar3.title'),
      desc: t('pillar3.desc'),
      tag: '50+ Real Scenarios',
      color: 'from-amber-500 to-orange-500',
      badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-300'
    },
    {
      id: 'pwa',
      icon: Smartphone,
      title: t('pillar4.title'),
      desc: t('pillar4.desc'),
      tag: 'Instant Mobile PWA',
      color: 'from-purple-500 to-indigo-500',
      badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-300'
    }
  ];

  return (
    <section id="vietreal" className="py-20 bg-[#0B0F17] relative">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('pillars.section.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {t('pillars.title')}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t('pillars.subtitle')}
          </p>
        </div>

        {/* Hero Feature Card Container */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0E1524] to-[#0A0E18] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40">
          
          {/* Top Row: App Title & Launch App CTA */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 text-xs font-mono font-extrabold uppercase">
                  FLAGSHIP CORE
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Engineered by DUY ANH LAB • digital
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                VIETREAL 360° — Dạy Tiếng Việt Thực Chiến
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Nền tảng học tiếng Việt qua tình huống thực chiến đầu tiên tại Việt Nam kết hợp thuật toán âm học phân tích phổ tần số giọng nói và ma trận xưng hô gia đình.
              </p>
            </div>

            <a
              href="https://vietreal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
            >
              <span>{t('pillars.cta')}</span>
              <ExternalLink className="w-4 h-4 text-slate-950" />
            </a>
          </div>

          {/* 4 Pillars Interactive Tabs & Visualizers */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: 4 Pillars Selector Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = activeTab === idx;

                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all border cursor-pointer flex items-start gap-4 ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-900/40 hover:bg-slate-800/50 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className={`p-3 rounded-xl shrink-0 ${
                      isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold ${pillar.badgeColor}`}>
                          {pillar.tag}
                        </span>
                        {isSelected && (
                          <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1 font-bold">
                            Active <ArrowRight className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <h4 className={`text-base font-bold transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300'
                      }`}>
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                        {pillar.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Col: Deep-Dive Visual Showcase for Active Tab */}
            <div className="lg:col-span-7 rounded-2xl bg-[#090E17] border border-cyan-500/30 p-6 sm:p-8 min-h-[440px] flex flex-col justify-between">
              
              {/* TAB 0: AI Pitch & Tone Wave Correction */}
              {activeTab === 0 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <Activity className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm font-bold text-white">
                        {language === 'vi' ? 'Mô Phỏng Trực Quan Đoạn Sóng Cao Độ (Acoustic Pitch Curve)' : 'Acoustic Pitch Curve Visualizer'}
                      </span>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      Real-time Hz FFT
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'vi'
                      ? 'Người nước ngoài thường mắc lỗi "nói tiếng Việt thành tiếng Anh" vì áp đặt ngữ điệu câu. VIETREAL vẽ trực tiếp đường tần số giọng của bạn đè lên đường chuẩn của người bản xứ.'
                      : 'Foreigners commonly superimpose English sentence intonation onto Vietnamese words. VIETREAL overlays your voice frequency directly onto native speaker acoustic contours.'}
                  </p>

                  {/* Pitch Wave Graphic Visualizer */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#050810] border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block" />
                        <span className="text-cyan-300">Target Native: Má (Rising ~340Hz)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                        <span className="text-emerald-300">Learner Voice: 338Hz</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                        98.5% MATCH
                      </span>
                    </div>

                    {/* SVG Wave Visual */}
                    <div className="h-32 w-full relative flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                        {/* Grid lines */}
                        <line x1="0" y1="30" x2="400" y2="30" stroke="#1e293b" strokeDasharray="4 4" />
                        <line x1="0" y1="60" x2="400" y2="60" stroke="#1e293b" strokeDasharray="4 4" />
                        <line x1="0" y1="90" x2="400" y2="90" stroke="#1e293b" strokeDasharray="4 4" />
                        
                        {/* Native Pitch curve (Cyan) */}
                        <path
                          d="M 20 95 C 100 90, 240 45, 380 20"
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        {/* Learner Pitch curve (Emerald) */}
                        <path
                          d="M 20 98 C 100 88, 230 48, 380 22"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeDasharray="6 3"
                          strokeLinecap="round"
                        />
                      </svg>
                      
                      <div className="absolute top-2 right-4 text-[11px] font-mono text-cyan-400 bg-black/60 px-2 py-0.5 rounded border border-cyan-500/30">
                        Thanh Sắc (Sharp High)
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-900 text-xs">
                      <button
                        onClick={() => playToneByName('sac')}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold hover:bg-cyan-500/30 transition-colors cursor-pointer"
                      >
                        <Volume2 className="w-4 h-4 text-cyan-400" />
                        <span>{language === 'vi' ? 'Nghe âm thanh mẫu (Má)' : 'Play Sample Frequency'}</span>
                      </button>

                      <span className="text-slate-400 font-mono text-[11px]">
                        Latency: &lt;15ms
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 1: Contextual Pronoun Matrix */}
              {activeTab === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <Users2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-bold text-white">
                        {language === 'vi' ? 'Ma Trận Đại Từ Xưng Hô Văn Hóa (Pronoun Engine)' : 'Relational Pronoun Engine'}
                      </span>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      Context Sensitive
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'vi'
                      ? 'Tiếng Anh chỉ có "You" và "I", nhưng tiếng Việt có cả một hệ thống xưng hô gia đình mở rộng ra xã hội. Gọi sai đại từ sẽ bị coi là thô lỗ hoặc xa cách. VIETREAL dạy bạn cách xưng hô chính xác từng bối cảnh.'
                      : 'Unlike the flat "You & I" in English, Vietnamese projects family kinship terms onto daily society. VIETREAL’s decision matrix resolves age, gender, and social status in 1 second.'}
                  </p>

                  {/* Interactive Mini Pronoun Matrix Simulator */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#050810] border border-slate-800 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span>Chọn tình huống giao tiếp:</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setSelectedPronounPair('peer')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                          selectedPronounPair === 'peer'
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                            : 'bg-slate-800/60 text-slate-400 border-slate-700'
                        }`}
                      >
                        Đồng nghiệp / Bạn bè
                      </button>
                      <button
                        onClick={() => setSelectedPronounPair('service')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                          selectedPronounPair === 'service'
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                            : 'bg-slate-800/60 text-slate-400 border-slate-700'
                        }`}
                      >
                        Quán ăn / Bồi bàn
                      </button>
                      <button
                        onClick={() => setSelectedPronounPair('elder')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                          selectedPronounPair === 'elder'
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                            : 'bg-slate-800/60 text-slate-400 border-slate-700'
                        }`}
                      >
                        Bảo vệ / Người lớn tuổi
                      </button>
                    </div>

                    {/* Result Output Card */}
                    <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-2">
                      {selectedPronounPair === 'peer' && (
                        <>
                          <div className="font-bold text-white flex items-center justify-between">
                            <span>Xưng hô: <span className="text-emerald-400">Anh / Em</span> hoặc <span className="text-cyan-400">Mình / Bạn</span></span>
                            <span className="text-slate-400 font-mono">Bình đẳng / Thân mật</span>
                          </div>
                          <p className="text-slate-300 italic">"Hôm nay mình cùng đi ăn trưa nhé anh?"</p>
                        </>
                      )}
                      {selectedPronounPair === 'service' && (
                        <>
                          <div className="font-bold text-white flex items-center justify-between">
                            <span>Xưng hô: Gọi phục vụ là <span className="text-emerald-400">Em ơi</span> - Mình tự xưng <span className="text-cyan-400">Anh/Chị</span></span>
                            <span className="text-slate-400 font-mono">Lịch sự & Tự nhiên</span>
                          </div>
                          <p className="text-slate-300 italic">"Em ơi, cho anh xin thêm đá và trà đá nhé!"</p>
                        </>
                      )}
                      {selectedPronounPair === 'elder' && (
                        <>
                          <div className="font-bold text-white flex items-center justify-between">
                            <span>Xưng hô: Gọi đối phương là <span className="text-emerald-400">Chú / Cô / Bác</span> - Tự xưng <span className="text-cyan-400">Cháu</span></span>
                            <span className="text-slate-400 font-mono">Kính trọng cao nhất</span>
                          </div>
                          <p className="text-slate-300 italic">"Cháu chào Chú ạ! Chú cho cháu gửi xe ở đây được không ạ?"</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: 24/7 AI Role-Play Tutor */}
              {activeTab === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <Bot className="w-5 h-5 text-amber-400" />
                      <span className="text-sm font-bold text-white">
                        {language === 'vi' ? 'Trợ Lý Gia Sư AI Nhập Vai Đời Thực (Role-Play Engine)' : 'Real-Life AI Role-Play Engine'}
                      </span>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      24/7 Available
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'vi'
                      ? 'Không áp lực thi cử hay xấu hổ khi phát âm sai. Gia sư AI kiên nhẫn đối thoại bằng giọng Nam / Bắc tự nhiên, chỉnh sửa thanh điệu và gợi ý cách đối đáp đường phố chuẩn xác.'
                      : 'No exam pressure or embarrassment. The AI role-play companion dialogues patiently with natural regional accents, corrects intonation, and suggests colloquial street responses.'}
                  </p>

                  {/* Chat dialogue simulation preview */}
                  <div className="p-4 rounded-xl bg-[#050810] border border-slate-800 space-y-3 font-sans">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center text-xs font-bold shrink-0">
                        AI
                      </div>
                      <div className="p-3 rounded-2xl rounded-tl-sm bg-slate-800/90 text-slate-200 text-xs border border-slate-700">
                        <span className="font-bold text-amber-300 block mb-0.5">Cô Bán Phở (AI Roleplay):</span>
                        "Chào con! Hôm nay con ăn phở bò tái hay phở gà? Có ăn hành nhiều không nè?"
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 justify-end">
                      <div className="p-3 rounded-2xl rounded-tr-sm bg-cyan-950/80 text-cyan-200 text-xs border border-cyan-500/40 text-right">
                        <span className="font-bold text-cyan-300 block mb-0.5">Bạn (Expat Voice):</span>
                        "Dạ cho con một tô bò tái, không lấy hành lá, thêm một quả trứng chần ạ!"
                      </div>
                      <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center text-xs font-bold shrink-0">
                        YOU
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>AI Feedback: Câu nói hoàn hảo! Điệu rơi của từ "Dạ" và "ạ" rất lễ phép.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Offline PWA Installation */}
              {activeTab === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-bold text-white">
                        {language === 'vi' ? 'Cài Đặt PWA Siêu Tốc (Progressive Web App)' : 'Zero App Store Friction PWA'}
                      </span>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      Offline Ready
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'vi'
                      ? 'Không cần tài khoản App Store / Google Play vùng Việt Nam. Mở trình duyệt Chrome/Safari và nhấn "Thêm vào Màn hình chính". Toàn bộ dữ liệu âm thanh được lưu đệm ngoại tuyến (Offline cache).'
                      : 'No Apple ID / Google Play country-switching hassle. Open Chrome or Safari and tap "Add to Home Screen". Full audio engine and dialogue caches run seamlessly even without Wi-Fi or 4G data.'}
                  </p>

                  {/* PWA Phone Preview Card */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#050810] border border-slate-800 flex flex-col sm:flex-row items-center gap-5">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 p-[2px] shadow-lg shadow-cyan-500/30 shrink-0">
                      <div className="w-full h-full bg-[#0B0F17] rounded-[14px] flex flex-col items-center justify-center p-2 text-center">
                        <span className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                          VIETREAL
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">360°</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs flex-1">
                      <div className="flex items-center gap-2 text-white font-bold">
                        <Download className="w-4 h-4 text-emerald-400" />
                        <span>Kích thước nhẹ: &lt; 3.2 MB</span>
                      </div>
                      <p className="text-slate-400">
                        Cập nhật tức thời qua Vercel Cloud Edge, tự động đồng bộ tiến độ học giữa điện thoại và máy tính xách tay.
                      </p>
                      <div className="flex gap-2 pt-1 font-mono text-[11px]">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">iOS Safari</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">Android Chrome</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">macOS & Windows</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Card Footer */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <span className="text-xs font-mono text-slate-400">
                  VIETREAL 360° Technology Stack • DUY ANH LAB
                </span>
                
                <a
                  href="https://vietreal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all"
                >
                  <span>{language === 'vi' ? 'Trải nghiệm ngay trên App chính' : 'Launch Live Web Application'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
