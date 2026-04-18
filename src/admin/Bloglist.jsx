import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BlogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Delete Blog
  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter((b) => b._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bloglist-page">
      <div className="bloglist-container">

        <h2>Manage Blogs</h2>

        {loading ? (
          <p>Loading...</p>
        ) : blogs.length === 0 ? (
          <p>No blogs found</p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    
                    {/* Image */}
                    <td>
                      <img
                        src={blog.image}
                        alt=""
                        className="blog-img"
                      />
                    </td>

                    {/* Title */}
                    <td>{blog.title}</td>

                    {/* Content */}
                    <td className="content">
                      {blog.content.substring(0, 80)}...
                    </td>

                    {/* Date */}
                    <td>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>

                    {/* Actions */}
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteBlog(blog._id)}
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};

export default BlogList;