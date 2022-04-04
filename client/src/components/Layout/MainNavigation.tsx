import { AiFillHome } from "react-icons/ai";
import CartButton from "../Cart/CartButton";
import classes from './MainNavigation.module.css';
import { useHistory } from "react-router-dom";
const MainNavigation: React.FC = (props) => {
  const history = useHistory()
  const backToHomeHandler = () => {
    history.push("/")
  }
  return (
    <header className={classes.header}>
      <div className={classes.icon} onClick={backToHomeHandler}>
        <span >
          <AiFillHome size="1.5rem" color="#fff" />
        </span>
      </div>
      <div className={classes.text}>
        <p>Back To Home</p>
      </div>
      <CartButton></CartButton>
    </header>
  );
};

export default MainNavigation;
