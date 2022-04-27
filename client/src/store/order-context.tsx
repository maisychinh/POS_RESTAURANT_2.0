import { createSlice } from "@reduxjs/toolkit";
export enum OrderStatus {
  WAITING,
  COMPLETED,
  REJECTED,
}
export type itemInOrder = {
  item: number;
  quantity: number;
  extras: string[];
};
export type Order = {
  order_id: number;
  user_id: number;
  total: number;
  payment_method: string;
  status: string;
  items: itemInOrder[];
  created_at: string;
  updated_at: string;
};
const initialOrder: Order[] = [];

const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: initialOrder,
  },
  reducers: {
    setOrder: function (state, action) {
        state.items = action.payload
    },
  },
});

export default orderSlice.reducer;
export const orderActions = orderSlice.actions