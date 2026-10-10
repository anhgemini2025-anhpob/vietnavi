import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CoreVietrealSection } from '../components/CoreVietrealSection';
import { PronounMatrixInteractive } from '../components/PronounMatrixInteractive';
import { VideoTourModal } from '../components/VideoTourModal';
import { 
  ExternalLink, 
  Sparkles, 
  ArrowLeft, 
  Bot, 
  MessageSquare, 
  Volume2, 
  Play, 
  Layers, 
  CheckCircle2, 
  Download,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { playToneByName } from '../utils/audioSynthesizer';

export const VietrealPage: React.FC = () => {
  const { language } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const scenarios = [
    {
      title: 'Bối cảnh 1: Gọi cà phê sữa đá vỉa hè',
      location: 'Quận 1, TP.HCM',
      dialogue: [
        { speaker: 'Bạn (Expat)', text: 'Chị ơi, cho em một ly cà phê sữa đá, ít ngọt, nhiều đá nhé!' },
        { speaker: 'Chị Chủ Quán', text: 'Có ngay em ơi! Uống tại đây hay mang đi vậy em?' },
        { speaker: 'Bạn (Expat)', text: 'Dạ em uống tại đây ạ. Tính tiền luôn giùm em nhé!' }
      ],
      culturalNuance: 'Dùng từ "Chị ơi" - "Em" tạo cảm giác thân mật, lịch sự ngay lập tức.'
    },
    {
      title: 'Bối cảnh 2: Đi taxi / Grab qua cầu Sài Gòn',
      location: 'Cầu Sài Gòn, Bình Thạnh',
      dialogue: [
        { speaker: 'Bạn (Expat)', text: 'Chú tài ơi, cho cháu dừng ngay trước cổng chung cư Landmark nhé!' },
        { speaker: 'Bác Tài Xế', text: 'Chỗ này cấm đỗ xe con ơi, chú tấp vô hẻm phía trước 20 mét nha?' },
        { speaker: 'Bạn (Expat)', text: 'Dạ được ạ, cháu cảm ơn chú nhiều!' }
      ],
      culturalNuance: 'Xưng "Cháu" - gọi "Chú" với bác tài lớn tuổi thể hiện sự tôn trọng tuyệt đối của người có học thức.'
    },
    {
      title: 'Bối cảnh 3: Đàm phán hợp đồng thuê căn hộ',
      location: 'Khu Thảo Điền, TP. Thủ Đức',
      dialogue: [
        { speaker: 'Bạn (Expat)', text: 'Chào anh, giá thuê 15 triệu này đã bao gồm phí quản lý tòa nhà chưa ạ?' },
        { speaker: 'Chủ Nhà', text: 'Chưa em, phí quản lý 1 triệu rưỡi/tháng, tiền điện nước tính theo đồng hồ riêng.' },
        { speaker: 'Bạn (Expat)', text: 'Nếu em ký hợp đồng 2 năm, anh có thể hỗ trợ bao phí quản lý năm đầu không?' }
      ],
      culturalNuance: 'Đàm phán lịch sự nhưng rõ ràng, kiểm tra kỹ giá điện nước theo giá nhà nước.'
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

        {/* Hero Pitch Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0A1628] to-cyan-950/50 border border-cyan-500/40 shadow-2xl mb-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Application Showcase</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              VIETREAL 360° — Dạy Tiếng Việt Thực Chiến 360°
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Giải pháp toàn diện đột phá giúp người nước ngoài làm chủ tiếng Việt sinh tồn và thương mại: Tích hợp công cụ phân tích phổ sóng cao độ (Pitch FFT), ma trận đại từ xưng hô thông minh và trợ lý AI đóng vai tương tác 24/7.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://vietreal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/30 hover:brightness-110 transition-all flex items-center gap-2"
              >
                <span>Mở VIETREAL App Trực Tiếp (vietreal.vercel.app)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold border border-slate-700 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                <span>Xem Video Tour 360°</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars Section */}
        <CoreVietrealSection />

        {/* Deep Dive Scenarios Explorer */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold">
              Phòng Thí Nghiệm Nhập Vai Đời Thực
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Các Kịch Bản Thực Tế Được Mô Phỏng Trên VIETREAL
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Chọn bối cảnh để xem cách trợ lý AI hướng dẫn bạn đối đáp tự nhiên và đúng thanh điệu:
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {scenarios.map((sc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveScenario(idx)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  activeScenario === idx
                    ? 'bg-cyan-500/20 border-cyan-500 text-white shadow-lg'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div className="text-xs font-bold text-cyan-300 mb-1">{sc.location}</div>
                <div className="text-sm font-extrabold text-white">{sc.title}</div>
              </button>
            ))}
          </div>

          {/* Active Scenario Dialogue */}
          <div className="p-6 rounded-2xl bg-[#080C14] border border-slate-800 space-y-4">
            <div className="space-y-3">
              {scenarios[activeScenario].dialogue.map((d, dIdx) => (
                <div 
                  key={dIdx} 
                  className={`p-3.5 rounded-xl text-xs sm:text-sm ${
                    d.speaker.includes('Expat') 
                      ? 'bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 ml-4' 
                      : 'bg-slate-800/80 border border-slate-700 text-slate-200 mr-4'
                  }`}
                >
                  <strong className="block text-[11px] font-mono text-amber-300 uppercase mb-0.5">
                    {d.speaker}:
                  </strong>
                  <span>"{d.text}"</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
              💡 <strong>Lưu ý giao tiếp:</strong> {scenarios[activeScenario].culturalNuance}
            </div>
          </div>
        </div>

        {/* Pronoun Matrix Hierarchy */}
        <PronounMatrixInteractive />

        {/* Video Tour Modal */}
        <VideoTourModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />

      </div>
    </div>
  );
};
