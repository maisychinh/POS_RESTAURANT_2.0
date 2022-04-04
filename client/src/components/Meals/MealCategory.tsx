import classes from "./MealCategory.module.css";
import { Categories } from "../../store/categories-context";
import { MealsAction } from "../../store/meals-context";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import { CategoriesActions } from "../../store/categories-context";
const MealCategory: React.FC<{
  categoryId: number;
  name: string;
}> = (props) => {
  const dispatch = useAppDispatch();
  const isChoosenCategory = useAppSelector(
    (state) => state.categories.isChoosen
  );
  const choseCategory = () => {
    dispatch(
      MealsAction.chooseCategoryHandler({
        id: props.categoryId,
        name: props.name,
      })
    );
    dispatch(CategoriesActions.setIsChoosen(props.categoryId));
  };
  const isChoosenClass =
    isChoosenCategory === props.categoryId
      ? { backgroundColor: "#2c3a57", color: "white",cursor:'pointer' }
      : { backgroundColor: "white", color: "black", cursor: "pointer" };
  return (
    <div
      onClick={choseCategory}
      className={classes.card}
      style={isChoosenClass}
    >
      {props.categoryId === Categories.SEAFOOD && (
        <img
          src={require("../../Image/categories/seafood.png")}
          alt="..."
        />
      )}
      {props.categoryId === Categories.CUPCAKE && (
        <img
          src={require("../../Image/categories/img-cake-4.png")}
          alt="..."
        />
      )}
      {props.categoryId === Categories.JUICE && (
        <img
          src={require("../../Image/categories/juice.png")}
          alt="..."
        />
      )}
      {props.categoryId === Categories.FRUIT && (
        <img
          src={require("../../Image/categories/fruit.png")}
          alt="..."
        />
      )}
      {props.categoryId === Categories.SALAD && (
        <img
          src={require("../../Image/categories/salad.png")}
          alt="..."
        />
      )}
      {props.categoryId === Categories.HOTPOT && (
        <img
          src={require("../../Image/categories/hotpot.png")}
          alt="..."
        />
      )}
      {props.categoryId === Categories.ICESCREAM && (
        <img
          src={require("../../Image/categories/icescream.png")}
          alt="..."
        />
      )}
      {props.categoryId === Categories.DRINK && (
        <img
          src={require("../../Image/categories/drink.png")}
          alt="..."
        />
      )}
      <div className={classes.text}>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default MealCategory;
