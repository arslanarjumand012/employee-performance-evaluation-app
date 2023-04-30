import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { ThemeProvider } from "./theme";

import "./assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <MainRouter />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </Suspense>
);
