import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authLogout } from "../../../store/actions";
import classes from "./Profile.module.scss";

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
      <img
        src={user.avatar}
        alt={user.name}
        onClick={() => setDropdown(!dropdown)}
      />
      {dropdown && (
        <ul className={classes.dropdown}>
          <li>
            Download(<span>{totalDownload ? totalDownload : 0}</span>)
          </li>
          <li>Subscribes</li>
          <li onClick={() => history.push("/setting")}>Settings</li>
          <li onClick={logoutHandler}>Logout</li>
        </ul>
      )}
    </li>
  );
};
