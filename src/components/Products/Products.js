import { useState, useEffect } from "react";
import classes from "./Products.module.scss";
import { ProductItem } from "./ProductItem/ProductItem";
import { images } from "../../assets";
import { useSpring, animated, config } from "react-spring";

const datas = [
  {
    category: "header",
    content: [{ title: "Header 1", image: images.Header1 }],
  },
  {
    category: "content",
    content: [{ title: "Content 1", image: images.BG }],
  },
  {
    category: "footer",
    content: [{ title: "Footer 1", image: images.BG2 }],
  },
];

export const Products = ({
  show,
  mouseEnter,
  mouseLeave,
  category,
  clicked,
}) => {
  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateX(0)" : "translateX(-200%)",
    zIndex: 5,
    config: config.gentle,
  });

  const [contents, setContents] = useState([]);

  useEffect(() => {
    setContents(datas.filter((data) => data.category === category));
  }, [category]);

  return (
    <>
      <animated.div
        style={props}
        className={classes.products}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        {contents.length !== 0 &&
          contents[0].content.map((data) => (
            <ProductItem
              key={data.title}
              img={data.image}
              title={data.title}
              clicked={clicked}
            />
          ))}
      </animated.div>
    </>
  );
};
