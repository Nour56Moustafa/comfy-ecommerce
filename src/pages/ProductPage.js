import React from "react";
import PageHero from "../component/PageHero";
import Filter from "../component/Filter";
import ProductList from "../component/ProductList";
import Sort from "../component/Sort";

const ProductPage = () => {
  return (
    <main className="product-page">
      <PageHero title="Products" />
      <div className="container">
        <Filter />
        <div>
          <Sort />
          <ProductList />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
