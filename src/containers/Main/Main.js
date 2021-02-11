import { NavSidebar, Content, Head } from "../../components";
import Layout from "../../hoc/Layout/Layout";

const Main = () => {
  return (
    <Layout button="Download">
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <main className="py-9 px-10 flex items-start w-full justify-end">
        <NavSidebar />
        <Content />
      </main>
    </Layout>
  );
};

export default Main;
