import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ConsultationFormData } from '../types';
import { 
  Building2, 
  Send, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MessageSquare,
  Globe2
} from 'lucide-react';

interface ConsultationSectionProps {
  initialCountry?: string;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({ initialCountry = '' }) => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    country: initialCountry,
    nativeLanguage: '',
    contactType: 'zalo',
    contactValue: '',
    currentLevel: 'Chưa biết tiếng Việt (Beginner)',
    targetGoal: 'Giao tiếp đời sống & sinh tồn',
    locationInVietnam: 'TP. Hồ Chí Minh',
    notes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.contactValue) {
      alert(language === 'vi' ? 'Vui lòng nhập họ tên và thông tin liên lạc.' : 'Please enter your name and contact info.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      country: '',
      nativeLanguage: '',
      contactType: 'zalo',
      contactValue: '',
      currentLevel: 'Chưa biết tiếng Việt (Beginner)',
      targetGoal: 'Giao tiếp đời sống & sinh tồn',
      locationInVietnam: 'TP. Hồ Chí Minh',
      notes: ''
    });
  };

  return (
    <section id="request" className="py-20 md:py-28 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t('consult.section.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {t('consult.title')}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t('consult.subtitle')}
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {submitted ? (
            /* Success State */
            <div className="text-center py-12 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-white">
                  {t('form.success.title')}
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                  {t('form.success.msg')}
                </p>
              </div>

              {/* Direct Zalo/Hotline Quick Connect */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://zalo.me/84908095693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:brightness-110 transition-all"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Chat Zalo Ngay: +84 908095693</span>
                </a>

                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono mb-2">
                    {t('form.name')} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ví dụ: John Doe / Michael Tanaka"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-slate-800 focus:border-cyan-500 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Country / Native Language */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono mb-2">
                    {t('form.country')}
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Ví dụ: Nhật Bản, Mỹ, Hàn Quốc, Pháp..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-slate-800 focus:border-cyan-500 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Contact Method & Value */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                <div className="sm:col-span-4">
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono mb-2">
                    {t('form.contact_type')}
                  </label>
                  <select
                    value={formData.contactType}
                    onChange={(e) => setFormData({ ...formData, contactType: e.target.value as 'zalo' | 'whatsapp' | 'email' })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-slate-800 focus:border-cyan-500 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="zalo">Zalo (Khuyên dùng tại VN)</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">Email trực tiếp</option>
                  </select>
                </div>

                <div className="sm:col-span-8">
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono mb-2">
                    {t('form.contact_val')} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactValue}
                    onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                    placeholder="Số điện thoại Zalo/WhatsApp (+84...) hoặc Email"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-slate-800 focus:border-cyan-500 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Learning Level & Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono mb-2">
                    {t('form.level')}
                  </label>
                  <select
                    value={formData.currentLevel}
                    onChange={(e) => setFormData({ ...formData, currentLevel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-slate-800 focus:border-cyan-500 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Chưa biết tiếng Việt (Beginner 0)">Chưa biết tiếng Việt (Beginner 0)</option>
                    <option value="Biết chào hỏi cơ bản (A1)">Biết chào hỏi cơ bản (A1)</option>
                    <option value="Giao tiếp hạn chế (A2)">Giao tiếp hạn chế (A2)</option>
                    <option value="Thương mại & Quản lý (B1-B2)">Thương mại & Quản lý (B1-B2)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono mb-2">
                    {t('form.goal')}
                  </label>
                  <select
                    value={formData.targetGoal}
                    onChange={(e) => setFormData({ ...formData, targetGoal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-slate-800 focus:border-cyan-500 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Giao tiếp sinh tồn đường phố & nhà hàng">Giao tiếp sinh tồn đường phố & nhà hàng</option>
                    <option value="Đào tạo nhân sự nước ngoài cho Doanh nghiệp FDI">Đào tạo nhân sự nước ngoài cho Doanh nghiệp FDI</option>
                    <option value="Hợp tác cấp quyền license cho Trung tâm ngoại ngữ">Hợp tác cấp quyền license cho Trung tâm ngoại ngữ</option>
                    <option value="Kèm riêng 1:1 cùng chuyên gia ngôn ngữ">Kèm riêng 1:1 cùng chuyên gia ngôn ngữ</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase font-mono mb-2">
                  {t('form.notes')}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ghi chú thêm về yêu cầu thời gian học, số lượng nhân sự hoặc mục tiêu cụ thể..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-slate-800 focus:border-cyan-500 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bảo mật 100% • Cam kết phản hồi trong 2 giờ làm việc</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4 fill-slate-950" />
                  <span>{loading ? 'Đang gửi...' : t('form.submit')}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
