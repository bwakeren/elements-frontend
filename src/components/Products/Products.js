import { useEffect } from "react";
import classes from "./Products.module.scss";
import { ProductItem } from "./ProductItem/ProductItem";
import { useSpring, animated, config } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { initProduct } from "../../store/actions";

export const Products = ({
  show,
  mouseEnter,
  mouseLeave,
  category,
  clicked,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initProduct());
  }, [dispatch]);

  const datas = useSelector((state) =>
    state.product.products.filter((product) => product.category === category)
  );

  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateX(0)" : "translateX(-200%)",
    zIndex: 100,
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
        {datas.length !== 0 &&
          datas[0].content.map((data) => (
            <ProductItem
              key={data.title}
              img={data.image}
              title={data.title}
              html={data.html}
              clicked={clicked}
            />
          ))}
      </animated.div>
    </>
  );
};
