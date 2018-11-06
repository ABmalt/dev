import React, { Component } from "react";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";

export default class AutoCompleteDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">CheckBox</div>

          <div className="flex-1">
            <AutoCompleteComponent id="atcelement" />
          </div>
        </div>
      </div>
    );
  }
}
