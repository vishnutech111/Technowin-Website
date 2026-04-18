import React, { useEffect } from "react";
import "./About.css";
import image from "../components/image.png"

const About = () => {

  // Scroll Animation
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");

    const reveal = () => {
      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          sec.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="about-page">

      {/* ===== HERO ===== */}
      <div className="about-hero">
        <div className="about-overlay">
          <h1>About Technowin</h1>
          <p>Engineering clarity, strength & style</p>
        </div>
      </div>

      {/* ===== COMPANY ===== */}
      <section className="about-section fade-section">
        <div className="about-container">

          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" alt="" />
          </div>

          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2011 by <strong>Mr. Anil P</strong>, Technowin began
              with a vision to deliver high-quality and durable window solutions.
            </p>
            <p>
              Today, we operate with a fully equipped manufacturing unit and
              a premium experience centre where customers can explore products.
            </p>
            <p>
              We serve Kerala, Karnataka, and Tamil Nadu with trusted quality.
            </p>
          </div>

        </div>
      </section>

      {/* ===== UPVC WINDOWS ===== */}
      <section className="about-section reverse fade-section">
        <div className="about-container">

          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="" />
          </div>

          <div className="about-content">
            <h2>uPVC Windows</h2>
            <p>
              Strong, weather-resistant and energy-efficient windows designed
              for modern living.
            </p>

            <ul>
              <li>✔ No termite or moisture damage</li>
              <li>✔ Excellent insulation</li>
              <li>✔ Long life & durability</li>
              <li>✔ Low maintenance</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== DOORS ===== */}
      <section className="about-section fade-section">
        <div className="about-container">

          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" alt="" />
          </div>

          <div className="about-content">
            <h2>uPVC Doors</h2>
            <p>
              Stylish and secure doors built for durability and modern design.
            </p>

            <ul>
              <li>✔ Weather-resistant</li>
              <li>✔ Termite-proof</li>
              <li>✔ Modern designs</li>
              <li>✔ Strong locking systems</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== ALUMINIUM ===== */}
      <section className="about-section reverse fade-section">
        <div className="about-container">

          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e" alt="" />
          </div>

          <div className="about-content">
            <h2>Aluminium Systems</h2>
            <p>
              Premium aluminium windows and doors with sleek modern design.
            </p>

            <ul>
              <li>✔ Slim profiles</li>
              <li>✔ High strength</li>
              <li>✔ Corrosion-resistant</li>
              <li>✔ Perfect for large openings</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== GLASS ===== */}
      {/* <section className="about-section fade-section">
        <div className="about-container">

          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97" alt="" />
          </div>

          <div className="about-content">
            <h2>Toughened Glass Works</h2>
            <p>
              High-strength glass solutions for safety and modern aesthetics.
            </p>

            <ul>
              <li>✔ 4–5x stronger than normal glass</li>
              <li>✔ Safe break pattern</li>
              <li>✔ Heat resistant</li>
              <li>✔ Elegant design</li>
            </ul>
          </div>

        </div>
      </section> */}

      {/* ===== FOOTER TEXT ===== */}
     {/* ===== WINDOW COMPARISON ===== */}
<section className="about-section fade-section">
  <div className="comparison-wrapper">

    <h2 className="comparison-title">
      uPVC vs Aluminium vs Wooden Windows
    </h2>

    <p className="comparison-subtitle">
      Compare & choose the best solution for your home
    </p>

    <img
      src={image}  // 👉 place image in public folder
      alt="Window Comparison"
      className="comparison-img"
    />

  </div>
</section>

    </div>
  );
};

export default About;