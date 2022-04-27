import { Fragment } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppDispatch } from "../../store/hooks";
import { showHideActions } from "../../store/showhide-context";
import { cartActions } from "../../store/cart-context";
import { useRef } from "react";
import classes from "./Meal.module.css";
const Meal: React.FC<{
  id: number;
  image: string;
  price: number;
  name: string;
  extras: {}[]
  counter: number;
}> = (props) => {
  const dispatch = useAppDispatch();
  const clickRef = useRef<HTMLDivElement>(null);
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const { target } = event;
    if (clickRef.current?.contains(target as Node)) {
      dispatch(
        cartActions.addItemFromCartButtonHandler({
          image: props.image,
          price: props.price,
          name: props.name,
          id: props.id,
          amount: 1,
        })
      );
    } else {
      dispatch(
        showHideActions.showDetailHandler({
          name: props.name,
          image: props.image,
          price: props.price,
          id: props.id,
          extras: props.extras
        })
      );
    }
  };
  return (
    <Fragment>
      <div className={classes.card} onClick={onClickHandler}>
        <img src={props.image} alt="..." />
        <div className={classes.cardfooter}>
          <div className={classes.namecontainer}>
            <span className={classes.number}>{props.counter + ". "}</span>
            <div className={classes.name}>
              {props.name}
            </div>
          </div>
          <div className={classes.price}>
            <div>
              <p className={classes.number}>{"Kr " + props.price}</p>
            </div>
            <div ref={clickRef} className={classes.carticon}>
              <AiOutlineShoppingCart
                color="white"
              ></AiOutlineShoppingCart>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Meal;
