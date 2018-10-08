import * as React from "react";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class DropDownButtonDoc extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.items = [
      {
        text: "Dashboard",
        iconCss: "e-ddb-icons e-dashboard"
      },
      {
        text: "Notifications",
        iconCss: "e-ddb-icons e-notifications"
      },
      {
        text: "User Settings",
        iconCss: "e-ddb-icons e-settings"
      },
      {
        text: "Log Out",
        iconCss: "e-ddb-icons e-logout"
      }
    ];
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="pr-16 font-bold">DropDownButton</div>

          <div className="flex-1 px-2">
            <DropDownButtonComponent items={this.items} cssClass="e-primary">
              Profile
            </DropDownButtonComponent>
          </div>
          <div className="flex-1 px-2">
            <DropDownButtonComponent
              items={this.items}
              iconCss="e-ddb-icons e-profile"
              disabled
            >
              Profile
            </DropDownButtonComponent>
          </div>

          <div className="flex-1 px-2">
            <DropDownButtonComponent items={this.items} cssClass="e-caret-hide">
              Profile
            </DropDownButtonComponent>
          </div>
        </div>
      </div>
    );
  }
}
