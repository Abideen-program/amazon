import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingItem = state.basket.find((item) => {
        return item.id === action.payload.id;
      });

      if (existingItem) {
        const newBasket = state.basket.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
        state.basket = newBasket;
      } else {
        state.basket = [...state.basket, { ...action.payload, quantity: 1 }];
      }
    },

    removeFromBasket: (state, action) => {
      const existingItem = state.basket.find((item) => {
        return item.id === action.payload.id;
      });

      if (existingItem.quantity === 1) {
        const newBasket = state.basket.filter((item) => {
          return item.id !== action.payload.id;
        });

        state.basket = newBasket;
      } else {
        const newBasket = state.basket.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });

        state.basket = newBasket;
      }
    },
  },
});

export default basketSlice.reducer;

export const { addToBasket, removeFromBasket } = basketSlice.actions;
