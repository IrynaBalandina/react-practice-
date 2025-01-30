import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { PubContextProvider } from "./context/PubContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <PubContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </PubContextProvider>
  // </StrictMode>
);