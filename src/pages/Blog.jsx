import React, { useEffect, useState } from "react";
import "./Blog.css";

const carouselImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e"
];

const dummyBlogs = [
  {
    title: "Benefits of UPVC Windows",
    desc: "UPVC windows are durable, energy-efficient and low maintenance...",
  },
  {
    title: "Why Choose UPVC Doors?",
    desc: "UPVC doors provide better insulation and long-lasting quality...",
  },
  {
    title: "Modern Window Design Trends",
    desc: "Explore the latest trends in UPVC window designs...",
  },
];

const Blog = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="blog-page">

      {/* Vertical Carousel */}
      <div className="vertical-carousel">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`v-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="v-overlay">
          <h1>Our Blog</h1>
          <p>Latest Updates & Insights from Technowin</p>
        </div>
      </div>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Latest Articles</h2>

        <div className="blog-grid">
          {dummyBlogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Blog;