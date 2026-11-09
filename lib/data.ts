export type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaLabel: string;
  ctaHref: string;
};

export const slides: Slide[] = [
  {
    id: "s1",
    eyebrow: "Selalu Fresh Tiap Pagi",
    title: "Roti Artisan Dipanggang Pagi Hari",
    subtitle:
      "Sourdough fermentasi 24 jam, mentega susu asli, dan bahan pilihan tanpa pengawet.",
    imageUrl: "/images/banner-1.jpg",
    ctaLabel: "Lihat Menu",
    ctaHref: "#menu",
  },
  {
    id: "s2",
    eyebrow: "Belajar Langsung dari Chef",
    title: "Kelas Memasak Bareng Chef",
    subtitle:
      "Meracik adonan croissant bersama Chef Arnold setiap akhir pekan. Kuota terbatas 12 orang.",
    imageUrl: "/images/banner-2.jpg",
    ctaLabel: "Daftar Kelas",
    ctaHref: "#reservasi",
  },
  {
    id: "s3",
    eyebrow: "Cerita di Balik Roti",
    title: "Setiap Roti Punya Cerita",
    subtitle:
      "Kisah para baker lokal dan cerita yang lahir dari setiap oven yang kami nyalakan.",
    imageUrl: "/images/banner-3.jpg",
    ctaLabel: "Lihat Galeri",
    ctaHref: "#galeri",
  },
  {
    id: "s4",
    eyebrow: "Seasonal Special",
    title: "Manisnya Jangan Terlewat",
    subtitle:
      "Koleksi pastry musiman dengan Cocoa, Hazelnut, dan Karamel Garam yang terbatas.",
    imageUrl: "/images/banner-4.jpg",
    ctaLabel: "Pesan Sekarang",
    ctaHref: "#reservasi",
  },
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Roti" | "Pastry" | "Minuman";
  imageUrl: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Country Sourdough Loaf",
    description: "Roti sourdough fermentasi 24 jam, renyah di luar dan lembut di dalam.",
    price: 45000,
    category: "Roti",
    imageUrl: "/images/menu-1.jpg",
    badge: "Bestseller",
  },
  {
    id: "m2",
    name: "Butter Croissant",
    description: "Croissant berlapis 27 lapis dengan mentega Normandy.",
    price: 32000,
    category: "Pastry",
    imageUrl: "/images/menu-2.jpg",
  },
  {
    id: "m3",
    name: "Cinnamon Roll",
    description: "Roti gulung kayu manis dengan icing gula aren dan walnut.",
    price: 38000,
    category: "Pastry",
    imageUrl: "/images/menu-3.jpg",
    badge: "Baru",
  },
  {
    id: "m4",
    name: "Chocolate Chip Cookie",
    description: "Cookie lembut di tengah dengan dark chocolate Belgia.",
    price: 25000,
    category: "Pastry",
    imageUrl: "/images/menu-4.jpg",
  },
  {
    id: "m5",
    name: "Kopi Susu Gula Aren",
    description: "Single origin Gayo yang dipanggang sendiri, manis alami gula aren.",
    price: 28000,
    category: "Minuman",
    imageUrl: "/images/menu-5.jpg",
  },
  {
    id: "m6",
    name: "Focaccia Rosemary",
    description: "Focaccia lembut dengan rosemary dan minyak zaitun extra virgin.",
    price: 40000,
    category: "Roti",
    imageUrl: "/images/menu-6.jpg",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rani Puspita",
    role: "Pelanggan sejak 2021",
    quote:
      "Roti sourdough-nya benar-benar punya karakter. Bakery saya langganan dan sering sold out sebelum jam 10.",
    imageUrl: "/images/team-2.jpg",
  },
  {
    id: "t2",
    name: "Bagas Wicaksono",
    role: "Karyawan hotel",
    quote:
      "Setiap pagi kami mengambil croissant untuk breakfast buffet. Konsistensinya terjaga dan pengirimannya selalu pagi.",
    imageUrl: "/images/team-1.jpg",
  },
  {
    id: "t3",
    name: "Sarah Kurnia",
    role: "Food blogger",
    quote:
      "Pastry musiman mereka selalu punya cerita. Cinnamon roll-nya masih jadi favorit saya sampai sekarang.",
    imageUrl: "/images/team-4.jpg",
  },
];

export const benefits = [
  {
    icon: "bi-hourglass-split",
    title: "Fresh setiap 2 jam",
    text: "Roti keluar dari oven setiap dua jam sehingga selalu hangat saat Anda beli.",
  },
  {
    icon: "bi-leaf",
    title: "Bahan lokal",
    text: "Gandum dan susu dari petani tetangga di Jawa Barat, tanpa pengawet buatan.",
  },
  {
    icon: "bi-mortarboard",
    title: "Kelas terarah",
    text: "Belajar langsung dari chef dengan resep yang sama dipakai di dapur kami.",
  },
  {
    icon: "bi-truck",
    title: "Delivery same-day",
    text: "Pesanan sampai di hari yang sama untuk area Jakarta, Bandung, dan sekitarnya.",
  },
];

export const team = [
  { name: "Arnold Wibowo", role: "Head Baker", imageUrl: "/images/team-1.jpg" },
  { name: "Nadya Rahma", role: "Pastry Chef", imageUrl: "/images/team-4.jpg" },
  { name: "Bayu Santoso", role: "Barista Lead", imageUrl: "/images/team-3.jpg" },
  { name: "Tika Amelia", role: "Owner", imageUrl: "/images/team-2.jpg" },
];
