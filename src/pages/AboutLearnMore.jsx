import React from "react";
import "./AboutLearnMore.css";

const AboutLearnMore = () => {
  return (
    <div className="about-more">

      {/* Hero */}
      <div className="about-more-hero">
        <div className="overlay">
          <h1>Our Story</h1>
          <p>Technowin – Engineering clarity, strength & style</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="about-more-section">
        <div className="about-more-container">

          {/* Image */}
          <div className="about-more-img">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
              alt="Technowin"
            />
          </div>

          {/* Content */}
          <div className="about-more-content">
            <h2>Our Story – Technowin</h2>

            <p>
              Founded in 2011 by <strong>Mr. Anil P</strong>, Technowin began
              with a clear vision — to deliver high-quality, reliable, and
              modern window and door solutions built to last.
            </p>

            <p>
              Over the years, Technowin has grown into a trusted name in the
              industry, backed by its own fully equipped manufacturing facility
              and a premium two-floor experience centre where customers can
              explore a wide range of products firsthand.
            </p>

          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="about-more-section reverse">
        <div className="about-more-container">

          <div className="about-more-img">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="windows"
            />
          </div>

          <div className="about-more-content">
            <h2>What We Do</h2>

            <p>
              We specialise in all types of uPVC and aluminium system windows
              and doors, combining advanced technology with skilled craftsmanship
              to ensure precision and durability in every product.
            </p>

            <p>
              Beyond windows and doors, Technowin also offers complete toughened
              glass solutions, including elegant glass handrails and pergola
              glass works that enhance both safety and aesthetics.
            </p>

          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="about-more-section">
        <div className="about-more-container">

          <div className="about-more-img">
            <img
              src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e"
              alt="projects"
            />
          </div>

          <div className="about-more-content">
            <h2>Our Reach</h2>

            <p>
              With a strong operational presence across Kerala, Karnataka, and
              Tamil Nadu, we proudly serve residential, commercial, and
              project-based requirements with consistent quality and
              professional service.
            </p>

            <p>
              At Technowin, every product reflects our commitment to excellence,
              innovation, and customer satisfaction.
            </p>

          </div>
        </div>
      </section>

      {/* Footer Text */}
      <div className="about-footer-text">
        <h2>
          Technowin – Engineering clarity, strength, and style for modern spaces.
        </h2>
      </div>

    </div>
  );
};

export default AboutLearnMore;