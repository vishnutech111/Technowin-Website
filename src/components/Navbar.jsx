// import React, { useEffect, useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       // Background change
//       if (scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }

//       // Zoom effect (scale navbar)
//       let newScale = 1 - scrollY * 0.0005;
//       if (newScale < 0.85) newScale = 0.85;

//       setScale(newScale);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`navbar ${scrolled ? "scrolled" : ""}`}
//       style={{ transform: `scale(${scale})` }}
//     >
//       <div className="nav-container">
        
//         {/* Logo */}
//         <h2 className="logo">Technowin</h2>

//         {/* Links */}
//         <ul className="nav-links">
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li><a href="/services">Services</a></li>
//           <li><a href="/blog">Blog</a></li>
//           <li><a href="/gallery">Gallery</a></li>
//           <li><a href="/contact">Contact</a></li>
//         </ul>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scale, setScale] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Background effect
      setScrolled(scrollY > 50);

      // Zoom effect
      let newScale = 1 - scrollY * 0.0005;
      if (newScale < 0.85) newScale = 0.85;

      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      style={{ transform: `scale(${scale})` }}
    >
      <div className="nav-container">

        {/* Logo */}
        <h2 className="logo">Technowin</h2>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Hamburger Button */}
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;