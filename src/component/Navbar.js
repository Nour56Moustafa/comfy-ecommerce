import React from "react";
import { links } from "../utils/constants";
import logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { user } = useUserContext();

  return (
    <div className="container">
      <div className="nav-container">
        <Link to="/">
          <img src={logo} alt="Comfry Sloth" />
        </Link>
        <nav>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
            {user && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="navbar-cart">
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
