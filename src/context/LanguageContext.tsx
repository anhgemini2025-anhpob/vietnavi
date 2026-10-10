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
    'nav.home': 'Trang Chủ',
    'nav.vietreal': 'VIETREAL 360°',
    'nav.ecosystem': '13 Ngôn Ngữ Tailor',
    'nav.features': 'Công Nghệ Thực Chiến',
    'nav.tones': 'Luyện 6 Thanh',
    'nav.pronouns': 'Ma Trận Xưng Hô',
    'nav.tryFree': 'Học Thử Miễn Phí',
    'nav.consultation': 'Tư Vấn & Trao Đổi',
    'nav.installPwa': 'Cài Đặt PWA',
    'nav.explore': 'Khám Phá Chi Tiết',
    'nav.themeDark': 'Giao diện Tối',
    'nav.themeLight': 'Giao diện Sáng',

    // Hero
    'hero.badge': 'HỆ SINH THÁI DẠY & HỌC TIẾNG VIỆT THỰC CHIẾN 360° • DUY ANH LAB',
    'hero.title.part1': 'Nói tiếng Việt thật',
    'hero.title.part2': 'Ngay từ bài học đầu tiên.',
    'hero.subtitle': 'Giải pháp toàn diện thiết kế riêng cho người nước ngoài sinh sống, làm việc và kinh doanh tại Việt Nam. Xóa bỏ rào cản 6 thanh điệu, giải mã ma trận đại từ xưng hô và làm chủ giao tiếp đường phố ngay tức thì.',
    'hero.cta.trial': 'Học Thử Miễn Phí Ngay',
    'hero.cta.demo': 'Trải Nghiệm Phòng Luyện Âm',
    'hero.video.badge': 'VIDEO TOUR 360° • TRẢI NGHIỆM THỰC TẾ',
    'hero.quick.title': 'Tình huống sinh tồn khẩn cấp trên đường phố Việt Nam:',
    'hero.stats.learners': 'Cá Nhân Hóa Người Học',
    'hero.stats.learners.sub': 'Lộ trình thích ứng riêng',
    'hero.stats.tailor': '13 Ngôn Ngữ Tailor',
    'hero.stats.tailor.sub': 'May đo theo tiếng mẹ đẻ',
    'hero.stats.tones': 'Trực Quan 6 Thanh Điệu',
    'hero.stats.tones.sub': 'Mô phỏng cao độ sóng âm',
    'hero.stats.pwa': 'Công Nghệ Web PWA',
    'hero.stats.pwa.sub': 'Ghim màn hình 1 chạm',

    // Ecosystem
    'ecosystem.section.badge': 'HỆ SINH THÁI 13 NGÔN NGỮ TAILOR',
    'ecosystem.title': '13 Ngôn Ngữ Thiết Kế May Đo (Tailor)',
    'ecosystem.subtitle': 'Mỗi ngôn ngữ mẹ đẻ có một cấu trúc ngữ âm riêng. DUY ANH LAB may đo (tailor) 13 giải pháp chuyên biệt theo nền tảng ngôn ngữ của người học — không nói chung chung, hóa giải triệt để rào cản ngữ âm.',
    'ecosystem.filter.all': 'Tất cả (13 Ngôn ngữ)',
    'ecosystem.filter.asia': 'Châu Á (7 ngôn ngữ)',
    'ecosystem.filter.europe': 'Châu Âu (5 ngôn ngữ)',
    'ecosystem.filter.americas': 'Châu Mỹ (1 ngôn ngữ)',
    'ecosystem.search.placeholder': 'Tìm ngôn ngữ mẹ đẻ (Nhật, Hàn, Anh/Mỹ, Trung, Thái, Pháp...)...',
    'ecosystem.launch': 'Khám Phá Chi Tiết',
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
    'nav.home': 'Home',
    'nav.vietreal': 'VIETREAL 360°',
    'nav.ecosystem': '13 Tailored Languages',
    'nav.features': 'Core Tech Pillars',
    'nav.tones': '6 Tones Lab',
    'nav.pronouns': 'Pronoun Matrix',
    'nav.tryFree': 'Free Trial',
    'nav.consultation': 'Consult & Connect',
    'nav.installPwa': 'Install PWA',
    'nav.explore': 'Explore Details',
    'nav.themeDark': 'Dark Theme',
    'nav.themeLight': 'Light Theme',

    // Hero
    'hero.badge': 'VIETNAMESE 360° REAL-WORLD ECOSYSTEM • DUY ANH LAB',
    'hero.title.part1': 'Speak real Vietnamese',
    'hero.title.part2': 'From your very first lesson.',
    'hero.subtitle': 'The ultimate survival & business language ecosystem tailored for expatriates living and working in Vietnam. Master the 6 acoustic tones, crack the cultural pronoun hierarchy, and navigate street life with instant confidence.',
    'hero.cta.trial': 'Start Free Trial Now',
    'hero.cta.demo': 'Launch Tone Simulator',
    'hero.video.badge': '360° VIDEO TOUR • REAL EXPERIENCE',
    'hero.quick.title': 'Instant Street Survival Phrases in Vietnam:',
    'hero.stats.learners': 'Personalized Learning',
    'hero.stats.learners.sub': 'Adaptive learner journey',
    'hero.stats.tailor': '13 Tailored Languages',
    'hero.stats.tailor.sub': 'Customized by native tongue',
    'hero.stats.tones': 'Visual 6 Tone Contours',
    'hero.stats.tones.sub': 'Real-time pitch tracking',
    'hero.stats.pwa': 'Offline PWA Technology',
    'hero.stats.pwa.sub': 'Instant 1-tap pin to home screen',

    // Ecosystem
    'ecosystem.section.badge': '13 TAILORED NATIVE LANGUAGES',
    'ecosystem.title': '13 Tailored Solutions for Native Speakers',
    'ecosystem.subtitle': 'Every linguistic background has distinct phonetic habits. DUY ANH LAB tailors 13 dedicated apps to break mother-tongue barriers without generic textbook fluff.',
    'ecosystem.filter.all': 'All (13 Languages)',
    'ecosystem.filter.asia': 'Asia (7 Languages)',
    'ecosystem.filter.europe': 'Europe (5 Languages)',
    'ecosystem.filter.americas': 'Americas (1 Language)',
    'ecosystem.search.placeholder': 'Search native language (Japanese, Korean, English, Chinese, Thai...)...',
    'ecosystem.launch': 'Explore Application',
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
