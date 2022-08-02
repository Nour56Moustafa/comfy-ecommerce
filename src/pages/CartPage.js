import React from "react";
import { Link } from "react-router-dom";
import CartContent from "../component/CartContent";
import PageHero from "../component/PageHero";
import { useCartContext } from "../context/cart_context";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main className="cart-empty">
        <div className="container">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn btn-fill">
            fill it
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart">
      <PageHero title="Cart" />
      <div className="container">
        <CartContent />
      </div>
    </main>
  );
};

export default CartPage;
