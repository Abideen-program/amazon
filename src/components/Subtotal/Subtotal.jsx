import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setTotalPrice } from "../Store/Features/BasketSlice";
import classes from "./Subtotal.module.css";

function Subtotal() {
  const count = useSelector((state) => state.basket.basketCount);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  const navigate = useNavigate()

  useEffect(() => {
    const price = basket.reduce((total, current) => {
      return total + current.quantity * current.price;
    }, 0);
    dispatch(setTotalPrice(price));
  }, [basket]);
  return (
    <>
      <div className={classes.subtotal}>
        <p className={classes.sub}>
          Subtotal ({count} items): <span>${totalPrice.toFixed(2)}</span>
        </p>
        <div className={classes.checkbox}>
          <input type="checkbox" />
          <label htmlFor="">This order contains a gift</label>
        </div>

        <button onClick={() => navigate('/payment')}>Proceed to Checkout</button>
      </div>
    </>
  );
}

export default Subtotal;
