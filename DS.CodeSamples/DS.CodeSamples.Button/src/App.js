import React, { Component } from "react";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

// To render Button.
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="mt-8 Comp">
          <div className="">
            <div className="w-48 font-bold">Button</div>
            <div className="p-4">
              <ButtonComponent cssClass="e-primary">Primary</ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-round e-primary"
                iconCss="e-icons e-add-icon"
              />
              <span>&nbsp;</span>

              <ButtonComponent
                cssClass="e-round e-primary"
                iconCss="e-icons e-add-icon"
                disabled
              />
            </div>
            <div className="p-4">
              <ButtonComponent cssClass="e-outline">Outline</ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-round e-outline"
                iconCss="e-icons e-add-icon"
              />
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-round e-outline"
                iconCss="e-icons e-add-icon"
                disabled
              />
            </div>
            <div className="p-4">
              <ButtonComponent cssClass="e-flat">Flat</ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-round e-flat"
                iconCss="e-icons e-add-icon"
              />
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-round e-flat"
                iconCss="e-icons e-add-icon"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
