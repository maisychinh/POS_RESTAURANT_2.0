import classes from "./MealExtra.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { cartActions } from "../../store/cart-context";
const MealExtra: React.FC<{
  name: string;
  price: number;
  cartID: string;
}> = (props) => { 
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const extrasCache = useAppSelector((state=>state.cart.extraCache))

  useEffect(() => {
    const isInCache = extrasCache.some(item => item.name===props.name)
    setIsChecked(isInCache)
  },[extrasCache,props.name])
  const onCheckHandler = (event: React.FormEvent) => {
    if (!isChecked) {
      dispatch(cartActions.onAddCacheHandler({name:props.name,price:props.price}))
    } else {
      dispatch(cartActions.onRemoveCacheHandler(props.name))
    }
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };
  return (
    <label className={classes.container}>
      {props.name}
      <input
        type="checkbox"
        checked={isChecked}
        value={props.name}
        onChange={onCheckHandler}
      />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default MealExtra;
