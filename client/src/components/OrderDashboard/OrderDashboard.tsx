import React from "react";
import { BiFilter } from "react-icons/bi";
import OrderList from "./OrderList";
import SelectBar from "./Selectbar";
import { useAppSelector,useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { orderActions } from "../../store/order-context";
const OrderDashboard:React.FC = (props) => {
  const order = useAppSelector(state => state.order.items)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getOrder = async ()=>{
      try {
        const res = await fetch("http://127.0.0.1:8000/api/chef/get-all-orders")
        if(res.ok){
          const data = await res.json()
          dispatch(orderActions.setOrder(data))
        }
      }catch (err) {

      }
    }
    getOrder()
  },[])
  return (
    <div>
      <div className="p-7">
        <div className="flex flex-row justify-between items-center px-3">
          <p className="text-3xl font-semibold">Orders</p>
          <div className="flex items-center">
            <p className="font-semibold mr-3">Filtered</p>
            <BiFilter className="text-2xl mr-3" />
            <SelectBar />
          </div>
        </div>
      </div>
      <OrderList orders= { order}/>
    </div>
  );
};

export default OrderDashboard;
