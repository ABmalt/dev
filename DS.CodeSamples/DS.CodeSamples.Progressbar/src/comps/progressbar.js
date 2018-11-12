import React, { Component } from "react";
import { ProgressButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

export default class ProgressbarDoc extends Component {
  constructor() {
    super(...arguments);
    this.duration = 6000;
  }
  startProgress1(args) {
    this.progressObj1.start();
  }
  startProgress2(args) {
    this.progressObj2.start();
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Progressbar</div>
          <div className="flex-1 px-2">
            <ProgressButtonComponent
              enableProgress
              duration={this.duration}
              cssClass="e-hide-spinner"
              ref={scope => {
                this.progressObj1 = scope;
              }}
              disabled
            />
            <button onClick={this.startProgress1.bind(this)}>Start</button>
          </div>{" "}
          <div className="flex-1 px-2">
            <ProgressButtonComponent
              enableProgress
              duration={this.duration}
              cssClass="e-hide-spinner"
              ref={scope => {
                this.progressObj2 = scope;
              }}
              disabled
            />
            <button onClick={this.startProgress2.bind(this)}>Start</button>
          </div>
        </div>
      </div>
    );
  }
}
