import classes from "./NavigationItem.module.scss";
import { useSpring, animated, config } from "react-spring";

export const SidebarItems = ({
  title,
  icon,
  mouseEnter,
  mouseLeave,
  mouseOver,
  openProduct,
}) => {
  const animation = useSpring({
    opacity: openProduct ? 1 : 0,
    display: openProduct ? "inline" : "none",
    config: config.gentle,
  });

  return (
    <div
      className={classes.sidebar__item}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onMouseOver={mouseOver}
      style={{ width: openProduct && "13rem" }}
    >
      <img
        src={icon}
        alt={title}
        style={{ marginRight: openProduct && "1rem" }}
      />
      <animated.p
        style={animation}
        className="text-category text-sm font-semibold leading-5"
      >
        {title}
      </animated.p>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={classes.backdrop}
      ></div>
    </div>
  );
};
