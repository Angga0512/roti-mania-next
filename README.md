# Roti Mania

Muhamad Airlangga Khairudin - 535250022

## Fitur Utama

1. **Komponen Carousel (wajib)** — `components/HeroCarousel.tsx` memakai
   `Carousel` dari `react-bootstrap` dengan 4 slide, efek `fade`, auto-rotate
   5 detik, indicator, tombol previous/next, dan support swipe (touch).
2. **Menu aktif pada Navbar** — `components/AppNavbar.tsx` menandai menu aktif
   dengan gaya `.rm-nav-link.active` (latar gradien + shadow) sesuai section
   yang sedang berada di area pandang, terdeteksi lewat event `scroll`.
3. **Responsif** — navbar dengan `Navbar.Toggle` (collapse) di layar kecil,
   grid Bootstrap (`Row`/`Col`) untuk menu, galeri, tim, dan testimonial,
   serta breakpoint CSS khusus di `app/globals.css` (`991.98px` dan `575.98px`).
4. **Section lengkap** — hero/carousel, statistik, tentang kami, menu
   (dengan filter kategori interaktif), galeri, testimoni, tim, form reservasi
   (dengan validasi), dan footer.
5. **Aksesibilitas** — `aria-current` pada menu aktif, `aria-label` pada ikon
   media sosial, label form, dan `role="status"` untuk pesan sukses.