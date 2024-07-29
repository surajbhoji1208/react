import React from "react";
import ReactDOM from "react-dom";
{
  /* <div id="parent1">
    <div id="child2">
        <h1>hiii</h1>
        <h1>hello</h1>
    </div>
</div>
<div id="parent2">
    <div id="child2">
        <h1>hiii</h1>
        <h1>hello</h1>
    </div>
</div> */
}

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "hiii"),React.createElement("h1", { id: "heading" }, "hello")]
  )
);

const jsxHeading = <h1 id="parent">this is from jsx</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
