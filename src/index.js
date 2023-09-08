import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import { ThemeProvider } from "../src/context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
