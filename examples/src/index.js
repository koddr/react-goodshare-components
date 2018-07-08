// @flow
import React from "react";
import { render } from "react-dom";
// Providers
import { FacebookFullButton } from "../../src/providers/Facebook";
// Checking root element
const root = document.getElementById("root");
if (root === null) throw new Error("Error! Root element does not exists");
// Default share
const Goodshare = () => (
  <div>
    <FacebookFullButton />
  </div>
);
// Render
render(<Goodshare />, root);
