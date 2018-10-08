import React, { Component } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class App extends Component {
  constructor() {
    super(...arguments);
    this.list = [
      { Id: "i1", Txt: "Badminton" },
      { Id: "i2", Txt: "Cricket" },
      { Id: "i3", Txt: "Snooker" }
    ];
    // maps columns to field
    this.field = { value: "Id", text: "Txt" };
  }
  render() {
    return (
      <div className="App">
        <h1 className="my-12">Dropdown</h1>
        <div className="flex">
          <DropDownListComponent
            placeholder="Select One"
            dataSource={this.list}
            fields={this.field}
            value={this.val}
            cssClass="bg-warmgray10"
          />

          <DropDownListComponent
            placeholder="Select One"
            dataSource={this.list}
            fields={this.field}
            value={this.val}
            cssClass="bg-warmgray10"
          />
        </div>
      </div>
    );
  }
}
