import { Header } from "../../components";

const Layout = ({ children, button, navigation }) => {
  return (
    <>
      <Header button={button} navigation={navigation} />
      {children}
      {/* <footer></footer> */}
    </>
  );
};

export default Layout;
