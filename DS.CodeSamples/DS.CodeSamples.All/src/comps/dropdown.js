import React, { Component } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

class DropdownDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="pr-16 font-bold">Slider</div>
          <div className="flex-1 text-center px-2">
            <DropDownListComponent placeholder="Select" popupHeight="220px" />
          </div>
          <div className="flex-1 text-center px-2">
            <DropDownListComponent placeholder="Select" popupHeight="220px" />
          </div>
          <div className="flex-1 text-center px-2">
            <DropDownListComponent placeholder="Select" popupHeight="220px" />
          </div>
        </div>
      </div>
    );
  }
}

export default DropdownDoc;
