import { createSlice } from "@reduxjs/toolkit";
export enum Categories {
  SEAFOOD,
  CUPCAKE,
  JUICE,
  SALAD,
  HOTPOT,
  FRUIT,
  DRINK,
  ICESCREAM,
  NONE,
}
type category = {
  categoryId: number;
  name: string;
};
const DUMMY_CATEGORIES: category[] = [
  {
    categoryId: Categories.SEAFOOD,
    name: "Sea Food",
  },
  {
    categoryId: Categories.CUPCAKE,
    name: "Cup Cake",
  },
  {
    categoryId: Categories.JUICE,
    name: "Juice",
  },
  {
    categoryId: Categories.SALAD,
    name: "Salad",
  },
  {
    categoryId: Categories.HOTPOT,
    name: "Hot Pot",
  },
  {
    categoryId: Categories.FRUIT,
    name: "Fruit",
  },
  {
    categoryId: Categories.DRINK,
    name: "Drink",
  },
  {
    categoryId: Categories.ICESCREAM,
    name: "Ice Scream",
  },
];
const initialContext: {
  items: category[];
  start: number;
  isChoosen: number;
} = {
  items:[],
  start: 1,
  isChoosen: Categories.NONE,
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialContext,
  reducers: {
    inscreaseStart: (state) => {
      state.start = state.start + 1;
      if(state.start>Math.ceil(DUMMY_CATEGORIES.length/5)){
        state.start = Math.ceil(DUMMY_CATEGORIES.length/5)  
      }
    },
    decreaseStart: (state) => {
      state.start = state.start - 1;
      if(state.start<1){
        state.start = 1;
      }
    },
    loadCategories: (state) => {
      const categoriesIsChoosen = DUMMY_CATEGORIES.slice(
        (state.start - 1) * 5,
        state.start * 5
      );
      state.items = categoriesIsChoosen;
    },
    setIsChoosen:(state,action)=>{
      state.isChoosen = action.payload
    }
  },
});
export const CategoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
