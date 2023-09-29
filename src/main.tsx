// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppContext } from "./context/AppContext.tsx";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
axios.defaults.baseURL = baseUrl;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContext>
    <App />
  </AppContext>
);
