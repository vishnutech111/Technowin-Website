import React, { useState } from "react";
import axios from "axios";
import "./AddBlog.css";

const AddBlog = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const cloudName = "djuihd2af";
  const uploadPreset = "rjatlas";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // 🔥 Upload to Cloudinary
  const uploadImage = async () => {
    if (!image) return "";

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", uploadPreset);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data
      );

      return res.data.secure_url; // ✅ important
    } catch (err) {
      console.error("Cloudinary error:", err);
      return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Upload Image
      const imageUrl = await uploadImage();

      // 2️⃣ Send to backend
      await axios.post("http://localhost:5000/api/blogs", {
        title: form.title,
        content: form.content,
        image: imageUrl,
      });

      alert("Blog Added Successfully ✅");

      setForm({ title: "", content: "" });
      setImage(null);
      setPreview("");
    } catch (error) {
      console.error(error);
      alert("Error adding blog ❌");
    }

    setLoading(false);
  };

  return (
    <div className="addblog-page">
      <div className="addblog-container">
        <h2>Add New Blog</h2>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Enter blog title"
            value={form.title}
            onChange={handleChange}
            required
          />

          {/* Content */}
          <textarea
            name="content"
            placeholder="Enter blog content"
            value={form.content}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>

          {/* Image Upload */}
          <input type="file" onChange={handleImage} accept="image/*" />

          {/* Preview */}
          {preview && (
            <img src={preview} alt="preview" className="preview-img" />
          )}

          {/* Button */}
          <button type="submit">
            {loading ? "Uploading..." : "Add Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;