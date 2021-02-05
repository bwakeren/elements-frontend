import { Head, Teams } from "../../components";
import Layout from "../../hoc/Layout/Layout";

const Main = () => {
  return (
    <Layout button="Create New Design" navigation="/">
      <Head title="Elements" />
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
    </Layout>
  );
};

export default Main;
