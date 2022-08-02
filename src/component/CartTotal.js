import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { formatePrice } from "../utils/helper";
import { useUserContext } from "../context/user_context";

const CartTotal = () => {
  const { total_amount, shiping_fee } = useCartContext();
  const { user } = useUserContext();

  return (
    <article className="cart-total">
      <div className="content">
        <div className="box">
          <h5>
            subtotal :<span>{formatePrice(total_amount)}</span>
          </h5>
          <p>
            shopping fee :<span>{formatePrice(shiping_fee)}</span>
          </p>
          <hr />
          <h4>
            order totlal :
            <span>{formatePrice(total_amount + shiping_fee)}</span>
          </h4>
        </div>
        {user ? (
          <Link className="btn btn-cart-total" to="/checkout">
            proceed to checkout
          </Link>
        ) : (
          <Link className="btn btn-cart-total" to="/login">
            login
          </Link>
        )}
      </div>
    </article>
  );
};

export default CartTotal;
