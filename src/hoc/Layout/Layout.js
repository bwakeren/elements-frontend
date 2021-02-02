import { Header } from "../../components";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
