import React from "react";
import classes from "./Checkout.module.css";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const basket = useSelector((state) => state.basket.basket);
  console.log(basket);
  return (
    <div className={classes.contianer}>
      {basket &&
        basket.map((item) => {
          return <CheckoutProduct item={item} key={item.id} />;
        })}
    </div>
  );
}

export default Checkout;
