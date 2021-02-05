import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";

const Main = lazy(() => import("./containers/Main/Main"));
const Goodluck = lazy(() => import("./containers/Goodluck/Goodluck"));
const Heroes = lazy(() => import("./containers/Heroes/Heroes"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="/heroes" render={(props) => <Heroes {...props} />} />
        <Route path="/goodluck" render={(props) => <Goodluck {...props} />} />
        <Route path="/create" exact render={(props) => <Main {...props} />} />
        <Redirect to="/create" />
      </Switch>
    </Suspense>
  );
}

export default App;
