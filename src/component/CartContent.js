import React from "react";
import CartColumn from "./CartColumn";
import CartItem from "./CartItem";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartTotal from "./CartTotal";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <section className="cart-content">
      <CartColumn />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className="links-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotal />
    </section>
  );
};

export default CartContent;
