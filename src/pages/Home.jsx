import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e"
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 sec

    return () => clearInterval(interval);
  }, []);



  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const section = document.querySelector(".about-home");
    if (section) {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);




const [startCount, setStartCount] = useState(false);
const [counts, setCounts] = useState({
  projects: 0,
  clients: 0,
  experience: 0,
  team: 0,
});


useEffect(() => {
  const handleScroll = () => {
    const section = document.querySelector(".counter-section");
    if (section) {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setStartCount(true);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  if (!startCount) return;

  let interval = setInterval(() => {
    setCounts((prev) => ({
      projects: prev.projects < 250 ? prev.projects + 2 : 250,
      clients: prev.clients < 180 ? prev.clients + 2 : 180,
      experience: prev.experience < 10 ? prev.experience + 1 : 10,
      team: prev.team < 25 ? prev.team + 1 : 25,
    }));
  }, 50); // slow speed

  return () => clearInterval(interval);
}, [startCount]);






useEffect(() => {
  const items = document.querySelectorAll(".service-item");

  const reveal = () => {
    items.forEach((item) => {
      const top = item.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        item.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();

  return () => window.removeEventListener("scroll", reveal);
}, []);

  return (
    <div className="home">
      {/* Carousel */}
      <div className="carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === current ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="overlay">
          <h1>Technowin UPVC Windows & Doors</h1>
          <p>
            Leading UPVC windows and doors fabricator & supplier in Kannur
          </p>
          <button>Explore Services</button>
        </div>
      </div>


      {/* ===== About Section (New) ===== */}
<section className={`about-home ${isVisible ? "show" : ""}`}>
  <div className="about-home-container">

    {/* LEFT IMAGE */}
    <div className="about-home-image">
      <img
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
        alt="Technowin"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="about-home-content">
      <h2>About Technowin</h2>
      <p>
        Technowin UPVC Windows & Doors is a leading manufacturer and supplier
        in Kannur district. We deliver premium quality UPVC solutions that
        combine durability, modern design, and energy efficiency.
      </p>

      <p>
        Our expert team ensures precision fabrication and professional
        installation, making us a trusted name in Kerala.
      </p>

      <Link to="/about-more">
  <button>Learn More</button>
</Link>
    </div>

  </div>
</section>

{/* ===== Counter Section ===== */}
<section className="counter-section">
  <div className="counter-container">

    <div className="counter-box">
      <h2>{counts.projects}+</h2>
      <p>Projects Completed</p>
    </div>

    <div className="counter-box">
      <h2>{counts.clients}+</h2>
      <p>Happy Clients</p>
    </div>

    <div className="counter-box">
      <h2>{counts.experience}+</h2>
      <p>Years Experience</p>
    </div>

    <div className="counter-box">
      <h2>{counts.team}+</h2>
      <p>Team Members</p>
    </div>

  </div>
</section>

      {/* Services Section
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="card">
            <h3>UPVC Windows</h3>
            <p>Durable, weather-resistant and stylish window solutions.</p>
          </div>

          <div className="card">
            <h3>UPVC Doors</h3>
            <p>Strong, secure and modern door designs.</p>
          </div>

          <div className="card">
            <h3>Installation</h3>
            <p>Professional installation with perfect finishing.</p>
          </div>
        </div>
      </section> */}

      {/* ===== Services Section (Upgraded) ===== */}
<section className="services">
  <h2 className="services-title">Our Services</h2>

  <div className="services-list">

    {/* Service 1 */}
    <div className="service-item fade-left">
      <div className="service-img">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="windows" />
      </div>

      <div className="service-content">
        <h3>UPVC Windows</h3>
        <p>
          High-performance uPVC windows engineered for insulation, durability,
          and modern aesthetics. Ideal for homes and commercial spaces.
        </p>

        <ul>
          <li>✔ Energy efficient & soundproof</li>
          <li>✔ Weather & termite resistant</li>
          <li>✔ Low maintenance</li>
        </ul>
      </div>
    </div>

    {/* Service 2 */}
    <div className="service-item reverse fade-right">
      <div className="service-img">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" alt="doors" />
      </div>

      <div className="service-content">
        <h3>UPVC Doors</h3>
        <p>
          Stylish and secure door systems designed with advanced locking
          mechanisms and long-lasting materials.
        </p>

        <ul>
          <li>✔ Strong & secure locking</li>
          <li>✔ Modern design options</li>
          <li>✔ Moisture & corrosion resistant</li>
        </ul>
      </div>
    </div>

    {/* Service 3 */}
    <div className="service-item fade-left">
      <div className="service-img">
        <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e" alt="installation" />
      </div>

      <div className="service-content">
        <h3>Installation</h3>
        <p>
          Professional installation services ensuring perfect alignment,
          finishing, and long-term performance.
        </p>

        <ul>
          <li>✔ Expert technicians</li>
          <li>✔ Precision fitting</li>
          <li>✔ Reliable after-service</li>
        </ul>
      </div>
    </div>

  </div>
</section>

      {/* contact Preview */}

      <section className="contact-section">
  <div className="">

    <div className="contact-content ">
      <h2>Contact Technowin</h2>

      <p className="contact-address">
        Street no 16, Velliyamparamba, Mattannur PO, Kannur - 670702
      </p>

      <p className="contact-phone">
        📞 9061317516 | 8547946367
      </p>

      <Link to="/contact">
  <button className="contact-btn">Contact</button>
</Link>
    </div>

  </div>
</section>
      
    </div>
  );
}
export default Home;






