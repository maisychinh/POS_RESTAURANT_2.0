import categoriesReducer from "./categories-context";
import mealsReducer from "./meals-context";
import showhideReducer from "./showhide-context";
import cartReducer from "./cart-context";
import extrasReduce from "./extras-context";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products-context";
import authReducer from "./auth-context";
import orderReducer from "./order-context";
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    meals: mealsReducer,
    showhide: showhideReducer,
    cart: cartReducer,
    extras: extrasReduce,
    products: productsReducer,
    auth: authReducer,
    order: orderReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
