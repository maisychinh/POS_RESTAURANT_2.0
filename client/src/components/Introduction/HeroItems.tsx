import classes from "./HeroItems.module.css"
import { useHistory } from "react-router-dom"
const HeroItems: React.FC = (props) => {
    const history = useHistory()
    const placeOrderHandler = ()=>{
        history.push("./menu")
    }
    return <div className={classes.heroItems}>
        <h1 className={classes.heroH1}>Greatest Restaurant Ever</h1>
        <p className={classes.heroP}>One Touch For All Transactions</p>
        <button className={classes.heroButton} onClick={placeOrderHandler}>
            Place Order
        </button>
    </div>
}
export default HeroItems