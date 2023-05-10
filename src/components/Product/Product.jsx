import React from "react";
import classes from "./Product.module.css";
import { MdShoppingCart } from "react-icons/md";

const Product = ({ title, image, price, rating }) => {
  return (
    <div className={classes.product}>
      <div className={classes["product-info"]}>
        <p className={classes.title}>{title}</p>
        <p className={classes["product-price"]}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className={classes["product-rating"]}>
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <span>🌟</span>;
              })}
          </p>
        </p>
      </div>

      <img src={image} alt="" />

      <button>
        {/* <MdShoppingCart className={classes.cart} /> */}
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
