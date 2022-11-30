import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AssetProvider } from "./context/AssetContext";
import { HeaderProvider } from "./context/HeaderContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AssetProvider>
      <HeaderProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HeaderProvider>
    </AssetProvider>
  </React.StrictMode>
);
