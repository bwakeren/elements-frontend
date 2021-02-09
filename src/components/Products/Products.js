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
    state.product.products.filter(
      (product) => product.categories_id === category
    )
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
          datas.map((data) => (
            <ProductItem
              key={data.id}
              idProd={data.id}
              img={data.thumbnails}
              title={data.title}
              html={data.code}
              clicked={clicked}
            />
          ))}
      </animated.div>
      {show && (
        <div className={classes.backdrop} onMouseEnter={mouseLeave}></div>
      )}
    </>
  );
};
