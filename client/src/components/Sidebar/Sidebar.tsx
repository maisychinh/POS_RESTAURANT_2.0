import UserInfo from "./UserInfo";
import DashboardInfo from "./DashboardInfo";
import classes from "./Sidebar.module.css";
const Sidebar:React.FC = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <span>POS RESTAURANT</span>
      </div>
      <UserInfo />
      <DashboardInfo />
    </div>
  );
};

export default Sidebar;
