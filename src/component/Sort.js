import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    sort,
    updateSort,
    setListView,
    setGridView,
  } = useFilterContext();
  return (
    <section className="sort">
      <div className="btn-container">
        <button
          type="button"
          className={`${grid_view && "active-view"}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid_view && "active-view"}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select value={sort} onChange={updateSort} name="sort" id="sort">
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
