import React, { Component } from "react";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

export default class DropDownButtonDoc extends Component {
  constructor() {
    super(...arguments);
    this.items = [
      {
        text: "Button 1"
      },
      {
        text: "Button 2"
      },
      {
        text: "Button 3"
      },
      {
        text: "Button 4"
      }
    ];
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">DropDownButton</div>

          <div className="flex-1 px-2">
            <DropDownButtonComponent items={this.items} cssClass="e-primary">
              Button
            </DropDownButtonComponent>
            <span>&nbsp;</span>
            <DropDownButtonComponent cssClass="e-primary" disabled={true}>
              Button
            </DropDownButtonComponent>
          </div>

          <div className="flex-1 px-2">
            <DropDownButtonComponent items={this.items} cssClass="e-outline">
              Button
            </DropDownButtonComponent>
            <span>&nbsp;</span>
            <DropDownButtonComponent cssClass="e-outline" disabled={true}>
              Button
            </DropDownButtonComponent>
          </div>
          <div className="flex-1 px-2">
            <DropDownButtonComponent items={this.items} cssClass="e-flat">
              Button
            </DropDownButtonComponent>
            <span>&nbsp;</span>
            <DropDownButtonComponent cssClass="e-flat" disabled={true}>
              Button
            </DropDownButtonComponent>
          </div>
        </div>
      </div>
    );
  }
}
