import { NavigationHome, Head, Footer } from "../../../components";
import { images } from "../../../assets";
import { useSelector } from "react-redux";

const Process = () => {
  const user = useSelector((state) => state.authentication.user);

  const handlerFollowUpAdmin = () => {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      `https://wa.me/6287775945663?text=Halo,+Saya+${user.name}+dengan+email+${user.email}, apakah+akun+saya+sudah+dikonfirmasi?`
    );
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noreferrer");
    element.click();
  };

  return (
    <div style={{ background: "#E9DDFF" }}>
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <NavigationHome whitebg={true} />
      <main className="flex flex-col items-center mb-20">
        <img
          src={images.processCheckout}
          alt="Order Complete"
          className="mb-12"
        />
        <h1 className="font-bold text-5xl capitalize text-blue text-center mb-8">
          Waiting for Confirm Payment
        </h1>
        <p
          className="text-xl text-center text-black font-secondary"
          style={{ maxWidth: 450 }}
        >
          Kamu berhasil melakukan pembayaran, Mohon ditunggu dan kesabarannya ya
        </p>
        <button
          type="button"
          onClick={handlerFollowUpAdmin}
          className="bg-button-primary-orange hover:bg-button-primary-hover text-white px-14 py-6 font-secondary rounded-xl text-base mt-20"
        >
          Follow Up Admin
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Process;
