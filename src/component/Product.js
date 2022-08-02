import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatePrice } from "../utils/helper";

const Product = ({ image, name, price, id }) => {
  return (
    <section className="product">
      <div className="product-content">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`}>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p className="price">{formatePrice(price)}</p>
      </footer>
    </section>
  );
};

export default Product;
