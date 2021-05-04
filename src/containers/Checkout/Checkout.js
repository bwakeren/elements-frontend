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
          `https://wa.me/6287775945663?text=Halo,+Saya+${
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
          <h1 className="font-bold text-5xl capitalize text-blue text-center mb-8">
            Go Premium
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
            <div className="w-full sm:w-2/3">
              <div className="w-full rounded-xl bg-white p-11 transition-all">
                <div className="mb-9">
                  <h5 className="font-bold font-secondary text-base text-black mb-5">
                    Main Benefits
                  </h5>
                  <ul className="list-disc ml-5">
                    {benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="mb-4 w-full text-base font-secondary text-gray-900"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-9">
                  <h5 className="font-bold font-secondary text-base text-black mb-5">
                    Payment Detail
                  </h5>
                  <ul className="list-disc ml-5">
                    {paymentDetails.map((payment) => (
                      <li
                        key={payment.title}
                        className="mb-4 w-full text-base font-secondary text-gray-900"
                      >
                        <p className="w-full flex justify-between items-center">
                          <span>
                            {payment.title}{" "}
                            {payment.title === "Harga" && (
                              <span className="text-xs bg-button-primary-orange text-white px-1 rounded-lg">
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
                    <li className="mb-4 w-full text-base font-secondary text-gray-900">
                      <p className="w-full flex justify-between items-center">
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
                  <h5 className="font-bold font-secondary text-base text-black mb-5">
                    Transfer Pembayaran
                  </h5>
                  <img
                    src={icons.mandiriIcon}
                    alt="mandiri"
                    style={{ width: 95, height: 30 }}
                    className="mb-5"
                  />
                  <p className="mb-4 text-base font-secondary text-gray-900">
                    PT Angga Membangun Indonesia
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
              <div className="w-full rounded-xl bg-white p-11 transition-all mt-9">
                <div className="mb-9">
                  <h5 className="font-bold font-secondary text-base text-black mb-5">
                    Informasi penting
                  </h5>
                  <p className="mb-4 text-base font-secondary text-gray-900">
                    Proses konfirmasi pembayaran kelas akan membutuhkan waktu
                    sekitar 20 menit (dari pesan WhatsApp dikirim). Mohon
                    menunggu dengan sabar dan terima kasih.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold font-secondary text-base text-black mb-5">
                    Butuh bantuan? hubungi kami
                  </h5>
                  <ul className="list-disc ml-5">
                    <li className="mb-4 w-full text-base font-secondary text-gray-900">
                      <p className="w-full flex justify-between items-center">
                        <span>Admin</span>
                        <span>Vina</span>
                      </p>
                    </li>
                    <li className="mb-4 w-full text-base font-secondary text-gray-900">
                      <p className="w-full flex justify-between items-center">
                        <span>No. Whatsapp</span>
                        <span className="font-semibold">+6289604535310</span>
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
