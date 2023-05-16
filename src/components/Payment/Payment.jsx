import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CheckoutProduct from "../Checkout/CheckoutProduct";
import { setCount } from "../Store/Features/BasketSlice";
import { nameFormater } from "../Utils/nameFormatter";
import classes from "./Payment.module.css";

function Payment() {
  const basket = useSelector((state) => state.basket.basket);
  const count = useSelector((state) => state.basket.basketCount);
  //   const totalPrice = useSelector((state) => state.basket.totalPrice);

  const user = useSelector((state) => state.user.user);

  let newName = "";

  //helper function to help get name from the user eamil
  if (user) {
    newName = nameFormater(user && user.email);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    const count = basket.reduce((total, current) => {
      return total + current.quantity;
    }, 0);
    dispatch(setCount(count));
  }, [basket]);

  return (
    <div className={classes.payment}>
      <Link to="/basket">
        <h2>Checkout ({count} item(s))</h2>
      </Link>

      <div className={classes["payment-section"]}>
        <div className={classes["payment-section-title"]}>
          <h4>Delivery Address</h4>
        </div>

        <div className={classes["payment-section-description"]}>
          <p>{newName.toLocaleUpperCase()}</p>
          <p>79, Sokenu Road, Abeokuta</p>
          <p>Ogun State Nigeria</p>
        </div>
      </div>

      <div className={classes["payment-section"]}>
        <div className={classes["payment-section-title"]}>
          <h4>Review Items</h4>
        </div>

        <div className={classes["payment-section-description"]}>
          {basket &&
            basket.map((item) => {
              return <CheckoutProduct item={item} key={item.id} />;
            })}
        </div>
      </div>

      <div className={classes["payment-section"]}>
        <div className={classes["payment-section-title"]}>
          <h4>Payment Method</h4>
        </div>

        <div className={classes["payment-section-description"]}></div>
      </div>
    </div>
  );
}

export default Payment;
