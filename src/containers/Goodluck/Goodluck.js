import { Head } from "../../components";
import { icons } from "../../assets";
import classes from "./Goodluck.module.scss";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Head title="Goodluck | Elements" />
      <div className={classes.success}>
        <img src={icons.Success} alt="Download" className="w-52 h-52" />
        <h1>Success Download!</h1>
        <p>Gunakanlah design asset sebijaksana mungkin and Goodluck!</p>
        <div>
          <Link to="#">Our Team</Link>
          <Link to="/">New Design</Link>
        </div>
      </div>
    </>
  );
};

export default Main;
