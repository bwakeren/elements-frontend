import { useState } from "react";
import { Head } from "../../components";
import { icons } from "../../assets";
import classes from "./Goodluck.module.scss";
import { useHistory } from "react-router-dom";
import Layout from "../../hoc/Layout/Layout";
import axios from "../../axios_db";

const Main = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState({
    name: {
      value: "",
    },
    text: {
      value: "",
    },
  });
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(false);

  const starSvgOutline = (
    <svg
      width="52"
      height="51"
      viewBox="0 0 52 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6793 3.44416C23.608 0.132825 28.3918 0.132833 30.3204 3.44417L36.1146 13.3922C36.2559 13.6348 36.4927 13.8068 36.7671 13.8662L48.0187 16.3027C51.764 17.1138 53.2423 21.6634 50.689 24.5209L43.0184 33.1056C42.8313 33.315 42.7409 33.5933 42.7691 33.8727L43.9288 45.3265C44.3149 49.1391 40.4447 51.9509 36.938 50.4056L26.4031 45.7633C26.1462 45.6501 25.8535 45.6501 25.5966 45.7633L15.0617 50.4056C11.555 51.9509 7.6849 49.1391 8.07092 45.3265L9.23061 33.8727C9.25889 33.5933 9.16845 33.315 8.98139 33.1056L1.31077 24.5209C-1.24251 21.6634 0.23576 17.1138 3.98102 16.3027L15.2327 13.8662C15.507 13.8068 15.7438 13.6348 15.8851 13.3922L21.6793 3.44416ZM26.864 5.45736C26.4783 4.79509 25.5215 4.7951 25.1358 5.45736L19.3416 15.4054C18.6351 16.6184 17.4512 17.4785 16.0792 17.7756L4.82758 20.2121C4.07853 20.3743 3.78288 21.2843 4.29353 21.8558L11.9642 30.4405C12.8995 31.4872 13.3517 32.879 13.2103 34.2756L12.0506 45.7295C11.9734 46.492 12.7474 47.0543 13.4487 46.7453L23.9836 42.1029C25.2682 41.5368 26.7316 41.5368 28.0161 42.1029L38.551 46.7453C39.2524 47.0543 40.0264 46.492 39.9492 45.7295L38.7895 34.2756C38.6481 32.879 39.1003 31.4872 40.0356 30.4405L47.7062 21.8558C48.2169 21.2843 47.9212 20.3743 47.1722 20.2121L35.9205 17.7756C34.5486 17.4785 33.3647 16.6184 32.6582 15.4054L26.864 5.45736Z"
        fill="#FFD850"
      />
    </svg>
  );

  const star = (
    <>
      {[...Array(5)].map((rate, i) => {
        const rateValue = i + 1;

        return (
          <div className={classes.star_group}>
            {starSvgOutline}
            <input
              className={classes.input_rating}
              type="radio"
              value={0}
              name="rating"
              id={`rating-${rateValue - 0.5}`}
              onClick={() => setRating(rateValue - 0.5)}
            />
            <label
              className={classes.rating_label_half}
              htmlFor={`rating-${rateValue - 0.5}`}
            >
              <svg
                width="22"
                height="43"
                viewBox="0 0 22 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  rateValue - 0.5 <= rating ? classes.active : classes.nonactive
                }
              >
                <path
                  d="M11.2175 42.7584L20.3564 38.6697C21.3553 38.2228 22 37.2191 22 36.1109V0.933677C22 -0.0180712 20.7604 -0.357865 20.2886 0.464552L14.3005 10.9024C13.9113 11.5808 13.2592 12.0619 12.5034 12.228L2.17357 14.4991C0.110501 14.9526 -0.703797 17.4971 0.702665 19.0952L7.7449 27.0969C8.26011 27.6824 8.50921 28.4607 8.43132 29.2418L7.36662 39.9179C7.15399 42.0501 9.28584 43.6226 11.2175 42.7584Z"
                  fill="none"
                />
              </svg>
            </label>
            <input
              className={classes.input_rating}
              type="radio"
              value={0}
              name="rating"
              id={`rating-${rateValue}`}
              onClick={() => setRating(rateValue)}
            />
            <label
              className={classes.rating_label}
              htmlFor={`rating-${rateValue}`}
            >
              <svg
                width="44"
                height="42"
                viewBox="0 0 44 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  rateValue <= rating ? classes.active : classes.nonactive
                }
              >
                <path
                  d="M19.62 1.36426C20.6824 -0.454756 23.3176 -0.454754 24.38 1.36427L29.6995 10.4722C30.0887 11.1385 30.7408 11.611 31.4966 11.7742L41.8264 14.005C43.8895 14.4505 44.7038 16.9497 43.2973 18.5195L36.2551 26.3792C35.7399 26.9543 35.4908 27.7188 35.5687 28.486L36.6334 38.9726C36.846 41.067 34.7142 42.6116 32.7825 41.7627L23.1106 37.5124C22.403 37.2014 21.597 37.2014 20.8894 37.5124L11.2175 41.7627C9.28584 42.6116 7.15399 41.0669 7.36662 38.9726L8.43132 28.486C8.50921 27.7188 8.26011 26.9543 7.7449 26.3792L0.702665 18.5195C-0.703798 16.9497 0.110501 14.4505 2.17357 14.005L12.5034 11.7742C13.2592 11.611 13.9113 11.1385 14.3005 10.4722L19.62 1.36426Z"
                  fill="none"
                />
              </svg>
            </label>
          </div>
        );
      })}
    </>
  );

  return (
    <Layout>
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <div className={classes.success}>
        <img src={icons.Success} alt="Download" className="w-52 h-52" />
        <h1>Success Download!</h1>
        <p className={classes.description}>
          Gunakanlah design asset sebijaksana mungkin and Goodluck! Jangan lupa
          beri kami nilai untuk Elements
        </p>
        <div className={classes.rating}>
          <input type="radio" id="none" onClick={() => setRating(0)} />
          <label htmlFor="none">&nbsp;</label>
          {star}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = {
              name: feedback.name.value,
              message: feedback.text.value,
              rate: rating,
              status: 1,
            };
            axios
              .post("/api/feedback/store", data)
              .then((response) => {
                setErrorMessage(false);
                history.push("/create");
              })
              .catch((e) => {
                setErrorMessage(true);
              });
          }}
        >
          <input
            type="text"
            value={feedback.name.value}
            placeholder="Nama"
            onChange={(e) => {
              setFeedback({
                ...feedback,
                name: {
                  value: e.target.value,
                },
              });
            }}
          />
          <textarea
            value={feedback.text.value}
            placeholder="Beri feedback untuk kami"
            onChange={(e) => {
              setFeedback({
                ...feedback,
                text: {
                  value: e.target.value,
                },
              });
            }}
          />
          {errorMessage && (
            <p className="mt-5 text-red-500">
              Yuk, hubungkan ke internet dulu!
            </p>
          )}
          <button type="submit" disabled={rating === 0 ? true : false}>
            Kirim Feedback
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Main;
