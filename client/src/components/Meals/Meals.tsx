import { useAppSelector } from "../../store/hooks";
import Meal from "./Meal";
import MealsWrapper from "../UI/MealsWrapper";
const Meals: React.FC = (props) => {
  const items = useAppSelector((state) => state.meals.items);
  let counter = 1;
  return (
      <MealsWrapper>
        {items.map((item) => (
          <Meal
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            extras={item.extras}
            counter={counter++}
          ></Meal>
        ))}
      </MealsWrapper>
  );
};

export default Meals;
