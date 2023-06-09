import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import classes from "./Home.module.css";
import Product from "../Product/Product";
import { setCount } from "../Store/Features/BasketSlice";
import { setUser } from "../Store/Features/UserSlice";

const Home = () => {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    const count = basket.reduce((total, current) => {
      return total + current.quantity;
    }, 0);
    dispatch(setCount(count));
  }, [basket]);

  //this will handle getting logged in user when refresh
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          setUser({
            email: authUser.email,
            name: authUser.displayName,
            image: authUser.photoURL,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
    <div className={classes.home}>
      <div className={classes["home-container"]}>
        <img
          className={classes["home-image"]}
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className={classes["home-row"]}>
          <Product
            id={1}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>

        <div className={classes["home-row"]}>
          <Product
            id={3}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id={4}
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id={5}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className={classes["home-row"]}>
          <Product
            id={6}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
