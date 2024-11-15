import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { store } from "./redux/store.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
