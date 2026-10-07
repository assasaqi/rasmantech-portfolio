// src/data/projects.js
import img1 from '../assets/images/img_1.png';
import img2 from '../assets/images/img_2.png';
import img3 from '../assets/images/img_3.png';
import img4 from '../assets/images/img_4.jpg';
import img5 from '../assets/images/img_5.jpeg';


export const projectsCategories = [
  'Semua',
  'Web Development',
  'UI/UX & Graphics',
  'Video & Content'
];

export const projectsData = [
  {
    id: 1,
    title: "Web Domain & Hosting Infrastructure",
    category: "Web Development",
    image: img1,
    description: "Pengelolaan domain kustom dan konfigurasi infrastruktur web hosting berbasis IDCloudHost.",
    fullDescription: "Proyek arsitektur web yang mencakup pendaftaran domain kustom (rasmantech.web.id & rdmmtss.my.id), konfigurasi DNS record, manajemen sertifikat SSL, serta optimasi server hosting untuk performa situs yang aman dan cepat.",
    tech: ["Web Domain", "Hosting", "DNS", "SSL"],
    link: "https://idcloudhost.com/",
    features: [
      "Integrasi DNS & SSL terenkripsi",
      "Performa Uptime Server tinggi",
      "Manajemen Domain Kustom"
    ]
  },
  {
    id: 2,
    title: "Dafatih Transport",
    category: "Web Development",
    image: img2,
    description: "Spesialis antar-jemput bandara, pelabuhan, dan transfer antar destinasi di Pulau Lombok dengan armada bersih serta driver profesional.",
    fullDescription: "Sistem reservasi dan landing page interaktif untuk penyedia jasa transportasi wisata di Lombok. Memudahkan pelanggan melihat pilihan armada, estimasi harga rute perjalanan, dan menghubungi admin secara langsung via WhatsApp.",
    tech: ["React", "Tailwind CSS", "NodeJS", "PostgreSQL"],
    link: "https://dafatih-transport.rasmantech.web.id/",
    features: [
      "Desain Responsif & Mobile First",
      "Katalog Armada & Rute Lengkap",
      "Integrasi Direct WhatsApp Booking"
    ]
  },
  {
    id: 3,
    title: "Toko Online E-Commerce",
    category: "Web Development",
    image: img3,
    description: "Platform toko online responsif dengan fitur keranjang belanja dan antarmuka pembayaran.",
    fullDescription: "Aplikasi e-commerce modern yang dilengkapi dengan katalog produk, filter berdasarkan kategori, manajemen keranjang belanja, serta simulasi checkout terintegrasi.",
    tech: ["React", "Tailwind CSS", "NodeJS/Express", "PostgreSQL"],
    link: "https://toko-online.rasmantech.web.id/",
    features: [
      "Manajemen State Keranjang Belanja",
      "Pencarian & Filter Produk Cepat",
      "Antarmuka Modern & Fast Loading"
    ]
  },
  {
    id: 4,
    title: "Redesign & Prototyping Aplikasi Mobile",
    category: "UI/UX & Graphics",
    image: img4,
    description: "Perancangan ulang antarmuka pengguna (UI) dan alur pengalaman pengguna (UX) untuk aplikasi layanan publik.",
    fullDescription: "Proyek perancangan ulang antarmuka visual menggunakan Figma dan Adobe Illustrator. Berfokus pada kemudahan navigasi, konsistensi sistem desain, ketersediaan komponen reusable, serta pembuatan prototype interaktif sebelum tahap koding.",
    tech: ["Figma", "Adobe Illustrator", "Photoshop", "Affinity"],
    link: "https://www.figma.com/",
    features: [
      "High-Fidelity Wireframing & Prototyping",
      "Design System & UI Kit Terstandar",
      "Peningkatan Usability & Aksesibilitas"
    ]
  },
  {
    id: 5,
    title: "Konten Promosi & Video Commercial",
    category: "Video & Content",
    image: img5,
    description: "Produksi dan penyuntingan video promosi media sosial berdurasi pendek dengan animasi visual dan color grading.",
    fullDescription: "Pembuatan konten video komersial untuk kebutuhan pemasaran digital. Meliputi proses pemotongan klip yang dinamis, efek transisi halus, penyelarasan audio/backsound, color grading, serta optimasi tata letak teks/subjudul.",
    tech: ["CapCut", "Adobe Premiere Pro", "Photoshop", "AI Generative"],
    link: "https://www.youtube.com/?reload=9",
    features: [
      "Color Grading & Audio Enhancement",
      "Format Rasio Optimasi Media Sosial (Shorts/Reels)",
      "Pemanfaatan Visual Prompting berbasis AI"
    ]
  }
];
