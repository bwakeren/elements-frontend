import { Head, Teams, NavigationHome } from "../../components";

const Main = () => {
  return (
    <>
      <Head title="Cara Zaman Now Design Sebuah Website — GetShayna by BuildWith Angga" />
      <NavigationHome whitebg={true} />
      <main className="py-9 px-10 flex items-center flex-col">
        <h1
          className="font-extrabold text-6xl text-center"
          style={{ color: "#121155" }}
        >
          Meet Our Team
        </h1>
        <p
          className="text-xl tracking-widest mb-12 text-center"
          style={{ color: "#121212", letterSpacing: 0.5 }}
        >
          Working together in order to achive the greatness
        </p>
        <Teams />
      </main>
    </>
  );
};

export default Main;
