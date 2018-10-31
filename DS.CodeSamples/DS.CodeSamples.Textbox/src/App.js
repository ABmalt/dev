import React, { Component } from "react";

import InputDoc from "./comps/input";
import InputValidatorDoc from "./comps/input_validator";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  render() {
    return (
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mb-64 pb-64">
        <InputDoc />
        <InputValidatorDoc />
      </div>
    );
  }
}
export default App;
