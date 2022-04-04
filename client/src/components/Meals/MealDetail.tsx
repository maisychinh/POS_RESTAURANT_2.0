import { AiOutlineShoppingCart } from "react-icons/ai";
import HeaderModal from "../UI/HeaderModal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { cartActions } from "../../store/cart-context";
import classes from "./MealDetail.module.css";
import { Fragment, useEffect, useState } from "react";
import { showHideActions } from "../../store/showhide-context";
import MealExtras from "./MealExtras";
const MealDetail: React.FC<{
  id: string;
  name: string;
  image: string;
  price: number;
  extras: {name: string, price: number}[]
}> = (props) => {
  const dispatch = useAppDispatch();
  // Get extras 
  const cartitems = useAppSelector(state=> state.cart.items)
  const existingItem = cartitems.find(item => item.id=== props.id)
  useEffect(()=>{
      if(existingItem){
        const extraOfThisId = existingItem.extras.items
        dispatch(cartActions.onReplaceCacheHandler(extraOfThisId))
      }
      else{
        dispatch(cartActions.onReplaceCacheHandler([]))
      }
  },[dispatch,props.id,existingItem])
  // Get extrascache
  const extrasCache = useAppSelector(state=>state.cart.extraCache)
  const priceOfExtras = extrasCache.reduce((total,extra)=>{
    return total + extra.price
  },0)
  // Get items from cart
  // Find item by id
  let amountOfCartItem = 0;
  if(existingItem) {
    amountOfCartItem = existingItem.amount
  }
  const [mealCacheAmount, setMealCacheAmount] = useState<number>(0);
  const totalAmount = amountOfCartItem + mealCacheAmount
  const priceOfCartItem = props.price * totalAmount + priceOfExtras
  
  const onAddHandler = () => {
    setMealCacheAmount((prevMealCacheAmount) => prevMealCacheAmount + 1);
  };
  const onRemoveHandler = () => {
    if(totalAmount>0){
      setMealCacheAmount((prevMealCacheAmount) => prevMealCacheAmount - 1);
    }
  };
  const onConfirmHandler = () => {
    if(totalAmount>0){
      dispatch(
        cartActions.onReplaceAmount({
          id: props.id,
          name: props.name,
          image: props.image,
          price: props.price,
          amount: totalAmount,
        })
      );
    }
    else{
      dispatch(
        cartActions.removeAllItemThatExistHandler(props.id)
      )
    }
    dispatch(showHideActions.showNotificationHandler(totalAmount));
    setTimeout(() => {
      dispatch(showHideActions.hideDetailHandler());
    }, 1000);
  };

  return (
    <Fragment>
      <HeaderModal></HeaderModal>
      <div className={classes.details}>
        <div className={classes.image}>
          <img
            src={props.image}
            alt={props.name}
            className="img-thumbnail img-fluid"
          />
        </div>
        <div className={classes.rightdetail}>
          <div>
            <div className={classes.introduce}>
              <div>SKU</div>
              <div>Name</div>
              <div className={classes.textAlign}>Unit Price</div>
              <div style={{ color: "rgb(148, 135, 135)" }}>401</div>
              <div style={{ color: "rgb(148, 135, 135)" }}>{props.name}</div>
              <div className={classes.textAlign} style={{ color: "#F00008" }}>
                {props.price}
              </div>
            </div>
          </div>
          <div className={classes.quantity}>
            <p>Quantity</p>
            <div>
              <button onClick={onRemoveHandler}>-</button>
              <p>{totalAmount}</p>
              <button onClick={onAddHandler}>+</button>
            </div>
          </div>
          <div className={classes.info}>
            <p>
              Protein: <span>What is Lorem?</span>
            </p>
            <p>
              Additives: <span>03</span>
            </p>
            <p>
              Baking material: <span>040</span>
            </p>
            <p>
              Food decoration: <span>04</span>
            </p>
          </div>
          <div className={classes.footerinfo}>
            <div>
              <p>Side dishes(*)</p>
              <p className={classes.extrasinfo}>
                Please select on of properties below
              </p>
            </div>
            <p className={classes.extrasinfo}>
              Selected quantity {totalAmount}
            </p>
          </div>
          <MealExtras extras= {props.extras} cartID={props.id}></MealExtras>
          <div className={classes.cartbutton} onClick={onConfirmHandler}>
            <div>
              <AiOutlineShoppingCart
                size="1.5rem"
                color="white"
                className="float-end"
              ></AiOutlineShoppingCart>
            </div>
            <p>Kr {priceOfCartItem}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MealDetail;
