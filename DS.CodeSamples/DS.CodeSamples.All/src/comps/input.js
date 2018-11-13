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
              <div className="e-float-input e-input-group">
                <input className="e-control e-textbox" type="text" />
                <span className="e-float-line" />
                <label className="e-float-text e-label-bottom">With Icon</label>
                <span className="e-input-group-icon material-icons account_box" />
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
              <div className="e-float-input">
                <textarea required />
                <span className="e-float-line" />
                <label className="e-float-text">TextArea</label>
              </div>
            </div>

            <div className="flex-1 px-2">
              <div className="e-float-input">
                <textarea required />
                <span className="e-float-line" />
                <label className="e-float-text">TextArea</label>
              </div>
            </div>

            <div className="flex-1 px-2">
              <div className="e-float-input">
                <textarea placeholder="Disabled" disabled={true} />
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
