import React from "react";
import classes from "./Subtotal.module.css";
import Button from "../Button/Button";

function Subtotal() {
  return (
    <>
      <div className={classes.subtotal}>
        <p className={classes.sub}>
          Subtotal (0 items): <span>$00.00</span>
        </p>
        <div className={classes.checkbox}>
          <input type="checkbox" />
          <label htmlFor="">This order contains a gift</label>
        </div>

        <Button type={true}>Proceed to Checkout</Button>
      </div>
    </>
  );
}

export default Subtotal;
