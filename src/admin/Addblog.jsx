import React, { useState } from "react";
import axios from "axios";

import "./Addblog.css";

const Addblog = ({ isOpen, onClose, onCreated }) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const cloudName = "djuihd2af";
  const uploadPreset = "rjatlas";

  if (!isOpen) return null; // 🔥 hide modal

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    if (!image) return "";

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", uploadPreset);

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      data
    );

    return res.data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrl = await uploadImage();

      await axios.post("http://localhost:5000/api/blogs", {
        title: form.title,
        content: form.content,
        image: imageUrl,
      });

      alert("Blog Added ✅");

      onCreated(); // 🔥 refresh list
      onClose();   // 🔥 close modal

    } catch (error) {
      alert("Error ❌");
    }

    setLoading(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Add Blog</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="content"
            placeholder="Content"
            value={form.content}
            onChange={handleChange}
            required
          />

          <input type="file" onChange={handleImage} />

          {preview && <img src={preview} className="preview-img" alt="" />}

          <div className="modal-actions">
            <button type="submit">
              {loading ? "Uploading..." : "Add"}
            </button>

            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Addblog;