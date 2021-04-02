import { useState } from "react";
import classes from "./Landing.module.scss";
import { updateObject } from "../../shared/utility";
import { images, icons } from "../../assets";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Head, Footer, NavigationHome } from "../../components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Landing = () => {
  const [dataCustom, setDataCustom] = useState({
    header: {
      isActive: true,
      title: "Header",
      content:
        "Header is the top section of the web page. And this is the most important part of a web.",
      img: images.customHeader,
    },
    content: {
      isActive: false,
      title: "Content",
      content: "Many choices of various content, you can vary the web content.",
      img: images.customContent,
    },
    footer: {
      isActive: false,
      title: "Footer",
      content:
        "Footer is the closing part of a website, you can choose the footer.",
      img: images.customFooter,
    },
  });

  const [dataFAQ, setDataFAQ] = useState({
    1: {
      isActive: true,
      title: "Kenapa Elements bagus untuk bisnis?",
      text:
        "Dengan menggunakan Elements maka kita tidak perlu menghabiskan banyak uang, tenaga, dan juga waktu berharga. Semua bagian dari website yang professional telah kami sediakan dan bisa digunakan dengan instan.",
    },
    2: {
      isActive: true,
      title: "Elements dibangun untuk siapa saja?",
      text:
        "Kami membangun Elements untuk semua kalangan yang ingin memiliki website dengan design menarik dan professional tanpa harus memiliki background IT terutama di bidang programming.",
    },
    3: {
      isActive: false,
      title: "Apakah bisa mendapatkan bantuan khusus?",
      text:
        "Tim developer kami siap membantu Anda apabila ada kesulitan dalam mengubah konten pada design website yang telah Anda buat menggunakan Elements sebelumnya. Pelayanan ini hanya tersedia pada paket Premium.",
    },
    4: {
      isActive: false,
      title: "Apakah bisa dijual kembali?",
      text:
        "Kami mengizinkan seluruh pengguna kami untuk menggunakan Elements dalam membangun sebuah website. Kami juga memperbolehkan pengguna kami untuk menjual kembali hasil template dari Elements (free commercial use).",
    },
  });

  const history = useHistory();
  const isAuthentication = useSelector(
    (state) => state.authentication.token !== null
  );

  const [loading, setLoading] = useState(false);

  const handlerClickCustom = (event, id) => {
    setDataCustom(
      updateObject(dataCustom, {
        header: updateObject(dataCustom.header, {
          isActive: false,
        }),
        content: updateObject(dataCustom.content, {
          isActive: false,
        }),
        footer: updateObject(dataCustom.footer, {
          isActive: false,
        }),
        [id]: updateObject(dataCustom[id], {
          isActive: true,
        }),
      })
    );
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const switchHandlerFAQ = (e, id) => {
    setDataFAQ(
      updateObject(dataFAQ, {
        [id]: updateObject(dataFAQ[id], {
          isActive: !dataFAQ[id].isActive,
        }),
      })
    );
  };

  const dataCustomArray = [];
  for (const key in dataCustom) {
    dataCustomArray.push({
      id: key,
      data: dataCustom[key],
    });
  }

  const dataFAQArray = [];
  for (const key in dataFAQ) {
    dataFAQArray.push({
      id: key,
      data: dataFAQ[key],
    });
  }

  const chevronIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.57133 8.74271C3.7134 8.50592 4.02053 8.42913 4.25732 8.57121L12.0001 14.4169L19.7428 8.57121C19.9796 8.42913 20.2867 8.50592 20.4288 8.74271C20.5709 8.9795 20.4941 9.28663 20.2573 9.4287L12.2573 15.4287C12.099 15.5237 11.9012 15.5237 11.7428 15.4287L3.74283 9.4287C3.50604 9.28663 3.42926 8.9795 3.57133 8.74271Z"
        fill="#121212"
      />
    </svg>
  );

  const gotoCreate = () => {
    history.push("/create");
  };

  return (
    <>
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <header
        className={classes.header}
        style={{ backgroundImage: `url(${images.headerBack})` }}
      >
        <NavigationHome />
        <div className={classes.hero}>
          <div>
            <p>MOST FRIENDLY BUILDER</p>
            <h1>
              The New Way to <br />
              Design Your Website <br />
              Faster and Better
            </h1>
            <p>
              Design a promising website to scale your business better and
              bigger. Elements is here to provide all you need.
            </p>
            <button onClick={gotoCreate}>
              {isAuthentication ? "Get started" : "Try it free"}
            </button>
          </div>
          <img src={images.headerHero} alt="HeroImage" />
        </div>
      </header>
      <main className="w-full">
        <section
          className={classes.why}
          style={{ backgroundImage: `url(${images.whyBack})` }}
          id="why-elements"
        >
          <h2>Why Elements ?</h2>
          <div>
            <p>Beginners Friendly</p>
            <span></span>
            <p>Start at $0</p>
            <span></span>
            <p>Less Effort</p>
          </div>
          <img src={images.whyLaptop} alt="Laptop" />
        </section>
        <section
          className={classes.custom}
          style={{ backgroundImage: `url(${images.customBack})` }}
        >
          <h2>
            Customization your page with <br /> available 100+ component{" "}
          </h2>
          {dataCustomArray.map((data) => (
            <div
              className={data.data.isActive && classes.active}
              key={data.id}
              onMouseEnter={(e) => handlerClickCustom(e, data.id)}
            >
              <h6>{data.data.title}</h6>
              <p>{data.data.content}</p>
              {data.data.isActive && (
                <div className={classes.img}>
                  {!loading ? (
                    <img src={data.data.img} alt={data.data.title} />
                  ) : (
                    <SkeletonTheme color="#eee">
                      <Skeleton
                        reactangle={true}
                        width={676}
                        height={300}
                        className="hidden lg:block"
                      />
                    </SkeletonTheme>
                  )}
                </div>
              )}
            </div>
          ))}
        </section>
        <section
          className={classes.knowledge}
          style={{ backgroundImage: `url(${images.knowledgeBase})` }}
          id="knowledge-base"
        >
          <h2>Knowledge Base</h2>
          <div className="flex items-start w-full justify-between flex-col lg:flex-row">
            <div className={classes.knowledge_component}>
              <img src={icons.knowCommercial} alt="Commercial" />
              <h6>Free Commercial Use</h6>
              <p>
                Don't worry ... You can use the website from Elements again and
                can be commercialized.
              </p>
            </div>
            <div className={classes.knowledge_component}>
              <img src={icons.knowCustom} alt="Costumization" />
              <h6>Customization</h6>
              <p>
                Bored with it that's it? Element website has many components
                that can design your own customization.
              </p>
            </div>
            <div className={classes.knowledge_component}>
              <img src={icons.knowDeveloper} alt="Developer" />
              <h6>For Developer</h6>
              <p>
                Suitable for you in the Developer field so that you save time to
                do it.
              </p>
            </div>
          </div>
        </section>
        <section
          className={classes.faq}
          style={{ backgroundImage: `url(${images.faqLanding})` }}
        >
          <h2>Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dataFAQArray.map((data) => (
              <div key={data.id} className={classes.faq_component}>
                <h6
                  onClick={(e) => switchHandlerFAQ(e, data.id)}
                  className={
                    !data.data.isActive ? "rounded-2xl" : "rounded-t-2xl"
                  }
                >
                  {data.data.title}{" "}
                  <span
                    style={{
                      display: "inline-block",
                      transform: !data.data.isActive && "rotate(-90deg)",
                    }}
                    className="transition-all"
                  >
                    {chevronIcon}
                  </span>
                </h6>
                <p
                  className={
                    !data.data.isActive
                      ? "bg-transparent h-0"
                      : "bg-white h-auto"
                  }
                >
                  {data.data.isActive ? data.data.text : ""}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className={classes.bottom}>
          <h2>
            Start your website project
            <br />
            and execute your ideas.
          </h2>
          <div>
            <p>Beginners Friendly</p>
            <span></span>
            <p>Start at $0</p>
            <span></span>
            <p>Less Effort</p>
          </div>
          <button onClick={gotoCreate}>
            {isAuthentication ? "Get started" : "Try it free"}
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
