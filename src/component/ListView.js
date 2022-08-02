import React from "react";
import { Link } from "react-router-dom";
import { formatePrice } from "../utils/helper";

function ListView({ products }) {
  return (
    <section className="list-view">
      {products.map((product) => {
        const { name, id, price, image, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatePrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link className="btn btn-list_view" to={`/products/${id}`}>
                details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default ListView;
