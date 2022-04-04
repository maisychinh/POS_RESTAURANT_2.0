import { useAppSelector } from "../../store/hooks";
import classes from "./MealsWrapper.module.css";
const MealsWrapper: React.FC = (props) => {
  const categoryName = useAppSelector((state) => state.meals.categoryName);
  return (
    <div className={classes.mealsWrapper}>
      <fieldset>
        <legend>{categoryName}</legend>
        <div className={classes.meals}>{props.children}</div>
      </fieldset>
    </div>
  );
};

export default MealsWrapper;
