import React, { Component } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class DropdownDoc extends Component {
  constructor() {
    super(...arguments);
    this.list = [
      { Id: "game1", group: "Group A", icss: "e-a", Game: "Badminton" },
      { Id: "game2", group: "Group A", icss: "e-b", Game: "Football" },
      { Id: "game3", group: "Group B", icss: "e-c", Game: "Tennis" }
    ];

    // maps the appropriate column to fields property
    this.fields1 = { text: "Game", value: "Id" };
    this.fields2 = { text: "Game", value: "Id", groupBy: "group" };
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Dropdown</div>
          <div className="flex-1 px-2">
            <DropDownListComponent
              placeholder="Select"
              dataSource={this.list}
              fields={this.fields1}
            />
          </div>
          <div className="flex-1 px-2">
            <DropDownListComponent
              placeholder="Groups"
              dataSource={this.list}
              fields={this.fields2}
            />
          </div>
          <div className="flex-1 px-2">
            <DropDownListComponent placeholder="Disabled" enabled={false} />
          </div>
        </div>
      </div>
    );
  }
}
