# Hệ Sinh Thái Dạy & Học Tiếng Việt Cho Người Nước Ngoài (VIETREAL 360° & Localized Ecosystem)

> **Bản quyền & Phát triển:** **DUY ANH LAB • digital**  
> **Khẩu hiệu:** *"MONG MUỐN → Ý TƯỞNG → HIỆN THỰC"*  
> **Portfolio chính thức:** [ungdung.vercel.app](https://ungdung.vercel.app/)  
> **Hotline / Zalo:** `+84 908095693` | **Email:** `anhpob@gmail.com`

---

## 1. Giới Thiệu Tổng Quan
Dự án Landing Page song ngữ (Tiếng Việt & Tiếng Anh) cao cấp giới thiệu hệ sinh thái toàn diện dạy và học tiếng Việt thực chiến dành cho chuyên gia nước ngoài, nhân sự FDI, kiều bào và du khách quốc tế sinh sống, làm việc tại Việt Nam:
- **Ứng dụng chủ lực (Flagship Core):** [VIETREAL 360° - Dạy Tiếng Việt Thực Chiến](https://vietreal.vercel.app/)
- **Hệ sinh thái con (Sub-Ecosystem):** 13 Ứng dụng bản địa hóa chuyên sâu theo từng quốc gia (Nhật Bản, Hàn Quốc, Mỹ, Trung Quốc, Thái Lan, Pháp, Đức, Nga, Campuchia, Lào, Ấn Độ, Tây Ban Nha, Bồ Đào Nha).

---

## 2. Hệ Thống Kiến Trúc Đa Tuyến (Multi-Page Client Routing)
Ứng dụng được cấu hình định tuyến Client-side Router hoàn chỉnh:
- `/` - Landing Page chính đầy đủ toàn bộ hệ sinh thái (Hero, Quick Action Bar, 4 Trụ cột, 13 App Quốc gia, Mô phỏng 6 Thanh, Lộ trình 1 phút, Form tư vấn & Footer).
- `/vietreal` - Giới thiệu chuyên sâu tính năng VIETREAL 360° & Bộ kịch bản đời thực (Gọi phở, Taxi Grab, Thuê nhà).
- `/ecosystem` - Ma trận 13 Ứng dụng quốc gia có bộ lọc Châu lục, tìm kiếm tức thì và bảng đối chiếu điểm nghẽn ngữ âm.
- `/demo` - Phòng thực nghiệm âm học tương tác với Web Audio API phát sóng cao độ (Hz) 6 thanh và kho câu sinh tồn.
- `/request` - Cổng đăng ký nhận lộ trình cá nhân hóa và tư vấn đào tạo cho Doanh nghiệp FDI / Trung tâm ngoại ngữ.

---

## 3. Danh Sách 14 Ứng Dụng Trong Hệ Sinh Thái

| STT | Tên Ứng Dụng | Quốc Gia / Đối Tượng | Tên Miền Live |
|---|---|---|---|
| 0 | **VIETREAL 360°** (Flagship Core) | Toàn cầu / Đa quốc gia | [vietreal.vercel.app](https://vietreal.vercel.app/) |
| 1 | 日本人のためのベトナム語 | 🇯🇵 Nhật Bản | [jpviet.vercel.app](https://jpviet.vercel.app/) |
| 2 | ภาษาเวียดนามสำหรับคนไทย | 🇹🇭 Thái Lan | [thviet.vercel.app](https://thviet.vercel.app) |
| 3 | 한국인을 위한 베트남어 | 🇰🇷 Hàn Quốc | [krviet.vercel.app](https://krviet.vercel.app/) |
| 4 | 华人实用越南语 | 🇨🇳 Trung Quốc & Đài Loan | [zhviet.vercel.app](https://zhviet.vercel.app/) |
| 5 | Vietnamese for Americans & Expats | 🇺🇸 Hoa Kỳ & Người nói tiếng Anh | [usviet.vercel.app](https://usviet.vercel.app/) |
| 6 | Le Vietnamien Pratique | 🇫🇷 Pháp | [frviet.vercel.app](https://frviet.vercel.app/) |
| 7 | Vietnamesisch im Alltag | 🇩🇪 Đức | [deviet.vercel.app](https://deviet.vercel.app/) |
| 8 | Вьетнамский язык для жизни | 🇷🇺 Nga | [ruviet.vercel.app](https://ruviet.vercel.app/) |
| 9 | ភាសាវៀតណាមសម្រាប់ជនជាតិខ្មែរ (KhmerViet) | 🇰🇭 Người Khmer (Campuchia) | [khviet.vercel.app](https://khviet.vercel.app/) |
| 10 | ພາສາຫວຽດສຳລັບຄົນລາວ | 🇱🇦 Lào | [laoviet.vercel.app](https://laoviet.vercel.app/) |
| 11 | Vietnamese for Expats from India | 🇮🇳 Ấn Độ | [inviet.vercel.app](https://inviet.vercel.app/) |
| 12 | Vietnamita Práctico | 🇪🇸 Tây Ban Nha & Mỹ Latinh | [esviet.vercel.app](https://esviet.vercel.app/) |
| 13 | Vietnamita para Lusófonos | 🇵🇹 Bồ Đào Nha & Brazil | [ptviet.vercel.app](https://ptviet.vercel.app/) |

---

## 4. Công Nghệ & Điểm Nhấn Kỹ Thuật
- **Frontend Stack:** React 18, Vite 5, TypeScript 5, Tailwind CSS 3.4, React Router DOM 6, Lucide Icons.
- **Web Audio API Tone Synthesizer:** Tự động tổng hợp và phát tần số quét cao độ của 6 thanh điệu Việt Nam (Ngang, Huyền, Sắc, Hỏi, Ngã, Nặng) chuẩn xác theo Hz mà không cần tải file MP3 nặng.
- **Dark Luxury Glassmorphism Theme:** Màu nền Obsidian Dark `#0B0F17`, điểm nhấn Electric Cyan `#06B6D4`, Emerald Neon `#10B981`, Warm Amber `#F59E0B`.
- **Bilingual Context (VI / EN):** Chuyển đổi ngôn ngữ tức thì, lưu trạng thái qua `localStorage`.
- **Kiến trúc PWA Ready:** Giao diện tối ưu hóa cho màn hình di động, tương thích hoàn hảo cài đặt PWA không qua App Store.

---

## 5. Hướng Dẫn Chạy Dự Án

### Cài đặt thư viện:
```bash
npm install
```

### Chạy môi trường phát triển (Dev server):
```bash
npm run dev
```

### Build kiểm tra sản phẩm (Production build):
```bash
npm run build
```

### Chạy thử bản build (Preview):
```bash
npm run preview
```
