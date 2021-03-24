import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router";
import { Loading } from "./components";
import Landing from "./containers/Landing/Landing";

const Main = lazy(() => import("./containers/Main/Main"));
const Goodluck = lazy(() => import("./containers/Goodluck/Goodluck"));
const Heroes = lazy(() => import("./containers/Heroes/Heroes"));
const Pricing = lazy(() => import("./containers/Pricing/Pricing"));
const Login = lazy(() => import("./containers/Auth/Login"));

function App() {
  const history = useHistory();

  useEffect(() => {
    const onMessage = (e) => {
      if (!e.data.token) {
        return;
      }
      console.log(e.data);
      localStorage.setItem("elements_user", { ...e.data });

      history.push("/");
    };

    window.addEventListener("message", onMessage, false);

    return () => window.removeEventListener("message", onMessage);
  }, [history]);

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
        <Route path="*" exact component={Landing} />
      </Switch>
    </Suspense>
  );
}

export default App;
