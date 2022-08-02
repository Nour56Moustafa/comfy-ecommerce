import React, { useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <section className="product-images">
      <img src={main.url} alt={main.filename} className="main-img" />
      <div className="gallery">
        {images.map((img, index) => {
          return (
            <img
              className={`${main.url === img.url && "product-images_active"}`}
              src={img.url}
              alt={img.filename}
              key={index}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
