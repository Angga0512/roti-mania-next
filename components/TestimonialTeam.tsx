import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { testimonials, team } from "@/lib/data";

export default function TestimonialTeam() {
  return (
    <>
      <section>
        <Container>
          <div className="text-center mb-5">
            <p className="section-eyebrow mb-2">Kata Pelanggan</p>
            <h2 className="section-title">Cerita dari Meja Makan</h2>
            <div className="divider mx-auto" />
          </div>
          <Row className="g-4">
            {testimonials.map((t) => (
              <Col md={4} key={t.id}>
                <div className="rm-quote-card">
                  <i className="bi bi-quote quote-mark" aria-hidden="true" />
                  <p className="text-secondary mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="d-flex align-items-center gap-3">
                    <Image
                      src={t.imageUrl}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rm-avatar"
                    />
                    <div>
                      <strong className="d-block">{t.name}</strong>
                      <small className="text-secondary">{t.role}</small>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="tim" className="bg-white">
        <Container>
          <div className="text-center mb-5">
            <p className="section-eyebrow mb-2">Tim</p>
            <h2 className="section-title">Orang di Balik Roti</h2>
            <div className="divider mx-auto" />
          </div>
          <Row className="g-4">
            {team.map((m) => (
              <Col xs={6} md={3} key={m.name}>
                <div className="rm-team-card">
                  <Image
                    src={m.imageUrl}
                    alt={m.name}
                    width={96}
                    height={96}
                  />
                  <h3 className="h6 font-display mb-1">{m.name}</h3>
                  <small className="text-secondary">{m.role}</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
