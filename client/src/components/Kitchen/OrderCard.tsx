import React, { useState } from "react";
import ItemInOrder from "../OrderDashboard/ItemInOrder";
import { BsCheckLg } from "react-icons/bs";
import { OrderStatus } from "../../store/order-context";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineFoodBank } from "react-icons/md";
import { DUMMY_CARTITEMS } from "../OrderDashboard/OrderCard";
import {IoCheckmarkDoneSharp} from "react-icons/io5"
const OrderCard: React.FC<{ status: number; numOfOrder: number, finished:boolean }> = (props) => {
  const [isShowButton, setIsShowButton] =  useState(true)
  const statusCtx = props.status
  const finishedCtx = props.finished
  const [test, setTest] = useState({
    finished: finishedCtx,
    status: statusCtx
  })
  const onFinish = ()=>{
    setIsShowButton(false);
    setTest({
      finished: true,
      status: OrderStatus.REJECTED
    })
  }
  
  
    const onCook = ()=>{
      setTest({
        finished: true,
        status: OrderStatus.WAITING
      })
    }
  let counter = 0;
  let contentForStatus;
  if (test.status === OrderStatus.COMPLETED) {
    contentForStatus = (
      <button className="flex justify-between border-lime-500 border-2 p-2 items-center rounded-lg text-lime-500">
        <BsCheckLg className="mr-2" />
        <span>Approved</span>
      </button>
    );
  } else if (test.status === OrderStatus.REJECTED) {
    contentForStatus = (
      <button className="flex justify-between border-red-500 border-2 p-2 items-center rounded-lg text-red-500">
        <IoCheckmarkDoneSharp className="mr-2 text--2xl" />
        <span>Completed</span>
      </button>
    );
  } else if (test.status === OrderStatus.WAITING) {
    contentForStatus = (
      <button className="flex justify-between border-amber-400 border-2 p-2 items-center rounded-lg text-amber-400">
        <MdOutlineFoodBank className="mr-2 text-2xl" />
        <span>Cooking</span>
      </button>
    );
  }
  return (
    <div className="p-4 bg-white rounded-lg border-solid shadow-lg w-full mx-2">
      <div className="flex justify-between items-center py-2">
        <div>
          <span className="font-bold">Order #</span>
          <span className="font-bold">{props.numOfOrder}</span>
          <p>23 Feb 2021, 08:28 PM</p>
        </div>
        <img
          className="w-10 h-10 rounded-fill"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0sbgBslV0D9-e_VnZw8jzegrIARjVxOK-aqsit5TIo7D0X-7-3FMT31EKjsES-bma6k&usqp=CAU"
          alt="cartuser"
        />
      </div>
      <div className="overflow-y-auto h-72 no-scrollbar border-1">
        {DUMMY_CARTITEMS.map((item) => (
          <ItemInOrder
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            amount={item.amount}
            price={item.price}
            counter={counter++}
            extras={item.extras}
          ></ItemInOrder>
        ))}
      </div>
      <div className="flex justify-between items-center pt-4 border-t-2 my-5">
        <div>
          <p className="font-bold">Status:</p>
        </div>
        {contentForStatus}
      </div>
      {isShowButton && <div className="flex justify-end items-center">
        {!test.finished && <button
          className="p-2 bg-lime-600 rounded font-bold text-white"
          style={{ backgroundColor: "#00ab55" }}
          onClick={onCook}
        >
          Cook
        </button>}
        {test.finished && <button
          className="p-2 rounded font-bold border-2 ml-2 bg-red-500 text-white"
          onClick={onFinish}
        >
          Finish
        </button>}
      </div>}
    </div>
  );
};

export default OrderCard;
