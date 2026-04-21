import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    blogs: 0,
    images: 0,
  });

  // Fetch counts
  const fetchStats = async () => {
    try {
      const blogRes = await axios.get("http://localhost:5000/api/blogs");
      const imgRes = await axios.get("http://localhost:5000/api/images");

      setStats({
        blogs: blogRes.data.length,
        images: imgRes.data.length,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="admin">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Technowin Admin</h2>

        <ul>
          <li><a href="/admin/dashboard">Dashboard</a></li>
          <li><a href="/admin/add-blogs">Add Blog</a></li>
          <li><a href="/admin/admin-blog">Blog List</a></li>
          <li><a href="/admin/add-image">Add Image</a></li>
          <li><a href="/admin/admin-image">Image List</a></li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="main">

        <h1>Dashboard</h1>

        {/* STATS */}
        <div className="stats">

          <div className="card">
            <h3>Total Blogs</h3>
            <p>{stats.blogs}</p>
          </div>

          <div className="card">
            <h3>Gallery Images</h3>
            <p>{stats.images}</p>
          </div>

          <div className="card">
            <h3>Projects</h3>
            <p>25+</p>
          </div>

        </div>

        {/* WELCOME */}
        <div className="welcome">
          <h2>Welcome to Technowin Admin Panel</h2>
          <p>
            Manage your blogs, gallery, and website content easily from here.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;