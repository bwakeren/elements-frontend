import { Navigation } from "../Navigations/Navigations";
import classes from "./Header.module.scss";
import { useSelector } from "react-redux";

export const Header = () => {
  const contents = useSelector((state) => state.content.contents);
  let dataHTML = "";

  contents.forEach((content) => {
    dataHTML += content.html;
  });

  const html = [
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Elements by BuildWith Angga</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css" /> <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer ></script> </head><body>',
    dataHTML,
    "</body></html>",
  ];

  const HandlerOpenModalDownload = () => {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      `data:html/text;charset=utf-8,${encodeURIComponent(html.join(" "))}`
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
          clicked={HandlerOpenModalDownload}
        />
      </header>
    </>
  );
};
