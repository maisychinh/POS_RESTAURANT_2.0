import { RiDeleteBack2Fill } from "react-icons/ri";
import { showHideActions } from "../../store/showhide-context";
import { useAppDispatch } from "../../store/hooks";
import classes from "./HeaderModal.module.css";
const HeaderModal: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const onDeleteDetailModalHandler = () => {
    dispatch(showHideActions.hideDetailHandler());
  };
  return (
    <div className={classes.headerDetails}>
      <div>Add Cart</div>
      <div>
        <RiDeleteBack2Fill
          onClick={onDeleteDetailModalHandler}
        ></RiDeleteBack2Fill>
      </div>
    </div>
  );
};

export default HeaderModal;
