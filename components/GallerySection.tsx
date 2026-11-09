import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const galleryImages = [
  { src: "/images/banner-2.jpg", alt: "Croissant yang baru keluar dari oven" },
  { src: "/images/menu-3.jpg", alt: "Cinnamon roll galeri" },
  { src: "/images/banner-1.jpg", alt: "Loaf sourdough segar" },
  { src: "/images/menu-4.jpg", alt: "Cookie cokelat Belgia" },
  { src: "/images/banner-4.jpg", alt: "Pastry musiman" },
  { src: "/images/menu-5.jpg", alt: "Kopi susu gula aren" },
];

export default function GallerySection() {
  return (
    <section id="galeri" className="bg-white">
      <Container>
        <div className="text-center mb-5">
          <p className="section-eyebrow mb-2">Galeri</p>
          <h2 className="section-title">Momen di Dapur Kami</h2>
          <div className="divider mx-auto" />
        </div>
        <Row className="g-3">
          {galleryImages.map((img) => (
            <Col key={img.src} xs={6} md={4}>
              <figure className="rm-gallery-item mb-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 575px) 50vw, (max-width: 991px) 33vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </figure>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
