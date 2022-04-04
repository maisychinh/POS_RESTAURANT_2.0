import classes from './Layout.module.css'
import MainNavigation from "./MainNavigation"
const Layout: React.FC = (props)=>{
    return <div className={classes.mainpage}>
        <MainNavigation></MainNavigation>
        {props.children}
    </div>
}

export default Layout