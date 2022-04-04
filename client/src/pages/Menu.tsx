import MealCategories from "../components/Meals/MealCategories";
import Meals from "../components/Meals/Meals";
import { useAppSelector } from "../store/hooks";
import Modal from "../components/UI/Modal";
import MealDetail from "../components/Meals/MealDetail";
import Cart from "../components/Cart/Cart";
import classes from "./Styles/Home.module.css";
import { Fragment } from "react";
const Menu: React.FC = (props) => {
  const isShow = useAppSelector((state) => state.showhide.showDetail);
  const isShowCart = useAppSelector((state) => state.showhide.showCart);
  const isShowNotification = useAppSelector((state) => state.showhide.showNotification)
  const item = useAppSelector((state) => state.showhide.item);
  return (
    <Fragment>
      {isShow && item && (
        <Modal>
          <MealDetail
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            extras={item.extras}
          ></MealDetail>
        </Modal>
      )}
      {isShowCart && (
        <Modal>
          <Cart></Cart>
        </Modal>
      )}
      {isShowNotification && (<Modal></Modal>)}
      <MealCategories></MealCategories>
      <Meals />
      <div className={classes.cartactions}>
        <Cart></Cart>
      </div>
    </Fragment>
  );
};

export default Menu;
