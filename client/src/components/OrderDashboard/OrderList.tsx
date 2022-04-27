import React from "react";
import OrderCard from "./OrderCard";
import { Order } from "../../store/order-context";
import { OrderStatus } from "../../store/order-context";
const OrderList: React.FC<{ orders: Order[] }> = (props) => {

  return (
    <div className="px-11 py-5 grid grid-cols-3 gap-3">
      {props.orders.map((order) => <OrderCard
          status={order.status}
          order_id={order.order_id}
          user_id={order.user_id}
          created_at={order.created_at}
          total ={order.total}
          items={order.items}
          payment_method = {order.payment_method}
        />)}
    </div>
  );
};

export default OrderList;
