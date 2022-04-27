import classes from "./ItemInOrder.module.css";
type extra = {
  name: string;
  price: number;
};
const ItemInOrder: React.FC<{
  id: string;
  name: string;
  amount: number;
  price: number;
  image: string;
  counter: number;
  extras: { items: extra[]; totalPriceOfExtras: number };
}> = (props) => {
  return (
    <div className={classes.cartitem}>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.container}>
        <div className={classes.name}>
          <span>{props.counter}. </span>
          {props.name}
        </div>
        <div className={classes.extras}>
          {props.extras.items && props.extras.items.map((extra) => (
            <div key={extra.name}>
              {extra.name}
              <span>kr {extra.price}</span>
            </div>
          ))}
        </div>
        <div className={classes.contentfooter}>
          <div className={classes.actions}>
            <p>x{props.amount}</p>
          </div>
          <div className={classes.tax}>
            <div>Kr {props.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInOrder;
