import { ImCart } from "react-icons/im";
import classes from './HeaderCart.module.css';
const HeaderCart: React.FC<{ totalItems: number }> = (props) => {
  return (
    <div className={classes.headerCart}>
      <ImCart className={classes.carticon} color="#F00008" size="1.5rem"></ImCart>
      <div>
        Your Cart({props.totalItems})
      </div>
      <button>
        Dine In
      </button>
    </div>
  );
};

export default HeaderCart;
