import React, { Component } from "react";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

class SwitchDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="flex-1 font-bold">Switch</div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <SwitchComponent checked={true} cssClass="abi-css" />
              </div>
              <div className="flex-1">
                <SwitchComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <SwitchComponent checked={true} />
              </div>
              <div className="flex-1">
                <SwitchComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <SwitchComponent checked={true} />
              </div>
              <div className="flex-1">
                <SwitchComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <SwitchComponent checked={true} />
              </div>
              <div className="flex-1">
                <SwitchComponent disabled={true} checked={true} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <SwitchComponent />
              </div>
              <div className="flex-1">
                <SwitchComponent disabled={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SwitchDoc;
