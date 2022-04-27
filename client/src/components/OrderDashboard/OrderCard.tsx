import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { OrderStatus } from "../../store/order-context";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineFoodBank } from "react-icons/md";
import { itemInOrder } from "../../store/order-context";
import { useAppSelector } from "../../store/hooks";
import ItemInOrder from "./ItemInOrder";
export const DUMMY_CARTITEMS = [
  {
    id: "sf1",
    name: "Stir-fried Octopus",
    price: 123,
    image: "https://i.ytimg.com/vi/RW1EzOoGul8/maxresdefault.jpg",
    amount: 3,
    extras: {
      items: [
        {
          name: "Salad",
          price: 10,
        },
        {
          name: "Sauce",
          price: 11,
        },
        {
          name: "Peanut",
          price: 12,
        },
      ],
      totalPriceOfExtras: 33,
    },
  },
  {
    id: "sf3",
    name: "King Crab",
    price: 123,
    image:
      "https://haisanhuubo.com/wp-content/uploads/2020/02/cua-hoang-de-sot-me.jpg",
    amount: 1,
    extras: {
      items: [],
      totalPriceOfExtras: 0,
    },
  },
  {
    id: "j1",
    image:
      "https://hoadangducluong.com/wp-content/uploads/2020/12/nuoc-ep-cam-1.jpg",
    name: "Orange Juice",
    price: 123,
    amount: 1,
    extras: {
      items: [],
      totalPriceOfExtras: 0,
    },
  },
  {
    id: "sl2",
    image:
      "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ff973413-868b-4b81-8f4d-ab1fae08e485.jpg",
    name: "Salmon Salad",
    price: 123,
    amount: 1,
    extras: {
      items: [],
      totalPriceOfExtras: 0,
    },
  },
];
const DUMMY_CARTITEMS_2 = [
  {
    id: "sf1",
    name: "Stir-fried Octopus",
    price: 123,
    image: "https://i.ytimg.com/vi/RW1EzOoGul8/maxresdefault.jpg",
    amount: 3,
    extras: {
      items: [
        {
          name: "Salad",
          price: 10,
        },
        {
          name: "Sauce",
          price: 11,
        },
        {
          name: "Peanut",
          price: 12,
        },
      ],
      totalPriceOfExtras: 33,
    },
  },
  {
    id: "sf3",
    name: "King Crab",
    price: 123,
    image:
      "https://haisanhuubo.com/wp-content/uploads/2020/02/cua-hoang-de-sot-me.jpg",
    amount: 1,
    extras: {
      items: [],
      totalPriceOfExtras: 0,
    },
  },
  {
    id: "j1",
    image:
      "https://hoadangducluong.com/wp-content/uploads/2020/12/nuoc-ep-cam-1.jpg",
    name: "Orange Juice",
    price: 123,
    amount: 1,
    extras: {
      items: [],
      totalPriceOfExtras: 0,
    },
  },
  {
    id: "sl2",
    image:
      "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/ff973413-868b-4b81-8f4d-ab1fae08e485.jpg",
    name: "Salmon Salad",
    price: 123,
    amount: 1,
    extras: {
      items: [],
      totalPriceOfExtras: 0,
    },
  },
];
const OrderCard: React.FC<{
  order_id: number;
  user_id: number;
  items: itemInOrder[];
  total: number;
  payment_method: string;
  status: string;
  created_at: string;
}> = (props) => {
  const numberOfItems = props.items.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);
  const [status, setStatus] = useState(props.status);
  let counter = 0;
  let contentForStatus;
  if (status === "approved") {
    contentForStatus = (
      <button className="flex justify-between border-lime-500 border-2 p-2 items-center rounded-lg text-lime-500">
        <BsCheckLg className="mr-2" />
        <span>Approved</span>
      </button>
    );
  } else if (status === "rejected") {
    contentForStatus = (
      <button className="flex justify-between border-red-500 border-2 p-2 items-center rounded-lg text-red-500">
        <TiDeleteOutline className="mr-2 text--2xl" />
        <span>Rejected</span>
      </button>
    );
  } else if (status === "waitting") {
    contentForStatus = (
      <button className="flex justify-between border-amber-400 border-2 p-2 items-center rounded-lg text-amber-400">
        <MdOutlineFoodBank className="mr-2 text-2xl" />
        <span>Waiting</span>
      </button>
    );
  }
  return (
    <div className="p-4 bg-white rounded-lg border-solid shadow-lg">
      <div className="flex justify-between items-center py-2">
        <div>
          <span className="font-bold">Order #</span>
          <span className="font-bold">{props.order_id}</span>
          <p>{props.created_at}</p>
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
      <div className="flex justify-between items-center pt-4 border-t-2">
        {contentForStatus}

        <div>
          <p>x{numberOfItems} Items</p>
          <p className="font-bold">Kr {props.total}</p>
        </div>
      </div>
      {status === "waitting" && (
        <div className="flex flex-col">
          <button
            onClick={() => {
              setStatus("approved");
            }}
            className="bg-lime-500 rounded p-1 font-bold mt-2"
          >
            Approve
          </button>
          <button
            onClick={() => {
              setStatus("rejected");
            }}
            className="bg-red-500 rounded p-1 font-bold mt-2"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
