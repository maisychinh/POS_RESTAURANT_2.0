import { createSlice } from "@reduxjs/toolkit";
// import { DUMMY_MEALS } from "./meals-context";
import { Categories } from "./categories-context";
import {meal} from "./meals-context"
let DUMMY_MEALS:meal[] = []
const initialContext:{
  category: number,
  items: meal[]
} = {
  category: Categories.ALL,
  items: []
}
const productSlice = createSlice({
  name: "products",
  initialState: initialContext,
  reducers: {
    setProduct: function (state,action){
      DUMMY_MEALS = action.payload
      state.items = action.payload
    }, 
    addItem: function (state,action){
      console.log(action.payload)
      state.items.push(action.payload)
    },
    filterByCategoryHandler: function (state, action) {
      const category = parseInt(action.payload.value);
      if (category === Categories.ALL) {
        state.items = DUMMY_MEALS;
      } else {
        console.log(DUMMY_MEALS)
        state.items = DUMMY_MEALS.filter((item) => item.category === category);
      }
      state.category = category;
    },
    removeProductHandler: function (state, action) {
      console.log(action.payload)
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const productsAction = productSlice.actions;
export default productSlice.reducer;
