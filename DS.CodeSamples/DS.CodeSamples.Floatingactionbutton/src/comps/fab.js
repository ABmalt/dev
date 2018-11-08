import React, { Component } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default class App extends Component {
  render() {
    return (
      <ButtonComponent
        cssClass="e-round"
        iconCss="material_icons add"
        isPrimary={true}
      />
    );
  }
}
