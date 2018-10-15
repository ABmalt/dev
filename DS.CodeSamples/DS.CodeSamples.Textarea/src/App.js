import React, { Component } from "react";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Textarea</h1>
        <textarea className="e-input" placeholder="Address" />
        <div className="e-float-input">
          <textarea required />
          <span className="e-float-line" />
          <label className="e-float-text"> Address</label>
        </div>
      </div>
    );
  }
}
