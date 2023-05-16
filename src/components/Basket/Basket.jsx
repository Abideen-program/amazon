import { useSelector } from "react-redux";

import { nameFormater } from "../Utils/nameFormatter";
import Checkout from "../Checkout/Checkout";
import Subtotal from "../Subtotal/Subtotal";
import classes from "./Basket.module.css";

const Basket = () => {
  const user = useSelector((state) => state.user.user);

  let newName = "";

  //helper function to help get name from the user eamil
  if (user) {
    newName = nameFormater(user && user.email);
  }

  return (
    <div className={classes.basket}>
      <div className={classes["checkout-header"]}>
        <div className={classes.image}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <h3>Hello, {newName.toLocaleUpperCase()}.</h3>
          <h3>Your Shopping Basket</h3>
        </div>

        <Subtotal />
      </div>

      <Checkout />
    </div>
  );
};

export default Basket;
