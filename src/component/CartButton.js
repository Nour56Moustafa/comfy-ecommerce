import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButton = () => {
  const { user, logout } = useUserContext();

  const { total_items, clearCart } = useCartContext();
  return (
    <div className="wrapper">
      <Link to="/cart">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {user ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            clearCart();
            logout();
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <Link className="auth-btn" to="login">
          Login <FaUserPlus />
        </Link>
      )}
    </div>
  );
};

export default CartButton;
