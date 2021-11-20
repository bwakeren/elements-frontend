import { NavigationHome, Head, Footer } from "../../../components";
import { Link } from "react-router-dom";
import { images } from "../../../assets";

const Success = () => {
  return (
    <div style={{ background: "#E9DDFF" }}>
      <Head title="Cara Zaman Now Design Sebuah Website — GetShayna by BuildWith Angga" />
      <NavigationHome whitebg={true} />
      <main className="flex flex-col items-center mb-20">
        <img
          src={images.successCheckout}
          alt="Order Complete"
          className="mb-12"
        />
        <h1 className="font-bold text-5xl capitalize text-blue text-center mb-8">
          Success to Subscribe
        </h1>
        <p className="text-xl text-center text-black font-secondary">
          Kamu berhasil upgrade menjadi premium.
        </p>
        <div className="mt-20 flex items-center">
          <Link
            to="/"
            className="hover:bg-button-primary-hover mx-2 border-button-primary-orange border-2 border-solid text-button-primary-orange font-semibold hover:text-white px-14 py-6 font-secondary rounded-xl text-base transition-all"
          >
            Kembali
          </Link>
          <Link
            to="/create"
            className="bg-button-primary-orange mx-2 hover:bg-button-primary-hover text-white px-14 py-6 font-secondary rounded-xl text-base font-semibold transition-all"
          >
            Start Design
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Success;
