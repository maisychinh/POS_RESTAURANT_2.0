import MealCategories from "../components/Meals/MealCategories";
import Meals from "../components/Meals/Meals";
import { useAppSelector,useAppDispatch } from "../store/hooks";
import Modal from "../components/UI/Modal";
import MealDetail from "../components/Meals/MealDetail";
import Cart from "../components/Cart/Cart";
import classes from "./Styles/Home.module.css";
import { Fragment, useEffect } from "react";
import { MealsAction } from "../store/meals-context";
const Menu: React.FC = (props) => {
  const dispatch = useAppDispatch()
  const isShow = useAppSelector((state) => state.showhide.showDetail);
  const isShowCart = useAppSelector((state) => state.showhide.showCart);
  const isShowNotification = useAppSelector(
    (state) => state.showhide.showNotification
  );
  const item = useAppSelector((state) => state.showhide.item);
  useEffect(() => {
    const getMeals = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/order");
      const data = await res.json();
      dispatch(MealsAction.setProduct(data))
    };
    getMeals();
  }, []);
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
      {isShowNotification && <Modal></Modal>}
      <MealCategories></MealCategories>
      <Meals />
      <div className={classes.cartactions}>
        <Cart></Cart>
      </div>
    </Fragment>
  );
};

export default Menu;
