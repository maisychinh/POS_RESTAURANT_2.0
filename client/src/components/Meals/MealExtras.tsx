import MealExtra from "./MealExtra";
import classes from "./MealExtras.module.css";
const MealExtras: React.FC<{
  extras: { price: number; name: string }[];
  cartID: string;
}> = (props) => {
  return (
    <div className={classes.extras}>
      {props.extras.map((extra) => (
        <MealExtra
          key={extra.name}
          name={extra.name}
          price={extra.price}
          cartID={props.cartID}
        ></MealExtra>
      ))}
    </div>
  );
};

export default MealExtras;
