import { CountryApp, ToneInfo, PronounItem, SurvivalPhrase } from '../types';

export const COUNTRY_APPS: CountryApp[] = [
  {
    id: 'jpviet',
    code: 'jp',
    countryNameVi: 'Nhật Bản',
    countryNameEn: 'Japan',
    flag: '🇯🇵',
    nativeTitle: '日本人のためのベトナム語',
    nativeSubtitle: 'カタカナ発音の壁を突破する実践ベトナム語',
    subtitleVi: 'App Người Nhật học tiếng Việt',
    subtitleEn: 'Vietnamese App for Japanese Expats',
    url: 'https://jpviet.vercel.app/',
    region: 'Asia',
    nativeTeaser: 'ベトナム在住日本人駐在員・家族向け。6声調の波形視覚化と敬称システム（Anh/Chị/Em）を完全攻略。',
    keyFeatures: [
      { vi: 'Khắc phục lỗi phát âm theo âm Katakana', en: 'Overcome Katakana phonetic habits' },
      { vi: 'Chuyên đề giao tiếp nhà máy & văn phòng KCN', en: 'Factory & office communication in Industrial Zones' },
      { vi: 'Đối chiếu văn hóa ứng xử Keigo & kính ngữ Việt', en: 'Keigo polite speech vs Vietnamese pronoun hierarchy' }
    ],
    phoneticFocus: {
      vi: 'Chỉnh thanh Ngã, Hỏi & âm cuối -c, -p, -t',
      en: 'Mastering Ngã, Hỏi tones & final stops -c, -p, -t'
    },
    samplePhrase: {
      vi: 'Cho tôi một ly cà phê sữa đá, ít đường!',
      native: '練乳アイスコーヒーを少なめの砂糖で1杯ください！'
    },
    videoThumbnail: '/brand/jp-thumb.jpg',
    tagColor: 'from-rose-500/20 to-red-600/30',
    logo: '/brand/Japan.png',
    hasVideo: true,
    videoUrl: '/video/jpviet-video.mp4'
  },
  {
    id: 'krviet',
    code: 'kr',
    countryNameVi: 'Hàn Quốc',
    countryNameEn: 'South Korea',
    flag: '🇰🇷',
    nativeTitle: '한국인을 위한 베트남어',
    nativeSubtitle: '호치민·하노이 교민과 주재원을 위한 실전 회화',
    subtitleVi: 'App Người Hàn học tiếng Việt',
    subtitleEn: 'Vietnamese App for Korean Expats',
    url: 'https://krviet.vercel.app/',
    region: 'Asia',
    nativeTeaser: '한인 타운(푸미흥, 미딩) 생활 밀착형 대화부터 골프장, 식당, 공장 생산라인 지시어까지 한 번에 마스터.',
    keyFeatures: [
      { vi: 'Tình huống sống thực tế tại Phú Mỹ Hưng & Mỹ Đình', en: 'Real-life scenarios in Phu My Hung & My Dinh' },
      { vi: 'Giao tiếp công xưởng may mặc, điện tử & xây dựng', en: 'Electronics, textile & construction site terminology' },
      { vi: 'Luyện tai nghe tông điệu Bắc & Nam chuẩn xác', en: 'Northern & Southern accent discrimination training' }
    ],
    phoneticFocus: {
      vi: 'Phân biệt thanh Sắc & Nặng trong ngữ điệu Hàn',
      en: 'Tackling Sharp (Sắc) & Heavy (Nặng) tones with Korean intonation'
    },
    samplePhrase: {
      vi: 'Em ơi, tính tiền giúp anh bàn này nhé!',
      native: '저기요, 이 테이블 계산 좀 부탁해요!'
    },
    videoThumbnail: '/brand/kr-thumb.jpg',
    tagColor: 'from-blue-500/20 to-indigo-600/30',
    hasVideo: true,
    videoUrl: '/video/krviet-video.mp4'
  },
  {
    id: 'usviet',
    code: 'us',
    countryNameVi: 'Hoa Kỳ & Quốc Tế',
    countryNameEn: 'USA & English Speakers',
    flag: '🇺🇸',
    nativeTitle: 'Vietnamese for Americans & Expats',
    nativeSubtitle: 'Speak Real Street & Business Vietnamese in 30 Days',
    subtitleVi: 'App Người Mỹ & Quốc tế học tiếng Việt',
    subtitleEn: 'Vietnamese for American Expats & Digital Nomads',
    url: 'https://usviet.vercel.app/',
    region: 'Americas',
    nativeTeaser: 'Engineered specifically for non-tonal native English speakers. Interactive acoustic pitch graphs and zero-grammar jargon.',
    keyFeatures: [
      { vi: 'Biểu đồ sóng cao độ âm thanh trực quan cho người nói tiếng Anh', en: 'Visual acoustic pitch graphs for non-tonal speakers' },
      { vi: 'Giao tiếp sinh tồn Nomad: Thuê căn hộ, gọi Grab, đi chợ', en: 'Nomad survival: Renting, Grab rides, market bargaining' },
      { vi: 'Giải mã ma trận đại từ xưng hô Việt Nam bằng sơ đồ cây', en: 'Decision tree hierarchy for Anh / Chị / Em / Cô / Chú' }
    ],
    phoneticFocus: {
      vi: 'Luyện các âm nguyên âm đôi ư, ơ, ê và thanh điệu',
      en: 'Vowels ư, ơ, ê mastery and intonation vs tone conflict'
    },
    samplePhrase: {
      vi: 'Cái này bao nhiêu tiền một ký vậy cô?',
      native: 'How much is this per kilogram, Ma’am?'
    },
    videoThumbnail: '/brand/us-thumb.jpg',
    tagColor: 'from-cyan-500/20 to-blue-600/30'
  },
  {
    id: 'zhviet',
    code: 'zh',
    countryNameVi: 'Trung Quốc & Đài Loan',
    countryNameEn: 'China & Taiwan',
    flag: '🇨🇳',
    nativeTitle: '华人实用越南语',
    nativeSubtitle: '中越双语对照 • 快速掌握越语六声调与商务交流',
    subtitleVi: 'App Người Hoa học tiếng Việt',
    subtitleEn: 'Vietnamese for Chinese Expats & Investors',
    url: 'https://zhviet.vercel.app/',
    region: 'Asia',
    nativeTeaser: '针对中文母语者的汉越音(Từ Hán Việt)对应优势，用音调对应规律快速记忆80%的越语商务词汇。',
    keyFeatures: [
      { vi: 'Khai thác tối đa 70% vốn từ Hán Việt tương đồng', en: 'Leverage 70% Sino-Vietnamese cognates for rapid vocabulary' },
      { vi: 'Chuyên sâu thương mại B2B, đàm phán hợp đồng xưởng', en: 'B2B trading, factory negotiation and logistics terms' },
      { vi: 'Sửa lỗi lộn thanh điệu giữa 4 thanh tiếng Trung & 6 thanh Việt', en: 'Bridge 4 Mandarin tones vs 6 Vietnamese tones without confusion' }
    ],
    phoneticFocus: {
      vi: 'Phân biệt thanh Hỏi và Ngã chuẩn xác',
      en: 'Disentangling Hỏi & Ngã tonal contours'
    },
    samplePhrase: {
      vi: 'Lô hàng này khi nào có thể giao đến kho Bình Dương?',
      native: '这批货物什么时候可以送到平阳仓库？'
    },
    videoThumbnail: '/brand/zh-thumb.jpg',
    tagColor: 'from-amber-500/20 to-red-600/30',
    hasVideo: true,
    videoUrl: '/video/zhviet-video.mp4'
  },
  {
    id: 'thviet',
    code: 'th',
    countryNameVi: 'Thái Lan',
    countryNameEn: 'Thailand',
    flag: '🇹🇭',
    nativeTitle: 'ภาษาเวียดนามสำหรับคนไทย',
    nativeSubtitle: 'เรียนภาษาเวียดนามจากคนไทยสู่เวียดนามจริง',
    subtitleVi: 'App Người Thái học tiếng Việt',
    subtitleEn: 'Vietnamese App for Thai Expats',
    url: 'https://thviet.vercel.app',
    region: 'Asia',
    nativeTeaser: 'เปรียบเทียบระบบ 5 วรรณยุกต์ไทยกับ 6 วรรณยุกต์เวียดนาม พร้อมฝึกการออกเสียงสระคู่และการค้าชายแดน.',
    keyFeatures: [
      { vi: 'So sánh tương thích 5 thanh điệu Thái & 6 thanh Việt', en: 'Compare Thai 5 tones vs Vietnamese 6 tones' },
      { vi: 'Giao tiếp ẩm thực đường phố, chuỗi bán lẻ & F&B', en: 'Street food, retail chain & F&B management communications' },
      { vi: 'Hệ thống phiên âm ngữ âm Thái dễ đọc, dễ nhớ', en: 'Intuitive Thai phonetics system for Vietnamese spelling' }
    ],
    phoneticFocus: {
      vi: 'Âm tắc vòm và thanh Nặng đặc trưng',
      en: 'Palatal stops and heavy glottalized drop (Thanh Nặng)'
    },
    samplePhrase: {
      vi: 'Bún chả này ăn kèm với nước mắm và rau sống đúng không?',
      native: 'บุ๋นจ๋าจานนี้กินคู่กับน้ำปลาและผักสดใช่ไหมครับ?'
    },
    videoThumbnail: '/brand/th-thumb.jpg',
    tagColor: 'from-emerald-500/20 to-teal-600/30',
    logo: '/brand/Thai.png',
    hasVideo: true,
    videoUrl: '/video/thviet-video.mp4'
  },
  {
    id: 'frviet',
    code: 'fr',
    countryNameVi: 'Pháp',
    countryNameEn: 'France',
    flag: '🇫🇷',
    nativeTitle: 'Le Vietnamien Pratique pour Francophones',
    nativeSubtitle: 'Comprendre les tons & la culture de communication au Vietnam',
    subtitleVi: 'App Người Pháp học tiếng Việt',
    subtitleEn: 'Vietnamese for French Speakers',
    url: 'https://frviet.vercel.app/',
    region: 'Europe',
    nativeTeaser: 'Conçu pour les résidents français, chefs cuisiniers et entrepreneurs. Apprenez à naviguer avec aisance dans la vie quotidienne.',
    keyFeatures: [
      { vi: 'Gốc từ mượn tiếng Pháp phong phú (Cà phê, Ga, Bơ, Phanh)', en: 'Explore French loanwords in Vietnamese (Café, Gare, Beurre)' },
      { vi: 'Giao tiếp ngành du lịch, khách sạn & nghệ thuật ẩm thực', en: 'Hospitality, boutique hotel & culinary arts communication' },
      { vi: 'Phương pháp luyện thanh điệu qua thang âm nhạc cổ điển', en: 'Musical scale training method for Vietnamese tones' }
    ],
    phoneticFocus: {
      vi: 'Khử âm mũi tiếng Pháp khi phát âm nguyên âm Việt',
      en: 'Neutralizing French nasalization in Vietnamese vowels'
    },
    samplePhrase: {
      vi: 'Cho tôi một bánh mì giòn không lấy ớt nhé!',
      native: 'Une baguette croustillante sans piment s’il vous plaît !'
    },
    videoThumbnail: '/brand/fr-thumb.jpg',
    tagColor: 'from-indigo-500/20 to-blue-600/30'
  },
  {
    id: 'deviet',
    code: 'de',
    countryNameVi: 'Đức',
    countryNameEn: 'Germany',
    flag: '🇩🇪',
    nativeTitle: 'Vietnamesisch im Alltag für Deutsche',
    nativeSubtitle: 'Präzise Aussprache & Kulturelle Feinheiten für Expats',
    subtitleVi: 'App Người Đức học tiếng Việt',
    subtitleEn: 'Vietnamese for German Expats & Engineers',
    url: 'https://deviet.vercel.app/',
    region: 'Europe',
    nativeTeaser: 'Strukturierter, logischer Ansatz für deutsche Ingenieure und Fachkräfte. Präzise Akustikdiagramme und praxisnaher Leitfaden.',
    keyFeatures: [
      { vi: 'Phương pháp cấu trúc chặt chẽ theo tư duy kỹ thuật Đức', en: 'Structured, highly logical curriculum for German engineers' },
      { vi: 'Từ vựng kỹ thuật cơ khí, tự động hóa & sản xuất công nghiệp', en: 'Machinery, automation & industrial manufacturing vocabulary' },
      { vi: 'Quy tắc ngữ pháp tối giản hóa tối đa không chia thì', en: 'Zero-conjugation grammar breakdown for quick fluency' }
    ],
    phoneticFocus: {
      vi: 'Kiểm soát độ cao thanh Sắc và thanh Ngã',
      en: 'Pitch elevation control for Sắc and broken Ngã'
    },
    samplePhrase: {
      vi: 'Hôm nay chúng ta cần kiểm tra lại dây chuyền lắp ráp.',
      native: 'Heute müssen wir die Montagelinie noch einmal überprüfen.'
    },
    videoThumbnail: '/brand/de-thumb.jpg',
    tagColor: 'from-yellow-500/20 to-amber-600/30'
  },
  {
    id: 'ruviet',
    code: 'ru',
    countryNameVi: 'Nga',
    countryNameEn: 'Russia',
    flag: '🇷🇺',
    nativeTitle: 'Вьетнамский язык для жизни и работы',
    nativeSubtitle: 'Практический курс для экспатов в Нячанге, Дананге и Сайгоне',
    subtitleVi: 'App Người Nga học tiếng Việt',
    subtitleEn: 'Vietnamese for Russian Expats',
    url: 'https://ruviet.vercel.app/',
    region: 'Europe',
    nativeTeaser: 'Курс живого вьетнамского языка для специалистов IT, сферы услуг и туризма. Без нудной теории — только нужные фразы.',
    keyFeatures: [
      { vi: 'Chuyên đề cho cộng đồng Expat tại Nha Trang, Đà Nẵng, Phú Quốc', en: 'Tailored for expat communities in Nha Trang, Da Nang, Phu Quoc' },
      { vi: 'Giao tiếp ngành IT, dầu khí & dịch vụ nghỉ dưỡng cao cấp', en: 'IT software, oil & gas, and resort management dialogues' },
      { vi: 'Hệ thống phiên âm Cyrillic tương thích chuẩn âm', en: 'Cyrillic phonetics correlation for natural pronunciation' }
    ],
    phoneticFocus: {
      vi: 'Không nhấn trọng âm kiểu Nga vào từ đơn âm tiết Việt',
      en: 'Eliminating Russian stress bias in monosyllabic Vietnamese'
    },
    samplePhrase: {
      vi: 'Bác tài ơi, cho tôi xuống ở ngã tư phía trước nhé!',
      native: 'Водитель, высадите меня, пожалуйста, на следующем перекрестке!'
    },
    videoThumbnail: '/brand/ru-thumb.jpg',
    tagColor: 'from-sky-500/20 to-blue-700/30'
  },
  {
    id: 'khviet',
    code: 'kh',
    countryNameVi: 'Khmer (Campuchia)',
    countryNameEn: 'Cambodia (Khmer)',
    flag: '🇰🇭',
    nativeTitle: 'ភាសាវៀតណាមសម្រាប់ជនជាតិខ្មែរ',
    nativeSubtitle: 'រៀនភាសាវៀតណាមអនុវត្តជាក់ស្តែងសម្រាប់ការរកស៊ី ការព្យាបាលជំងឺ និងការរស់នៅ',
    subtitleVi: 'App Người Khmer học tiếng Việt (KhmerViet)',
    subtitleEn: 'Vietnamese App for Khmer Speakers (KhmerViet)',
    url: 'https://khviet.vercel.app/',
    region: 'Asia',
    nativeTeaser: 'រចនាឡើងពិសេសសម្រាប់បងប្អូនខ្មែរ៖ ពាណិជ្ជករ អ្នកជំងឺមកព្យាបាលនៅវៀតណាម និស្សិត និងពលករ។ ជំនះឧបសគ្គ ៦ វណ្ណយុត្តិ និងសន្ទនាជាក់ស្តែង។',
    keyFeatures: [
      { vi: 'Khám chữa bệnh tại các bệnh viện lớn TP.HCM (Chợ Rẫy, ĐHYD, Viện Tim, Ung Bướu)', en: 'Healthcare & medical visit dialogues at top HCMC hospitals' },
      { vi: 'Giao thương tiểu ngạch, chợ đầu mối và vận tải logistics biên giới (Mộc Bài, Tịnh Biên)', en: 'Cross-border trading, wholesale market bargaining & logistics vocabulary' },
      { vi: 'Chuyển hóa ngữ điệu từ ngôn ngữ phi thanh điệu Khmer sang làm chủ 6 thanh điệu Việt', en: 'Acoustic pitch bridge transitioning non-tonal Khmer to 6 Vietnamese tones' },
      { vi: 'Luyện chuẩn các nguyên âm đôi (ươ, iê, uô) và phụ âm tắc họng (-c, -p, -t, -ch)', en: 'Mastering Vietnamese diphthongs and final consonant stops' }
    ],
    phoneticFocus: {
      vi: 'Khử thói quen bật hơi vô thanh, luyện cao độ 6 thanh điệu (Hỏi, Ngã, Nặng) & nguyên âm đôi',
      en: 'Neutralizing Khmer breathiness, mastering 6 pitch contours (Hỏi, Ngã, Nặng) & double vowels'
    },
    samplePhrase: {
      vi: 'Bác sĩ ơi, thuốc này uống trước hay sau bữa ăn? Bao lâu thì tái khám ạ?',
      native: 'លោកគ្រូពេទ្យ ថ្នាំនេះត្រូវលេបមុន ឬក្រោយបាយ? តើប៉ុន្មានថ្ងៃទៀតទើបមកពិនិត្យឡើងវិញ?'
    },
    videoThumbnail: '/brand/kh-thumb.jpg',
    tagColor: 'from-red-500/20 to-blue-700/30',
    hasVideo: true,
    videoUrl: '' // Chừa sẵn phần đính link YouTube (Ví dụ: https://www.youtube.com/watch?v=...)
  },
  {
    id: 'laviet',
    code: 'la',
    countryNameVi: 'Lào',
    countryNameEn: 'Laos',
    flag: '🇱🇦',
    nativeTitle: 'ພາສາຫວຽດສຳລັບຄົນລາວ',
    nativeSubtitle: 'ຮຽນພາສາຫວຽດນາມຕົວຈິງ ສໍາລັບການຮຽນ ແລະ ການເຮັດວຽກ',
    subtitleVi: 'App Người Lào học tiếng Việt',
    subtitleEn: 'Vietnamese for Lao Students & Expats',
    url: 'https://laoviet.vercel.app/',
    region: 'Asia',
    nativeTeaser: 'ປຽບທຽບສຳນຽງລາວ-ຫວຽດຢ່າງໃກ້ຊິດ. ຝຶກຝົນການສື່ສານປະຈຳວັນ, ການສຶກສາ ແລະ ການຄ້າຂ້າມແດນຢ່າງໝັ້ນໃຈ.',
    keyFeatures: [
      { vi: 'Tương đồng văn hóa & ngữ hệ giúp tiếp thu siêu tốc', en: 'Cultural & structural linguistic affinity for 3x learning speed' },
      { vi: 'Chuyên đề du học đại học & học thuật tại Việt Nam', en: 'Academic preparation for Lao university students in Vietnam' },
      { vi: 'Đối chiếu các từ đồng nghĩa và từ giả mạo nghĩa khác nhau', en: 'False cognate warning & vocabulary precision drills' }
    ],
    phoneticFocus: {
      vi: 'Phân định thanh Điệu Lào (6 thanh) và Việt tương ứng',
      en: 'Precise Lao-Vietnamese tone mapping calibration'
    },
    samplePhrase: {
      vi: 'Chào thầy cô, hôm nay em muốn xin phép nộp bài tập ạ!',
      native: 'ສະບາຍດີອາຈານ, ມື້ນີ້ຂ້ອຍຢາກຂໍອະນຸຍາດສົ່ງບົດຝຶກຫັດ!'
    },
    videoThumbnail: '/brand/la-thumb.jpg',
    tagColor: 'from-blue-500/20 to-rose-600/30',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/watch?v=bKhv0hFiiQo'
  },
  {
    id: 'inviet',
    code: 'in',
    countryNameVi: 'Ấn Độ',
    countryNameEn: 'India',
    flag: '🇮🇳',
    nativeTitle: 'Vietnamese for Expats from India',
    nativeSubtitle: 'Practical Daily & Corporate Vietnamese for Indian Professionals',
    subtitleVi: 'App Người Ấn học tiếng Việt',
    subtitleEn: 'Vietnamese for Indian IT & Corporate Expats',
    url: 'https://inviet.vercel.app/',
    region: 'Asia',
    nativeTeaser: 'Tailored for Indian IT specialists, engineers, and spice/textile traders living in Saigon, Da Nang, and Hanoi.',
    keyFeatures: [
      { vi: 'Giao tiếp hàng ngày cho gia đình chuyên gia công nghệ cao', en: 'Daily living conversations for tech expat families' },
      { vi: 'Tìm kiếm thực phẩm chay (Ăn Chay) & gia vị thực tế', en: 'Finding vegetarian (Ăn Chay) foods & ingredients in markets' },
      { vi: 'Hòa nhập văn hóa doanh nghiệp và giao tiếp đồng nghiệp Việt', en: 'Corporate office rapport & lunchtime social chat' }
    ],
    phoneticFocus: {
      vi: 'Loại bỏ hiện tượng uốn lưỡi Retroflex khi phát âm tiếng Việt',
      en: 'Neutralizing Indian English retroflex consonants in Vietnamese'
    },
    samplePhrase: {
      vi: 'Món này có nấu từ thịt hay nước mắm không? Tôi ăn chay.',
      native: 'Is this cooked with meat or fish sauce? I am strictly vegetarian.'
    },
    videoThumbnail: '/brand/in-thumb.jpg',
    tagColor: 'from-orange-500/20 to-emerald-600/30'
  },
  {
    id: 'esviet',
    code: 'es',
    countryNameVi: 'Tây Ban Nha & Mỹ Latinh',
    countryNameEn: 'Spain & Latin America',
    flag: '🇪🇸',
    nativeTitle: 'Vietnamita Práctico para Hispanohablantes',
    nativeSubtitle: 'Aprende vietnamita real desde el primer día sin rodeos',
    subtitleVi: 'App Người Tây Ban Nha học tiếng Việt',
    subtitleEn: 'Vietnamese for Spanish Speakers',
    url: 'https://esviet.vercel.app/',
    region: 'Europe',
    nativeTeaser: 'Diseñado especialmente para la comunidad hispanohablante. Explicaciones claras de tonos, fonética y vida cotidiana en Vietnam.',
    keyFeatures: [
      { vi: 'Tận dụng bảng chữ cái Latin Quốc Ngữ tương đồng chữ cái Tây Ban Nha', en: 'Leverage shared Latin alphabet for instant reading literacy' },
      { vi: 'Phương pháp luyện cao độ tương tác với visual waveform', en: 'Visual acoustic waveform drills for non-tonal ears' },
      { vi: 'Giao tiếp phượt bụi, ẩm thực và đời sống thường nhật', en: 'Backpacking, street culinary tours & local friend making' }
    ],
    phoneticFocus: {
      vi: 'Phát âm chuẩn các nguyên âm Việt không có trong tiếng Tây Ban Nha (ư, ơ, â, ă)',
      en: 'Mastering unique Vietnamese vowels (ư, ơ, â, ă)'
    },
    samplePhrase: {
      vi: 'Làm ơn cho tôi hỏi đường đi đến chợ Bến Thành ở đâu?',
      native: '¿Por favor me puede decir cómo llegar al mercado de Ben Thanh?'
    },
    videoThumbnail: '/brand/es-thumb.jpg',
    tagColor: 'from-red-500/20 to-yellow-600/30'
  },
  {
    id: 'ptviet',
    code: 'pt',
    countryNameVi: 'Bồ Đào Nha & Brazil',
    countryNameEn: 'Portugal & Brazil',
    flag: '🇵🇹',
    nativeTitle: 'Vietnamita para Lusófonos',
    nativeSubtitle: 'Guia Prático de Vietnamita Real para Brasileiros e Portugueses',
    subtitleVi: 'App Người Bồ Đào Nha & Brazil học tiếng Việt',
    subtitleEn: 'Vietnamese for Portuguese Speakers',
    url: 'https://ptviet.vercel.app/',
    region: 'Europe',
    nativeTeaser: 'Descubra a histórica conexão linguística (padre Alexandre de Rhodes) e aprenda a falar com naturalidade nas ruas do Vietnã.',
    keyFeatures: [
      { vi: 'Khai thác gốc rễ lịch sử chữ Quốc ngữ sáng tạo bởi Alexandre de Rhodes', en: 'Historical ties: Portuguese roots of Vietnamese Quốc Ngữ script' },
      { vi: 'Tình huống công việc bóng đá, cà phê, thương mại nông sản', en: 'Football coaching, coffee trading & agriculture dialogues' },
      { vi: 'Chỉ số tự tin phát âm qua bộ mô phỏng giọng nói thực tế', en: 'Confidence score meter with simulated speech tests' }
    ],
    phoneticFocus: {
      vi: 'Chỉnh thanh Ngã có âm giật họng đặc thù',
      en: 'Mastering the glottal broken tone (Thanh Ngã)'
    },
    samplePhrase: {
      vi: 'Cà phê Robusta Việt Nam thực sự rất đậm đà và ngon!',
      native: 'O café Robusta do Vietnã é realmente muito encorpado e delicioso!'
    },
    videoThumbnail: '/brand/pt-thumb.jpg',
    tagColor: 'from-emerald-500/20 to-rose-600/30'
  }
];

export const VIETNAMESE_TONES: ToneInfo[] = [
  {
    id: 'ngang',
    nameVi: 'Thanh Ngang (Không dấu)',
    nameEn: 'Level Tone (Flat)',
    mark: '—',
    color: '#06B6D4',
    borderColor: 'border-cyan-500',
    bgColor: 'bg-cyan-500/10 text-cyan-400',
    descriptionVi: 'Giữ cao độ bằng phẳng, hơi cao, không lên cũng không xuống.',
    descriptionEn: 'High-mid level pitch, held steady and sustained without rising or falling.',
    pitchTrajectory: 'Steady ~220Hz',
    frequencies: [220, 220, 220, 220],
    sampleWord: 'Ma',
    sampleMeaningVi: 'Con ma (Ghost)',
    sampleMeaningEn: 'Ghost',
    svgPath: 'M 10 50 L 190 50'
  },
  {
    id: 'huyen',
    nameVi: 'Thanh Huyền (Dấu \`)',
    nameEn: 'Falling Tone',
    mark: '\\',
    color: '#10B981',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-500/10 text-emerald-400',
    descriptionVi: 'Bắt đầu từ cao độ trung bình rồi hạ dần xuống êm ái, kéo dài nhẹ nhàng.',
    descriptionEn: 'Low falling pitch, slides smoothly downward with relaxed vocal cords.',
    pitchTrajectory: 'Falling: 220Hz → 165Hz',
    frequencies: [220, 205, 185, 165],
    sampleWord: 'Mà',
    sampleMeaningVi: 'Nhưng mà (But / However)',
    sampleMeaningEn: 'But / However',
    svgPath: 'M 10 35 C 70 45, 130 65, 190 80'
  },
  {
    id: 'sac',
    nameVi: 'Thanh Sắc (Dấu ´)',
    nameEn: 'Sharp Rising Tone',
    mark: '/',
    color: '#F59E0B',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-500/10 text-amber-400',
    descriptionVi: 'Bắt đầu ở mức trung bình và vút nhanh lên cao độ rất cao, kết thúc dứt khoát.',
    descriptionEn: 'High rising pitch, ascends swiftly with tense vocal tension.',
    pitchTrajectory: 'Rising: 210Hz → 340Hz',
    frequencies: [210, 230, 280, 340],
    sampleWord: 'Má',
    sampleMeaningVi: 'Mẹ hoặc Gò má (Mother / Cheek)',
    sampleMeaningEn: 'Mother / Cheek',
    svgPath: 'M 10 75 C 60 70, 130 35, 190 15'
  },
  {
    id: 'hoi',
    nameVi: 'Thanh Hỏi (Dấu ?)',
    nameEn: 'Dipping / Asking Tone',
    mark: '?',
    color: '#8B5CF6',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-500/10 text-purple-400',
    descriptionVi: 'Hạ sâu xuống đáy rồi từ từ ngước lên nhẹ ở cuối âm (như hỏi nghi vấn).',
    descriptionEn: 'Mid-low dipping-rising pitch, drops down and rises slightly at the tail.',
    pitchTrajectory: 'Dipping: 200Hz → 150Hz → 230Hz',
    frequencies: [200, 170, 150, 190, 230],
    sampleWord: 'Mả',
    sampleMeaningVi: 'Ngôi mộ (Tomb / Grave)',
    sampleMeaningEn: 'Tomb / Grave',
    svgPath: 'M 10 40 C 60 65, 100 85, 130 85 C 160 85, 180 65, 190 50'
  },
  {
    id: 'nga',
    nameVi: 'Thanh Ngã (Dấu ~)',
    nameEn: 'High Glottal Broken Tone',
    mark: '~',
    color: '#EC4899',
    borderColor: 'border-pink-500',
    bgColor: 'bg-pink-500/10 text-pink-400',
    descriptionVi: 'Bắt đầu cao, bị ngắt quãng nhẹ do khép thanh quản rồi vọt lên rất cao.',
    descriptionEn: 'Rising pitch broken halfway by a slight glottal constriction, then surges high.',
    pitchTrajectory: 'Glottal Rise: 220Hz ⚡ 320Hz',
    frequencies: [220, 180, 260, 320],
    sampleWord: 'Mã',
    sampleMeaningVi: 'Con ngựa / Mã số (Horse / Code)',
    sampleMeaningEn: 'Horse / Code',
    svgPath: 'M 10 60 C 50 65, 80 50, 100 55 C 120 50, 140 20, 190 10'
  },
  {
    id: 'nang',
    nameVi: 'Thanh Nặng (Dấu .)',
    nameEn: 'Heavy Constricted Tone',
    mark: '•',
    color: '#EF4444',
    borderColor: 'border-red-500',
    bgColor: 'bg-red-500/10 text-red-400',
    descriptionVi: 'Bắt đầu thấp và rơi rất nhanh xuống cực thấp, bị chặn họng ngắt cụt ngay.',
    descriptionEn: 'Low dropping pitch with abrupt glottal stop cutoff, very short duration.',
    pitchTrajectory: 'Abrupt drop: 190Hz ↘ 120Hz [cut]',
    frequencies: [190, 160, 125],
    sampleWord: 'Mạ',
    sampleMeaningVi: 'Cây lúa non (Young rice seedling)',
    sampleMeaningEn: 'Young rice seedling',
    svgPath: 'M 10 50 C 40 60, 80 85, 120 90'
  }
];

export const PRONOUN_MATRIX: PronounItem[] = [
  {
    id: 'anh',
    pronoun: 'Anh',
    roleVi: 'Anh (Nam giới lớn tuổi hơn)',
    roleEn: 'Older Brother / Older Male Peer',
    genderVi: 'Nam',
    genderEn: 'Male',
    ageRel: 'Older (+1 to +15 years)',
    exampleUsage: 'Anh ơi, cho em xem menu với! (Excuse me, may I see the menu, brother?)',
    culturalNoteVi: 'Dùng cho nam giới trạc tuổi bạn hoặc lớn hơn một chút. Rất lịch sự và thân thiện khi gọi bồi bàn nam, đồng nghiệp.',
    culturalNoteEn: 'Used for male peers slightly older. Friendly and universally polite when calling male waitstaff, Grab drivers, colleagues.'
  },
  {
    id: 'chi',
    pronoun: 'Chị',
    roleVi: 'Chị (Nữ giới lớn tuổi hơn)',
    roleEn: 'Older Sister / Older Female Peer',
    genderVi: 'Nữ',
    genderEn: 'Female',
    ageRel: 'Older (+1 to +15 years)',
    exampleUsage: 'Chị ơi, ly này có ngọt lắm không? (Sister, is this drink very sweet?)',
    culturalNoteVi: 'Dùng cho phụ nữ lớn tuổi hơn mình một chút. Thể hiện sự tôn trọng và duyên dáng.',
    culturalNoteEn: 'Used for females slightly older than you. Conveys warmth, politeness and respect.'
  },
  {
    id: 'em',
    pronoun: 'Em',
    roleVi: 'Em (Nhỏ tuổi hơn)',
    roleEn: 'Younger Sibling / Junior',
    genderVi: 'Nam / Nữ',
    genderEn: 'Male / Female',
    ageRel: 'Younger (-1 to -15 years)',
    exampleUsage: 'Em ơi, cho anh thêm một đôi đũa nhé! (Little one, bring me extra chopsticks please!)',
    culturalNoteVi: 'Dùng khi nói chuyện với người nhỏ tuổi hơn, nhân viên phục vụ trẻ, hoặc khi tự xưng mình nhỏ tuổi hơn người đối diện.',
    culturalNoteEn: 'Used when addressing younger people, young waitstaff, or referring to yourself when speaking to an older person.'
  },
  {
    id: 'chu',
    pronoun: 'Chú',
    roleVi: 'Chú (Nam trạc tuổi cha chú)',
    roleEn: 'Uncle (Parent’s generation male)',
    genderVi: 'Nam',
    genderEn: 'Male',
    ageRel: 'Parent generation (+15 to +35 years)',
    exampleUsage: 'Chú bảo vệ ơi, cháu gửi xe ở đâu ạ? (Uncle guard, where should I park my bike?)',
    culturalNoteVi: 'Tuyệt vời khi nói chuyện với bác tài xế lớn tuổi, bác bảo vệ tòa nhà, người bán hàng lớn tuổi.',
    culturalNoteEn: 'Extremely respectful when addressing senior security guards, veteran taxi drivers, street vendors.'
  },
  {
    id: 'co',
    pronoun: 'Cô',
    roleVi: 'Cô (Nữ trạc tuổi cha mẹ / Cô giáo)',
    roleEn: 'Aunt / Female Teacher',
    genderVi: 'Nữ',
    genderEn: 'Female',
    ageRel: 'Parent generation (+15 to +35 years)',
    exampleUsage: 'Cô ơi, bánh bao này nhân gì vậy cô? (Auntie, what filling is inside this bun?)',
    culturalNoteVi: 'Dùng xưng hô với phụ nữ trạc tuổi phụ huynh, cô bán hàng chợ, cô giáo dạy học.',
    culturalNoteEn: 'Ideal for market vendors of your mother’s age, female teachers, and neighborhood elders.'
  },
  {
    id: 'bac',
    pronoun: 'Bác',
    roleVi: 'Bác (Người lớn tuổi hơn phụ huynh)',
    roleEn: 'Elder Uncle/Aunt',
    genderVi: 'Nam / Nữ',
    genderEn: 'Male / Female',
    ageRel: 'Elderly (+30 to +50 years)',
    exampleUsage: 'Cháu chào Bác ạ! (I respectfully greet you, elder uncle/aunt!)',
    culturalNoteVi: 'Bậc tiền bối rất đáng kính. Khi xưng hô nên có chữ "ạ" ở cuối câu để biểu thị lòng kính trọng.',
    culturalNoteEn: 'Highest respect for senior community elders. Always end sentences with "ạ" for utmost courtesy.'
  },
  {
    id: 'minh',
    pronoun: 'Mình',
    roleVi: 'Mình (Bạn bè đồng trang lứa / Tôi)',
    roleEn: 'Equal Friend / Close Peer',
    genderVi: 'Trung tính',
    genderEn: 'Neutral',
    ageRel: 'Same age (0 years)',
    exampleUsage: 'Hôm nay mình đi cà phê nhé? (Let’s grab a coffee today, shall we?)',
    culturalNoteVi: 'Thân mật, dùng giữa bạn bè đại học, bạn quen thân cùng độ tuổi, hoặc vợ chồng thân mật.',
    culturalNoteEn: 'Casual and warm among same-age peers, university buddies, or romantic partners.'
  },
  {
    id: 'chau',
    pronoun: 'Cháu',
    roleVi: 'Cháu (Tự xưng với người lớn tuổi)',
    roleEn: 'Niece / Nephew (Self-reference)',
    genderVi: 'Trung tính',
    genderEn: 'Neutral',
    ageRel: 'Younger to Uncle/Aunt/Elder',
    exampleUsage: 'Cháu cảm ơn Cô/Chú nhiều ạ! (I thank you very much, aunt/uncle!)',
    culturalNoteVi: 'Cách tự xưng lịch sự nhất của một người trẻ khi nói chuyện với Cô, Chú, Bác, Ông, Bà.',
    culturalNoteEn: 'The most polite way for a younger foreigner to refer to themselves when talking to seniors.'
  }
];

export const SURVIVAL_PHRASES: SurvivalPhrase[] = [
  {
    id: 'pho',
    category: 'food',
    categoryLabelVi: 'Ăn Uống',
    categoryLabelEn: 'Food & Dining',
    vietnamese: 'Cho một tô phở bò tái nạm, không hành lá!',
    english: 'One bowl of rare & flank beef Pho, no green onions please!',
    phonetic: 'Chaw mawt toh fuh baw tai nahm, khawng hahng lah!',
    icon: '🍜',
    situationVi: 'Khi vào quán phở truyền thống và muốn dặn khẩu vị riêng',
    situationEn: 'At a classic Pho stall customizing your bowl without onions or cilantro',
    expatTipVi: 'Thêm chữ "Em ơi" đầu câu và "nhé" cuối câu sẽ khiến người bán rất vui vẻ.',
    expatTipEn: 'Add "Em ơi" before and "nhé" at the end to sound like a 5-year resident!',
    toneSequence: ['ngang', 'nang', 'ngang', 'hoi', 'huyen', 'sac', 'nang', 'ngang', 'huyen', 'sac']
  },
  {
    id: 'cafe',
    category: 'coffee',
    categoryLabelVi: 'Cà Phê',
    categoryLabelEn: 'Coffee Culture',
    vietnamese: 'Cho anh một ly cà phê sữa đá, ít ngọt!',
    english: 'One iced milk coffee (cà phê sữa đá), less sweet please!',
    phonetic: 'Chaw ahng mawt lee kah feh suh-ah dah, eet ngawt!',
    icon: '☕',
    situationVi: 'Văn hóa cà phê vỉa hè hoặc quán xá hàng ngày tại Sài Gòn & Hà Nội',
    situationEn: 'Ordering at a Saigon sidewalk café or modern Hanoi specialty coffee shop',
    expatTipVi: 'Cà phê sữa đá Việt Nam rất đậm (Robusta), dặn "ít ngọt" nếu không muốn quá nhiều sữa đặc.',
    expatTipEn: 'Vietnamese Robusta coffee is potent! "Ít ngọt" saves you from a sugar rush.',
    toneSequence: ['ngang', 'ngang', 'nang', 'ngang', 'huyen', 'ngang', 'nga', 'sac', 'sac', 'nang']
  },
  {
    id: 'price',
    category: 'shopping',
    categoryLabelVi: 'Mua Sắm',
    categoryLabelEn: 'Market Shopping',
    vietnamese: 'Cái này bao nhiêu tiền một ký vậy chị? Bớt chút được không?',
    english: 'How much is this per kilo, sister? Can you give me a small discount?',
    phonetic: 'Kai nay bow nyew tyen mawt kee vay chee? Buht choot duhk khawng?',
    icon: '🛍️',
    situationVi: 'Khi đi chợ truyền thống (Bến Thành, Tân Định, Đồng Xuân)',
    situationEn: 'Negotiating kindly at traditional street markets and fruit stands',
    expatTipVi: 'Cười tươi và xưng hô thân mật "Chị ơi bớt chút làm quen nhé" để được giá địa phương.',
    expatTipEn: 'A warm smile + "làm quen" (friendly icebreaker) drops the tourist markup immediately!',
    toneSequence: ['sac', 'huyen', 'ngang', 'ngang', 'huyen', 'nang', 'sac', 'nang', 'nang', 'sac', 'sac', 'nang', 'ngang']
  },
  {
    id: 'grab',
    category: 'transport',
    categoryLabelVi: 'Di Chuyển',
    categoryLabelEn: 'Grab & Taxi',
    vietnamese: 'Bác tài ơi, dừng ở tòa nhà đối diện giùm tôi nhé!',
    english: 'Driver, please pull over at the building across the street!',
    phonetic: 'Bahk tai uh-ee, zoong uh twah nyah doy zyen zoom toy nyeh!',
    icon: '🚖',
    situationVi: 'Khi đi xe Grab hoặc taxi qua ngã tư đông đúc',
    situationEn: 'Guiding Grab bike/car drivers to stop safely on the correct side',
    expatTipVi: 'Đường phố Việt Nam hay có giải phân cách, báo trước 50 mét giúp bác tài dễ tấp lề.',
    expatTipEn: 'Warn the driver 50 meters ahead because one-way medians prevent sudden turns.',
    toneSequence: ['sac', 'huyen', 'ngang', 'huyen', 'hoi', 'huyen', 'huyen', 'sac', 'nang', 'huyen', 'ngang', 'sac']
  },
  {
    id: 'rent',
    category: 'housing',
    categoryLabelVi: 'Thuê Nhà',
    categoryLabelEn: 'Apartment Rental',
    vietnamese: 'Căn hộ này một tháng bao nhiêu tiền điện nước và phí quản lý?',
    english: 'How much is the monthly rent including electricity, water and management fee?',
    phonetic: 'Kahn hoh nay mawt tahng bow nyew tyen dyen nuhk vah fee kwahn lee?',
    icon: '🏠',
    situationVi: 'Khi kiểm tra hợp đồng thuê căn hộ chung cư hoặc nhà phố',
    situationEn: 'Talking directly to landlords or agents about monthly utility transparency',
    expatTipVi: 'Luôn hỏi rõ giá điện sinh hoạt theo giá nhà nước (khoảng 3,000đ - 4,000đ/kWh).',
    expatTipEn: 'Ask if electricity is billed at governmental rate (~3,500 VND/kWh) or flat landlord rate.',
    toneSequence: ['ngang', 'nang', 'huyen', 'nang', 'sac', 'ngang', 'ngang', 'huyen', 'nang', 'sac', 'huyen', 'sac', 'hoi', 'sac']
  },
  {
    id: 'check',
    category: 'social',
    categoryLabelVi: 'Tính Tiền',
    categoryLabelEn: 'Paying Bill',
    vietnamese: 'Em ơi tính tiền! Cho anh xin hóa đơn đỏ luôn nhé!',
    english: 'Check please! Also give me the VAT red invoice, thank you!',
    phonetic: 'Em uh-ee teeng tyen! Chaw ahng seen hwah duhn daw loon nyeh!',
    icon: '🧾',
    situationVi: 'Khi kết thúc bữa ăn tiệc hoặc tiếp khách đối tác công việc',
    situationEn: 'Calling the bill at casual eateries or requesting corporate VAT red invoices',
    expatTipVi: 'Hóa đơn đỏ (VAT) rất quan trọng để công ty thanh toán lại chi phí cho bạn.',
    expatTipEn: '"Hóa đơn đỏ" is mandatory if your company reimburses meal and entertainment expenses.',
    toneSequence: ['ngang', 'ngang', 'sac', 'huyen', 'ngang', 'ngang', 'ngang', 'sac', 'ngang', 'hoi', 'ngang', 'sac']
  }
];
