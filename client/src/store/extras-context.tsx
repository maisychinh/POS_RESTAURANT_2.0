import { createSlice } from "@reduxjs/toolkit";
export type item = {
  name: string;
  price: number;
};
type cartExtra = {
  cartID: string;
  extras: item[];
  totalPriceOfExtras: number;
};
const initialContext: { cartExtras: cartExtra[]; extraCache: item[] } = {
  cartExtras: [],
  extraCache: [],
};
const extrasSlice = createSlice({
  name: "extras",
  initialState: initialContext,
  reducers: {
    addExtraHandler: (state, action) => {
      const totalPriceInCache = state.extraCache.reduce((total, item) => {
        return total + item.price;
      }, 0);
      const existingItemIndex = state.cartExtras.findIndex(
        (item) => item.cartID === action.payload.cartID
      );
      const existingItem = state.cartExtras[existingItemIndex];
      if (existingItem) {
        if (!action.payload.addFromCartButton) {
          // Update totalprice
          let updatedItem = {
            ...existingItem,
            totalPriceOfExtras: totalPriceInCache,
          };
          // Update extras
          // updatedItem.extras = [...action.payload.extras]
          updatedItem.extras = [...state.extraCache];
          state.cartExtras[existingItemIndex] = updatedItem;
        }
      } else {
        state.cartExtras.push({
          cartID: action.payload.cartID,
          //   extras: [...action.payload.extras]
          extras: action.payload.addFromCartButton ? [] : state.extraCache,
          totalPriceOfExtras: action.payload.addFromCartButton
            ? 0
            : totalPriceInCache,
        });
      }
    },
    removeExtraHandler: (state, action) => {
      const existingItem = state.cartExtras.find(
        (ext) => ext.cartID === action.payload
      );
      if (existingItem) {
        state.cartExtras = state.cartExtras.filter(
          (extra) => extra.cartID !== action.payload
        );
      }
    },
    clearExtraHandler: (state) => {
      state = initialContext;
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
export const extrasActions = extrasSlice.actions;
export default extrasSlice.reducer;
