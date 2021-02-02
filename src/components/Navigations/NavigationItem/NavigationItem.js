import classes from "./NavigationItem.module.scss";

export const SidebarItems = ({
  title,
  icon,
  mouseEnter,
  mouseLeave,
  mouseOver,
}) => {
  return (
    <div
      className={classes.sidebar__item}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onMouseOver={mouseOver}
    >
      {icon}
      <p className="text-category text-sm font-semibold leading-5">{title}</p>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={classes.backdrop}
      ></div>
    </div>
  );
};
