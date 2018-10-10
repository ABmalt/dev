import React, { Component } from "react";
import { RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
export default class App extends Component {
  render() {
    return (
      <div>
        <RadioButtonComponent checked={true} label="a" name="r" value="a" />
        <br />
        <RadioButtonComponent label="b" name="r" value="b" />
      </div>
    );
  }
}
