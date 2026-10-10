import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Nav
    'nav.vietreal': 'VIETREAL 360°',
    'nav.ecosystem': '13 App Quốc Gia',
    'nav.features': 'Công Nghệ Thực Chiến',
    'nav.tones': 'Mô Phỏng 6 Thanh',
    'nav.pronouns': 'Ma Trận Xưng Hô',
    'nav.tryFree': 'Học Thử Miễn Phí',
    'nav.consultation': 'Yêu Cầu Tư Vấn',
    'nav.explore': 'Khám Phá Hệ Sinh Thái',

    // Hero
    'hero.badge': 'HỆ SINH THÁI DẠY & HỌC TIẾNG VIỆT THỰC CHIẾN 360° • DUY ANH LAB',
    'hero.title.part1': 'Nói tiếng Việt thật',
    'hero.title.part2': 'Ngay từ bài học đầu tiên.',
    'hero.subtitle': 'Giải pháp toàn diện thiết kế riêng cho người nước ngoài sinh sống, làm việc và kinh doanh tại Việt Nam. Xóa bỏ rào cản 6 thanh điệu, giải mã ma trận đại từ xưng hô và làm chủ giao tiếp đường phố ngay tức thì.',
    'hero.cta.trial': 'Học Thử Miễn Phí Ngay',
    'hero.cta.demo': 'Trải Nghiệm Phòng Luyện Âm',
    'hero.video.badge': 'VIDEO TOUR 360° • TRẢI NGHIỆM THỰC TẾ',
    'hero.quick.title': 'Tình huống sinh tồn khẩn cấp trên đường phố Việt Nam:',
    'hero.stats.learners': '10,000+ Học Viên Expat',
    'hero.stats.countries': '13 Quốc Gia Bản Địa',
    'hero.stats.accuracy': '98.5% Chuẩn Cao Độ Thanh',
    'hero.stats.apps': '14 Ứng Dụng Chuyên Sâu',

    // Pillars
    'pillars.section.badge': 'CÔNG NGHỆ ĐỘT PHÁ CỐT LÕI',
    'pillars.title': '4 Trụ Cột Công Nghệ Của VIETREAL 360°',
    'pillars.subtitle': 'Phương pháp độc quyền giải quyết 4 rào cản lớn nhất của người nước ngoài học tiếng Việt: Thanh điệu méo mó, lúng túng xưng hô, sợ nói với người bản xứ và thiếu ứng dụng tiện lợi.',
    'pillar1.title': 'AI Pitch & Tone Wave Correction',
    'pillar1.desc': 'Mô phỏng đồ thị cao độ âm học (Hz) theo thời gian thực. Giúp người học mắt thấy - tai nghe - miệng chuẩn xác từng độ dốc của 6 thanh điệu Việt Nam.',
    'pillar2.title': 'Ma Trận Xưng Hô Động (Pronoun Matrix)',
    'pillar2.desc': 'Sơ đồ cây quan hệ xã hội thông minh (Anh, Chị, Em, Bác, Chú, Cô, Mình, Cháu) tự động đề xuất cách xưng hô chuẩn xác theo tuổi tác và địa vị.',
    'pillar3.title': 'Trợ Lý Gia Sư AI 24/7 (Role-Play Tutor)',
    'pillar3.desc': 'Hơn 50 kịch bản nhập vai đời thực: Trả giá chợ Bến Thành, gọi tài xế Grab, dặn tô phở không hành, đàm phán hợp đồng văn phòng.',
    'pillar4.title': 'Cài Đặt PWA Siêu Tốc Không Cần App Store',
    'pillar4.desc': 'Công nghệ Progressive Web App nhẹ chỉ vài MB, hoạt động mượt mà ngoại tuyến (Offline), ghim trực tiếp ra màn hình chính điện thoại chỉ với 1 chạm.',
    'pillars.cta': 'Truy Cập Ứng Dụng VIETREAL App',

    // Ecosystem
    'ecosystem.section.badge': 'HỆ SINH THÁI ĐA QUỐC GIA',
    'ecosystem.title': '13 Ứng Dụng Bản Địa Hóa Theo Từng Quốc Gia',
    'ecosystem.subtitle': 'Mỗi dân tộc có một tật phát âm và ngữ pháp riêng. DUY ANH LAB thiết kế riêng 13 app chuyên biệt với ngôn ngữ mẹ đẻ của từng quốc gia để hóa giải triệt để các rào cản ngữ âm.',
    'ecosystem.filter.all': 'Tất cả (13 Quốc gia)',
    'ecosystem.filter.asia': 'Châu Á (7 nước)',
    'ecosystem.filter.europe': 'Châu Âu (5 nước)',
    'ecosystem.filter.americas': 'Châu Mỹ (1 nước)',
    'ecosystem.search.placeholder': 'Tìm quốc gia hoặc ngôn ngữ (Nhật, Hàn, Mỹ, Trung, Pháp, Đức...)...',
    'ecosystem.launch': 'Mở Ứng Dụng',
    'ecosystem.video_preview': 'Xem Clip Giới Thiệu',
    'ecosystem.native_note': 'Giao diện & giáo trình viết bằng tiếng mẹ đẻ',

    // Tone Simulator
    'tones.section.badge': 'PHÒNG THỰC NGHIỆM CAO ĐỘ',
    'tones.title': 'Mô Phỏng Trực Quan 6 Thanh Điệu Tiếng Việt',
    'tones.subtitle': 'Bấm vào từng thanh để lắng nghe cao độ tần số sóng âm và xem đường biểu diễn âm học chuẩn xác.',
    'tones.listen': 'Nghe Cao Độ Thanh',
    'tones.trajectory': 'Quỹ đạo cao độ:',

    // Quick Onboarding
    'onboard.section.badge': 'LỘ TRÌNH CÁ NHÂN HÓA TRONG 1 PHÚT',
    'onboard.title': 'Khởi Động Lộ Trình Học Tiếng Việt Cho Bạn',
    'onboard.subtitle': 'Không cần tài khoản • Không cần thẻ tín dụng • Nhận ngay lộ trình thực chiến sau 60 giây',
    'onboard.q1': '1. Bạn đang sinh sống tại khu vực nào ở Việt Nam?',
    'onboard.q2': '2. Trình độ tiếng Việt hiện tại của bạn là gì?',
    'onboard.q3': '3. Mục tiêu cấp thiết nhất của bạn hiện nay?',
    'onboard.btn.generate': 'Tạo Lộ Trình Học Thực Chiến Ngay',
    'onboard.result.title': 'Lộ Trình Tăng Tốc Đề Xuất Cho Bạn',

    // Consultation
    'consult.section.badge': 'HỢP TÁC & TRIỂN KHAI DOANH NGHIỆP',
    'consult.title': 'Đăng Ký Tư Vấn & Giải Pháp Ngôn Ngữ Doanh Nghiệp',
    'consult.subtitle': 'Dành cho Trung tâm ngoại ngữ, Doanh nghiệp FDI, Chuyên gia nước ngoài cần chương trình đào tạo may đo riêng.',
    'form.name': 'Họ và tên của bạn',
    'form.country': 'Quốc tịch / Ngôn ngữ mẹ đẻ',
    'form.contact_type': 'Phương thức liên lạc ưu tiên',
    'form.contact_val': 'Số Zalo / WhatsApp / Địa chỉ Email',
    'form.level': 'Trình độ tiếng Việt hiện tại',
    'form.goal': 'Mục tiêu học tập chính',
    'form.city': 'Thành phố đang làm việc',
    'form.notes': 'Ghi chú thêm hoặc yêu cầu đặc biệt',
    'form.submit': 'Gửi Yêu Cầu Tư Vấn Ngay',
    'form.success.title': 'Gửi Yêu Cầu Thành Công!',
    'form.success.msg': 'Đội ngũ chuyên gia DUY ANH LAB sẽ liên hệ qua Zalo / WhatsApp trong vòng 2 giờ làm việc để gửi tài liệu và lộ trình miễn phí cho bạn.',

    // Footer
    'footer.brand.desc': 'Real-World Software Engineering & AI Solutions Ecosystem. Chuyên thiết kế và phát triển các hệ sinh thái Web App chuyên sâu, ứng dụng AI thực chiến.',
    'footer.slogan': '"MONG MUỐN → Ý TƯỞNG → HIỆN THỰC"',
    'footer.featured': 'Ứng Dụng Tiêu Biểu',
    'footer.ecosystem': 'Hệ Sinh Thái Web & AI',
    'footer.domains': '9 Lĩnh Vực Chuyên Ngành (30+ App)',
    'footer.cloud': 'Kiến Trúc & Công Nghệ Cloud',
    'footer.contact': 'Liên Hệ Trực Tiếp',
    'footer.rights': 'Bản quyền thuộc về DUY ANH DIGITAL LAB. Mọi quyền được bảo lưu.'
  },
  en: {
    // Nav
    'nav.vietreal': 'VIETREAL 360°',
    'nav.ecosystem': '13 Country Apps',
    'nav.features': 'Core Tech Pillars',
    'nav.tones': '6 Tones Lab',
    'nav.pronouns': 'Pronoun Matrix',
    'nav.tryFree': 'Start Free Trial',
    'nav.consultation': 'Request Demo',
    'nav.explore': 'Explore Ecosystem',

    // Hero
    'hero.badge': 'VIETNAMESE 360° REAL-WORLD ECOSYSTEM • DUY ANH LAB',
    'hero.title.part1': 'Speak real Vietnamese',
    'hero.title.part2': 'From your very first lesson.',
    'hero.subtitle': 'The ultimate survival & business language ecosystem tailored for expatriates living and working in Vietnam. Master the 6 acoustic tones, crack the cultural pronoun hierarchy, and navigate street life with instant confidence.',
    'hero.cta.trial': 'Start Free Trial Now',
    'hero.cta.demo': 'Launch Tone Simulator',
    'hero.video.badge': '360° VIDEO TOUR • REAL EXPERIENCE',
    'hero.quick.title': 'Instant Street Survival Phrases in Vietnam:',
    'hero.stats.learners': '10,000+ Expat Learners',
    'hero.stats.countries': '13 Native Countries',
    'hero.stats.accuracy': '98.5% Acoustic Pitch Match',
    'hero.stats.apps': '14 Tailored Web Apps',

    // Pillars
    'pillars.section.badge': 'CORE TECHNOLOGICAL ADVANCEMENT',
    'pillars.title': '4 Technological Pillars of VIETREAL 360°',
    'pillars.subtitle': 'A proprietary methodology solving the 4 greatest roadblocks for foreign learners in Vietnam: Tonality confusion, relational pronoun chaos, fear of native speaking, and app installation friction.',
    'pillar1.title': 'AI Pitch & Tone Wave Correction',
    'pillar1.desc': 'Visualizes real-time acoustic pitch frequency curves (Hz). Train your ear, eyes, and vocal cords to match native Vietnamese tone slope contours.',
    'pillar2.title': 'Contextual Pronoun Matrix',
    'pillar2.desc': 'Smart hierarchical decision tree for Anh, Chị, Em, Bác, Chú, Cô, Mình, Cháu. Automatically selects the exact respectful address based on age and social role.',
    'pillar3.title': '24/7 AI Role-Play Tutor',
    'pillar3.desc': 'Over 50 hyper-realistic simulated conversations: Bargaining at Ben Thanh Market, directing Grab drivers, ordering Pho without onions, closing office deals.',
    'pillar4.title': 'Offline PWA Instant Installation',
    'pillar4.desc': 'Zero-friction Progressive Web App under a few megabytes. Pin straight to your home screen in 1 click and practice offline without app store downloads.',
    'pillars.cta': 'Access VIETREAL App Now',

    // Ecosystem
    'ecosystem.section.badge': 'GLOBAL LOCALIZED ECOSYSTEM',
    'ecosystem.title': '13 Country-Tailored Dedicated Web Apps',
    'ecosystem.subtitle': 'Every linguistic background has distinct phonetic blind spots. DUY ANH LAB engineered 13 standalone platforms in each native language to resolve nationality-specific phonetic barriers.',
    'ecosystem.filter.all': 'All Countries (13 Apps)',
    'ecosystem.filter.asia': 'Asia (7 Countries)',
    'ecosystem.filter.europe': 'Europe (5 Countries)',
    'ecosystem.filter.americas': 'Americas (1 Country)',
    'ecosystem.search.placeholder': 'Search country or language (Japan, Korea, USA, France, Germany...)...',
    'ecosystem.launch': 'Launch Native App',
    'ecosystem.video_preview': 'Watch Video Tour',
    'ecosystem.native_note': 'Native UI & curriculum in mother tongue',

    // Tone Simulator
    'tones.section.badge': 'ACOUSTIC PITCH LABORATORY',
    'tones.title': 'Live Visual 6-Tone Simulator',
    'tones.subtitle': 'Click on each tone to trigger synthetic acoustic pitch frequency waves and understand its exact aerodynamic trajectory.',
    'tones.listen': 'Play Pitch Tone',
    'tones.trajectory': 'Pitch Trajectory:',

    // Quick Onboarding
    'onboard.section.badge': '1-MINUTE CUSTOM ROADMAP',
    'onboard.title': 'Generate Your Tailored Vietnamese Roadmap',
    'onboard.subtitle': 'No email required • No credit card • 1-minute custom roadmap ready instantly',
    'onboard.q1': '1. Where do you currently reside in Vietnam?',
    'onboard.q2': '2. What is your current Vietnamese proficiency level?',
    'onboard.q3': '3. What is your primary immediate objective?',
    'onboard.btn.generate': 'Generate Custom Action Plan',
    'onboard.result.title': 'Your Recommended Fast-Track Plan',

    // Consultation
    'consult.section.badge': 'ENTERPRISE & EXPAT SOLUTIONS',
    'consult.title': 'Request Consultation & Customized Training',
    'consult.subtitle': 'Tailored programs for FDI corporations, international language centers, diplomatic missions, and expat executives.',
    'form.name': 'Your Full Name',
    'form.country': 'Nationality / Native Language',
    'form.contact_type': 'Preferred Contact Method',
    'form.contact_val': 'Zalo / WhatsApp number / Email address',
    'form.level': 'Current Vietnamese Level',
    'form.goal': 'Primary Learning Objective',
    'form.city': 'City in Vietnam',
    'form.notes': 'Additional notes or bespoke requests',
    'form.submit': 'Submit Consultation Request',
    'form.success.title': 'Request Successfully Submitted!',
    'form.success.msg': 'A DUY ANH LAB language consultant will contact you via Zalo/WhatsApp within 2 business hours with your complimentary roadmap and demo access.',

    // Footer
    'footer.brand.desc': 'Real-World Software Engineering & AI Solutions Ecosystem. Pioneering high-impact web apps, practical AI systems, and specialized industry software.',
    'footer.slogan': '"FROM DESIRE → IDEA → REALITY"',
    'footer.featured': 'Featured Applications',
    'footer.ecosystem': 'Web & AI Ecosystem',
    'footer.domains': '9 Specialized Industry Domains (30+ Apps)',
    'footer.cloud': 'Cloud Architecture & Stack',
    'footer.contact': 'Direct Contacts & Office',
    'footer.rights': '© 2026 DUY ANH DIGITAL LAB • All rights reserved.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('vietreal_lang') as Language;
    return saved === 'en' || saved === 'vi' ? saved : 'vi';
  });

  useEffect(() => {
    localStorage.setItem('vietreal_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'vi' ? 'en' : 'vi'));
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
