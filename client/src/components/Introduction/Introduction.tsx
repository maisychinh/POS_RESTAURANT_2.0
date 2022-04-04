import classes from "./Introduction.module.css"
import Navbar from "./Navbar"
import HeroItems from "./HeroItems"
const Introduction:React.FC = (props) => {
    return <div className={classes.container}>
        <Navbar />
        <HeroItems />
    </div>
}

export default Introduction