import React, { Component } from "react";
import { ProgressButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class ProgressbarDoc extends Component {
  constructor() {
    super(...arguments);
  }
  startProgress(args) {
    this.progressObj.start();
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Progressbar</div>
          <div className="flex-1 px-2">
            <ProgressButtonComponent
              enableProgress
              duration={4000}
              cssClass="e-hide-spinner"
              ref={scope => {
                this.progressObj = scope;
              }}
              disabled
            />
            <button onClick={this.startProgress.bind(this)}>Start</button>
          </div>
        </div>
      </div>
    );
  }
}
