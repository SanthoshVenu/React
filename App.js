const heading2 = React.createElement(
  "h2",
  { id: "heading2", sandy: "kandy" },
  "This is children"
);
const heading1 = React.createElement(
  "h1",
  { id: "heading1", sandy: "kandy" },
  "This is parent"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [heading1, heading2]),
  React.createElement("div", { id: "chil2" }, [heading1, heading2]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
git 