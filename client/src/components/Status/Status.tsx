import React from "react";
import LayoutStatus from "../UI/LayoutStatus";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiCampCookingPot } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import {GiConfirmed} from "react-icons/gi"
const Status = () => {
  const history = useHistory()
  const onChangeOrderHandler = () => {
    history.push("/menu")
  }
  return (
    <LayoutStatus>
      <div className="card-timeline border-none flex flex-col justify-between">
        <div className="text-center">
          <p className="mt-10 text-3xl font-bold">Order <span className="text-amber-500">#9</span></p>
        </div>
        <ul className="bs4-order-tracking">
          <li className="step active">
            <div>
              <AiOutlineShoppingCart />
            </div>{" "}
            Order
          </li>
          <li className="step active">
            <div>
              <GiConfirmed />
            </div>{" "}
            Approved
          </li>
          <li className="step active">
            <div>
              <FaMoneyCheckAlt />
            </div>{" "}
            Pay Order
          </li>
          <li className="step active">
            <div>
              <GiCampCookingPot />
            </div>{" "}
            Cooking
          </li>
          <li className="step active">
            <div>
              <IoFastFoodOutline />
            </div>{" "}
            Completed
          </li>
        </ul>
        <div className="text-center text-2xl">
          {/* <p>Your order is being cooked. Please wait!!!</p> */}
        </div>
        <button onClick={onChangeOrderHandler} className="w-full h-16 font-bold text-2xl text-white" style={{backgroundColor:"#e9ba23"}}>
        Have a nice meal!
        </button>
      </div>
    </LayoutStatus>
  );
};

export default Status;
