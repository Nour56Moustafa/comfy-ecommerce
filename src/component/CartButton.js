import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { useProductsContext } from "../context/products_context";

const CartButton = () => {
  const { user, logout } = useUserContext();
  const { total_items, clearCart } = useCartContext();
  const { closeSidebar } = useProductsContext();

  return (
    <div className="wrapper">
      <Link to="/cart" onClick={closeSidebar}>
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
            closeSidebar();
            clearCart();
            logout();
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <Link className="auth-btn" to="login" onClick={closeSidebar}>
          Login <FaUserPlus />
        </Link>
      )}
    </div>
  );
};

export default CartButton;
