import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import axiosConfig from "../../axios";

import CheckoutProduct from "../Checkout/CheckoutProduct";
import {
  setCount,
  setTotalPrice,
  clearBasket,
} from "../Store/Features/BasketSlice";
import { nameFormater } from "../Utils/nameFormatter";
import instance from "../../axios";
import classes from "./Payment.module.css";

function Payment() {
  const stripe = useStripe();
  const elements = useElements();

  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);

  const basket = useSelector((state) => state.basket.basket);
  const count = useSelector((state) => state.basket.basketCount);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let newName = "";
  //helper function to help get name from the user eamil
  if (user) {
    newName = nameFormater(user && user.email);
  }

  //Handles cart count in this component
  useEffect(() => {
    const count = basket.reduce((total, current) => {
      return total + current.quantity;
    }, 0);
    dispatch(setCount(count));
  }, [basket]);

  //to get the client secret that will tell the stripe to handle the payment
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axiosConfig({
        method: "POST",
        url: `/payments/create?total=${totalPrice.toFixed(2) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log(clientSecret);

  const submitHandler = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        setSuccess(true);
        setError(null);
        setProcessing(false);
        navigate("/order", { replace: true });
        dispatch(clearBasket());
      });
  };

  const changeHandler = (event) => {
    setDisabled(event.complete ? false : true);
    setError(event.error ? event.error.message : "");
  };

  //Handles total price in this component
  useEffect(() => {
    const price = basket.reduce((total, current) => {
      return total + current.quantity * current.price;
    }, 0);
    dispatch(setTotalPrice(price));
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
          {user && (
            <>
              <p>{newName.toLocaleUpperCase()}</p>
              <p>79, Sokenu Road, Abeokuta</p>
              <p>Ogun State Nigeria</p>
            </>
          )}
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

        <div className={classes["payment-section-stripe"]}>
          <form onSubmit={submitHandler}>
            <CardElement onChange={changeHandler} />

            <div className={classes["card-action"]}>
              <h3>Order Total: ${totalPrice.toFixed(2)}</h3>
              <button
                disabled={processing || disabled || !stripe || success || error}
                type="submit"
              >
                {processing ? "Processing" : "Pay Now"}
              </button>
            </div>
            {error && <p className={classes["card-error"]}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
