import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

function Name() {
  return (
    <div>
      <App />
    </div>
  );
}

const container = document.getElementById("root");
const page = ReactDOM.createRoot(container);

page.render(<Name />);
