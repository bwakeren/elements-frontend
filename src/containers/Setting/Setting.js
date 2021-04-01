import { useState, useEffect } from "react";
import { NavigationHome, Head, Footer } from "../../components";
import { updateObject } from "../../shared/utility";
import { useSelector, useDispatch } from "react-redux";
import { authEdit } from "../../store/actions";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import classes from "./Setting.module.scss";

const lock = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.4235 9.4478V7.3008C16.4235 4.7878 14.3855 2.7498 11.8725 2.7498C9.35949 2.7388 7.31349 4.7668 7.30249 7.2808V7.3008V9.4478"
      stroke="#1046CF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.6832 21.2496H8.04224C5.94824 21.2496 4.25024 19.5526 4.25024 17.4576V13.1686C4.25024 11.0736 5.94824 9.37659 8.04224 9.37659H15.6832C17.7772 9.37659 19.4752 11.0736 19.4752 13.1686V17.4576C19.4752 19.5526 17.7772 21.2496 15.6832 21.2496Z"
      stroke="#1046CF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.863 14.2028V16.4238"
      stroke="#1046CF"
      strokeWdth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const unlock = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.4242 5.56204C15.8072 3.78004 14.1142 2.50004 12.1222 2.50004C9.60925 2.49004 7.56325 4.51804 7.55225 7.03104V7.05104V9.19804"
      stroke="#1046CF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.933 21.0005H8.292C6.198 21.0005 4.5 19.3025 4.5 17.2075V12.9195C4.5 10.8245 6.198 9.12646 8.292 9.12646H15.933C18.027 9.12646 19.725 10.8245 19.725 12.9195V17.2075C19.725 19.3025 18.027 21.0005 15.933 21.0005Z"
      stroke="#1046CF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.1128 13.9526V16.1746"
      stroke="#1046CF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Setting = () => {
  const user = useSelector((state) => state.authentication.user);
  const token = useSelector((state) => state.authentication.token);
  const [form, setForm] = useState({
    email: {
      label: "Email",
      type: "email",
      placeholder: user ? user.email : "example@elements.com",
      value: user ? user.email : "",
      icon: "",
      disabled: true,
      validation: {
        valid: true,
        text: "Please, input your email",
      },
      touch: false,
    },
    nama: {
      label: "Nama",
      type: "text",
      placeholder: "Masukan Nama Anda",
      value: user ? user.name : "",
      icon: "",
      disabled: false,
      validation: {
        valid: true,
        text: "Please, input your name",
      },
      touch: false,
    },
    password: {
      label: "New Password",
      type: "password",
      placeholder: "Masukan Password Baru Anda",
      value: "",
      icon: lock,
      disabled: false,
      validation: {
        valid: false,
        text: "It must be at least 8 characters in length",
      },
      touch: false,
    },
    confirmPassword: {
      label: "Confirm Password",
      type: "password",
      placeholder: "Konfirmasi Password Anda",
      value: "",
      icon: lock,
      disabled: false,
      validation: {
        valid: false,
        text: "It must be same with new password",
      },
      touch: false,
    },
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const notify = () => toast("Please, set your password");
  const successPassword = () => toast("Successfully Change Your Password");

  useEffect(() => {
    user && !user.isPassword && notify();
  }, [user]);

  const showPasswordHandler = (e, key) => {
    setForm(
      updateObject(form, {
        [key]: updateObject(form[key], {
          type: form[key].type === "password" ? "text" : "password",
          icon: form[key].type === "password" ? unlock : lock,
        }),
      })
    );
  };

  const changeHandler = (e, key) => {
    setForm(
      updateObject(form, {
        [key]: updateObject(form[key], {
          value: e.target.value,
          touch:
            key === "confirmPassword"
              ? e.target.value !== form.password.value
                ? true
                : false
              : key === "password"
              ? e.target.value.length <= 8
                ? true
                : false
              : e.target.value === ""
              ? true
              : false,
          validation: updateObject(form[key].validation, {
            valid:
              key === "confirmPassword"
                ? e.target.value === form.password.value
                  ? true
                  : false
                : key === "password"
                ? e.target.value.length >= 8
                  ? true
                  : false
                : e.target.value !== ""
                ? true
                : false,
          }),
        }),
      })
    );
  };

  const clickHandler = (e, key) => {
    setForm(
      updateObject(form, {
        [key]: updateObject(form[key], {
          touch:
            key === "confirmPassword"
              ? e.target.value !== form.password.value
                ? true
                : false
              : key === "password"
              ? e.target.value.length <= 8
                ? true
                : false
              : e.target.value === ""
              ? true
              : false,
        }),
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: form.nama.value,
      password: form.password.value,
      password_confirmation: form.confirmPassword.value,
    };

    dispatch(authEdit(data, token));

    successPassword();

    setTimeout(() => {
      history.push("/create");
    }, 1500);
  };

  const arrayForm = [];
  for (const key in form) {
    arrayForm.push({
      id: key,
      data: {
        ...form[key],
      },
    });
  }

  return (
    <>
      <Head title="Cara Zaman Now Design Sebuah Website — Elements by BuildWith Angga" />
      <NavigationHome whitebg={true} />
      <main className={classes.setting}>
        <h1>Welcome,</h1>
        {user && (
          <>
            {user && <img src={user.avatar} alt={user.name} />}
            <h2>{user.name}</h2>
            <form onSubmit={(e) => submitHandler(e)}>
              {arrayForm.map((form) => (
                <div key={form.id} className={classes.input_container}>
                  <label htmlFor={form.id}>{form.data.label}</label>
                  <div className={classes.input_group}>
                    <input
                      id={form.id}
                      type={form.data.type}
                      placeholder={form.data.placeholder}
                      value={form.data.value}
                      disabled={form.data.disabled}
                      onChange={(e) => changeHandler(e, form.id)}
                      onClick={(e) => clickHandler(e, form.id)}
                      style={{ paddingRight: form.data.icon !== "" && 42 }}
                    />
                    {form.data.icon !== "" && (
                      <div
                        className={classes.icon}
                        onClick={(e) => showPasswordHandler(e, form.id)}
                      >
                        {form.data.icon}
                      </div>
                    )}
                    {!form.data.validation.valid && form.data.touch && (
                      <small>{form.data.validation.text}</small>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="submit"
                disabled={
                  form.nama.validation.valid && form.email.validation.valid
                    ? false
                    : true
                }
              >
                Update
              </button>
            </form>
          </>
        )}
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Setting;
