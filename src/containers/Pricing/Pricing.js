import classes from "./Pricing.module.scss";
import { Head, Footer, NavigationHome } from "../../components";
import { images } from "../../assets";
import { useHistory } from "react-router-dom";

const Pricing = () => {
  const history = useHistory();

  const checklist = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill="#57B99D" />
      <path
        d="M14 8L9.57895 12L7 9.66667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const xlist = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill="#EB7E7E" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 6.5C13.7761 6.77614 13.7761 7.22386 13.5 7.5L7.49999 13.5C7.22385 13.7762 6.77613 13.7762 6.49999 13.5C6.22385 13.2239 6.22385 12.7762 6.49999 12.5L12.5 6.5C12.7761 6.22386 13.2239 6.22386 13.5 6.5Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 6.5C6.77614 6.22386 7.22386 6.22386 7.5 6.5L13.5 12.5C13.7762 12.7762 13.7762 13.2239 13.5 13.5C13.2239 13.7762 12.7762 13.7762 12.5 13.5L6.5 7.5C6.22386 7.22386 6.22386 6.77614 6.5 6.5Z"
        fill="white"
      />
    </svg>
  );

  return (
    <>
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <main
        className={classes.pricing_container}
        style={{ backgroundImage: `url(${images.backgroundPricing})` }}
      >
        <NavigationHome />
        <h1>Cheap and Simple</h1>
        <p>
          Choose one of our friendly prices that are suitable so that your
          business grows bigger
        </p>
        <div className={classes.pricing_cat}>
          <div className={classes.card}>
            <h3>Starter</h3>
            <h6>Free</h6>
            <img src={images.pricingFree} alt="Free" className="mb-8" />
            <ul>
              <li>
                {checklist} <span>Ready to Use</span>
              </li>
              <li>
                {checklist} <span>300+ Component Design</span>
              </li>
              <li>
                {xlist} <span>Illustration Design</span>
              </li>
              <li>
                {xlist} <span>Free Design Update</span>
              </li>
              <li>
                {xlist} <span>Private Group (Consultation)</span>
              </li>
            </ul>
            <button
              onClick={() => history.push("/create")}
              className={classes.btn_free}
            >
              Get Started
            </button>
          </div>
          <div className={classes.card}>
            <h3>Premium</h3>
            <h6>
              IDR 150.000<span>/bulan</span>
            </h6>
            <img src={images.pricingPremium} alt="Free" className="mb-8" />
            <ul>
              <li>
                {checklist} <span>Ready to Use</span>
              </li>
              <li>
                {checklist} <span>300+ Component Design</span>
              </li>
              <li>
                {checklist} <span>Illustration Design</span>
              </li>
              <li>
                {checklist} <span>Free Design Update</span>
              </li>
              <li>
                {checklist} <span>Private Group (Consultation)</span>
              </li>
            </ul>
            <button
              onClick={() => history.push("/create")}
              className={classes.btn_premium}
            >
              Subscribe
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
