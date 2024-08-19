import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseContext } from "./contexts/myContext";
import { app } from "./firebase/Config";
import Context from "./contexts/myContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={{ app }}>
      <Context>
      <App />
    </Context>
    </FirebaseContext.Provider>
);
