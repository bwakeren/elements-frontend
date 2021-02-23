import { Head } from "../../components";
import { icons } from "../../assets";
import classes from "./Goodluck.module.scss";
import { Link } from "react-router-dom";
import Layout from "../../hoc/Layout/Layout";

const Main = () => {
  return (
    <Layout>
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <div className={classes.success}>
        <img src={icons.Success} alt="Download" className="w-52 h-52" />
        <h1>Success Download!</h1>
        <p>Gunakanlah design asset sebijaksana mungkin and Goodluck!</p>
        <div>
          <Link to="/heroes">Our Team</Link>
          <Link to="/create">New Design</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
