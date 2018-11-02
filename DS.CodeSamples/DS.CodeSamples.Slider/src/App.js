import React, { Component } from "react";

import SliderDoc from "./comps/slider";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  render() {
    return (
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mb-64 pb-64">
        <SliderDoc />
      </div>
    );
  }
}
export default App;
