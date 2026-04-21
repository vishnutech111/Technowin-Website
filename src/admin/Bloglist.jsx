// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Bloglist.css";

// const Bloglist = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch Blogs
//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/blogs");
//       setBlogs(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   // Delete Blog
//   const deleteBlog = async (id) => {
//     if (!window.confirm("Delete this blog?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/blogs/${id}`);
//       setBlogs(blogs.filter((b) => b._id !== id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="bloglist-page">
//       <div className="bloglist-container">

//         <h2>Manage Blogs</h2>

//         {loading ? (
//           <p>Loading...</p>
//         ) : blogs.length === 0 ? (
//           <p>No blogs found</p>
//         ) : (
//           <div className="table-wrapper">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>Title</th>
//                   <th>Content</th>
//                   <th>Date</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {blogs.map((blog) => (
//                   <tr key={blog._id}>
                    
//                     {/* Image */}
//                     <td>
//                       <img
//                         src={blog.image}
//                         alt=""
//                         className="blog-img"
//                       />
//                     </td>

//                     {/* Title */}
//                     <td>{blog.title}</td>

//                     {/* Content */}
//                     <td className="content">
//                       {blog.content.substring(0, 80)}...
//                     </td>

//                     {/* Date */}
//                     <td>
//                       {new Date(blog.createdAt).toLocaleDateString()}
//                     </td>

//                     {/* Actions */}
//                     <td>
//                       <button
//                         className="delete-btn"
//                         onClick={() => deleteBlog(blog._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>

//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Bloglist;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Bloglist.css";
import { useNavigate } from "react-router-dom";

const Bloglist = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const blogsPerPage = 5;

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

  // Delete
  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter((b) => b._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Filter
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="bloglist-page">
      <div className="bloglist-container">

        {/* HEADER */}
        <div className="bloglist-header">
          <h2>Manage Blogs</h2>

          <button
            className="add-btn"
            onClick={() => navigate("/admin/add-blog")}
          >
            + Add Blog
          </button>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search blogs..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? (
          <p>Loading...</p>
        ) : currentBlogs.length === 0 ? (
          <p>No blogs found</p>
        ) : (
          <>
            {/* TABLE */}
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
                  {currentBlogs.map((blog) => (
                    <tr key={blog._id}>
                      <td>
                        <img src={blog.image} alt="" className="blog-img" />
                      </td>

                      <td>{blog.title}</td>

                      <td className="content">
                        {blog.content.substring(0, 80)}...
                      </td>

                      <td>
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </td>

                      <td className="actions">
                        <button
                          className="edit-btn"
                          onClick={() => navigate(`/admin/edit-blog/${blog._id}`)}
                        >
                          Edit
                        </button>

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

            {/* PAGINATION */}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={currentPage === i + 1 ? "active" : ""}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Bloglist;