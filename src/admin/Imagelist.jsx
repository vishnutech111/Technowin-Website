import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ImageList.css";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Images
  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/images");
      setImages(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Delete Image
  const deleteImage = async (id) => {
    if (!window.confirm("Delete this image?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/images/${id}`);
      setImages(images.filter((img) => img._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="imagelist-page">
      <div className="imagelist-container">

        <h2>Manage Gallery</h2>

        {loading ? (
          <p>Loading...</p>
        ) : images.length === 0 ? (
          <p>No images found</p>
        ) : (
          <div className="gallery-grid">
            {images.map((img) => (
              <div className="gallery-card" key={img._id}>

                {/* Image */}
                <div className="img-wrapper">
                  <img src={img.image} alt="" />
                </div>

                {/* Content */}
                <div className="img-info">
                  <h4>{img.title}</h4>
                  <p>{img.category || "General"}</p>
                </div>

                {/* Delete Button */}
                <button
                  className="delete-btn"
                  onClick={() => deleteImage(img._id)}
                >
                  Delete
                </button>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ImageList;