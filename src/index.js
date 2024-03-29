import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import productsReducer from "./store/reducers/products";
import contentsReducer from "./store/reducers/contents";
import categoriesReducer from "./store/reducers/categories";
import downloadReducer from "./store/reducers/download";
import authenticationReducer from "./store/reducers/authentication";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const reducers = combineReducers({
  product: productsReducer,
  content: contentsReducer,
  category: categoriesReducer,
  download: downloadReducer,
  authentication: authenticationReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
