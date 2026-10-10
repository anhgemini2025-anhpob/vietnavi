import React, { useState } from 'react';
import { ArrowUp, ExternalLink, Phone, Mail, Sparkles, Smartphone, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PwaInstallModal } from './PwaInstallModal';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [isPwaModalOpen, setIsPwaModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToConsultation = () => {
    const el = document.getElementById('request');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer id="contact" className="bg-[#050B14] dark:bg-[#050B14] text-slate-300 border-t border-slate-800 transition-colors">
        
        {/* Top Action Pills Bar (Exact match to screenshot style) */}
        <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            
            {/* Quick Contact Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <a
                href="https://zalo.me/84908095693"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400 text-amber-300 hover:text-amber-200 transition-all font-mono font-bold shadow-md"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+84 908095693</span>
              </a>

              <a
                href="mailto:anhpob@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 transition-all font-mono font-bold shadow-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>anhpob@gmail.com</span>
              </a>
            </div>

            {/* Twin CTA Buttons (Exact match to screenshot) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-2xl">
              <button
                onClick={() => setIsPwaModalOpen(true)}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 fill-slate-950" />
                <span>{language === 'vi' ? 'Hướng dẫn ghim App ra màn hình điện thoại' : 'Guide to Pin App to Phone Home Screen'}</span>
              </button>

              <button
                onClick={scrollToConsultation}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 text-slate-200 hover:text-white font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
              >
                <span>{language === 'vi' ? 'Yêu cầu xây dựng Web App theo yêu cầu' : 'Custom Web App Development Request'}</span>
              </button>
            </div>

          </div>
        </div>

        {/* 3 Columns Layout (Exact match to screenshot structure, NO map, NO address) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Column 1: DUY ANH LAB Identity & Philosophy */}
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-3.5 p-2 pr-5 rounded-2xl bg-[#0A192F] border border-cyan-500/30 shadow-md">
                <img 
                  src="/brand/logo.jpg" 
                  alt="DUY ANH LAB • digital" 
                  className="h-11 w-auto object-contain rounded"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="border-l border-slate-700/60 pl-3.5">
                  <div className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-wide">
                    DUY ANH LAB
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Real-World Software Engineering
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {language === 'vi'
                  ? 'Chuyên thiết kế & phát triển các ứng dụng Web chuyên sâu, giải pháp AI và phần mềm thực chiến phục vụ mọi ý tưởng: từ kinh doanh B2B, nghiên cứu R&D, quản lý hộ kinh doanh đến giáo dục học tập, chăm sóc gia đình và đời sống.'
                  : 'Specializing in architecting deep-domain web applications, practical AI software, and production solutions across B2B enterprise sales, R&D food science, modern parenting, and Vietnamese linguistics.'}
              </p>

              <div className="text-xs text-amber-300 font-mono font-bold tracking-wider pt-1">
                "MONG MUỐN → Ý TƯỞNG → HIỆN THỰC"
              </div>
            </div>

            {/* Column 2: Ecosystem Matrix (Hệ Sinh Thái Ứng Dụng) */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-extrabold text-amber-300 text-sm tracking-wide">
                {language === 'vi' ? 'Hệ Sinh Thái Dạy & Học' : 'Educational Ecosystem'}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <a 
                    href="https://vietreal.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                  >
                    <span>App 1: VIETREAL 360° Real-World</span>
                    <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://thviet.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                  >
                    <span>App 2: THAIVIET - Người Thái Học Tiếng Việt</span>
                    <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://jpviet.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                  >
                    <span>App 3: JPVIET - Người Nhật Học Tiếng Việt</span>
                    <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#ecosystem" 
                    className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                  >
                    <span>App 4: 13 Ngôn Ngữ May Đo Bản Địa Hóa</span>
                    <span className="text-[10px] text-cyan-400 font-mono">Tailored</span>
                  </a>
                </li>
                <li className="pt-2">
                  <a 
                    href="https://ungdung.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5 hover:underline"
                  >
                    <span>Kho 20+ Web App Toàn Diện</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Consultation & Contact (Tư Vấn & Hiện Thực Hóa) */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="font-extrabold text-amber-300 text-sm tracking-wide">
                {language === 'vi' ? 'Tư Vấn & Hiện Thực Hóa' : 'Consultation & Delivery'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'vi'
                  ? 'Bạn có ý tưởng trong cuộc sống, giáo dục con cái, công việc hay kinh doanh cần hiện thực hóa thành ứng dụng Web riêng biệt? Đội ngũ kỹ thuật Duy Anh Lab luôn sẵn sàng đồng hành, tư vấn kiến trúc giải pháp và phát triển sản phẩm thực tế theo yêu cầu riêng của bạn.'
                  : 'Do you have an idea in daily life, parenting, business, or education that you want to turn into a custom web app? Duy Anh Lab engineering team is ready to consult, architect, and deliver real-world software tailored to your specific requirements.'}
              </p>

              <div className="pt-2 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-400">Zalo / Hotline:</span>
                  <a 
                    href="https://zalo.me/84908095693" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold text-amber-300 hover:text-amber-200 font-mono"
                  >
                    +84 908095693
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-slate-400">Email:</span>
                  <a 
                    href="mailto:anhpob@gmail.com" 
                    className="font-bold text-cyan-300 hover:text-cyan-200 font-mono"
                  >
                    anhpob@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-2">
              <span>© 2026 DUY ANH DIGITAL LAB •</span>
              <a 
                href="https://ungdung.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-400 font-bold hover:underline"
              >
                ungdung.vercel.app
              </a>
              <span>• All rights reserved.</span>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 transition-all border border-slate-800 font-bold cursor-pointer text-xs"
            >
              <span>{language === 'vi' ? 'Về đầu trang' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </footer>

      {/* PWA Modal from Footer */}
      <PwaInstallModal
        isOpen={isPwaModalOpen}
        onClose={() => setIsPwaModalOpen(false)}
      />
    </>
  );
};
