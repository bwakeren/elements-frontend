import { useState, useEffect } from "react";
import classes from "./Navigations.module.scss";
import { images, icons } from "../../assets";
import { SidebarItems } from "./NavigationItem/NavigationItem";
import { Products } from "../Products/Products";
import { Link } from "react-router-dom";
import { fetchCategory } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated, config } from "react-spring";
import { STORAGE } from "../../shared/utility";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const Navigation = ({
  clicked,
  disabled,
  clickedBootstrap,
  button,
  navigation,
}) => {
  const [dropwDown, setDropDown] = useState(false);

  const animation = useSpring({
    opacity: dropwDown ? 1 : 0,
    display: dropwDown ? "flex" : "none",
    transform: dropwDown ? "translateY(0)" : "translateY(-30px)",
    config: config.molasses,
  });

  const dropdwon = (
    <animated.div style={animation} className={classes.dropdown}>
      <Link to="/goodluck" target="_blank" onClick={clicked}>
        <img src={icons.logoTailwinds} alt="bootstrap" />
        <p>Export to Tailwinds</p>
      </Link>
      {/* <Link to="/goodluck" target="_blank" onClick={clickedBootstrap}>
        <img src={icons.logoBootstrap} alt="bootstrap" />
        <p>Export to Bootstrap</p>
      </Link> */}
    </animated.div>
  );

  return (
    <nav className={classes.nav}>
      <img src={images.Logo} alt="Elements" />
      {disabled ? (
        button && <Link to={navigation}>{button}</Link>
      ) : (
        <div>
          <button
            onClick={() => {
              setDropDown(!dropwDown);
            }}
          >
            {button}
          </button>
          {dropdwon}
        </div>
      )}
    </nav>
  );
};

// {
//   /* <Link
//           href={`data:html/text;charset=utf-8,${encodeURIComponent(
//             html.join(" ")
//           )}`}
//           to="/goodluck"
//           target="_blank"
//           onClick={clicked}
//         >
//           {button}
//         </Link> */
// }

export const NavSidebar = () => {
  const [openProduct, setOpenProduct] = useState(false);
  const [category, setCategory] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const categories = useSelector((state) => state.category.categories);
  const loading = useSelector((state) => state.category.loading);

  return (
    <>
      <div className={classes.sidebar}>
        {loading ? (
          <SkeletonTheme color="lightGray">
            <div className="flex flex-col">
              <Skeleton
                reactangle={true}
                height={24}
                width={24}
                style={{ margin: "1.25rem" }}
              />
              <Skeleton
                reactangle={true}
                height={24}
                width={24}
                style={{ margin: "1.25rem" }}
              />
              <Skeleton
                reactangle={true}
                height={24}
                width={24}
                style={{ margin: "1.25rem" }}
              />
              <Skeleton
                reactangle={true}
                height={24}
                width={24}
                style={{ margin: "1.25rem" }}
              />
            </div>
          </SkeletonTheme>
        ) : (
          categories.map((data) => (
            <SidebarItems
              key={data.id}
              icon={STORAGE.toString() + data.icon}
              title={data.categories_name}
              loading={loading}
              click={() => {
                if (openProduct) {
                  setOpenProduct(false);
                  setTimeout(() => {
                    setOpenProduct(true);
                    setCategory(data.id);
                  }, 500);
                } else {
                  setTimeout(() => {
                    setOpenProduct(!openProduct);
                    setCategory(data.id);
                  }, 500);
                }
              }}
              openProduct={openProduct}
            />
          ))
        )}
      </div>
      <Products category={category.toString()} show={openProduct} />
      {openProduct && (
        <div
          className={classes.backdrop}
          onClick={() => {
            setOpenProduct(false);
          }}
        />
      )}
    </>
  );
};
