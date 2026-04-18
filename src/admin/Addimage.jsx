import React, { useState } from "react";
import axios from "axios";
import "./AddImage.css";

const AddImage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const cloudName = "djuihd2af";
  const uploadPreset = "rjatlas";

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Upload to Cloudinary
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
      return res.data.secure_url;
    } catch (err) {
      console.error(err);
      return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrl = await uploadImage();

      await axios.post("http://localhost:5000/api/images", {
        title,
        category,
        image: imageUrl,
      });

      alert("Image Added Successfully ✅");

      setTitle("");
      setCategory("");
      setImage(null);
      setPreview("");
    } catch (error) {
      console.error(error);
      alert("Error uploading image ❌");
    }

    setLoading(false);
  };

  return (
    <div className="addimage-page">
      <div className="addimage-container">

        <h2>Add Gallery Image</h2>

        <form onSubmit={handleSubmit}>

          {/* Title */}
          <input
            type="text"
            placeholder="Image Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Category */}
          <input
            type="text"
            placeholder="Category (Optional)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          {/* Upload */}
          <input type="file" accept="image/*" onChange={handleImage} required />

          {/* Preview */}
          {preview && (
            <div className="preview-box">
              <img src={preview} alt="preview" />
            </div>
          )}

          {/* Button */}
          <button type="submit">
            {loading ? "Uploading..." : "Add Image"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddImage;