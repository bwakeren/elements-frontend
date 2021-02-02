import { Navigation } from "../Navigations/Navigations";
import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Navigation />
    </header>
  );
};
