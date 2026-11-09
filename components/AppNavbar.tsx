"use client";

import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#galeri", label: "Galeri" },
  { href: "#tim", label: "Tim" },
  { href: "#reservasi", label: "Reservasi" },
];

export default function AppNavbar() {
  const [active, setActive] = useState("#beranda");

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);

    const pickActive = () => {
      const line = window.scrollY + window.innerHeight / 3;
      let current = sections[0]?.id ?? "beranda";
      for (const s of sections) {
        if (s.offsetTop <= line) current = s.id;
      }
      setActive(`#${current}`);
    };

    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, []);

  return (
    <Navbar expand="lg" sticky="top" className="rm-navbar" id="navbar">
      <Container>
        <Navbar.Brand href="#beranda">
          <span className="rm-brand-mark">
            <i className="bi bi-basket2-fill" aria-hidden="true" />
          </span>
          Roti Mania
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            {links.map((l) => (
              <Nav.Link
                key={l.href}
                href={l.href}
                className={`rm-nav-link${active === l.href ? " active" : ""}`}
                aria-current={active === l.href ? "page" : undefined}
              >
                {l.label}
              </Nav.Link>
            ))}
            <Nav.Link
              href="#reservasi"
              className="btn btn-rm btn-rm-primary ms-lg-3 mt-2 mt-lg-0"
            >
              Pesan Sekarang
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
