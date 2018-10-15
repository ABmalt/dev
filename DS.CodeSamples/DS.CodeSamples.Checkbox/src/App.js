import React, { Component } from "react";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
export default class App extends Component {
  // function to handle the CheckBox change event
  onChange(args) {
    this.checkboxObj.label = "CheckBox: " + args.checked;
  }
  render() {
    return (
      <div className="App">
        <br />
        <h1>CheckBox Component</h1>
        <br />
        <br />
        <CheckBoxComponent
          checked={true}
          label="CheckBox: true"
          ref={scope => {
            this.checkboxObj = scope;
          }}
          change={this.onChange.bind(this)}
        />
        <br />
        <br />
        <CheckBoxComponent
          label="Checked, Disabled"
          disabled={true}
          checked={true}
        />
        <br />
        <br />
        <CheckBoxComponent
          label="Indeterminate, Disabled"
          indeterminate={true}
          disabled={true}
        />
      </div>
    );
  }
}
