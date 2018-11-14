import React, { Component } from "react";

import CheckboxDoc from "./comps/checkbox";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  render() {
    return (
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mb-64 pb-64">
        <CheckboxDoc />
      </div>
    );
  }
}
export default App;
