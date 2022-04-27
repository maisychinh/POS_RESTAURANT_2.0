import classes from "./UserInfo.module.css";
const UserInfo: React.FC = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <img
          className="w-8 h-8 object-fill rounded-full"
          src="https://static.vecteezy.com/system/resources/previews/002/275/816/large_2x/cartoon-avatar-of-smiling-beard-man-profile-icon-vector.jpg"
          alt="avatar"
        />
      </div>
      <div className={classes.username}>Chef</div>
    </div>
  );
};

export default UserInfo;
