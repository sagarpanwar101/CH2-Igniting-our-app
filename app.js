import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{},"Hello world");

//Nested react elements inside container div and rendering in root

const heading1 = React.createElement("h1",{id:"title"},"Namaste React");
const heading2 = React.createElement("h2",{id:"nested_subtitle"},"Nested React elements")
const root = ReactDOM.createRoot(document.getElementById("root"));
const container=React.createElement("div",{id:"content"},{heading1,heading2});

root.render(heading);
