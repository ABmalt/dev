import React, { Component } from "react";
// import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";

export default class ChipDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Chip</div>
          <div className="flex-1">
            <div className="e-multi-select-wrapper">
              <span className="e-chips">
                <span className="e-chipcontent">Default</span>
                <span className="e-chips-close" />
              </span>
              <span className="e-chips e-chip-selected">
                <span className="e-chipcontent">Selected</span>
                <span className="e-chips-close" />
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="e-multi-select-wrapper">
              <span className="e-chips">
                <span className="material-icons account_circle mr-1 -ml-1" />
                <span className="e-chipcontent">Default</span>
                <span className="e-chips-close" />
              </span>
              <span className="e-chips e-chip-selected">
                <span className="material-icons account_circle mr-1 -ml-1" />
                <span className="e-chipcontent">Selected</span>
                <span className="e-chips-close" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
