import {GoTriangleLeft,GoTriangleRight} from 'react-icons/go'
import { CategoriesActions } from '../../store/categories-context'
import { useAppDispatch } from "../../store/hooks"
import classes from './CategoriesWrapper.module.css'
const CategoriesWrapper:React.FC = (props)=>{
    const dispatch = useAppDispatch()
    const onIncrementHandler = ()=>{
        dispatch(CategoriesActions.inscreaseStart())
        dispatch(CategoriesActions.loadCategories())
    }
    const onDecrementHandler = ()=>{
        dispatch(CategoriesActions.decreaseStart())
        dispatch(CategoriesActions.loadCategories())
    }
    return <div className={classes.wrapper}>
        <div className={classes.backward}>
            <GoTriangleLeft onClick={onDecrementHandler}></GoTriangleLeft>
        </div>
        {props.children}
        <div className={classes.forward}>
            <GoTriangleRight onClick={onIncrementHandler}></GoTriangleRight>
        </div>
    </div>
}
export default CategoriesWrapper