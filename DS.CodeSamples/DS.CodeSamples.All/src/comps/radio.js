import React, { Component } from "react";
import { RadioButtonComponent } from "@syncfusion/ej2-react-buttons";

export default class RadioDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Radio</div>

          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <RadioButtonComponent
                  label="abc"
                  cssClass="malt-switch-alt1"
                  checked={true}
                />
              </div>

              <div className="flex-1">
                <RadioButtonComponent label="abc" />
              </div>
              <div className="flex-1">
                <RadioButtonComponent
                  label="abc"
                  cssClass="malt-switch-alt1"
                  disabled={true}
                  checked={true}
                />
              </div>

              <div className="flex-1">
                <RadioButtonComponent label="abc" disabled={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
