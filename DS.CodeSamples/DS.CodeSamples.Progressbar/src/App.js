import React, { Component } from "react";
import {
  ProgressButtonComponent,
  ProgressEventArgs
} from "@syncfusion/ej2-react-splitbuttons";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class App extends React.Component {
  begin(args) {
    args.step = 20;
  }

  render() {
    return (
      <ProgressButtonComponent
        content="Start"
        enableProgress
        begin={this.begin}
        cssClass="e-hide-spinner"
      />
    );
  }
}
