import React from "react";
import OrderCard from "./OrderCard";
import { OrderStatus } from "../../store/order-context";
import Carousel from "react-elastic-carousel";
const Kitchen = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="flex justify-center p-11">
      <Carousel breakPoints={breakPoints} isRTL={false} className="text-red">
        {/* {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))} */}
        <OrderCard key="1" status={OrderStatus.COMPLETED} numOfOrder={9} finished={false} />
        <OrderCard key="2" status={OrderStatus.WAITING} numOfOrder={2} finished={true}/>
        <OrderCard key="3" status={OrderStatus.WAITING} numOfOrder={3} finished={true}/>
        <OrderCard key="4" status={OrderStatus.WAITING} numOfOrder={4} finished={true}/>
      </Carousel>
    </div>
  );
};

export default Kitchen;
