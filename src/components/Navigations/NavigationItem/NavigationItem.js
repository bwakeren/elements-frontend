import classes from "./NavigationItem.module.scss";
import { useSpring, animated, config } from "react-spring";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SidebarItems = ({
  title,
  icon,
  mouseEnter,
  mouseLeave,
  mouseOver,
  openProduct,
  loading,
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
      {loading ? (
        <SkeletonTheme color="lightGray">
          <Skeleton
            reactangle={true}
            height={24}
            width={24}
            style={{ marginRight: openProduct && "1rem" }}
          />
        </SkeletonTheme>
      ) : (
        <img
          src={icon}
          alt={title}
          style={{ marginRight: openProduct && "1rem" }}
        />
      )}
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
