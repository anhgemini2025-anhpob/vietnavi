import React from 'react';
import { X, Smartphone, Share, PlusSquare, MoreVertical, Download, CheckCircle2, Laptop } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PwaInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PwaInstallModal: React.FC<PwaInstallModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 p-0.5 shadow-md flex items-center justify-center overflow-hidden">
              <img 
                src="/brand/icon-192.png" 
                alt="VietNavi Icon" 
                className="w-full h-full object-cover rounded-[10px]"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                {language === 'vi' ? 'Ghim App Ra Màn Hình Chính' : 'Install App to Home Screen'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                vietnavi.vercel.app • Zero App Store Wait
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps container */}
        <div className="py-5 space-y-4">
          
          {/* iOS Card */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400">
              <Smartphone className="w-4 h-4" />
              <span>{language === 'vi' ? 'Trên iPhone & iPad (Trình duyệt Safari)' : 'iPhone & iPad (Safari browser)'}</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-bold flex items-center justify-center text-[10px] shrink-0">1</span>
                <span>{language === 'vi' ? 'Nhấn nút ' : 'Tap '} <Share className="w-3.5 h-3.5 inline text-cyan-500 mx-1" /> <strong>Chia sẻ (Share)</strong> {language === 'vi' ? 'ở thanh công cụ dưới Safari.' : 'at the bottom toolbar.'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-bold flex items-center justify-center text-[10px] shrink-0">2</span>
                <span>{language === 'vi' ? 'Cuộn xuống chọn ' : 'Scroll down and tap '} <PlusSquare className="w-3.5 h-3.5 inline text-cyan-500 mx-1" /> <strong>"Thêm vào MH chính" (Add to Home Screen)</strong>.</span>
              </div>
            </div>
          </div>

          {/* Android Card */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <Smartphone className="w-4 h-4" />
              <span>{language === 'vi' ? 'Trên Android (Chrome, Cốc Cốc, Samsung)' : 'Android (Chrome / Samsung Internet)'}</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center text-[10px] shrink-0">1</span>
                <span>{language === 'vi' ? 'Nhấn nút menu ' : 'Tap menu '} <MoreVertical className="w-3.5 h-3.5 inline text-emerald-500 mx-0.5" /> <strong>(3 chấm góc trên bên phải)</strong>.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center text-[10px] shrink-0">2</span>
                <span>{language === 'vi' ? 'Chọn ' : 'Select '} <Download className="w-3.5 h-3.5 inline text-emerald-500 mx-1" /> <strong>"Cài đặt ứng dụng"</strong> {language === 'vi' ? 'hoặc "Thêm vào Màn hình chính".' : 'or "Add to Home screen".'}</span>
              </div>
            </div>
          </div>

          {/* Laptop Card */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
              <Laptop className="w-4 h-4" />
              <span>{language === 'vi' ? 'Trên Laptop & Máy tính (Chrome / Edge)' : 'Laptop & Desktop (Chrome / Edge)'}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {language === 'vi'
                ? 'Nhấn biểu tượng màn hình/cài đặt ở phía bên phải thanh địa chỉ (URL bar) để cài app độc lập chạy cực mượt.'
                : 'Click the install icon on the right side of the browser address bar to install as a desktop app.'}
            </p>
          </div>

        </div>

        {/* Benefits badge */}
        <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-between text-xs text-cyan-800 dark:text-cyan-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
            <span>{language === 'vi' ? 'Khởi động tức thì • Hoạt động Offline • Nhẹ dưới 2MB' : 'Instant launch • Offline capable • Lightweight < 2MB'}</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:brightness-110 cursor-pointer"
          >
            {language === 'vi' ? 'Đã hiểu' : 'Got it'}
          </button>
        </div>

      </div>
    </div>
  );
};
