import React from "react";
import PageHero from "../component/PageHero";
import StripeCheckout from "../component/StripeCheckout";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main className="checkout">
      <PageHero title="Checkout" />
      <div className="container">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn btn-checkout">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </main>
  );
};

export default CheckoutPage;
