import { useState } from "react";
import { Navigation } from "../Navigations/Navigations";
import { ModalDownload } from "../Modal/Modal";
import classes from "./Header.module.scss";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const HandlerOpenModalDownload = () => {
    setOpenModal(!openModal);
    setCopied(false);
  };

  return (
    <>
      <header className={classes.header}>
        <Navigation clicked={HandlerOpenModalDownload} />
      </header>
      <ModalDownload
        open={openModal}
        close={HandlerOpenModalDownload}
        copied={copied}
        handlerCopy={() => setCopied(true)}
      />
    </>
  );
};
