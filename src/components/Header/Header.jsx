import React from "react";
import classes from "./Header.module.css";
import { MdSearch, MdShoppingBasket } from "react-icons/md";
const Header = () => {
  return (
    <div className={classes.header}>
      {/* <div className={classes.logo}> */}
      <img
        className={classes["logo-image"]}
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon-icon"
      />
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

        <div className={classes["header-basket"]}>
          <MdShoppingBasket className={classes.basket} />
          <span className={classes["basket-count"]}>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
