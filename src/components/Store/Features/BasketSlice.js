import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  basketCount: 0,
  totalPrice: 0,
  addNotification: false,
  removeNotification: false,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // ADD & INCREASE ITEM QUANTITY TO BASKET
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

    // REDUCE ITEM QUANTITY IN BASKET
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

    // REMOVE ITEM FROM BASKET
    removeFromBasket: (state, action) => {
      const newBasket = state.basket.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.basket = newBasket;
    },

    //CLEAR THE WHOLE BASKET
    clearBasket: (state) => {
      state.basket = [];
    },

    // SET BASKET COUNT
    setCount: (state, action) => {
      state.basketCount = action.payload;
    },

    // SET PRICE
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },

    // SET BASKET ADD NOTIFICATION
    setAddNotification: (state, action) => {
      state.addNotification = action.payload;
    },

    //SET BASKET REMOVE NOTIFICATION
    setRemoveNotification: (state, action) => {
      state.removeNotification = action.payload;
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
  setAddNotification,
  setRemoveNotification,
} = basketSlice.actions;
