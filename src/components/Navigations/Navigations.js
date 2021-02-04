import { useState } from "react";
import classes from "./Navigations.module.scss";
import { images } from "../../assets";
import { SidebarItems } from "./NavigationItem/NavigationItem";
import { Products } from "../Products/Products";

export const Navigation = ({ clicked }) => {
  return (
    <nav className={classes.nav}>
      <img src={images.Logo} alt="Elements" />
      <button onClick={clicked}>Download</button>
    </nav>
  );
};

const datas = [
  {
    title: "Header",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 3.5C5.067 3.5 3.5 5.067 3.5 7V9.5V17C3.5 18.933 5.067 20.5 7 20.5H17C18.933 20.5 20.5 18.933 20.5 17V9.5V7C20.5 5.067 18.933 3.5 17 3.5H7ZM19.5 8.5V7C19.5 5.61929 18.3807 4.5 17 4.5H7C5.61929 4.5 4.5 5.61929 4.5 7V8.5H19.5ZM4.5 9.5H19.5V17C19.5 18.3807 18.3807 19.5 17 19.5H7C5.61929 19.5 4.5 18.3807 4.5 17V9.5Z"
          fill="#808191"
        />
      </svg>
    ),
  },
  {
    title: "Content",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 7C3.5 5.067 5.067 3.5 7 3.5H17C18.933 3.5 20.5 5.067 20.5 7V8.5V9.5V17C20.5 18.933 18.933 20.5 17 20.5H14.5H7C5.067 20.5 3.5 18.933 3.5 17V9.5V7ZM15.5 19.5H17C18.3807 19.5 19.5 18.3807 19.5 17V9.5H15.5V19.5ZM14.5 9.5V19.5H7C5.61929 19.5 4.5 18.3807 4.5 17V9.5H14.5ZM14.5 8.5L19.5 8.5V7C19.5 5.61929 18.3807 4.5 17 4.5H7C5.61929 4.5 4.5 5.61929 4.5 7V8.5L14.5 8.5Z"
          fill="#808191"
        />
      </svg>
    ),
  },
  {
    title: "Footer",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 3.5C5.067 3.5 3.5 5.067 3.5 7V14.5V17C3.5 18.933 5.067 20.5 7 20.5H17C18.933 20.5 20.5 18.933 20.5 17V14.5V7C20.5 5.067 18.933 3.5 17 3.5H7ZM19.5 14.5V7C19.5 5.61929 18.3807 4.5 17 4.5H7C5.61929 4.5 4.5 5.61929 4.5 7V14.5H19.5ZM4.5 15.5V17C4.5 18.3807 5.61929 19.5 7 19.5H17C18.3807 19.5 19.5 18.3807 19.5 17V15.5H4.5Z"
          fill="#808191"
        />
      </svg>
    ),
  },
];

export const NavSidebar = () => {
  const [openProduct, setOpenProduct] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <>
      <div className={classes.sidebar}>
        {datas.map((data) => (
          <SidebarItems
            key={data.title}
            icon={data.icon}
            title={data.title}
            mouseEnter={() => {
              setTimeout(() => {
                setOpenProduct(true);
                setCategory(data.title);
              }, [100]);
            }}
            mouseLeave={() => {
              setOpenProduct(false);
            }}
          />
        ))}
      </div>
      <Products
        category={category.toLowerCase()}
        show={openProduct}
        mouseEnter={() => {
          setOpenProduct(true);
        }}
        mouseLeave={() => {
          setOpenProduct(false);
        }}
      />
    </>
  );
};
