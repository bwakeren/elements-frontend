import { Helmet } from "react-helmet-async";
import { favicon } from "../../assets";

export const Head = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="https://elements.buildwithangga.com/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href={favicon.Fav32} sizes="32x32" />
      <link rel="icon" type="image/png" href={favicon.Fav16} sizes="16x16" />
      <meta
        name="description"
        content="Cara cepat dan mudah untuk developers dalam melakukan design sebuah website yang responsive dan siap pakai untuk kebutuhan projek website."
      />
      <meta
        name="keywords"
        content="Website Builder, Design Tools, Elements, Website Design"
      />
      <meta name="author" content="Elements by BuildWith Angga" />
      <meta image={favicon.Fav32} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={favicon.Fav32} />
      <meta
        property="og:title"
        content="Cara cepat dan mudah untuk developers dalam melakukan design sebuah website yang responsive dan siap pakai untuk kebutuhan projek website."
      />
      <meta property="og:site_name" content="Elements by BuildWith Angga" />
      <meta property="og:url" content="https://elements.buildwithangga.com/" />
      <meta
        property="og:description"
        content="Cara cepat dan mudah untuk developers dalam melakukan design sebuah website yang responsive dan siap pakai untuk kebutuhan projek website."
      />
    </Helmet>
  );
};
