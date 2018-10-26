import React, { Component } from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class InputDoc extends Component {
  render() {
    return (
      <div>
        <div className="mt-8 Comp">
          <div className="md:flex ">
            <div className="w-48 font-bold">TextBox</div>

            <div className="flex-1 px-2">
              <TextBoxComponent
                placeholder="Name"
                floatLabelType="Auto"
                showClearButton={true}
              />
            </div>
            <div className="flex-1 px-2">
              <div className="e-float-input e-input-group">
                <input required={true} type="text" />
                <span className="e-float-line" />
                <label className="e-float-text">With Icon</label>
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
            <div className="w-48 font-bold">TextBox</div>

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
              <div className="e-input-group e-disabled">
                <div className="e-input-in-wrap">
                  <span className="e-input-group-icon e-input-calendar" />
                  <input className="e-input" type="text" placeholder="Text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
