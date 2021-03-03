import { useEffect } from "react";
import classes from "./Products.module.scss";
import { ProductItem } from "./ProductItem/ProductItem";
import { useSpring, animated, config } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { initProduct } from "../../store/actions";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const Products = ({ show, category, clicked }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initProduct());
  }, [dispatch]);

  const datas = useSelector((state) =>
    state.product.products.filter(
      (product) => product.categories_id === category
    )
  );
  const loading = useSelector((state) => state.product.loading);

  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateX(0)" : "translateX(-200%)",
    zIndex: 100,
    config: config.gentle,
  });

  return (
    <>
      <animated.div style={props} className={classes.products}>
        {loading ? (
          <SkeletonTheme color="lightGray">
            <Skeleton
              reactangle={true}
              height={150}
              width={318}
              count={5}
              style={{ marginBottom: "1.25rem", borderRadius: "1rem" }}
            />
          </SkeletonTheme>
        ) : (
          datas.map((data) => (
            <ProductItem
              key={data.id}
              idProd={data.id}
              img={data.thumbnails}
              title={data.title}
              html={data.code}
              htmlBootstrap={data.code_bootstrap}
              clicked={clicked}
              premium={data.type === "premium"}
            />
          ))
        )}
      </animated.div>
    </>
  );
};
