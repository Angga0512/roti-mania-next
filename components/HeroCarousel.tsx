"use client";

import Carousel from "react-bootstrap/Carousel";
import { slides } from "@/lib/data";

export default function HeroCarousel() {
  return (
    <Carousel
      fade
      interval={5000}
      pause={false}
      data-bs-theme="dark"
      className="rm-carousel"
      indicators
      controls
      touch
    >
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="rm-slide-bg"
          />
          <Carousel.Caption>
            <span className="rm-slide-eyebrow">{slide.eyebrow}</span>
            <h1 className="display-5 fw-bold">{slide.title}</h1>
            <p className="lead fs-6 fs-md-5">{slide.subtitle}</p>
            <a href={slide.ctaHref} className="btn btn-rm btn-rm-primary mt-2">
              {slide.ctaLabel}
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
