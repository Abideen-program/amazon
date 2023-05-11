import React from "react";
import classes from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import { clearBasket } from "../Store/Features/BasketSlice";

function Checkout() {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  return (
    <div className={classes.contianer}>
      {basket &&
        basket.map((item) => {
          return <CheckoutProduct item={item} key={item.id} />;
        })}

      <button onClick={() => dispatch(clearBasket())}>Clear</button>
    </div>
  );
}

export default Checkout;
