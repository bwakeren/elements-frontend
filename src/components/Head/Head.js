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
    </Helmet>
  );
};
