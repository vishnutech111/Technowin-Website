import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="contact-page">

      {/* Background Section */}
      <div className="contact-hero">
        <div className="contact-overlay">

          <h1 className="fade-in">Contact Us</h1>
          <p className="fade-in delay">
            Get in touch with Technowin UPVC Experts
          </p>

          {/* Contact Form */}
          <form className="contact-form slide-up" onSubmit={submitForm}>
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>
      </div>

      {/* Info Section */}
      <section className="contact-info">
        <div className="info-box">
          <h3>📍 Location</h3>
          <p>Kannur District, Kerala</p>
        </div>

        <div className="info-box">
          <h3>📞 Phone</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="info-box">
          <h3>📧 Email</h3>
          <p>technowin@gmail.com</p>
        </div>
      </section>

    </div>
  );
};

export default Contact;