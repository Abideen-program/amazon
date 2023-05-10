import React from "react";
import classes from "./CheckoutProduct.module.css";

function CheckoutProduct() {
  return (
    <div className={classes.contianer}>
      <div className={classes["checkout-product"]}>
        <div className={classes["checkout-image"]}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            alt=""
          />
        </div>

        <div className={classes["checkout-details"]}>
          <p className={classes["product-title"]}>
            The Lean Startup: How Constant Innovation Creates Radically
            Successful Businesses Paperback
          </p>
          <p className={classes["product-price"]}>
            <small>$</small>
            <strong>19.99</strong>
          </p>

          <p>🌟🌟🌟🌟🌟</p>
          <button>+</button>
          <button>-</button>
          <button>Remove from Basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
