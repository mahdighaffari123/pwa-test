import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    // const isConfirmed = window.confirm(
    //   "A new Version is available. Refresh now?"
    // );
    // if (isConfirmed) window.location.reload();
  },
});

updateSW();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
