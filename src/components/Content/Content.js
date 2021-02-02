import classes from "./Content.module.scss";

export const Content = () => {
  return (
    <div className={classes.content}>
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
    </div>
  );
};
