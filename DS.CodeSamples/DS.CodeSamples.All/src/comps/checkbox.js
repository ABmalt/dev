import React, { Component } from "react";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";

export default class CheckboxDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">CheckBox</div>

          <div className="flex-1">
            <div className="flex">
              <div className="flex-1">
                <CheckBoxComponent label="abc" checked={true} />
                <br />
                <CheckBoxComponent label="abc" indeterminate={true} />
              </div>

              <div className="flex-1">
                <CheckBoxComponent label="abc" />
              </div>

              <div className="flex-1">
                <CheckBoxComponent label="abc" checked={true} disabled={true} />
              </div>

              <div className="flex-1">
                <CheckBoxComponent label="abc" disabled={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
