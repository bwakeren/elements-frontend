import classes from "./Modal.module.scss";
import { useSelector } from "react-redux";
import { icons } from "../../assets";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSpring, animated, config } from "react-spring";

export const ModalDownload = ({ open, close, copied, handlerCopy }) => {
  const contents = useSelector((state) => state.content.contents);

  const html = [
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Elements by BuildWith Angga</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css" /> <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer ></script> </head><body>',
    contents.length !== 0
      ? contents.length === 1
        ? contents[0].html
        : contents.reduce((a, b) => a.html + b.html)
      : "",
    "</body></html>",
  ];

  const animation = useSpring({
    transform: !open ? "translate(-50%, -200%)" : "translate(-50%, -50%)",
    opacity: open ? 1 : 0,
    config: config.gentle,
  });

  return (
    <>
      <animated.div style={animation} className={classes.modal_download}>
        <img src={icons.Downloading} alt="Download" className="w-52 h-52" />
        <p className="font-semibold text-lg">
          How would you like to export your design?
        </p>
        {copied && (
          <p className="font-semibold text-lg text-red-600">
            Copy in your clipboard
          </p>
        )}
        <div className={classes.button_wrapper}>
          <CopyToClipboard
            text={
              contents.length !== 0
                ? contents.length === 1
                  ? contents[0].html
                  : contents.reduce((a, b) => a.html + b.html)
                : ""
            }
            onCopy={contents.length !== 0 && handlerCopy}
          >
            <div>
              <svg
                class="w-6 h-6 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
              <p>Copy Clipboard</p>
            </div>
          </CopyToClipboard>
          {contents.length !== 0 ? (
            <a
              href={`data:html/text;charset=utf-8,${encodeURIComponent(
                html.join(" ")
              )}`}
              download="ElementsbyBWA.html"
              className={classes.download}
            >
              <div>
                <svg
                  class="w-6 h-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
                <p>Export to HTML</p>
              </div>
            </a>
          ) : (
            <span className={classes.download}>
              <div>
                <svg
                  class="w-6 h-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
                <p>Export to HTML</p>
              </div>
            </span>
          )}
        </div>
      </animated.div>
      {open && <div className={classes.backdrop} onClick={close}></div>}
    </>
  );
};
