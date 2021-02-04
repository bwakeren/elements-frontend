import classes from "./Content.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { deleteContent } from "../../store/actions";

export const Content = ({ clicked }) => {
  const contents = useSelector((state) => state.content.contents);
  const dispatch = useDispatch();

  const handlerRemoveContent = (e, index) => {
    dispatch(deleteContent(index));
  };

  return (
    <div className={classes.content}>
      {contents.length !== 0 ? (
        <div className="w-full flex flex-col">
          {contents.map((content, index) => (
            <div
              key={index}
              className={[
                classes.content_fill,
                index === 0 ? classes.first : "",
                index === contents.length - 1 ? classes.last : "",
              ].join(" ")}
            >
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                className="w-full"
              ></div>
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.content_delete}
                onClick={(e) => handlerRemoveContent(e, index)}
              >
                <circle cx="27.5" cy="27.5" r="27.5" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 22C15 21.4477 15.4477 21 16 21H40C40.5523 21 41 21.4477 41 22C41 22.5523 40.5523 23 40 23H38.3333V37C38.3333 39.2091 36.5425 41 34.3333 41H21.6667C19.4575 41 17.6667 39.2091 17.6667 37V23H16C15.4477 23 15 22.5523 15 22ZM19.6667 23V37C19.6667 38.1046 20.5621 39 21.6667 39H34.3333C35.4379 39 36.3333 38.1046 36.3333 37V23H19.6667Z"
                  fill="#FF3F6D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26 15C24.8954 15 24 15.8954 24 17V18C24 18.5523 23.5523 19 23 19C22.4477 19 22 18.5523 22 18V17C22 14.7909 23.7909 13 26 13H30C32.2091 13 34 14.7909 34 17V18C34 18.5523 33.5523 19 33 19C32.4477 19 32 18.5523 32 18V17C32 15.8954 31.1046 15 30 15H26Z"
                  fill="#FF3F6D"
                />
              </svg>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.svg__blank}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 4C0 1.79086 1.79086 0 4 0H8C10.2091 0 12 1.79086 12 4V16C12 18.2091 10.2091 20 8 20H4C1.79086 20 0 18.2091 0 16V4ZM4 2C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H8C9.10457 18 10 17.1046 10 16V4C10 2.89543 9.10457 2 8 2H4Z"
              fill="#6B7280"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 6C16 3.79086 17.7909 2 20 2H26C28.2091 2 30 3.79086 30 6V12C30 14.2091 28.2091 16 26 16H20C17.7909 16 16 14.2091 16 12V6ZM20 4C18.8954 4 18 4.89543 18 6V12C18 13.1046 18.8954 14 20 14H26C27.1046 14 28 13.1046 28 12V6C28 4.89543 27.1046 4 26 4H20Z"
              fill="#6B7280"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 23C16 21.3431 17.3431 20 19 20H29C30.6569 20 32 21.3431 32 23V25C32 26.6569 30.6569 28 29 28H19C17.3431 28 16 26.6569 16 25V23ZM19 22C18.4477 22 18 22.4477 18 23V25C18 25.5523 18.4477 26 19 26H29C29.5523 26 30 25.5523 30 25V23C30 22.4477 29.5523 22 29 22H19Z"
              fill="#6B7280"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 27C4 25.3431 5.34315 24 7 24H9C10.6569 24 12 25.3431 12 27V29C12 30.6569 10.6569 32 9 32H7C5.34315 32 4 30.6569 4 29V27ZM7 26C6.44772 26 6 26.4477 6 27V29C6 29.5523 6.44772 30 7 30H9C9.55228 30 10 29.5523 10 29V27C10 26.4477 9.55228 26 9 26H7Z"
              fill="#6B7280"
            />
          </svg>
          <p className="text-category text-sm font-semibold leading-5 text-center">
            Adding
            <br />
            Section Here
          </p>
        </div>
      )}
    </div>
  );
};
