import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
const Navbar: React.FC = (props) => {
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
      <div className={classes.outline}>
        <div
          className={navbarIsShowed ? `${activeClass}` : `${classes.navicon}`}
        >
          <FaTimes className={classes.removeButton} onClick={hideNavbar}/>
          <div className={classes.button}>Login</div>
          <div className={classes.button}>Sign Up</div>
          <div className={classes.aboutUs}>About us</div>
        </div>
        <VscThreeBars className={classes.bar} onClick={showNavbar} />
      </div>
    </nav>
  );
};

export default Navbar;
