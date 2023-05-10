import React from "react";
import classes from "./Basket.module.css";

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

        <div className={classes.subtotal}>
          <p className={classes.sub}>
            Subtotal (6 items): <span>$1,206.96</span>
          </p>
          <div className={classes.checkbox}>
            <input type="checkbox" />
            <label htmlFor="">This order contains a gift</label>
          </div>

          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
