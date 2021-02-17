import { useEffect } from "react";
import { Navigation } from "../Navigations/Navigations";
import classes from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchGeolocation, postDownload } from "../../store/actions";

export const Header = ({ button, navigation }) => {
  const contents = useSelector((state) => state.content.contents);
  let dataHTML = "";
  let dataHTMLBootstrap = "";
  const idContent = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGeolocation());
  }, [dispatch]);

  const geolocation = useSelector((state) => state.download.geolocation);

  contents.forEach((content) => {
    dataHTML += content.html;
    dataHTMLBootstrap += content.htmlBootstrap;
    if (content.idProd) {
      idContent.push(content.idProd);
    }
  });

  const html = [
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Elements by BuildWith Angga</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css" /> <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer ></script> </head><body>',
    dataHTML,
    "</body></html>",
  ];

  const htmlBootstrap = [
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Elements by BuildWith Angga</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"> </head><body>',
    dataHTMLBootstrap,
    '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script></body></html>',
  ];

  const handlerDownloadTailwinds = () => {
    idContent.forEach((data) => {
      const download = {
        components_id: data,
        downloaded_id: 1,
        ip:
          Object.keys(geolocation).length === 0
            ? "255.255.255.255"
            : geolocation.IPv4,
        region:
          Object.keys(geolocation).length === 0 ? "Jakarta" : geolocation.city,
      };
      dispatch(postDownload(download));
    });
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      `data:html/text;charset=utf-8,${encodeURIComponent(html.join(" "))}`
    );
    element.setAttribute("download", "ElementsbyBWA.html");
    element.click();
  };

  const handlerDownloadBootstrap = () => {
    idContent.forEach((data) => {
      const download = {
        components_id: data,
        downloaded_id: 2,
        ip:
          Object.keys(geolocation).length === 0
            ? "255.255.255.255"
            : geolocation.IPv4,
        region:
          Object.keys(geolocation).length === 0 ? "Jakarta" : geolocation.city,
      };
      dispatch(postDownload(download));
    });
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      `data:html/text;charset=utf-8,${encodeURIComponent(
        htmlBootstrap.join(" ")
      )}`
    );
    element.setAttribute("download", "ElementsbyBWA.html");
    element.click();
  };

  return (
    <>
      <header className={classes.header}>
        <Navigation
          disabled={dataHTML === ""}
          html={html}
          clicked={handlerDownloadTailwinds}
          clickedBootstrap={handlerDownloadBootstrap}
          button={button}
          navigation={navigation}
        />
      </header>
    </>
  );
};
