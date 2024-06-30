import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Main/App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "./Consta.scss";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
