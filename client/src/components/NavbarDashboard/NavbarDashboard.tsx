import classes from "./Navbar.module.css";
import Search from "./Search";
import UserInfo from "./UserInfo";
const NavbarDashboard: React.FC= (props) => {
  return (
    <div className={classes.navbar}>
        <Search />
        <UserInfo />
    </div>
  );
};
export default NavbarDashboard;
