import React, { Component } from "react";
import {
  TextBoxComponent,
  MaskedTextBoxComponent
} from "@syncfusion/ej2-react-inputs";

export default class InputDoc extends Component {
  render() {
    return (
      <div>
        <div className="mt-8 Comp">
          <div className="md:flex ">
            <div className="w-48 font-bold">TextBox</div>

            <div className="flex-1 px-2">
              <TextBoxComponent
                placeholder="Clear Button"
                floatLabelType="Auto"
                showClearButton={true}
              />
            </div>
            <div className="flex-1 px-2">
              <div className="e-float-input e-control-wrapper e-input-group">
                <input className="e-control e-textbox" type="text" />
                <span className="e-float-line" />
                <label className="e-float-text e-label-bottom">With Icon</label>
                <span className="e-input-group-icon e-input-calendar" />
              </div>
            </div>
            <div className="flex-1 px-2">
              <TextBoxComponent
                placeholder="Disabled"
                floatLabelType="Auto"
                disabled={true}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 Comp">
          <div className="md:flex ">
            <div className="w-48 font-bold">TextArea</div>

            <div className="flex-1 px-2">
              <textarea className="e-input" placeholder="Address" />
            </div>

            <div className="flex-1 px-2">
              <div className="e-float-input">
                <textarea required />
                <span className="e-float-line" />
                <label className="e-float-text">Address</label>
              </div>
            </div>

            <div className="flex-1 px-2">
              <textarea
                className="e-input"
                placeholder="Disabled"
                disabled={true}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 Comp">
          <div className="md:flex ">
            <div className="w-48 font-bold">MaskedTextBox</div>

            <div className="flex-1 px-2">
              <MaskedTextBoxComponent
                mask={"#####"}
                placeholder={"5 Numbers"}
                floatLabelType="Always"
              />
            </div>

            <div className="flex-1 px-2">
              <MaskedTextBoxComponent
                mask={"LLLLLL"}
                placeholder={"6 Letters"}
                floatLabelType="Always"
              />
            </div>

            <div className="flex-1 px-2">
              <MaskedTextBoxComponent
                mask="[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9]"
                placeholder="IP Address"
                floatLabelType="Always"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
