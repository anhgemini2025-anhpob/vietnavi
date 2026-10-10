import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRONOUN_MATRIX } from '../data/ecosystem';
import { PronounItem } from '../types';
import { 
  Users2, 
  Sparkles, 
  HelpCircle, 
  ArrowRightLeft, 
  Lightbulb, 
  CheckCircle2, 
  MessageSquareQuote 
} from 'lucide-react';

export const PronounMatrixInteractive: React.FC = () => {
  const { language } = useLanguage();
  const [selectedPronoun, setSelectedPronoun] = useState<PronounItem>(PRONOUN_MATRIX[0]);
  
  // Interactive Calculator State
  const [myAge, setMyAge] = useState<number>(30);
  const [otherAge, setOtherAge] = useState<number>(35);
  const [otherGender, setOtherGender] = useState<'male' | 'female'>('male');

  const calculatePronoun = () => {
    const diff = otherAge - myAge;
    if (diff > 25) {
      return otherGender === 'male' 
        ? { callOther: 'Bác / Chú', callSelf: 'Cháu', tip: 'Kính trọng cao nhất đối với bậc cha chú.' }
        : { callOther: 'Bác / Cô', callSelf: 'Cháu', tip: 'Kính trọng cao nhất đối với phụ nữ tuổi cha mẹ.' };
    } else if (diff >= 1) {
      return otherGender === 'male'
        ? { callOther: 'Anh', callSelf: 'Em', tip: 'Anh trai hơn tuổi, xưng em lịch sự và gần gũi.' }
        : { callOther: 'Chị', callSelf: 'Em', tip: 'Chị gái hơn tuổi, xưng em thân thiện và tự nhiên.' };
    } else if (diff <= -1) {
      return { callOther: 'Em', callSelf: 'Anh/Chị', tip: 'Đối phương nhỏ tuổi hơn bạn, gọi Em và tự xưng Anh/Chị.' };
    } else {
      return { callOther: 'Bạn / Mình', callSelf: 'Mình / Tôi', tip: 'Đồng trang lứa, xưng hô bình đẳng và thân thiện.' };
    }
  };

  const calculated = calculatePronoun();

  return (
    <section id="pronouns" className="py-20 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase">
            <Users2 className="w-3.5 h-3.5" />
            <span>{language === 'vi' ? 'VĂN HÓA XƯNG HÔ THỰC CHIẾN' : 'CULTURAL PRONOUN HIERARCHY'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {language === 'vi' ? 'Ma Trận Xưng Hô Tiếng Việt 360°' : 'Vietnamese 360° Pronoun Decision Tree'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'vi' 
              ? 'Khác với đại từ trung tính You / I trong tiếng Anh, người Việt xưng hô dựa trên tuổi tác, vai vế và mức độ thân mật. Hãy làm chủ ma trận này để giao tiếp lịch thiệp như người bản xứ.'
              : 'Master the age-gender relational matrix that replaces the generic "You & I". Never worry about offending colleagues, elders or service staff again.'}
          </p>
        </div>

        {/* Top: 8 Pronouns Quick Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {PRONOUN_MATRIX.map((item) => {
            const isSelected = selectedPronoun.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedPronoun(item)}
                className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-cyan-500/20 to-emerald-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/60 hover:bg-slate-800 border-slate-800 text-slate-300'
                }`}
              >
                <div className="text-xl font-black text-cyan-300">{item.pronoun}</div>
                <div className="text-[10px] text-slate-400 truncate mt-1">
                  {language === 'vi' ? item.roleVi.split(' ')[0] : item.roleEn.split('/')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Two Col Layout: Selected Pronoun Detail + Interactive "Who to call" Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Col 1: Selected Pronoun Deep Dive */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  {language === 'vi' ? selectedPronoun.roleVi : selectedPronoun.roleEn}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Độ chênh tuổi: {selectedPronoun.ageRel}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Cách xưng: <span className="text-cyan-400">"{selectedPronoun.pronoun}"</span>
              </h3>

              {/* Sample Dialog Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm">
                <div className="text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                  <MessageSquareQuote className="w-3.5 h-3.5 text-amber-400" />
                  <span>Câu nói mẫu chuẩn bản xứ:</span>
                </div>
                <div className="text-base font-bold text-amber-300 italic">
                  "{selectedPronoun.exampleUsage}"
                </div>
              </div>

              {/* Cultural Context Note */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-slate-300 leading-relaxed space-y-1">
                <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Lưu ý văn hóa ứng xử:</span>
                </div>
                <p>
                  {language === 'vi' ? selectedPronoun.culturalNoteVi : selectedPronoun.culturalNoteEn}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs text-slate-400">
              <span>Được tích hợp sẵn trong VIETREAL 360° AI Tutor</span>
              <span className="text-emerald-400 font-bold">Tự Động Gợi Ý</span>
            </div>
          </div>

          {/* Col 2: Interactive Relational Calculator */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-slate-900 via-[#0B1320] to-[#070E18] border border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ArrowRightLeft className="w-5 h-5 text-cyan-400" />
                <h4 className="text-base font-bold text-white">
                  {language === 'vi' ? 'Bộ Tính Xưng Hô Tức Thì (Instant Pronoun Matcher)' : 'Instant Pronoun Matcher'}
                </h4>
              </div>

              <p className="text-xs text-slate-400 mb-6">
                {language === 'vi'
                  ? 'Kéo thanh trượt tuổi của bạn và người đối diện để xem cách xưng hô chính xác nhất:'
                  : 'Slide your age and the listener’s age to discover the culturally respectful pronoun pair:'}
              </p>

              {/* Sliders */}
              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Tuổi của bạn (My Age):</span>
                    <span className="text-cyan-400 font-bold text-sm">{myAge} tuổi</span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="70"
                    value={myAge}
                    onChange={(e) => setMyAge(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Tuổi người đối diện (Other Person):</span>
                    <span className="text-emerald-400 font-bold text-sm">{otherAge} tuổi</span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="70"
                    value={otherAge}
                    onChange={(e) => setOtherAge(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="text-slate-300 mb-1.5">Giới tính người đối diện:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setOtherGender('male')}
                      className={`py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${
                        otherGender === 'male'
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      Nam (Male)
                    </button>
                    <button
                      onClick={() => setOtherGender('female')}
                      className={`py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${
                        otherGender === 'female'
                          ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      Nữ (Female)
                    </button>
                  </div>
                </div>
              </div>

              {/* Output Result */}
              <div className="mt-6 p-4 rounded-2xl bg-black/60 border border-cyan-500/40 text-center space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase">
                  Kết quả xưng hô chuẩn xác:
                </div>
                <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400">
                  Gọi họ: "{calculated.callOther}" • Tự xưng: "{calculated.callSelf}"
                </div>
                <div className="text-xs text-slate-300">
                  {calculated.tip}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center font-mono">
              VIETREAL 360° Social Graph Algorithm
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
