import React, { Component } from "react";
import { RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

class RadioDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex">
          <div className="flex-1 font-bold">Radio</div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <RadioButtonComponent checked={true} className="alt2" />
              </div>
              <div className="flex-1">
                <RadioButtonComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <RadioButtonComponent checked={true} />
              </div>
              <div className="flex-1">
                <RadioButtonComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <RadioButtonComponent checked={true} />
              </div>
              <div className="flex-1">
                <RadioButtonComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <RadioButtonComponent checked={true} />
              </div>
              <div className="flex-1">
                <RadioButtonComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <RadioButtonComponent />
              </div>
              <div className="flex-1">
                <RadioButtonComponent disabled={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RadioDoc;
