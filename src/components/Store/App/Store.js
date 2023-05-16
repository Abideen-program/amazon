import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Features/BasketSlice";
import userReducer from "../Features/UserSlice";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
  },
});

export default store;
