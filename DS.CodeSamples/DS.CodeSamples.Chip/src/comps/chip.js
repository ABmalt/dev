import React, { Component } from "react";
// import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";

export default class ChipDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Chip</div>
          <div className="flex-1">
            <div class="md-chip">
              <span>Chip chip chip</span>
              <button type="button" class="md-chip-remove" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
