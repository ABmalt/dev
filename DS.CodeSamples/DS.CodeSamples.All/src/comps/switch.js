import React, { Component } from "react";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class SwitchDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Switch</div>

          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1">
                <SwitchComponent checked={true} cssClass="malt-switch-alt3" />
              </div>

              <div className="flex-1">
                <SwitchComponent />
              </div>
              <div className="flex-1">
                <SwitchComponent
                  disabled={true}
                  cssClass="malt-switch-alt3"
                  checked={true}
                />
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
