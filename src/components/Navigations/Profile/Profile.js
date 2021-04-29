import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authLogout } from "../../../store/actions";
import classes from "./Profile.module.scss";

const crown = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -right-2 -bottom-2"
  >
    <path
      d="M5.25 18C4.83579 18 4.5 18.3358 4.5 18.75V19.5C4.5 19.9142 4.83579 20.25 5.25 20.25H18.75C19.1642 20.25 19.5 19.9142 19.5 19.5V18.75C19.5 18.3358 19.1642 18 18.75 18H5.25Z"
      fill="#F1A81B"
    />
    <path
      d="M12.6573 3.38863C12.5255 3.14893 12.2736 3 12.0001 3C11.7265 3 11.4747 3.14893 11.3429 3.38863L4.84768 15.2011C4.71992 15.4335 4.72435 15.716 4.85931 15.9443C4.99428 16.1725 5.23973 16.3125 5.50488 16.3125H18.4953C18.7604 16.3125 19.0059 16.1725 19.1408 15.9443C19.2758 15.716 19.2802 15.4335 19.1525 15.2011L12.6573 3.38863Z"
      fill="#FEBA37"
    />
    <path
      d="M19.8052 4.64621C20.0481 4.4672 20.3746 4.45123 20.6339 4.60567C20.8931 4.76011 21.0346 5.05488 20.9928 5.35374L19.5265 15.8537C19.4747 16.2243 19.1578 16.5 18.7837 16.5H6.00005C5.67606 16.5 5.38869 16.292 5.28754 15.9842C5.18639 15.6764 5.29432 15.3384 5.55515 15.1462L19.8052 4.64621Z"
      fill="#F1A81B"
    />
    <path
      d="M4.18012 4.63558C3.93529 4.4642 3.61209 4.45452 3.35745 4.61095C3.10281 4.76738 2.96534 5.06006 3.00754 5.35591L4.50528 15.8559C4.558 16.2255 4.87447 16.5 5.24777 16.5H18.75C19.0774 16.5 19.3669 16.2877 19.4653 15.9755C19.5637 15.6633 19.4483 15.3233 19.1801 15.1356L4.18012 4.63558Z"
      fill="#FFCC47"
    />
  </svg>
);

export const Profile = ({ whitebg, noname, style }) => {
  const [dropdown, setDropdown] = useState(false);
  const totalDownload = useSelector((state) => state.download.download_today);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(authLogout());
    history.push("/login");
  };

  return (
    <li
      className={[classes.profile, whitebg ? classes.whitebg : ""].join(" ")}
      style={{ ...style }}
    >
      {!noname && (
        <p onClick={() => setDropdown(!dropdown)}>
          Halo, {user.name.split(" ")[0]}
        </p>
      )}
      <div
        className="relative w-10 h-10 ml-3"
        onClick={() => setDropdown(!dropdown)}
      >
        <img src={user.avatar} alt={user.name} />
        {user.isPremium && crown}
      </div>
      {dropdown && (
        <ul className={classes.dropdown}>
          <li style={{ cursor: "default" }}>
            Download(<span>{totalDownload ? totalDownload : 0}</span>)
          </li>
          <li
            onClick={() => {
              if (user && !user.isPremium) {
                history.push("/pricing/checkout");
              } else {
                history.push("/create");
              }
            }}
          >
            {user && !user.isPremium ? "Subscribes" : "Create"}
          </li>
          <li onClick={() => history.push("/setting")}>Settings</li>
          <li onClick={logoutHandler}>Logout</li>
        </ul>
      )}
    </li>
  );
};
