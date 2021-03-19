import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
import { Loading } from "./components";
import Landing from "./containers/Landing/Landing";
import axios from "./axios_db";

const Main = lazy(() => import("./containers/Main/Main"));
const Goodluck = lazy(() => import("./containers/Goodluck/Goodluck"));
const Heroes = lazy(() => import("./containers/Heroes/Heroes"));
const Pricing = lazy(() => import("./containers/Pricing/Pricing"));
const Login = lazy(() => import("./containers/Auth/Login"));

function App() {
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("/sanctum/csrf-cookie")
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
        <Route path="*" component={Landing} />
      </Switch>
    </Suspense>
  );
}

export default App;
