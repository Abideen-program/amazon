import React from "react";
import { MdSearch, MdShoppingBasket } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

import { nameFormater } from "../Utils/nameFormatter";
import { auth } from "../../firebaseConfig";
import classes from "./Header.module.css";

const Header = () => {
  const count = useSelector((state) => state.basket.basketCount);
  const user = useSelector((state) => state.user.user);

  let newName = "";

  //helper function to help get name from the user eamil
  if (user) {
    newName = nameFormater(user && user.email);
  }

  const signOutHandler = () => {
    signOut(auth);
  };

  return (
    <>
      <div className={classes.header}>
        {/* <div className={classes.logo}> */}
        <Link to="/">
          <img
            className={classes["logo-image"]}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-icon"
          />
        </Link>
        {/* </div> */}

        <div className={classes["header-search"]}>
          <input className={classes["search-input"]} type="text" />
          <div className={classes.search}>
            <MdSearch />
          </div>
        </div>

        <div className={classes["header-options"]}>
          <Link to={!user && "login"}>
            <div onClick={signOutHandler} className={classes["header-option"]}>
              <span className={classes["option-one"]}>
                {!user ? "Hello Guest" : newName}
              </span>
              <span className={classes["option-two"]}>
                {!user ? "Sign in" : "Sign out"}
              </span>
            </div>
          </Link>

          <div className={classes["header-option"]}>
            <span className={classes["option-one"]}>Returns</span>
            <span className={classes["option-two"]}>& Orders</span>
          </div>

          <div className={classes["header-option"]}>
            <span className={classes["option-one"]}>Your</span>
            <span className={classes["option-two"]}>Prime</span>
          </div>

          <Link to="basket">
            <div className={classes["header-basket"]}>
              <MdShoppingBasket className={classes.basket} />
              <span className={classes["basket-count"]}>{count}</span>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
