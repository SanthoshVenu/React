import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";

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
