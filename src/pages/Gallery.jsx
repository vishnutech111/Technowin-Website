import React from "react";
import "./Gallery.css";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
];

const Gallery = () => {
  return (
    <div className="gallery-page">

      {/* Hero */}
      <div className="gallery-hero">
        <div className="gallery-overlay">
          <h1>Our Gallery</h1>
          <p>Explore Our Latest UPVC Works</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <h2>Project Showcase</h2>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt="gallery" />
              <div className="hover-overlay">
                <h3>Technowin</h3>
                <p>UPVC Windows & Doors</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Gallery;