import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import { Provider } from "react-redux";
import { store } from "./store"; // Make sure you are importing the store correctly
import App from "./App";
import "./styles.css";

// Find the root element
const container = document.getElementById("root");

if (container) {
  // Create a root and render the app
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        {" "}
        {/* Wrap App with Provider */}
        <App />
      </Provider>
    </React.StrictMode>
  );
}
