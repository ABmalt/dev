import React, { Component } from "react";
// import {MenuComponent,FieldsSettingsModel} from "@syncfusion/ej2-react-navigations";
import { MenuComponent } from "@syncfusion/ej2-react-navigations";

export default class MenuDoc extends Component {
  constructor() {
    super(...arguments);
    // define the JSON of data
    this.list = [
      { Id: "Game1", Sports: "Football" },
      { Id: "Game2", Sports: "Badminton" },
      { Id: "Game3", Sports: "Basketball" }
    ];
    // maps the appropriate column to fields property
    this.fields = { text: "Sports", value: "Id" };
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Menu</div>

          <div className="flex-1">
            <MenuComponent items={this.list} fields={this.fields} />
          </div>
        </div>
      </div>
    );
  }
}
