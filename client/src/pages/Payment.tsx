import { AiOutlineCreditCard, AiOutlineQuestionCircle } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import classes from './Styles/Payment.module.css'
const Payment: React.FC = (props) => {
  const history =useHistory()
  const onPayHandler = ()=>{
    history.push("/status")
  }
  return (
    <div className={classes.payment}>
      <div className={classes.top}>
        <div className={classes.text}>
          <div>Business Name</div>
          <div>1 item(expand)</div>
        </div>
        <div className={classes.text}>
          <div>25.00 NOK</div>
          <div>inc.VAT</div>
        </div>
      </div>

      <div className={classes.credit}>
        <div className={classes.text4}>
          Checkout is running in test mode. Click here for test data.
        </div>
        <div className={classes.text5}>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label htmlFor="html">Credit Card</label>
          </div>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4atkfBQrj-CsZ2HSVkoU5jCBF7qp8hmm0RaZfkqC0xGLxuMxjZOLHRVhvPQvwiZs9Kw&usqp=CAU' alt='..'></img>
            <img src='https://marketingai.vn/wp-content/uploads/2019/01/mastercard-new-logo-content-2019.jpg' alt='..'></img>
          </div>
        </div>
      </div>

      <div className={classes.cardNumber}>
        <AiOutlineCreditCard></AiOutlineCreditCard>
        <input type="text" placeholder="Card number"></input>
      </div>

      <div className={classes.inputMMYY}>
        <input type="text" placeholder="MM/YY"></input>
      </div>
      <div className={classes.inputCVV}>
        <AiOutlineQuestionCircle></AiOutlineQuestionCircle>
        <input type="text" placeholder="CVV"></input>
      </div>
      <button onClick={onPayHandler} className={classes.paybutton}>Pay NOK 25.00</button>
      <button className={classes.cancelbutton}>Cancel payment</button>
        <div className={classes.textFooter}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/1200px-Flag_of_the_United_Kingdom_%282-3%29.svg.png" alt="Flag of the United"></img>
          <div className={classes.textFooter1}>Dintero</div>
          <div className={classes.textFooter2}>Checkout</div>
          <div className={classes.textFooter3}>Term</div>
        </div>
    </div>
  );
};

export default Payment;
