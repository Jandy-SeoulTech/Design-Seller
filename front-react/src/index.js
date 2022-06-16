import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from './store-config'
import { Provider } from 'react-redux';
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <Provider store={store}>
    <CookiesProvider>
    <App />
    </CookiesProvider>
  </Provider>
);

reportWebVitals();
