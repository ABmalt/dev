import React, { Component } from "react";
import {
  MenuComponent,
  FieldsSettingsModel
} from "@syncfusion/ej2-react-navigations";

export default class MenuDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">MenuComponent</div>

          <div className="flex-1">
            <MenuComponent items={this.data} fields={this.menuFields} />
          </div>
        </div>
      </div>
    );
  }
}
