import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { useAppDispatch } from "../../store/hooks";
import { showHideActions } from "../../store/showhide-context";
import { useAppSelector } from "../../store/hooks";
import SuccessNotification from "./SuccessNotification";
const Backdrop: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const hideDetail = () => {
    dispatch(showHideActions.hideDetailHandler());
  };
  return <div className={classes.backdrop} onClick={hideDetail}></div>;
};
const ModalOverlay: React.FC = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const NotificationModal:React.FC = (props) => {
  return <div className={classes.notification}>
    <SuccessNotification></SuccessNotification>
  </div>
}
const portalElement = document.getElementById("overlays-detail") as HTMLElement;
const portalElementCart = document.getElementById(
  "overlays-cart"
) as HTMLElement;
const portalElementNotification = document.getElementById(
  "notification"
) as HTMLElement;
const Modal: React.FC = (props) => {
  const isShowCart = useAppSelector((state) => state.showhide.showCart);
  const isShowDetail = useAppSelector((state) => state.showhide.showDetail);
  const isShowForm  = useAppSelector(state=>state.showhide.showForm)
  const isShowNotification = useAppSelector(
    (state) => state.showhide.showNotification
  );
  
  return (
    <Fragment>
      {(isShowDetail || isShowForm)&&
        ReactDOM.createPortal(<Backdrop></Backdrop>, portalElement)}
      {(isShowDetail || isShowForm)&&
        ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      {isShowCart &&
        ReactDOM.createPortal(<Backdrop></Backdrop>, portalElementCart)}
      {isShowCart &&
        ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElementCart
        )}
      {isShowNotification &&
        ReactDOM.createPortal(<Backdrop></Backdrop>, portalElementNotification)}
      {isShowNotification &&
        ReactDOM.createPortal(
          <NotificationModal></NotificationModal>,
          portalElementNotification
        )}
    </Fragment>
  );
};

export default Modal;
