import React, { Component } from "react";
import { SliderComponent } from "@syncfusion/ej2-react-inputs";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

class SilderDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="pr-16 font-bold">Slider</div>
          <div className="flex-1 text-center px-2">
            <SliderComponent cssClass="abi-css" />
          </div>
          <div className="flex-1 text-center px-2">
            <SliderComponent cssClass="abi-css" />
          </div>
          <div className="flex-1 text-center px-2">
            <SliderComponent cssClass="abi-css" />
          </div>
        </div>
      </div>
    );
  }
}

export default SilderDoc;
