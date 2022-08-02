import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButton = ({ amount, increase, decrease }) => {
  return (
    <section className="amount-buttons">
      <button className="amount-button" type="button" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button className="amount-button" type="button" onClick={increase}>
        <FaPlus />
      </button>
    </section>
  );
};

export default AmountButton;
