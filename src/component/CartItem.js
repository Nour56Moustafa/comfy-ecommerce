import React from "react";
import { formatePrice } from "../utils/helper";
import AmountButton from "./AmountButton";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, price, amount, color }) => {
  const { toggleAmount, removeItem } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };

  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <article className="cart-item">
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className="price price-small">{formatePrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatePrice(price)}</h5>
      <AmountButton amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatePrice(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;
