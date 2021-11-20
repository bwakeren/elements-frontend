import { useEffect, useState } from "react";
import classes from "./Pricing.module.scss";
import { Head, Footer, NavigationHome } from "../../components";
import { images } from "../../assets";
import { useHistory } from "react-router-dom";
import { numberThausand } from "../../shared/utility";
import { useSelector } from "react-redux";
import axios from "../../axios_db";

const Pricing = () => {
  const [packagePrice, setPackagePrice] = useState(null);

  useEffect(() => {
    axios
      .get("/api/package/show")
      .then((response) => {
        setPackagePrice(response.data.data[0]);
      })
      .catch((error) => error);
  }, []);

  const isAuthentication = useSelector(
    (state) => state.authentication.token !== null
  );

  const user = useSelector((state) => state.authentication.user);

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

  return (
    <>
      <Head title="Cara Zaman Now Design Sebuah Website — GetShayna by BuildWith Angga" />
      <main
        className={classes.pricing_container}
        style={{ backgroundImage: `url(${images.backgroundPricing})` }}
      >
        <NavigationHome />
        <h1>Simple Pricing for Everyone</h1>
        <p>
          Upgrade ke akun Premium dan unlock semua benefit yang telah kami
          sediakan
        </p>
        <div className={classes.pricing_cat}>
          <div className={classes.card}>
            <h3>Starter</h3>
            <h6>Free</h6>
            <img src={images.pricingFree} alt="Free" className="mb-8 w-72" />
            <ul>
              <li>
                {checklist} <span>Download Maximum 2 per Day</span>
              </li>
              <li>
                {checklist} <span>Unlock Starter Contents</span>
              </li>
              <li>
                {checklist} <span>Customizable</span>
              </li>
              <li>
                {checklist} <span>Responsive Design</span>
              </li>
              <li>
                {checklist} <span>Clean Code</span>
              </li>
              <li>
                {checklist} <span>Ready to Use</span>
              </li>
              <li>
                {checklist} <span>SEO Ready</span>
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
            <h5 className="line-through text-center text-secondary font-semibold text-xl">
              IDR 150.000/bulan
            </h5>
            <h6>
              IDR {packagePrice && numberThausand(packagePrice.price)}
              <span>/bulan</span>
            </h6>
            <img src={images.pricingPremium} alt="Free" className="mb-8 w-72" />
            <ul>
              <li>
                {checklist} <span>No Limit Downloads per Day</span>
              </li>
              <li>
                {checklist} <span>Unlock Premium Contents</span>
              </li>
              <li>
                {checklist} <span>Customizable</span>
              </li>
              <li>
                {checklist} <span>Navbar Sections</span>
              </li>
              <li>
                {checklist} <span>Header Sections</span>
              </li>
              <li>
                {checklist} <span>Content Sections</span>
              </li>
              <li>
                {checklist} <span>Footer Sections</span>
              </li>
              <li>
                {checklist} <span>Empty State Sections</span>
              </li>
              <li>
                {checklist} <span>Export to Bootstrap</span>
              </li>
              <li>
                {checklist} <span>Export to Tailwind</span>
              </li>
              <li>
                {checklist} <span>Responsive Design</span>
              </li>
              <li>
                {checklist} <span>Mobile-First Design</span>
              </li>
              <li>
                {checklist} <span>Clean Code</span>
              </li>
              <li>
                {checklist} <span>Ready to Use</span>
              </li>
              <li>
                {checklist} <span>SEO Ready</span>
              </li>
              <li>
                {checklist} <span>Private Group</span>
              </li>
              <li>
                {checklist} <span>Free Design Update</span>
              </li>
              <li>
                {checklist} <span>Free Consultation</span>
              </li>
            </ul>
            <button
              className={classes.btn_premium}
              onClick={() => {
                if (isAuthentication) {
                  const a = document.createElement("a");
                  if (user && !user.isPremium) {
                    a.setAttribute("href", "/pricing/checkout");
                  } else {
                    a.setAttribute("href", "/create");
                  }
                  a.click();
                } else {
                  history.push("/login");
                }
              }}
            >
              {isAuthentication
                ? user && !user.isPremium
                  ? "Subscribe"
                  : "Create"
                : "Subscribe"}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
