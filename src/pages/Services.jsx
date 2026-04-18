import React, { useEffect } from "react";
import "./Services.css";

const Services = () => {

  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

    const reveal = () => {
      items.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
          item.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="services-page">

      {/* HERO */}
      <div className="services-hero">
        <div className="services-overlay">
          <h1>Our Services</h1>
          <p>Advanced UPVC, Aluminium & Glass Solutions</p>
        </div>
      </div>

      {/* ===== UPVC WINDOWS ===== */}
      <section className="service-block fade-up">
        <div className="service-container">

          <div className="service-img">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="" />
          </div>

          <div className="service-text">
            <h2>uPVC Windows</h2>

            <p>
              Technowin offers high-quality uPVC windows designed to meet the
              demands of modern architecture. uPVC (Unplasticized Polyvinyl
              Chloride) is a rigid and durable material known for its resistance
              to moisture, corrosion, and extreme weather conditions. These
              windows are reinforced internally with galvanized steel to provide
              additional strength and long-term durability.
            </p>

            <p>
              Our manufacturing process includes precision cutting, welding, and
              assembly using advanced machinery to ensure airtight sealing and
              structural integrity. Each window is fitted with high-quality
              hardware systems such as multi-point locking mechanisms and smooth
              sliding rollers for effortless operation.
            </p>

            <ul>
              <li>✔ Excellent thermal and sound insulation</li>
              <li>✔ Weather-resistant (perfect for Kerala climate)</li>
              <li>✔ No termite or moisture damage</li>
              <li>✔ Low maintenance and long lifespan</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ===== UPVC DOORS ===== */}
      <section className="service-block reverse fade-up">
        <div className="service-container-second">

          <div className="service-img">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" alt="" />
          </div>

          <div className="service-text">
            <h2>uPVC Doors</h2>

            <p>
              Our uPVC doors combine strength, style, and security to deliver
              high-performance solutions for residential and commercial spaces.
              Designed to withstand varying environmental conditions, these doors
              are built using reinforced polymer frames and precision-engineered
              locking systems.
            </p>

            <p>
              Technowin ensures that every door is manufactured with strict
              quality standards, including cutting, reinforcement, welding, and
              hardware integration. Whether it’s sliding doors, casement doors,
              or French doors, our systems offer smooth operation and excellent
              sealing performance.
            </p>

            <ul>
              <li>✔ Moisture & corrosion resistant</li>
              <li>✔ Termite-proof and durable</li>
              <li>✔ Strong locking for security</li>
              <li>✔ Modern aesthetic designs</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ===== ALUMINIUM ===== */}
      <section className="service-block fade-up">
        <div className="service-container">

          <div className="service-img">
            <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e" alt="" />
          </div>

          <div className="service-text">
            <h2>Aluminium System Windows & Doors</h2>

            <p>
              Technowin aluminium systems are designed for modern architecture
              that demands strength, minimalism, and elegance. Aluminium frames
              are lightweight yet extremely strong, making them ideal for large
              openings and premium designs.
            </p>

            <p>
              These systems are manufactured using advanced CNC machining and
              precision engineering. The result is a sleek, slim-profile window
              or door system that maximizes glass area while maintaining
              structural strength.
            </p>

            <ul>
              <li>✔ Slim and modern profiles</li>
              <li>✔ High structural strength</li>
              <li>✔ Corrosion-resistant</li>
              <li>✔ Suitable for large glass panels</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ===== GLASS ===== */}
      <section className="service-block reverse fade-up">
        <div className="service-container-third">

          <div className="service-img">
            <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97" alt="" />
          </div>

          <div className="service-text">
            <h2>Toughened Glass Works</h2>

            <p>
              Technowin provides premium toughened glass solutions that combine
              safety, durability, and aesthetics. Toughened glass is processed
              through controlled heating and rapid cooling, making it 4–5 times
              stronger than regular glass.
            </p>

            <p>
              It is widely used in modern architecture for its safety features
              and elegant appearance. Even when broken, it shatters into small
              harmless pieces, reducing the risk of injury.
            </p>

            <ul>
              <li>✔ High strength & safety</li>
              <li>✔ Heat and impact resistant</li>
              <li>✔ Elegant modern look</li>
              <li>✔ Ideal for interiors & exteriors</li>
            </ul>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;