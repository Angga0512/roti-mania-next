"use client";

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#galeri", label: "Galeri" },
  { href: "#tim", label: "Tim" },
  { href: "#reservasi", label: "Reservasi" },
];

export default function AppFooter() {
  const [email, setEmail] = useState("");
  const [terdaftar, setTerdaftar] = useState(false);

  return (
    <footer className="rm-footer">
      <Container className="py-5">
        <Row className="g-4">
          <Col lg={4}>
            <div className="rm-footer-brand mb-3">Roti Mania</div>
            <p className="small mb-4">
              Bakery artisan yang memanggang roti sourdough, pastry, dan kopi
              susu gula aren setiap hari sejak 2012.
            </p>
            <div className="d-flex gap-2">
              <a href="#" aria-label="Instagram" className="rm-social">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" aria-label="Facebook" className="rm-social">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" aria-label="TikTok" className="rm-social">
                <i className="bi bi-tiktok" />
              </a>
              <a href="#" aria-label="WhatsApp" className="rm-social">
                <i className="bi bi-whatsapp" />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <h4 className="mb-3">Navigasi</h4>
            <ul className="list-unstyled small mb-0">
              {links.map((l) => (
                <li className="mb-2" key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={6} lg={3}>
            <h4 className="mb-3">Kontak</h4>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">
                Jl. Cikutra Baru No. 21, Bandung, Jawa Barat
              </li>
              <li className="mb-2">+62 812-3456-7890</li>
              <li className="mb-2">halo@rotimania.id</li>
              <li>Setiap hari, 07.00 - 20.00 WIB</li>
            </ul>
          </Col>
          <Col lg={3}>
            <h4 className="mb-3">Newsletter</h4>
            <p className="small">
              Dapatkan info menu mingguan dan promo kelas masak sebelum orang
              lain.
            </p>
            <form
              className="d-flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
                setTerdaftar(true);
              }}
            >
              <input
                type="email"
                className="form-control form-control-sm rm-form-control"
                placeholder="email@anda.com"
                aria-label="Alamat email newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="btn btn-sm btn-rm btn-rm-primary flex-shrink-0"
                type="submit"
              >
                Daftar
              </button>
            </form>
            {terdaftar && (
              <small className="d-block mt-2" style={{ color: "var(--rm-gold)" }}>
                <i className="bi bi-check-circle me-1" aria-hidden="true" />
                Terima kasih! Email Anda sudah terdaftar.
              </small>
            )}
          </Col>
        </Row>
        <hr className="my-4 opacity-25" />
        <p className="small mb-0 text-center">
          &copy; 2026 Roti Mania. Tugas Praktikum 12 &mdash; Front-End
          Programming.
        </p>
      </Container>
    </footer>
  );
}
