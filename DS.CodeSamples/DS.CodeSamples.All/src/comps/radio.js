import React, { Component } from "react";
import { RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class RadioDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="flex-1 font-bold">Radio</div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <RadioButtonComponent
                  label="-"
                  checked={true}
                  cssClass="abi-css"
                />
              </div>
              <div className="flex-1">
                <RadioButtonComponent
                  label="-"
                  disabled={true}
                  checked={true}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <RadioButtonComponent label="-" checked={true} />
              </div>
              <div className="flex-1">
                <RadioButtonComponent
                  label="-"
                  disabled={true}
                  checked={true}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <RadioButtonComponent label="-" checked={true} />
              </div>
              <div className="flex-1">
                <RadioButtonComponent
                  label="-"
                  disabled={true}
                  checked={true}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <RadioButtonComponent label="-" checked={true} />
              </div>
              <div className="flex-1">
                <RadioButtonComponent
                  label="-"
                  disabled={true}
                  checked={true}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <RadioButtonComponent label="-" />
              </div>
              <div className="flex-1">
                <RadioButtonComponent label="-" disabled={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RadioDoc;
