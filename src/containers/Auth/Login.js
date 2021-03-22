import { Head, NavigationHome } from "../../components";
import { images } from "../../assets";

import classes from "./Login.module.scss";

const googleLogo = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M21.4866 11.2059C21.4866 10.3045 21.4135 9.64681 21.2552 8.96472H10.9629V13.0329H17.0042C16.8825 14.0439 16.2248 15.5664 14.7631 16.5895L14.7426 16.7257L17.9968 19.2467L18.2223 19.2692C20.2929 17.3569 21.4866 14.5432 21.4866 11.2059Z"
        fill="#4285F4"
      />
      <path
        d="M10.9639 21.9245C13.9236 21.9245 16.4084 20.9501 18.2233 19.2692L14.7641 16.5895C13.8384 17.2351 12.596 17.6857 10.9639 17.6857C8.06498 17.6857 5.60458 15.7735 4.72752 13.1304L4.59896 13.1413L1.21515 15.7601L1.1709 15.8831C2.97356 19.4641 6.67637 21.9245 10.9639 21.9245Z"
        fill="#34A853"
      />
      <path
        d="M4.72686 13.1303C4.49544 12.4482 4.36151 11.7174 4.36151 10.9622C4.36151 10.207 4.49544 9.47621 4.71469 8.79413L4.70856 8.64886L1.28235 5.98804L1.17025 6.04136C0.42729 7.52737 0.000976562 9.19609 0.000976562 10.9622C0.000976562 12.7284 0.42729 14.397 1.17025 15.883L4.72686 13.1303Z"
        fill="#FBBC05"
      />
      <path
        d="M10.9638 4.23869C13.0223 4.23869 14.4108 5.12785 15.2025 5.87089L18.2963 2.85018C16.3962 1.08405 13.9236 0 10.9638 0C6.67636 0 2.97355 2.46039 1.1709 6.04135L4.71533 8.79412C5.60457 6.15102 8.06496 4.23869 10.9638 4.23869Z"
        fill="#EB4335"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="21.4984" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Login = () => {
  const loginHandler = () => {
    const a = document.createElement("a");
    a.setAttribute(
      "href",
      "https://api.elements.buildwithangga.com/sign-in/google"
    );
    a.click();
  };

  return (
    <>
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <header>
        <NavigationHome whitebg={true} />
      </header>
      <main className={classes.login}>
        <iframe
          src={images.IllustrationLogin}
          height="100%"
          width="100%"
          title="Login Illustration"
        />
        <div className="flex flex-col self-center">
          <h1>Masuk / Daftar ke Elements</h1>
          <p>Dapatkan akses untuk membangun website yang lebih professional</p>
          <button onClick={loginHandler} disabled>
            {googleLogo} Sign In with Google
          </button>
        </div>
      </main>
    </>
  );
};

export default Login;
