import "./index.scss";

import ReactDOM from "react-dom/client";
import ContextProvider from "./context/Context";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
