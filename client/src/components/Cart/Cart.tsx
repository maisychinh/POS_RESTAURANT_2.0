import FooterCart from "./FooterCart";
import HeaderCart from "./HeaderCart";
import CartItem from "./CartItem";
import { useAppSelector } from "../../store/hooks";
import classes from './Cart.module.css'
const Cart: React.FC = (props) => {
    let counter = 1;
    const DUMMY_CARTITEMS = useAppSelector((state)=>state.cart.items)
    const totalAmount = useAppSelector((state)=>state.cart.totalAmount)
    const totalPriceOfExtras = DUMMY_CARTITEMS.reduce((total, item)=>{
      return total += item.extras.totalPriceOfExtras
    },0)
    const totalItems = DUMMY_CARTITEMS.reduce((total, item)=>{
      return total + item.amount
    },0)
    const totalPrice =  totalAmount + totalPriceOfExtras
  return (
    <div className={classes.cart}>
      <HeaderCart totalItems={totalItems}></HeaderCart>
      <div className={classes.cartbody}>
      {DUMMY_CARTITEMS.map((item) => (
        <CartItem
          key ={counter++}
          id={item.id}
          name={item.name}
          image={item.image}
          amount={item.amount}
          price={item.price}
          counter= {counter++}
          extras = {item.extras}
        ></CartItem>
      ))}
      </div>
      <FooterCart totalAmount={totalPrice}></FooterCart>
    </div>
  );
};

export default Cart;
