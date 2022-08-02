import React from "react";
import CartButton from "./CartButton";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext();
  const { user } = useUserContext();

  return (
    <div>
      <aside className={`${isSidebarOpen && "show-sidebar"}`}>
        <div className="container">
          <div className="sidebar-header">
            <img src={logo} alt="comfy sloth" />
            <button type="button" onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>
          <ul>
            {links.map((link) => (
              <li key={link.id} onClick={closeSidebar}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
            {user && (
              <li onClick={closeSidebar}>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </ul>
          <div className="sidebar-cart">
            <CartButton />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
