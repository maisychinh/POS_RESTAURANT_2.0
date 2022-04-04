import { ImCart } from "react-icons/im";
import classes from "./CartButton.module.css";
import { useAppDispatch } from "../../store/hooks";
import { showHideActions } from "../../store/showhide-context";
import { useAppSelector } from "../../store/hooks";
const CartButton: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state)=> state.cart.items)
  const totalItems = items.reduce((total, item) => total + item.amount,0)
  return (
    <div
      className={classes.button}
      onClick={() => {
        dispatch(showHideActions.showCartHandler());
      }}
    >
      <ImCart size="1.5rem" color="white"></ImCart>
      <div className={classes.amount}>{totalItems}</div>
    </div>
  );
};

export default CartButton;
