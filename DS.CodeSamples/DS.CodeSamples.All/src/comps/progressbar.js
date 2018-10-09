import React, { Component } from "react";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class ProgressbarDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="w-48 font-bold">Progressbar</div>
          <div className="flex-1 px-2">
            <div
              className="e-upload e-control e-keyboard"
              style={{ border: 0 }}
            >
              <ul className="e-upload-files" style={{ border: 0 }}>
                <li
                  className="e-upload-file-list"
                  style={{ border: 0, minHeight: 0 }}
                >
                  <span className="e-file-container" style={{ margin: 0 }}>
                    <span className="e-upload-progress-wrap">
                      <span className="e-progress-inner-wrap">
                        <progressbar
                          value="0"
                          max="100"
                          className="e-upload-progress-bar e-upload-progress"
                          style={{ width: 50 + "%" }}
                        />
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
