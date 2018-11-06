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
              <span class="e-chips" data-value="Game2" title="Badminton">
                <span class="e-chipcontent">Badminton</span>
                <span class="e-chips-close" />
              </span>
              <span class="e-chips" data-value="Game2" title="Badminton">
                <span class="e-chipcontent">Badminton</span>
                <span class="e-chips-close" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
