import React, { Component } from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class InputDoc extends Component {
  render() {
    return (
      <div>
        <div className="mt-8 Comp">
          <div className="flex">
            <div className="w-48 font-bold">TextBox</div>

            <div className="flex-1 px-2">
              <TextBoxComponent placeholder="Name" />
            </div>

            <div className="flex-1 px-2">
              <div className="e-input-group">
                <input className="e-input" type="text" placeholder="Date" />
                <span className="e-input-group-icon e-input-calendar" />
              </div>
            </div>

            <div className="flex-1 px-2">
              <div className="e-input-group e-float-icon---left e-disabled">
                <span className="e-input-group-icon e-input-picture" />
                <div className="e-input-in-wrap">
                  <input
                    className="e-input"
                    type="text"
                    placeholder="Upload Picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
