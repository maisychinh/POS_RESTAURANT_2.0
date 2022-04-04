import { createSlice } from "@reduxjs/toolkit";
type extra = {
  name: string;
  price: number;
};
type extras = {
  items: extra[];
  totalPriceOfExtras: number;
};
type item = {
  id: string;
  name: string;
  price: number;
  image: string;
  amount: number;
  extras: extras;
};
const initialItems: {
  items: item[];
  totalAmount: number;
  extraCache: extra[];
} = {
  items: [],
  totalAmount: 0,
  extraCache: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialItems,
  reducers: {
    addItemHandler: (state, action) => {
      state.totalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        let updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };
        if (state.extraCache) {
          let updatedExtra = {
            items: state.extraCache,
            totalPriceOfExtras: state.extraCache.reduce((total, item) => {
              return total + item.price;
            }, 0),
          };
          updatedItem.extras = updatedExtra;
        }
        state.items[existingItemIndex] = updatedItem;
      } else {
        state.items.push({
          ...action.payload,
          extras: {
            items: state.extraCache,
            totalPriceOfExtras: state.extraCache.reduce((total, item) => {
              return total + item.price;
            }, 0),
          },
        });
      }
    },
    addItemFromCartButtonHandler: (state, action) => {
      state.totalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        let updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };
        state.items[existingItemIndex] = updatedItem;
      } else {
        state.items.push({
          ...action.payload,
          extras: {
            items: [],
            totalPriceOfExtras: 0,
          },
        });
      }
    },
    removeItemHandler: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        state.totalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(
            (item) => item.id !== action.payload
          );
          state.items = updatedItems;
        } else {
          let updatedItem = {
            ...existingItem,
            amount: existingItem.amount - 1,
          };
          state.items[existingItemIndex] = updatedItem;
        }
      } else {
        alert("This meal no longer exists in cart. Please add!");
      }
    },
    removeAllItemThatExistHandler: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        state.totalAmount = state.totalAmount - existingItem.price * existingItem.amount;
        let updatedItems = state.items.filter(
          (item) => item.id !== action.payload
        );
        state.items = updatedItems;
      }
    },
    onReplaceAmount: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        let updatedItem = {
          ...existingItem,
          amount: action.payload.amount,
        };
        if (state.extraCache) {
          let updatedExtra = {
            items: state.extraCache,
            totalPriceOfExtras: state.extraCache.reduce((total, item) => {
              return total + item.price;
            }, 0),
          };
          updatedItem.extras = updatedExtra;
        }
        state.items[existingItemIndex] = updatedItem;
        state.totalAmount =
          state.totalAmount -
          action.payload.price * existingItem.amount +
          action.payload.amount * action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          extras: {
            items: state.extraCache,
            totalPriceOfExtras: state.extraCache.reduce((total, item) => {
              return total + item.price;
            }, 0),
          },
        });
        state.totalAmount =
          state.totalAmount + action.payload.price * action.payload.amount;
      }
    },
    onAddCacheHandler: (state, action) => {
      state.extraCache.push(action.payload);
    },
    onRemoveCacheHandler: (state, action) => {
      state.extraCache = state.extraCache.filter(
        (extra) => extra.name !== action.payload
      );
    },
    onReplaceCacheHandler: (state, action) => {
      state.extraCache = [...action.payload];
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
