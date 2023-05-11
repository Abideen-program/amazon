import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  basketCount: 0,
  totalPrice: 0,
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

    reduceQuantity: (state, action) => {
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

    removeFromBasket: (state, action) => {
      const newBasket = state.basket.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.basket = newBasket;
    },

    clearBasket: (state) => {
      state.basket = [];
    },

    setCount: (state, action) => {
      state.basketCount = action.payload;
    },

    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export default basketSlice.reducer;

export const {
  addToBasket,
  reduceQuantity,
  removeFromBasket,
  clearBasket,
  setCount,
  setTotalPrice,
} = basketSlice.actions;
