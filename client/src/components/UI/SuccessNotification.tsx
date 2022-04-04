import { Fragment } from "react";
import { BsCheckCircle } from "react-icons/bs";
import {ImWarning} from 'react-icons/im'
import { useAppSelector } from "../../store/hooks";
import classes from "./SuccessNotification.module.css";
const SuccessNotification: React.FC = (props) => {
  const success = useAppSelector((state) => state.showhide.success);
  let content = <Fragment>
      <ImWarning className={classes.warning}></ImWarning>
      <div className={classes.text}>Added 0 meal.</div>
  </Fragment>
  if (success) {
    content = (
      <Fragment>
        <BsCheckCircle className={classes.success}></BsCheckCircle>
        <div className={classes.text}>Successfully Added.</div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      {content}
    </Fragment>
  );
};

export default SuccessNotification;
