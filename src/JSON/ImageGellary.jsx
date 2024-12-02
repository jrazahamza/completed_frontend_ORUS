import React from "react";
import imageData from "../assets/data/images.json";

const ImageGallery = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        {imageData.map((image) => (
          <div key={image.id}>
            <img 
              src={require(`../assets/${image.path}`)} 
              alt={image.name} 
              style={{ width: "200px", height: "auto", borderRadius: "8px" }} 
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
