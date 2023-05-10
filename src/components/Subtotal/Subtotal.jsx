import React from "react";
import classes from "./Subtotal.module.css";

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

        <button>Proceed to Checkout</button>
      </div>
    </>
  );
}

export default Subtotal;
