import { useHistory } from 'react-router-dom'
import classes from './FooterCart.module.css'
const FooterCart: React.FC<{totalAmount:number}> = (props) => {
    const history = useHistory()
    const onPayHandler = ()=>{
        history.push('/payment')
    }
    return <div className={classes.footerCart}>
        <div className={classes.totalprice}>
            <p>Total:</p>
            <p className={classes.textcustom}>Kr {props.totalAmount}</p>
        </div>
        <p>Incl. tax 10% = Kr 12,30</p>
        <button onClick={onPayHandler}>Payment</button>
    </div>
}

export default FooterCart