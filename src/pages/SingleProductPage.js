import React, { useEffect } from "react";
import PageHero from "../component/PageHero";
import ProductImages from "../component/ProductImages";
import AddToCart from "../component/AddToCart";
import Stars from "../component/Stars";
import { useNavigate, useParams, Link } from "react-router-dom";
import { single_product_url as url } from "../utils/constants";
import { useProductsContext } from "../context/products_context";
import Error from "../component/Error";
import Loading from "../component/Loading";
import { formatePrice } from "../utils/helper";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    setTimeout(() => {
      if (error) {
        navigate("/");
      }
    }, 3000);
    // eslint-disable-next-line
  }, [error]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  const {
    name,
    price,
    description,
    stars,
    stock,
    id: sku,
    images,
    company,
    reviews,
  } = product;

  return (
    <section className="single-product">
      <PageHero title={name} product />
      <div className="container">
        <Link to="/products" className="btn single-product_btn">
          back to products
        </Link>
        <div className="single-product_content">
          <ProductImages images={images} />
          <div className="single-product_info">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatePrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available :</span>
              {stock > 0 ? "In Stock" : "Out Of Stock"}
            </p>
            <p className="info">
              <span>SKU:</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand:</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
