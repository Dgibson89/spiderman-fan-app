import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/GalleryPageStyle.css";

const images = [
  "/images/gallery/spiderman.jpeg",
  "/images/gallery/gwenom.webp",
  "/images/gallery/milesmorales.jpg",
  "/images/gallery/ghostspider.jpg",
  "/images/gallery/knull.avif",
];

function GalleryPage() {
  return (
    <Carousel className="padding" data-bs-theme="dark">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-image"
            src={image}
            alt={`Spider-Man ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default GalleryPage;