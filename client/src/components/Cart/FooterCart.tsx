import { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./FooterCart.module.css";
import { item } from "../../store/cart-context";
const FooterCart: React.FC<{ totalAmount: number; items: item[] }> = (
  props
) => {
  const changedItem = props.items.map((item) => {
    return {
      item: item.id,
      quantity: item.amount,
      extras: ["Salt", "Rice"],
    };
  });
  const history = useHistory();
  const [isWaiting, setIsWaiting] = useState(false);
  const onPayHandler = async () => {
    if(changedItem.length===0) {
        return;
    }
    let user_id: null | string = "";
    if (localStorage.getItem("user_id")) {
      user_id = localStorage.getItem("user_id");
    }
    const data = {
      user_id: parseInt(user_id ? user_id : ""),
      payment_method: "card",
      status: "waitting",
      total: props.totalAmount,
      items: changedItem,
    };
    console.log(JSON.stringify(data));
    try {
      const res = await fetch("http://127.0.0.1:8000/api/order/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      if (res.ok) {
        setIsWaiting(true);
      }
    } catch (err) {
      console.log("wrong");
    }
  };
  return (
    <div className={classes.footerCart}>
      <div className={classes.totalprice}>
        <p>Total:</p>
        <p className={classes.textcustom}>Kr {props.totalAmount}</p>
      </div>
      <p>Incl. tax 10% = Kr 12,30</p>
      {isWaiting ? (
        <div className="text-center w-full text-white p-4 mt-5 text-xl font-bold bg-amber-400">Your order is comfirming. Please wait...!</div>
      ) : (
        <button onClick={onPayHandler}>Payment</button>
      )}
    </div>
  );
};

export default FooterCart;
