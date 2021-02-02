import { NavSidebar, Content, Head } from "../../components";

const Main = () => {
  return (
    <>
      <Head title="Elements" />
      <main className="py-9 px-10 flex items-start w-full justify-end">
        <NavSidebar />
        <Content />
      </main>
    </>
  );
};

export default Main;
