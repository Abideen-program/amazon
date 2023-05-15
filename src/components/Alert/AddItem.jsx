import React from "react";
import { MdCheck } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import classes from "./AddItem.module.css";

function AddItem() {
  const addNotification = useSelector((state) => state.basket.addNotification);
  const removeNotification = useSelector(
    (state) => state.basket.removeNotification
  );
  return (
    <>
      {addNotification && (
        <div className={classes.wrapper}>
          <MdCheck />
          <p>Product added successfully</p>
        </div>
      )}

      {removeNotification && (
        <div className={classes.wrapper}>
          <MdCheck />
          <p>Product removed successfully</p>
        </div>
      )}
    </>
  );
}

export default AddItem;
