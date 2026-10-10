import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ConsultationSection } from '../components/ConsultationSection';
import { QuickOnboarding } from '../components/QuickOnboarding';
import { ArrowLeft, Building2, Sparkles, CheckCircle2, ShieldCheck, Phone, Mail, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RequestPage: React.FC = () => {
  const { language } = useLanguage();

  const faqs = [
    {
      q: 'Doanh nghiệp FDI có thể đặt may đo giáo trình riêng cho nhân sự không?',
      a: 'Có. DUY ANH LAB cung cấp giải pháp may đo thuật ngữ chuyên ngành (Cơ khí, Dệt may, Điện tử, Xây dựng, IT) phù hợp với văn hóa nhà máy và quốc tịch của từng nhóm chuyên gia.'
    },
    {
      q: 'Học viên có cần cài đặt qua App Store hay Google Play không?',
      a: 'Không. Toàn bộ 14 ứng dụng đều ứng dụng công nghệ Progressive Web App (PWA) siêu nhẹ, mở trực tiếp trên trình duyệt Chrome/Safari và ghim ra màn hình chính điện thoại chỉ trong 3 giây.'
    },
    {
      q: 'Chính sách cấp quyền License cho Trung tâm Ngoại ngữ như thế nào?',
      a: 'Chúng tôi hỗ trợ tích hợp nhãn trắng (White-label), cấp tài khoản quản trị lớp học (LMS Admin) và cung cấp API báo cáo tiến độ phát âm theo thời gian thực cho từng học viên.'
    }
  ];

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

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#101E25] to-[#0B1522] border border-cyan-500/40 shadow-2xl mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold uppercase">
              <Building2 className="w-3.5 h-3.5" />
              <span>Enterprise & Expat Personalized Onboarding</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Đăng Ký Tư Vấn & Triển Khai Giải Pháp Tiếng Việt
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Giải pháp đào tạo tiếng Việt thực chiến được tin dùng bởi các chuyên gia quốc tế, doanh nghiệp FDI và các trung tâm ngôn ngữ hàng đầu tại Việt Nam.
            </p>
          </div>
        </div>

        {/* 1-Minute Quick Roadmap */}
        <QuickOnboarding />

        {/* Main Consultation Form */}
        <ConsultationSection />

        {/* Corporate & Center FAQ */}
        <div className="my-16 max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-10">
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold">
              Câu Hỏi Thường Gặp
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Giải Đáp Cho Doanh Nghiệp & Học Viên Expat
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-sm sm:text-base font-bold text-cyan-300 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item.q}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
