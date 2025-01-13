import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
