import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.basket = action.payload;
    },
  },
});

export default basketSlice.reducer;

export const { addToCart } = basketSlice.actions;
