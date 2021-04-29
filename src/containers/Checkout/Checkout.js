import { NavigationHome, Head, Footer } from "../../components";
import { images, icons } from "../../assets";
import { useSelector } from "react-redux";
import axios from "../../axios_db";
import classes from "./Checkout.module.scss";

const Checkout = () => {
  const benefits = [
    "Ready to Use",
    "1,000+ Component Design",
    "Illustration Design",
    "Free Design Update",
    "Private Group (Consultation)",
  ];

  const user = useSelector((state) => state.authentication.user);

  console.log(user);

  const buttonCheckoutHandler = () => {
    // Subscribe
    axios
      .post("/api/subscribe/store", {
        id_user: user.id,
        id_package: 1,
        total_bayar: 50000,
        status: 1,
      })
      .then((response) => {
        // Go to Whatsapp
        const element = document.createElement("a");
        element.setAttribute(
          "href",
          `https://wa.me/6287775945663?text=Halo,+Saya+${user.name}+dengan+email+${user.email}+ingin+mengkonfirmasi+pembayaran+Elements+Premium+saya.`
        );
        element.setAttribute("target", "_blank");
        element.setAttribute("rel", "noreferrer");
        element.click();

        // Success Checkout
        const success = document.createElement("a");
        success.setAttribute("href", `/pricing/checkout/success`);
        success.click();
      })
      .catch((error) => error);
  };

  return (
    <div style={{ background: "#E9DDFF" }}>
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <NavigationHome whitebg={true} />
      {user && (
        <main className={classes.checkout}>
          <h1 className="font-bold text-5xl capitalize text-blue text-center mb-8">
            Checkout Subscribe
          </h1>
          <p className="text-xl text-center text-blue font-secondary">
            Bergabung dengan kami untuk mendapatkan akses premium Elements
          </p>
          <div className="flex flex-col sm:flex-row mt-6 sm:mt-12 items-start">
            <img
              src={images.illustrationPremium}
              alt="Illustration Premium"
              className="w-full sm:w-1/3 sm:mr-11 transition-all"
            />
            <div className="w-full sm:w-2/3 rounded-xl bg-white p-11 transition-all">
              <div className="mb-9">
                <h5 className="font-bold font-secondary text-base text-black mb-5">
                  Main Benefits
                </h5>
                <ul className="list-disc ml-5">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="mb-4 text-base font-secondary text-gray-900"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-9">
                <h5 className="font-bold font-secondary text-base text-black mb-5">
                  Bank Information
                </h5>
                <img
                  src={icons.mandiriIcon}
                  alt="mandiri"
                  style={{ width: 95, height: 30 }}
                  className="mb-5"
                />
                <p className="mb-4 text-base font-secondary text-gray-900">
                  PT Angga Membangun Indonesia (Admin Athar)
                </p>
                <p className="mb-4 text-base font-secondary font-bold text-gray-900">
                  1030007801844
                </p>
              </div>
              <div className="mb-4">
                <h5 className="font-bold font-secondary text-base text-black mb-5">
                  User Information
                </h5>
                <div className="flex items-center">
                  <img
                    src={user.avatar}
                    alt="mandiri"
                    style={{ borderRadius: "50%" }}
                    className="mr-5 h-14 w-14 object-cover object-center"
                  />
                  <p className="text-base font-secondary text-gray-900">
                    {user.name}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={buttonCheckoutHandler}
                className="bg-button-primary-orange hover:bg-button-primary-hover text-white w-full py-6 font-secondary text-base mt-9"
              >
                Konfirmasi Pembayaran
              </button>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
