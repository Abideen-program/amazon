import React, { Children } from "react";
import classes from "./Button.module.css";

const heading = {
  width: "100%",
};

const Button = ({ children, type }) => {
  return (
    <button className={classes.button} style={type && heading}>
      {children}
    </button>
  );
};

export default Button;
