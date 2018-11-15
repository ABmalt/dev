import React, { Component } from "react";

import SidebarDoc from "./comps/sidebar";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  render() {
    return <SidebarDoc />;
  }
}
export default App;
