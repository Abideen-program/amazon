import React from "react";
import classes from "./Basket.module.css";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

const Basket = () => {
  return (
    <div className={classes.basket}>
      <div className={classes["checkout-header"]}>
        <div className={classes.image}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <h3>Your Shopping Basket</h3>
        </div>

        <Subtotal />
      </div>

      <CheckoutProduct />
    </div>
  );
};

export default Basket;
