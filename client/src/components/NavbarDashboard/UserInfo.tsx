import React from "react";
import { FaRegBell } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
const UserInfo = () => {
  return (
    <div className="flex w-40 justify-between items-center">
      <FaRegBell className="text-2xl" />
      <div>
        <img
          className="w-8 h-8 object-fill rounded-full"
          src="https://static.vecteezy.com/system/resources/previews/002/275/816/large_2x/cartoon-avatar-of-smiling-beard-man-profile-icon-vector.jpg"
          alt="avatar"
        />
      </div>
      <MdLogout className="text-2xl" />
    </div>
  );
};

export default UserInfo;
