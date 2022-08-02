import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTER,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../action";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        filtered_products: action.payload,
        all_products: action.payload,
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case SET_LISTVIEW:
      return { ...state, grid_view: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { filtered_products, sort } = state;
      let tempProducts = [...filtered_products];
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return { ...state, filtered_products: tempProducts };
    case UPDATE_FILTER:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, company, category, color, price, shipping } = state.filters;
      let tempProductsFilter = [...all_products];
      if (text) {
        tempProductsFilter = tempProductsFilter.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }
      if (category !== "all") {
        tempProductsFilter = tempProductsFilter.filter((product) => {
          return product.category === category;
        });
      }
      if (company !== "all") {
        tempProductsFilter = tempProductsFilter.filter((product) => {
          return product.company === company;
        });
      }
      if (color !== "all") {
        tempProductsFilter = tempProductsFilter.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }
      tempProductsFilter = tempProductsFilter.filter(
        (product) => product.price <= price
      );
      if (shipping) {
        tempProductsFilter = tempProductsFilter.filter(
          (product) => product.shipping === true
        );
      }
      return { ...state, filtered_products: tempProductsFilter };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
