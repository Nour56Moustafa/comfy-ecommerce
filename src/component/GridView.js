import React from "react";
import Product from "../component/Product";

const GridView = ({ products }) => {
  return (
    <div className="grid-view">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default GridView;
