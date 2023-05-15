import classes from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, setAddNotification } from "../Store/Features/BasketSlice";

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  
  const addToBasketHandler = () => {
    dispatch(
      addToBasket({
        id,
        title,
        image,
        price,
        rating,
      })
    );

    dispatch(setAddNotification(true));

    const timer = setTimeout(() => {
      dispatch(setAddNotification(false));
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <div className={classes.product}>
      <div className={classes["product-info"]}>
        <p className={classes.title}>{title}</p>
        <p className={classes["product-price"]}>
          <small>$</small>
          <strong>{price.toFixed(2)}</strong>
        </p>
        <p className={classes["product-rating"]}>
          <span>
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <span key={i}>🌟</span>;
              })}
          </span>
        </p>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasketHandler}>Add to Basket</button>
    </div>
  );
};

export default Product;
