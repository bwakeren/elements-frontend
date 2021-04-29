import { NavigationHome, Head, Footer } from "../../../components";
import { Link } from "react-router-dom";
import { images } from "../../../assets";

const Success = () => {
  return (
    <div style={{ background: "#E9DDFF" }}>
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <NavigationHome whitebg={true} />
      <main className="flex flex-col items-center mb-20">
        <img
          src={images.orderComplete}
          alt="Order Complete"
          className="mb-12"
        />
        <h1 className="font-bold text-5xl capitalize text-blue text-center mb-8">
          Success to Subscribe
        </h1>
        <p className="text-xl text-center text-black font-secondary">
          Kamu berhasil upgrade menjadi premium.
        </p>
        <Link
          to="/create"
          className="bg-button-primary-orange hover:bg-button-primary-hover text-white px-14 py-6 font-secondary rounded-xl text-base mt-20"
        >
          Kembali
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Success;
