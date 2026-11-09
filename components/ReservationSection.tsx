"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

type Fields = {
  nama: string;
  email: string;
  tanggal: string;
  jumlah: string;
  catatan: string;
};

const initial: Fields = {
  nama: "",
  email: "",
  tanggal: "",
  jumlah: "1",
  catatan: "",
};

export default function ReservationSection() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sukses, setSukses] = useState(false);

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next: Partial<Fields> = {};
    if (fields.nama.trim().length < 3) next.nama = "Nama minimal 3 karakter.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = "Format email belum benar.";
    if (!fields.tanggal) next.tanggal = "Pilih tanggal pengambilan.";
    const jumlah = Number(fields.jumlah);
    if (!Number.isFinite(jumlah) || jumlah < 1 || jumlah > 50)
      next.jumlah = "Jumlah pesanan 1-50.";
    return next;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSukses(true);
      setFields(initial);
    }
  };

  return (
    <section id="reservasi" className="rm-reservation">
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={5}>
            <p className="section-eyebrow mb-2">Reservasi</p>
            <h2 className="section-title">Pesan Roti Tanpa Antre</h2>
            <div className="divider" />
            <p className="section-lead">
              Pesan Ahead untuk event, kantor, atau hadiah. Pesanan di Reciive
              hari yang sama bila Anda order sebelum pukul 15.00 WIB.
            </p>
            <ul className="list-unstyled text-secondary small mt-4">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2 text-danger" aria-hidden="true" />
                Jl. Cikutra Baru No. 21, Bandung, Jawa Barat
              </li>
              <li className="mb-2">
                <i className="bi bi-clock me-2 text-danger" aria-hidden="true" />
                Setiap hari, 07.00 - 20.00 WIB
              </li>
              <li>
                <i className="bi bi-telephone me-2 text-danger" aria-hidden="true" />
                +62 812-3456-7890
              </li>
            </ul>
          </Col>

          <Col lg={7}>
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm">
              {sukses && (
                <div className="alert alert-success" role="status">
                  <i className="bi bi-check-circle me-2" aria-hidden="true" />
                  Pesanan diterima. Kami akan menghubungi Anda via email untuk
                  konfirmasi.
                </div>
              )}
              <Form noValidate onSubmit={submit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="nama">
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control
                        className="rm-form-control"
                        value={fields.nama}
                        onChange={set("nama")}
                        isInvalid={Boolean(errors.nama)}
                        placeholder="Nama Anda"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.nama}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        className="rm-form-control"
                        value={fields.email}
                        onChange={set("email")}
                        isInvalid={Boolean(errors.email)}
                        placeholder="nama@email.com"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={7}>
                    <Form.Group controlId="tanggal">
                      <Form.Label>Tanggal Pengambilan</Form.Label>
                      <Form.Control
                        type="date"
                        className="rm-form-control"
                        value={fields.tanggal}
                        onChange={set("tanggal")}
                        isInvalid={Boolean(errors.tanggal)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.tanggal}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group controlId="jumlah">
                      <Form.Label>Jumlah</Form.Label>
                      <Form.Select
                        className="rm-form-select"
                        value={fields.jumlah}
                        onChange={set("jumlah")}
                        isInvalid={Boolean(errors.jumlah)}
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>
                            {n} paket
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.jumlah}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="catatan">
                      <Form.Label>Catatan (opsional)</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        className="rm-form-control"
                        value={fields.catatan}
                        onChange={set("catatan")}
                        placeholder="Contoh: tanpa gula, request jam 8 pagi, dst."
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" className="btn btn-rm btn-rm-primary w-100">
                      Kirim Pesanan
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
