import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EcosystemMatrix } from '../components/EcosystemMatrix';
import { COUNTRY_APPS } from '../data/ecosystem';
import { ArrowLeft, Globe2, Sparkles, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VideoTourModal } from '../components/VideoTourModal';

export const EcosystemPage: React.FC = () => {
  const { language } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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

        {/* Hero Banner for Ecosystem */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0A1A22] to-[#0A1220] border border-emerald-500/40 shadow-2xl mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold uppercase">
              <Globe2 className="w-3.5 h-3.5" />
              <span>13 Tailored Country Platforms</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Hệ Sinh Thái 13 Ứng Dụng Bản Địa Hóa Theo Quốc Gia
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Mỗi quốc gia có cấu trúc cơ quan phát âm và ngữ pháp mẹ đẻ khác nhau. DUY ANH LAB phát triển 13 nền tảng web độc lập sử dụng ngôn ngữ mẹ đẻ của từng nước để giảng dạy tiếng Việt thực chiến, giải mã chính xác các điểm nghẽn ngữ âm đặc thù của từng dân tộc.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> 100% Giao diện mẹ đẻ
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <CheckCircle2 className="w-4 h-4" /> Chuẩn giọng Bắc & Nam
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <CheckCircle2 className="w-4 h-4" /> PWA cài đặt tức thì
              </span>
            </div>
          </div>
        </div>

        {/* Interactive 13 Apps Matrix Component */}
        <EcosystemMatrix onOpenVideoTour={() => setIsVideoModalOpen(true)} />

        {/* Comparative Linguistic Matrix Table */}
        <div className="my-16 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Bảng Tổng Hợp Điểm Nghẽn Ngữ Âm Được Hóa Giải
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              So sánh giải pháp chuyên biệt của DUY ANH LAB cho từng nhóm quốc gia:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase bg-slate-950/60">
                  <th className="p-3.5">Quốc Gia / App</th>
                  <th className="p-3.5">Ngôn Ngữ Mẹ Đẻ</th>
                  <th className="p-3.5">Rào Cản Phát Âm Lớn Nhất</th>
                  <th className="p-3.5">Giải Pháp VIETREAL Cung Cấp</th>
                  <th className="p-3.5 text-right">Tên Miền Trực Tiếp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {COUNTRY_APPS.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-3.5 font-bold text-white flex items-center gap-2">
                      <span className="text-lg">{app.flag}</span>
                      <span>{app.countryNameVi}</span>
                    </td>
                    <td className="p-3.5 text-cyan-300 font-medium">
                      {app.nativeTitle}
                    </td>
                    <td className="p-3.5 text-amber-300 font-mono">
                      {app.phoneticFocus.vi}
                    </td>
                    <td className="p-3.5 text-slate-300">
                      {app.keyFeatures[0]?.vi || 'Hệ thống bài học nhập vai'}
                    </td>
                    <td className="p-3.5 text-right">
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-cyan-400 hover:underline font-bold"
                      >
                        <span>{app.code.toUpperCase()}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Video Tour Modal */}
        <VideoTourModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />

      </div>
    </div>
  );
};
