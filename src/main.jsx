import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { SearchDataProvider } from "./store/SearchDataProvider.jsx";
import { ModalProvider } from "./store/ModalProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchDataProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </SearchDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
