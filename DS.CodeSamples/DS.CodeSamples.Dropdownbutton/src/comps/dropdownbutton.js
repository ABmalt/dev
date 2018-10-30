import React, { Component } from "react";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

export default class DropDownButtonDoc extends Component {
  constructor() {
    super(...arguments);
    this.items = [
      {
        text: "Dashboard"
      },
      {
        text: "Notifications"
      },
      {
        text: "User Settings"
      },
      {
        text: "Log Out"
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
              Profile
            </DropDownButtonComponent>
            <span>&nbsp;</span>
            <DropDownButtonComponent cssClass="e-primary" disabled={true}>
              Profile
            </DropDownButtonComponent>
          </div>

          <div className="flex-1 px-2">
            <DropDownButtonComponent items={this.items} cssClass="e-outline">
              Profile
            </DropDownButtonComponent>
            <span>&nbsp;</span>
            <DropDownButtonComponent cssClass="e-outline" disabled={true}>
              Profile
            </DropDownButtonComponent>
          </div>
          <div className="flex-1 px-2">
            <DropDownButtonComponent items={this.items} cssClass="e-flat">
              Profile
            </DropDownButtonComponent>
            <span>&nbsp;</span>
            <DropDownButtonComponent cssClass="e-flat" disabled={true}>
              Profile
            </DropDownButtonComponent>
          </div>
        </div>
      </div>
    );
  }
}
