import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  MapPin, 
  Compass, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Layers,
  BookOpen,
  Volume2
} from 'lucide-react';

interface QuickOnboardingProps {
  onOpenConsultation?: () => void;
}

export const QuickOnboarding: React.FC<QuickOnboardingProps> = ({ onOpenConsultation }) => {
  const { language, t } = useLanguage();
  
  const [location, setLocation] = useState<string>('hcm');
  const [level, setLevel] = useState<string>('zero');
  const [goal, setGoal] = useState<string>('street');
  const [generatedPlan, setGeneratedPlan] = useState<boolean>(true);

  const locations = [
    { id: 'hcm', labelVi: 'TP. Hồ Chí Minh (Q.1, Thảo Điền, Q.7 Phú Mỹ Hưng)', labelEn: 'Ho Chi Minh City (D1, Thao Dien, D7)' },
    { id: 'hanoi', labelVi: 'Hà Nội (Tây Hồ, Hoàn Kiếm, Cầu Giấy)', labelEn: 'Hanoi (Tay Ho, Hoan Kiem, Cau Giay)' },
    { id: 'danang', labelVi: 'Đà Nẵng & Hội An', labelEn: 'Da Nang & Hoi An' },
    { id: 'fdi', labelVi: 'Bình Dương, Đồng Nai, Hải Phòng (KCN & Nhà Máy)', labelEn: 'Binh Duong, Dong Nai, Hai Phong (Industrial Zones)' },
  ];

  const levels = [
    { id: 'zero', labelVi: 'Mới bắt đầu (Chưa biết gì, sợ phát âm sai)', labelEn: 'Absolute Beginner (Zero knowledge, tone fear)' },
    { id: 'basic', labelVi: 'Biết chào hỏi cơ bản (A1 - Chưa nghe hiểu người bản xứ)', labelEn: 'Elementary (A1 - Struggling to comprehend locals)' },
    { id: 'intermediate', labelVi: 'Trung cấp (A2 - Giao tiếp được nhưng phát âm cứng)', labelEn: 'Intermediate (A2 - Can talk, but unnatural accent)' },
    { id: 'business', labelVi: 'Thương mại & Quản lý (Đàm phán hợp đồng, họp nhà máy)', labelEn: 'Business & Management (Factory meetings, contracts)' },
  ];

  const goals = [
    { id: 'street', labelVi: 'Sinh tồn đường phố: Gọi món, đi chợ, đi Grab, thuê nhà', labelEn: 'Street Survival: Food, markets, Grab, apartment' },
    { id: 'work', labelVi: 'Làm việc & Quản lý nhân viên người Việt', labelEn: 'Workplace & Managing local Vietnamese staff' },
    { id: 'dating', labelVi: 'Kết bạn, hẹn hò & hòa nhập văn hóa gia đình Việt', labelEn: 'Social, dating & integrating with local family' },
    { id: 'b2b', labelVi: 'Kinh doanh B2B & Đầu tư dài hạn tại Việt Nam', labelEn: 'B2B Trading & long-term business investment' },
  ];

  const getCustomPlan = () => {
    return {
      title: location === 'hanoi' ? 'Lộ Trình Giọng Chuẩn Bắc & Giao Tiếp Phố Cổ' : 'Lộ Trình Giọng Nam Thực Chiến & Hội Nhập Đô Thị',
      duration: level === 'zero' ? '30 Ngày Đột Phá' : '14 Ngày Tinh Gọn',
      accent: location === 'hanoi' ? 'Giọng Hà Nội (Northern Accent)' : 'Giọng Sài Gòn (Southern Accent)',
      phases: [
        {
          phase: 'Tuần 1: Cởi bỏ rào cản âm học',
          focus: 'Luyện 6 thanh qua Visual Waveform • Khắc phục âm tắc họng và nguyên âm đôi (ư, ơ, ê).'
        },
        {
          phase: 'Tuần 2: Phản xạ sinh tồn thực tế',
          focus: 'Gọi phở/cà phê, xưng hô Anh/Chị/Em/Chú chuẩn xác, thương lượng giá cả không bị mua đắt.'
        },
        {
          phase: 'Tuần 3-4: Độc lập giao tiếp',
          focus: 'Nhập vai cùng AI Tutor 24/7 theo tình huống công việc và đời sống riêng của bạn.'
        }
      ]
    };
  };

  const plan = getCustomPlan();

  return (
    <section id="onboard" className="py-20 md:py-28 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>{t('onboard.section.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {t('onboard.title')}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t('onboard.subtitle')}
          </p>
        </div>

        {/* 1-Minute Onboarding Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 via-[#0E1524] to-[#0A0E18] border border-amber-500/30 p-6 sm:p-10 shadow-2xl shadow-amber-950/20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: 3 Selectors */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Question 1: Location */}
              <div>
                <label className="text-xs font-bold text-slate-300 font-mono uppercase flex items-center gap-2 mb-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{t('onboard.q1')}</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setLocation(loc.id)}
                      className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                        location === loc.id
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/60 shadow-sm'
                          : 'bg-slate-950/60 hover:bg-slate-800 text-slate-400 border-slate-800'
                      }`}
                    >
                      {language === 'vi' ? loc.labelVi : loc.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Level */}
              <div>
                <label className="text-xs font-bold text-slate-300 font-mono uppercase flex items-center gap-2 mb-2.5">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>{t('onboard.q2')}</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {levels.map((lvl) => (
                    <button
                      key={lvl.id}
                      onClick={() => setLevel(lvl.id)}
                      className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                        level === lvl.id
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 shadow-sm'
                          : 'bg-slate-950/60 hover:bg-slate-800 text-slate-400 border-slate-800'
                      }`}
                    >
                      {language === 'vi' ? lvl.labelVi : lvl.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Goal */}
              <div>
                <label className="text-xs font-bold text-slate-300 font-mono uppercase flex items-center gap-2 mb-2.5">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span>{t('onboard.q3')}</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {goals.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setGoal(g.id)}
                      className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                        goal === g.id
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm'
                          : 'bg-slate-950/60 hover:bg-slate-800 text-slate-400 border-slate-800'
                      }`}
                    >
                      {language === 'vi' ? g.labelVi : g.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Không cần đăng ký email • Khởi chạy trên trình duyệt ngay</span>
              </div>

            </div>

            {/* Right: Dynamic Generated Roadmap Card */}
            <div className="lg:col-span-5 rounded-2xl bg-[#070B14] border border-cyan-500/40 p-6 space-y-5 shadow-xl">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase font-bold">
                  {t('onboard.result.title')}
                </span>
                <span className="text-xs text-emerald-400 font-mono font-bold">
                  {plan.duration}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-extrabold text-white">
                  {plan.title}
                </h4>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-2 font-mono">
                  <span>📍 Trọng tâm:</span>
                  <span className="text-cyan-300">{plan.accent}</span>
                </div>
              </div>

              {/* 3 Step Roadmap */}
              <div className="space-y-3">
                {plan.phases.map((ph, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                    <div className="font-bold text-amber-400 mb-0.5">{ph.phase}</div>
                    <p className="text-slate-300 leading-relaxed">{ph.focus}</p>
                  </div>
                ))}
              </div>

              {/* CTA launch directly to VIETREAL */}
              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <a
                  href="https://vietreal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all"
                >
                  <span>Bắt Đầu Học Thử Lộ Trình Này (Miễn Phí)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {onOpenConsultation && (
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2 text-center text-xs text-slate-400 hover:text-cyan-300 cursor-pointer transition-colors"
                  >
                    Hoặc đăng ký tư vấn lớp kèm riêng 1:1 cho chuyên gia →
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
