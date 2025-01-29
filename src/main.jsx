
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { PubContextProvider } from "./context/PubContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
 // <StrictMode>
 <PubContextProvider>
 <BrowserRouter>
 <Provider store = {store}>
   <App />
   </Provider>
 </BrowserRouter>
</PubContextProvider>
// </StrictMode>
);

