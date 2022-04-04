import { useAppDispatch } from "../../store/hooks";
import { cartActions } from "../../store/cart-context";
import classes from "./CartItem.module.css";
type extra = {
  name: string;
  price: number;
};
const CartItem: React.FC<{
  id: string;
  name: string;
  amount: number;
  price: number;
  image: string;
  counter: number;
  extras: { items: extra[]; totalPriceOfExtras: number };
}> = (props) => {
  const dispatch = useAppDispatch();
  const onAddHandler = () => {
    dispatch(
      cartActions.addItemFromCartButtonHandler({
        id: props.id,
        name: props.name,
        amount: 1,
        price: props.price,
        image: props.image,
      })
    );
  };
  const onRemoveHandler = () => {
    dispatch(cartActions.removeItemHandler(props.id));
  };
  return (
    <div className={classes.cartitem}>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.container}>
        <div className={classes.name}>
          <span>{props.counter}. </span>
          {props.name}
        </div>
        <div className={classes.extras}>
          {props.extras.items && props.extras.items.map((extra) => (
            <div key={extra.name}>
              {extra.name}
              <span>kr {extra.price}</span>
            </div>
          ))}
        </div>
        <div className={classes.contentfooter}>
          <div className={classes.actions}>
            <button onClick={onRemoveHandler}>-</button>
            <p>{props.amount}</p>
            <button onClick={onAddHandler}>+</button>
          </div>
          <div className={classes.tax}>
            <div>Kr {props.price}</div>
            <div>(Incl. tax 10% - Kr 12.30)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
