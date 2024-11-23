import React from "react";
import ReactDOM from "react-dom/client"; // Usa 'react-dom/client' en React 18
import App from "./App";
import "./index.css"; // Si tienes estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
