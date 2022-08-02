import React from "react";
import { formatePrice, getUniqueValues } from "../utils/helper";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";

const Filter = () => {
  const {
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    all_products,
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const categores = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <section className="filters">
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Text */}
        <div className="form-control">
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilters}
          />
        </div>
        {/* Category */}
        <div className="form-control">
          <h5>Category</h5>
          <div>
            {categores.map((c, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  className={`${
                    category === c.toLowerCase()
                      ? "btn-category active-category"
                      : "btn-category"
                  }`}
                  onClick={updateFilters}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
        {/* Company */}
        <div className="form-control">
          <h5>company</h5>
          <select
            name="company"
            value={company}
            className="company"
            onChange={updateFilters}
          >
            {companies.map((c, index) => {
              return <option key={index}>{c}</option>;
            })}
          </select>
        </div>
        {/* Colors */}
        <div className="form-control">
          <h5>colors</h5>
          <div className="colors">
            {colors.map((c, index) => {
              if (c === "all") {
                return (
                  <button
                    key={index}
                    name="color"
                    className={`${
                      color === "all" ? "all-btn all-active" : "all-btn"
                    }`}
                    data-color="all"
                    onClick={updateFilters}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  name="color"
                  style={{ background: c }}
                  className={`${
                    c === color ? "color-btn active-color" : "color-btn"
                  }`}
                  data-color={c}
                  onClick={updateFilters}
                >
                  {color === c && <FaCheck />}
                </button>
              );
            })}
          </div>
        </div>
        {/* Price */}
        <div className="form-control">
          <h5>price</h5>
          <p>{formatePrice(price)}</p>
          <input
            type="range"
            name="price"
            max={max_price}
            min={min_price}
            value={price}
            onChange={updateFilters}
          />
        </div>
        {/* Shiping */}
        <div className="form-control shipping">
          <label htmlFor="shipping">free shopping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={updateFilters}
          />
        </div>
      </form>
      <button type="button" className="clear-btn" onClick={clearFilters}>
        clear filters
      </button>
    </section>
  );
};

export default Filter;
