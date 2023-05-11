import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Features/BasketSlice";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default store
