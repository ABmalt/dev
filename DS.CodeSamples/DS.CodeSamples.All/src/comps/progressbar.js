import React, { Component } from "react";
import {
  ProgressButtonComponent,
  ProgressEventArgs
} from "@syncfusion/ej2-react-splitbuttons";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class ProgressbarDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Progressbar</div>
          <div className="flex-1 px-2">
            <button
              className="e-control e-progress-btn e-hide-spinner e-btn e-progress-active"
              disabled
            >
              <span className="e-spinner" />
              <span className="e-progress" style={{ width: "33%" }} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
