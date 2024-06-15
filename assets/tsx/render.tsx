import React from "react";
import ReactDOM from "react-dom/client";
import Index from "../tsx/index.tsx";
import "../scss/index.scss";
import { ShortenLinkProvider } from "./hooks/ShortenLinkContext.tsx";

const app = ReactDOM.createRoot(document.querySelector(".root-container")!);
app.render(
  <React.StrictMode>
    <ShortenLinkProvider>
      <Index />
    </ShortenLinkProvider>
  </React.StrictMode>
);
