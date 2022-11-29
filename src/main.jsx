import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AssetProvider } from "./context/AssetContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AssetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AssetProvider>
  </React.StrictMode>
);
