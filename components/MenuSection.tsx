"use client";

import { useState } from "react";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { menuItems } from "@/lib/data";

const categories = ["Semua", "Roti", "Pastry", "Minuman"] as const;

const rupiah = (value: number) =>
  `Rp${value.toLocaleString("id-ID", { maximumFractionDigits: 0 })}`;

export default function MenuSection() {
  const [category, setCategory] = useState<(typeof categories)[number]>(
    "Semua"
  );

  const visible =
    category === "Semua"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  return (
    <section id="menu">
      <Container>
        <div className="text-center mb-5">
          <p className="section-eyebrow mb-2">Menu Andalan</p>
          <h2 className="section-title">Pilihan Favorit Pelanggan</h2>
          <div className="divider mx-auto" />
          <p className="section-lead mx-auto">
            Semua dibuat fresh setiap hari. Stok hearth limited dan bisa habis
            sebelum jam makan siang.
          </p>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rm-filter-btn${category === c ? " active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>

        <Row className="g-4">
          {visible.map((item) => (
            <Col md={6} lg={4} key={item.id}>
              <article className="rm-menu-card">
                <div className="thumb">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  {item.badge && <span className="rm-badge">{item.badge}</span>}
                </div>
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
                    <h3 className="h5 font-display mb-0">{item.name}</h3>
                    <span className="rm-price">{rupiah(item.price)}</span>
                  </div>
                  <p className="text-secondary small mb-3">{item.description}</p>
                  <a href="#reservasi" className="btn btn-sm btn-rm btn-rm-outline-dark">
                    Pesan
                  </a>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
