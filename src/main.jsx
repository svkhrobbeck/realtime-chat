import "./index.scss";

import ReactDOM from "react-dom/client";
import ContextProvider from "./context/Context";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
