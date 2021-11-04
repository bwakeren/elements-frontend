import { NavigationHome, Head, Footer } from "../../components";
import { images, icons } from "../../assets";
import { useSelector } from "react-redux";
import { numberThausand } from "../../shared/utility";
import axios from "../../axios_db";
import classes from "./Checkout.module.scss";

const Checkout = () => {
  const benefits = [
    "Ready to Use",
    "SEO Ready",
    "Unlock Premium Contents",
    "Illustrations Design",
    "Icons Design",
    "Free Updates",
    "Responsive Web Design",
    "Private Group (Consultation)",
  ];

  const paymentDetails = [
    {
      title: "Harga normal",
      text: 150000,
    },
    {
      title: "Harga",
      text: 50000,
    },
    {
      title: "Kode unik",
      text: Math.floor(Math.random() * 1000) + 1,
    },
  ];

  const user = useSelector((state) => state.authentication.user);

  const buttonCheckoutHandler = () => {
    // Subscribe
    axios
      .post("/api/subscribe/store", {
        id_user: user.id,
        id_package: 1,
        total_bayar: paymentDetails[1].text + paymentDetails[2].text,
        status: 1,
      })
      .then((response) => {
        // Go to Whatsapp
        const element = document.createElement("a");
        element.setAttribute(
          "href",
          `https://wa.me/6281385202498?text=Halo,+Saya+${
            user.name
          }+dengan+email+${
            user.email
          }+ingin+mengkonfirmasi+pembayaran+Elements+Premium+saya+sebesar+Rp+${numberThausand(
            paymentDetails[1].text + paymentDetails[2].text
          )}.+Berikut+saya+lampirkan+bukti+pembayaran+saya.`
        );
        element.setAttribute("target", "_blank");
        element.setAttribute("rel", "noreferrer");
        element.click();

        // Success Checkout
        const success = document.createElement("a");
        success.setAttribute("href", `/pricing/checkout/process`);
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
          <h1 className="mb-8 text-5xl font-bold text-center capitalize text-blue">
            Go Premium
          </h1>
          <p className="text-xl text-center text-blue font-secondary">
            Bergabung dengan kami untuk mendapatkan akses premium Elements
          </p>
          <div className="flex flex-col items-start mt-6 sm:flex-row sm:mt-12">
            <img
              src={images.illustrationPremium}
              alt="Illustration Premium"
              className="w-full transition-all sm:w-1/3 sm:mr-11"
            />
            <div className="w-full sm:w-2/3">
              <div className="w-full transition-all bg-white rounded-xl p-11">
                <div className="mb-9">
                  <h5 className="mb-5 text-base font-bold text-black font-secondary">
                    Main Benefits
                  </h5>
                  <ul className="ml-5 list-disc">
                    {benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="w-full mb-4 text-base text-gray-900 font-secondary"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-9">
                  <h5 className="mb-5 text-base font-bold text-black font-secondary">
                    Payment Detail
                  </h5>
                  <ul className="ml-5 list-disc">
                    {paymentDetails.map((payment) => (
                      <li
                        key={payment.title}
                        className="w-full mb-4 text-base text-gray-900 font-secondary"
                      >
                        <p className="flex items-center justify-between w-full">
                          <span>
                            {payment.title}{" "}
                            {payment.title === "Harga" && (
                              <span className="px-1 text-xs text-white rounded-lg bg-button-primary-orange">
                                Discount
                              </span>
                            )}
                          </span>
                          <span
                            className={`${
                              payment.title === "Harga normal" &&
                              "line-through text-red-600"
                            } ${
                              payment.title === "Kode unik" && "text-green-600"
                            }`}
                          >
                            {payment.title === "Kode unik" && "+"} Rp{" "}
                            {numberThausand(payment.text)}
                          </span>
                        </p>
                      </li>
                    ))}
                    <li className="w-full mb-4 text-base text-gray-900 font-secondary">
                      <p className="flex items-center justify-between w-full">
                        <span>Total transfer</span>
                        <span className="font-semibold">
                          Rp{" "}
                          {numberThausand(
                            paymentDetails[1].text + paymentDetails[2].text
                          )}
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mb-9">
                  <h5 className="mb-5 text-base font-bold text-black font-secondary">
                    Transfer Pembayaran
                  </h5>
                  <img
                    src={icons.mandiriIcon}
                    alt="mandiri"
                    style={{ width: 95, height: 30 }}
                    className="mb-5"
                  />
                  <p className="mb-4 text-base text-gray-900 font-secondary">
                    PT Angga Membangun Indonesia
                  </p>
                  <p className="mb-4 text-base font-bold text-gray-900 font-secondary">
                    1030007801844
                  </p>
                </div>
                <div className="mb-4">
                  <h5 className="mb-5 text-base font-bold text-black font-secondary">
                    User Information
                  </h5>
                  <div className="flex items-center">
                    <img
                      src={user.avatar}
                      alt="mandiri"
                      style={{ borderRadius: "50%" }}
                      className="object-cover object-center mr-5 h-14 w-14"
                    />
                    <p className="text-base text-gray-900 font-secondary">
                      {user.name}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={buttonCheckoutHandler}
                  className="w-full py-6 text-base text-white bg-button-primary-orange hover:bg-button-primary-hover font-secondary mt-9"
                >
                  Konfirmasi Pembayaran
                </button>
              </div>
              <div className="w-full transition-all bg-white rounded-xl p-11 mt-9">
                <div className="mb-9">
                  <h5 className="mb-5 text-base font-bold text-black font-secondary">
                    Informasi penting
                  </h5>
                  <p className="mb-4 text-base text-gray-900 font-secondary">
                    Proses konfirmasi pembayaran elements akan membutuhkan waktu
                    sekitar 1x24 jam (dari pesan WhatsApp dikirim). Mohon
                    menunggu dengan sabar dan terima kasih.
                  </p>
                </div>
                <div>
                  <h5 className="mb-5 text-base font-bold text-black font-secondary">
                    Butuh bantuan? hubungi kami
                  </h5>
                  <ul className="ml-5 list-disc">
                    <li className="w-full mb-4 text-base text-gray-900 font-secondary">
                      <p className="flex items-center justify-between w-full">
                        <span>Admin</span>
                        <span>Niva</span>
                      </p>
                    </li>
                    <li className="w-full mb-4 text-base text-gray-900 font-secondary">
                      <p className="flex items-center justify-between w-full">
                        <span>No. Whatsapp</span>
                        <span className="font-semibold">+62 813 8520 2498</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
