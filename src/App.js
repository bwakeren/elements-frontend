import { lazy, Suspense } from "react";
import Layout from "./hoc/Layout/Layout";

const Main = lazy(() => import("./containers/Main/Main"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Main />
      </Suspense>
    </Layout>
  );
}

export default App;
