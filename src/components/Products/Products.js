import classes from "./Products.module.scss";
import { ProductItem } from "./ProductItem/ProductItem";
import { images } from "../../assets";
import { useSpring, animated, config } from "react-spring";

const datas = [
  {
    title: "header 1",
    image: images.BG,
  },
  {
    title: "header 2",
    image: images.BG,
  },
  {
    title: "header 3",
    image: images.BG,
  },
  {
    title: "header 4",
    image: images.BG,
  },
  {
    title: "header 5",
    image: images.BG,
  },
];

export const Products = ({ show, mouseEnter, mouseLeave }) => {
  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateX(0)" : "translateX(-200%)",
    zIndex: 5,
    config: config.gentle,
  });

  return (
    <>
      <animated.div
        style={props}
        className={classes.products}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        {datas.map((data) => (
          <ProductItem key={data.title} img={data.image} title={data.title} />
        ))}
      </animated.div>
    </>
  );
};
