import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { Loading } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { checkAutoAuth, authRedirectPath } from "./store/actions";
import Landing from "./containers/Landing/Landing";

const Main = lazy(() => import("./containers/Main/Main"));
const Goodluck = lazy(() => import("./containers/Goodluck/Goodluck"));
const Heroes = lazy(() => import("./containers/Heroes/Heroes"));
const Pricing = lazy(() => import("./containers/Pricing/Pricing"));
const Login = lazy(() => import("./containers/Auth/Login"));

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const redirectPath = useSelector(
    (state) => state.authentication.authRedirectPath
  );
  const isAuthentication = useSelector((state) => state.authentication.token);

  useEffect(() => {
    const onMessage = (e) => {
      if (!e.data.token) {
        return;
      }

      const data = e.data;
      const token = e.data.token;

      delete data.token;

      localStorage.setItem("elements_user", JSON.stringify(data));
      localStorage.setItem("elements_token", JSON.stringify(token));

      dispatch(authRedirectPath("/create"));
    };

    window.addEventListener("message", onMessage, false);

    return () => window.removeEventListener("message", onMessage);
  }, [history, redirectPath, dispatch]);

  useEffect(() => {
    dispatch(checkAutoAuth());

    dispatch(authRedirectPath("/create"));
  }, [dispatch, redirectPath]);

  let redirect = "";

  if (isAuthentication) {
    redirect = <Redirect to={redirectPath} />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/pricing" render={(props) => <Pricing {...props} />} />
        <Route path="/heroes" render={(props) => <Heroes {...props} />} />
        <Route
          path="/goodluck/:isframework"
          render={(props) => <Goodluck {...props} />}
        />
        <Route path="/create" render={(props) => <Main {...props} />} />
        <Route path="/" exact component={Landing} />
        {redirect}
      </Switch>
    </Suspense>
  );
}

export default App;
