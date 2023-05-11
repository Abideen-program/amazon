import React from "react";
import classes from "./CheckoutProduct.module.css";

const CheckoutProduct = ({ item }) => {
    const {image, price, quantity, rating, title} = item
  return (
    <div className={classes["checkout-product"]}>
      <div className={classes["checkout-image"]}>
        <img
          src={image}
          alt="product-image"
        />
      </div>

      <div className={classes["checkout-details"]}>
        <p className={classes["product-title"]}>
          {title}
        </p>
        <p className={classes["product-price"]}>
          <small>$</small>
          <strong>{price.toFixed(2)}</strong>
        </p>

        <p>🌟🌟🌟🌟🌟</p>
        <button>+</button>
        <span className={classes.quantity}>{quantity}</span>
        <button>-</button>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
