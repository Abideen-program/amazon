import React from "react";
import classes from "./CheckoutProduct.module.css";
import { addToBasket, removeFromBasket } from "../Store/Features/BasketSlice";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({ item }) => {
  const dispatch = useDispatch();

  const { image, price, quantity, rating, title } = item;
  return (
    <div className={classes["checkout-product"]}>
      <div className={classes["checkout-image"]}>
        <img src={image} alt="product-image" />
      </div>

      <div className={classes["checkout-details"]}>
        <p className={classes["product-title"]}>{title}</p>
        <p className={classes["product-price"]}>
          <small>$</small>
          <strong>{price.toFixed(2)}</strong>
        </p>

        <p>
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <span key={i}>🌟</span>;
            })}
        </p>

        <button onClick={() => dispatch(addToBasket(item))}>+</button>
        <span className={classes.quantity}>{quantity}</span>
        <button onClick={() => dispatch(removeFromBasket(item))}>-</button>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
