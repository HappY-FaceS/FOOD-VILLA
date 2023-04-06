import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  'Namaste Everyone !'
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Welcome to Basic of React ....."
);

const container = React.createElement(
  "div",
  {
    id: "container",
    hello: "world",
  },
  [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(container);
