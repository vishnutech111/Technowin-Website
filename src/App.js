import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Contact from "./pages/contact";
import AboutLearnMore from "./pages/AboutLearnMore";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";


import Imagelist from "./admin/Imagelist";
import Bloglist from "./admin/Bloglist";
import Addimage from "./admin/Addimage";
import Addblog from "./admin/Addblog";
// import Contact from "./pages/Contact";

// Admin Pages (optional)
// import Dashboard from "./admin/Dashboard";
// import AddBlog from "./admin/AddBlog";
// import AddGallery from "./admin/AddGallery";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-more" element={<AboutLearnMore />} />

        {/* Admin */}
         <Route path="/admin/add-blogs" element={<Addblog />}/>
        <Route path="/admin/login" element={<AdminLogin />} />
       <Route path="/admin/dashboard" element={<AdminDashboard />} />
         {/* <Route path="/admin" element={<Dashboard />} /> */}
        <Route path="/admin/admin-blog" element={<Bloglist />} />
        <Route path="/admin/admin-image" element={<Imagelist />} />
        <Route path="/admin/add-image" element={<Addimage />} />
        
      </Routes>
    <Footer />
</BrowserRouter>
  );
}
export default App;