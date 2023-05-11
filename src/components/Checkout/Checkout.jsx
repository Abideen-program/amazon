import React, { useEffect } from "react";
import classes from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import { clearBasket, setCount } from "../Store/Features/BasketSlice";

function Checkout() {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    const count = basket.reduce((total, current) => {
      return total + current.quantity;
    }, 0);
    dispatch(setCount(count));
  }, [basket]);

  return (
    <div className={classes.contianer}>
      {basket &&
        basket.map((item) => {
          return <CheckoutProduct item={item} key={item.id} />;
        })}

      <button onClick={() => dispatch(clearBasket())}>Clear Basket</button>
    </div>
  );
}

export default Checkout;
