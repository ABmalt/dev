import React, { Component } from "react";
import {
  TextBoxComponent,
  MaskedTextBoxComponent
} from "@syncfusion/ej2-react-inputs";

export default class InputDoc extends Component {
  onInputFocus(args) {
    if (!args.target.parentElement.classList.contains("e-input-in-wrap")) {
      args.target.parentElement.classList.add("e-input-focus");
    } else {
      args.target.parentElement.parentElement.classList.add("e-input-focus");
    }
  }
  onInputBlur(args) {
    if (!args.target.parentElement.classList.contains("e-input-in-wrap")) {
      args.target.parentElement.classList.remove("e-input-focus");
    } else {
      args.target.parentElement.parentElement.classList.remove("e-input-focus");
    }
  }

  render() {
    return (
      <div>
        <div className="mt-8 Comp">
          <div className="md:flex ">
            <div className="w-48 font-bold">TextBox</div>

            <div className="flex-1 px-2">
              <TextBoxComponent placeholder="Label" floatLabelType="Auto" />
            </div>
            <div className="flex-1 px-2">
              <div className="e-float-input e-input-group">
                <input
                  type="text"
                  className="e-control e-textbox"
                  onFocus={this.onInputFocus}
                  onBlur={this.onInputBlur}
                />
                <span className="e-float-line" />
                <label className="e-float-text e-label-bottom">Icon</label>
                <span className="e-input-group-icon material-icons account_box" />
              </div>
            </div>
            <div className="flex-1 px-2">
              <div className="e-float-input e-input-group">
                <span className="e-input-group-icon material-icons account_box" />
                <input
                  type="text"
                  className="e-control e-textbox"
                  onFocus={this.onInputFocus}
                  onBlur={this.onInputBlur}
                />
                <span className="e-float-line" />
                <label
                  className="e-float-text e-label-bottom"
                  style={{ left: 30 + "px" }}
                >
                  Icons
                </label>
                <span className="e-input-group-icon material-icons account_box" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 Comp">
          <div className="md:flex ">
            <div className="w-48 font-bold">MaskedTextBox</div>

            <div className="flex-1 px-2">
              <MaskedTextBoxComponent
                mask={"\\(999\\) 999-9999"}
                placeholder={"(___) ___-____"}
                floatLabelType="Never"
              />
            </div>
            <div className="flex-1 px-2">
              <MaskedTextBoxComponent
                mask="[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9]"
                placeholder="IP Address"
                floatLabelType="Auto"
              />
            </div>
            <div className="flex-1 px-2">
              <MaskedTextBoxComponent
                mask={"\\(999\\) 999-9999"}
                placeholder={"Disabled"}
                floatLabelType="Never"
                enabled={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
