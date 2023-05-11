import React from "react";
import classes from "./Header.module.css";
import { MdSearch, MdShoppingBasket } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.basket.basketCount);
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
          <div className={classes["header-option"]}>
            <span className={classes["option-one"]}>Hello Guest</span>
            <span className={classes["option-two"]}>Sign in</span>
          </div>

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
