import { lazy, Suspense } from "react";
import Layout from "./hoc/Layout/Layout";
import { Switch, Route, Redirect } from "react-router";

const Main = lazy(() => import("./containers/Main/Main"));
const Goodluck = lazy(() => import("./containers/Goodluck/Goodluck"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/goodluck" render={(props) => <Goodluck {...props} />} />
          <Route path="/create" exact render={(props) => <Main {...props} />} />
          <Redirect to="/create" />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
