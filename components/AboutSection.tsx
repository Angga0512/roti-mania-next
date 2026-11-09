import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { benefits } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="tentang" className="bg-white">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <Image
              src="/images/about.jpg"
              alt="Roti artisan freshly baked"
              width={900}
              height={700}
              className="rm-about-img"
              priority
            />
          </Col>
          <Col lg={6}>
            <p className="section-eyebrow mb-2">Tentang Kami</p>
            <h2 className="section-title">Dapur Kecil, Rasa Besar</h2>
            <div className="divider" />
            <p className="section-lead">
              Roti Mania berdiri dari dapur kecil di Bandung pada tahun 2019.
              Kami memakai gandum lokal dan fermentasi sourdough alami selama 24
              jam, tanpa pengawet, tanpa shortcuts.
            </p>
            <p className="section-lead">
              Setiap hari baker kami menyalakan oven pukul enam pagi agar
              roti selalu hangat saat sampai di meja Anda.
            </p>
            <Row className="g-3 mt-3">
              {benefits.map((b) => (
                <Col md={6} key={b.title}>
                  <div className="rm-feature">
                    <i className={`bi ${b.icon}`} aria-hidden="true" />
                    <div>
                      <h3>{b.title}</h3>
                      <p>{b.text}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
