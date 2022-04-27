import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {FiLogOut} from "react-icons/fi"
import { useAppSelector,useAppDispatch } from "../../store/hooks";
import { authActions } from "../../store/auth-context";
const Navbar: React.FC = (props) => {
  const dispatch = useAppDispatch()
  const logOutHandler = ()=>{
    dispatch(authActions.logout())
  }
  const isLoggedInState = useAppSelector(state => state.auth.isLoggedIn)
  const history = useHistory()
  const [navbarIsShowed, setNavbarIsShowed] = useState(false);
  const showNavbar = () => {
    setNavbarIsShowed(true);
  };
  const hideNavbar = () => {
      setNavbarIsShowed(false);
  }
  const activeClass = classes.navicon + " " + classes.active;
  return (
    <nav className={classes.navbar}>
      <NavLink className={classes.navlink} to="/">
        POS RESTAURANT
      </NavLink>
      <div className={isLoggedInState ? "flex justify-end" : classes.outline}>
        <div
          className={navbarIsShowed ? `${activeClass}` : `${classes.navicon}`}
        >
          <FaTimes className={classes.removeButton} onClick={hideNavbar}/>
          {isLoggedInState && <div className="flex items-center w-32 justify-between mr-20">
            <img className={classes.image} src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="userimage"/>
            <FiLogOut onClick={logOutHandler} className="text-4xl cursor-pointer"/>
          </div> }
          {!isLoggedInState && <div className={classes.button} onClick={() =>{history.push("/login")}}>Login</div>}
          {!isLoggedInState && <div className={classes.button} onClick={() =>{history.push("/signup")}}>Sign Up</div>}
          <div className={classes.aboutUs}>About us</div>
        </div>
        <VscThreeBars className={classes.bar} onClick={showNavbar} />
      </div>
    </nav>
  );
};

export default Navbar;
