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
import { NavLink, useHistory } from "react-router-dom";

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
      <Link to="/goodluck/tailwinds" target="_blank" onClick={clicked}>
        <img src={icons.logoTailwinds} alt="bootstrap" />
        <p>Export to Tailwinds</p>
      </Link>
      <Link to="/goodluck/bootstrap" target="_blank" onClick={clickedBootstrap}>
        <img src={icons.logoBootstrap} alt="bootstrap" />
        <p>Export to Bootstrap</p>
      </Link>
    </animated.div>
  );

  const history = useHistory();

  return (
    <nav className={classes.nav}>
      <img
        onClick={() => history.push("/")}
        style={{ cursor: "pointer" }}
        src={images.Logo}
        alt="Elements"
      />
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
          categories
            .sort((a, b) => a.position - b.position)
            .map((data) => (
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
                active={data.id === category}
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
            setTimeout(() => {
              setCategory(0);
            }, 500);
          }}
        />
      )}
    </>
  );
};

export const NavigationHome = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const animation = useSpring({
    opacity: openNavigation ? 1 : 0,
    transform: openNavigation ? "translateX(0)" : "translateX(200%)",
  });

  const ModalNavigation = (
    <animated.ul style={animation} className={classes.modalnav}>
      <li>
        <NavLink to="/" activeClassName={classes.active} exact>
          Home
        </NavLink>
      </li>
      <li>
        <a href="#why-elements">Why Elements?</a>
      </li>
      <li>
        <a href="#knowledge-base">Knowledge Base</a>
      </li>
      <li>
        <a href="/pricing">Price</a>
      </li>
      <li>
        <a href="/heroes">Our Team</a>
      </li>
      <li
        className={classes.close}
        onClick={() => setOpenNavigation(!openNavigation)}
      >
        <svg
          className="w-6 h-6 block lg:hidden cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
            color="#00262b"
          ></path>
        </svg>
      </li>
    </animated.ul>
  );

  return (
    <>
      <nav>
        <NavLink to="/" className="mr-10">
          <img src={icons.logoWhite} alt="Logo Elements" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active} exact>
              Home
            </NavLink>
          </li>
          <li>
            <a href="#why-elements">Why Elements?</a>
          </li>
          <li>
            <a href="#knowledge-base">Knowledge Base</a>
          </li>
          <li>
            <a href="/pricing">Price</a>
          </li>
          <li>
            <a href="/heroes">Our Team</a>
          </li>
        </ul>
        {openNavigation ? (
          <svg
            onClick={() => setOpenNavigation(!openNavigation)}
            className="w-6 h-6 block lg:hidden cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
              color="#00262b"
            ></path>
          </svg>
        ) : (
          <svg
            onClick={() => setOpenNavigation(!openNavigation)}
            className="w-6 h-6 block lg:hidden cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
              color="#fff"
            ></path>
          </svg>
        )}
      </nav>
      {ModalNavigation}
    </>
  );
};
