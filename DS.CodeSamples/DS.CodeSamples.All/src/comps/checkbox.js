import React, { Component } from "react";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
export default class CheckboxDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="w-48 font-bold">CheckBox</div>

          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <CheckBoxComponent label="abc" checked={true} />
              </div>

              <div className="flex-1">
                <CheckBoxComponent label="abc" indeterminate={true} />
              </div>
              <div className="flex-1">
                <CheckBoxComponent label="abc" disabled={true} />
              </div>

              <div className="flex-1">
                <CheckBoxComponent
                  label="abc"
                  indeterminate={true}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
