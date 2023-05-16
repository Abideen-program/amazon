import React from "react";
import classes from "./CheckoutProduct.module.css";
import {
  addToBasket,
  reduceQuantity,
  removeFromBasket,
  setAddNotification,
  setRemoveNotification,
} from "../Store/Features/BasketSlice";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({ item }) => {
  const dispatch = useDispatch();
  const { image, price, quantity, rating, title } = item;

  //increase the quantity handler
  const increaseQuantityHandler = () => {
    //this handles increament of the quantity
    dispatch(addToBasket(item));

    //this handles setting of add notification
    dispatch(setAddNotification(true));

    //this clears notification
    const timer = setTimeout(() => {
      dispatch(setAddNotification(false));
      clearTimeout(timer);
    }, 1000);
  };

  //reduce the quantity handler
  const reduceQuantityHandler = () => {
    //this handles reduction of the quantity
    dispatch(reduceQuantity(item));

    //this handles setting of remove notification
    dispatch(setRemoveNotification(true));

    //this clears notification
    const timer = setTimeout(() => {
      dispatch(setRemoveNotification(false));
      clearTimeout(timer);
    }, 1000);
  };

  const removeItemHandler = () => {
    //this handles removal of the item
    dispatch(removeFromBasket(item));

    //this handles setting of remove notification
    dispatch(setRemoveNotification(true));

    //this clears notification
    const timer = setTimeout(() => {
      dispatch(setRemoveNotification(false));
      clearTimeout(timer);
    }, 1000);
  };

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

        <button onClick={increaseQuantityHandler}>+</button>
        <span className={classes.quantity}>{quantity}</span>
        <button onClick={reduceQuantityHandler}>-</button>
        <button onClick={removeItemHandler}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
