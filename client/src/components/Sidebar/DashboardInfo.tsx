import { HiChartPie } from "react-icons/hi";
import { MdFastfood } from "react-icons/md";
import { RiFilePaper2Fill } from "react-icons/ri";
import classes from "./DashboardInfo.module.css";
import { NavLink } from "react-router-dom";
import {GiCook} from "react-icons/gi" 
const DashboardInfo: React.FC = (props) => {
  return (
    <div className={classes.container}>
      <NavLink
        to="/manager/dashboard/main"
        className={classes.dashboardInfo}
        activeClassName={classes.active}
      >
        <HiChartPie />
        <p>Dashboard</p>
      </NavLink>
      {/* <NavLink
        to="/manager/dashboard/menu"
        className={classes.dashboardInfo}
        activeClassName={classes.active}
      >
        <MdFastfood />
        <p>Menu</p>
      </NavLink>
      <NavLink
        to="/manager/dashboard/order"
        className={classes.dashboardInfo}
        activeClassName={classes.active}
      >
        <RiFilePaper2Fill />
        <p>Order</p>
      </NavLink> */}
      <NavLink
        to="/manager/dashboard/kitchen"
        className={classes.dashboardInfo}
        activeClassName={classes.active}
      >
        <GiCook />
        <p>Kitchen</p>
      </NavLink>
    </div>
  );
};

export default DashboardInfo;
