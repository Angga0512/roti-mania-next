import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const stats = [
  { number: "12", label: "Tahun pengalaman" },
  { number: "45+", label: "Varian roti & pastry" },
  { number: "8", label: "Cabang di Jabodetabek" },
  { number: "50K+", label: "Roti terjual per bulan" },
];

export default function StatsBar() {
  return (
    <section className="rm-stats">
      <Container>
        <Row className="text-center g-4">
          {stats.map((s) => (
            <Col xs={6} md={3} key={s.label}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
