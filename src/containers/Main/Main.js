import { useEffect, useState } from "react";
import { NavSidebar, Content, Head } from "../../components";
import { images } from "../../assets";
import Layout from "../../hoc/Layout/Layout";
import classes from "./Main.module.scss";
import { useHistory } from "react-router-dom";

const Main = () => {
  const [width, setWidth] = useState(true);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("resize", () => {
      const isWidth = window.innerWidth >= 1280;

      if (isWidth !== width) {
        setWidth(isWidth);
      }
    });

    return () =>
      window.removeEventListener("resize", () => {
        const isWidth = window.innerWidth >= 1280;

        if (isWidth !== width) {
          setWidth(isWidth);
        }
      });
  }, [width]);

  return window.innerWidth >= 1280 && width ? (
    <Layout button="Download">
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <main className="py-9 px-10 flex items-start w-full justify-end">
        <NavSidebar />
        <Content />
      </main>
    </Layout>
  ) : (
    <>
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <div className={classes.nosupport}>
        <img src={images.noPhone} alt="NoSupport" />
        <h1>Oops! Sayang sekali, Tidak bisa digunakan untuk Mobile</h1>
        <p>
          Untuk pengalaman terbaik, disarankan menggunakan website Elements pada
          ukuran layar 1280px atau lebih lebar yaa...
        </p>
        <button onClick={() => history.goBack()}>Kembali</button>
      </div>
    </>
  );
};

export default Main;
