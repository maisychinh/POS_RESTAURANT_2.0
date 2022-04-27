import classes from './LayoutStatus.module.css'
import {TiArrowBack} from 'react-icons/ti'
import {GoPrimitiveDot} from'react-icons/go'
import { useHistory } from 'react-router-dom'
const LayoutPayment:React.FC = (props) => {
    const history = useHistory()
    const comeBackHandler = ()=>{
        history.push('./')
    }
    return <div>
        <header className={classes.headerPayment}>
            <div className={classes.first}>
                <div onClick={comeBackHandler}>
                    <TiArrowBack></TiArrowBack>
                </div>
                <div>Back</div>
            </div>
            <div>STATE OF YOUR ORDER</div>
            <div className={classes.third}>
                <div>Home</div>
                <div>
                    <GoPrimitiveDot></GoPrimitiveDot>
                </div>
                <div>Status</div>
            </div>
        </header>
        <main className={classes.mainPayment}>
            {props.children}
        </main>
    </div>
}

export default LayoutPayment