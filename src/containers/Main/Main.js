import { useState } from "react";
import { NavSidebar, Content, Head } from "../../components";

const Main = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Head title="Elements" />
      <main className="py-9 px-10 flex items-start w-full justify-end">
        <NavSidebar clicked={() => setClicked(!clicked)} />
        <Content clicked={clicked} />
      </main>
    </>
  );
};

export default Main;
