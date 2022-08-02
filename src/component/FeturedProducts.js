import React from "react";
import { useProductsContext } from "../context/products_context";
import Product from "./Product";
import Loading from "./Loading";
import Error from "./Error";
import { Link } from "react-router-dom";

const FeturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="fetured">
      <div className="container">
        <h3>fetured products</h3>
        <div className="featured-content">
          {featured.slice(0, 3).map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
        <Link to="/products" className="btn btn-fetured">
          all products
        </Link>
      </div>
    </section>
  );
};

export default FeturedProducts;
