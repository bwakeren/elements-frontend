import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import classes from "./ProductItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addContent } from "../../../store/actions";

export const ProductItem = ({
  img,
  title,
  html,
  idProd,
  premium,
  htmlBootstrap,
}) => {
  const [action, setAction] = useState(false);
  const dispatch = useDispatch();

  const contents = useSelector((state) =>
    state.content.contents.filter((content) => content.title === title)
  );

  const animation = useSpring({
    opacity: action ? 1 : 0,
    config: config.molasses,
  });

  const addingContentHandler = () => {
    const data = {
      idProd,
      title,
      html,
      htmlBootstrap,
      img,
    };

    dispatch(addContent(data));
  };

  const plus = (
    <animated.a
      href={`#element-${idProd}`}
      style={animation}
      onMouseEnter={() => setAction(true)}
      onMouseLeave={() => setAction(false)}
      onClick={addingContentHandler}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="18" fill="#FF5525" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 11.25C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12V18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75H12C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18C11.25 17.8011 11.329 17.6103 11.4697 17.4697C11.6103 17.329 11.8011 17.25 12 17.25H17.25V12C17.25 11.8011 17.329 11.6103 17.4697 11.4697C17.6103 11.329 17.8011 11.25 18 11.25Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.25 18C17.25 17.8011 17.329 17.6103 17.4697 17.4697C17.6103 17.329 17.8011 17.25 18 17.25H24C24.1989 17.25 24.3897 17.329 24.5303 17.4697C24.671 17.6103 24.75 17.8011 24.75 18C24.75 18.1989 24.671 18.3897 24.5303 18.5303C24.3897 18.671 24.1989 18.75 24 18.75H18.75V24C18.75 24.1989 18.671 24.3897 18.5303 24.5303C18.3897 24.671 18.1989 24.75 18 24.75C17.8011 24.75 17.6103 24.671 17.4697 24.5303C17.329 24.3897 17.25 24.1989 17.25 24V18Z"
          fill="white"
        />
      </svg>
    </animated.a>
  );

  const checklist = (
    <animated.a
      href={`#element-${idProd}`}
      style={animation}
      onMouseEnter={() => setAction(true)}
      onMouseLeave={() => setAction(false)}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="18" fill="#19D943" />
        <path
          d="M24.7434 14.424C24.9077 14.2676 25 14.0554 25 13.8342C25 13.6129 24.9077 13.4008 24.7434 13.2443C24.5792 13.0879 24.3564 13 24.124 13C23.8917 13 23.6689 13.0879 23.5046 13.2443L15.3754 20.9874L12.4954 18.2431C12.3311 18.0866 12.1083 17.9987 11.876 17.9987C11.6436 17.9987 11.4208 18.0866 11.2566 18.2431C11.0923 18.3995 11 18.6117 11 18.8329C11 19.0541 11.0923 19.2663 11.2566 19.4228L14.756 22.7552C14.8373 22.8328 14.9338 22.8944 15.0401 22.9364C15.1464 22.9784 15.2603 23 15.3754 23C15.4905 23 15.6044 22.9784 15.7107 22.9364C15.817 22.8944 15.9136 22.8328 15.9948 22.7552L24.7434 14.424Z"
          fill="white"
        />
      </svg>
    </animated.a>
  );

  const block = (
    <animated.a
      href={`#element`}
      style={(animation, { cursor: "not-allowed" })}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="18" fill="#FF3F6D" />
        <path
          d="M22.3333 17.25H14.1667C13.5223 17.25 13 17.7723 13 18.4167V22.5C13 23.1443 13.5223 23.6667 14.1667 23.6667H22.3333C22.9777 23.6667 23.5 23.1443 23.5 22.5V18.4167C23.5 17.7723 22.9777 17.25 22.3333 17.25Z"
          stroke="#FFF8F8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3335 17.25V14.9167C15.3335 14.1431 15.6408 13.4013 16.1878 12.8543C16.7347 12.3073 17.4766 12 18.2502 12C19.0237 12 19.7656 12.3073 20.3126 12.8543C20.8595 13.4013 21.1668 14.1431 21.1668 14.9167V17.25"
          stroke="#FFF8F8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </animated.a>
  );

  return (
    <div className={classes.product__item}>
      {img && (
        <img
          src={`https://api.elements.buildwithangga.com/storage/${img}`}
          alt={title}
          onMouseEnter={() => setAction(true)}
          onMouseLeave={() => setAction(false)}
        />
      )}
      {premium
        ? block
        : contents.length !== 0
        ? contents[0].title !== title
          ? plus
          : checklist
        : plus}
    </div>
  );
};
