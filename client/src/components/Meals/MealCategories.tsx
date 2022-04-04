import MealCategory from "./MealCategory";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { CategoriesActions } from "../../store/categories-context";
import CategoriesWrapper from "../UI/CategoriesWrapper";
import classes from './MealCategories.module.css'
const MealCategories: React.FC = (props) => {
  const items = useAppSelector((state) => state.categories.items);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(CategoriesActions.loadCategories());
  }, [dispatch]);
  return (
    <CategoriesWrapper>
      <div className={classes.categories}>
        {items.map((item) => (
          <MealCategory
            key={item.categoryId}
            categoryId={item.categoryId}
            name={item.name}
          ></MealCategory>
        ))}
      </div>
    </CategoriesWrapper>
  );
};

export default MealCategories;
