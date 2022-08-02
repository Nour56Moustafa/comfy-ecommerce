import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import AmountButton from "./AmountButton";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldValue) => {
      let tempAmount = oldValue + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldValue) => {
      let tempAmount = oldValue - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <section className="add-to-cart">
      <div className="colors">
        <span>colors: </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? "color color-active" : "color"
                }`}
                onClick={() => setMainColor(colors[index])}
              >
                {mainColor === color && <FaCheck />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButton amount={amount} increase={increase} decrease={decrease} />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, amount, mainColor, product)}
        >
          add to cart
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
