import React, { Component } from "react";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

class CheckboxDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex">
          <div className="flex-1 font-bold">CheckBox</div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <CheckBoxComponent checked={true} />
              </div>
              <div className="flex-1">
                <CheckBoxComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <CheckBoxComponent checked={true} />
              </div>
              <div className="flex-1">
                <CheckBoxComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <CheckBoxComponent checked={true} />
              </div>
              <div className="flex-1">
                <CheckBoxComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <CheckBoxComponent checked={true} />
              </div>
              <div className="flex-1">
                <CheckBoxComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <CheckBoxComponent />
              </div>
              <div className="flex-1">
                <CheckBoxComponent disabled={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxDoc;
