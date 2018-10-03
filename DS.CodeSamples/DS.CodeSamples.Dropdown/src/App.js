import React, { Component } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  constructor() {
    super(...arguments);
    this.list = [
      { Id: "Game2", Game: "Badminton" },
      { Id: "Game4", Game: "Cricket" },
      { Id: "Game7", Game: "Hockey" },
      { Id: "Game8", Game: "Rugby" },
      { Id: "Game9", Game: "Snooker" },
      { Id: "Game10", Game: "Tennis" }
    ];
    // maps the appropriate column to field
    this.field = { text: "Game", value: "Id" };
    // set the value
    this.val = "Game4";
  }
  render() {
    return (
      <div className="App">
        <h1>DropDowns</h1>
        <br />
        <DropDownListComponent
          placeholder="Select…"
          dataSource={this.list}
          fields={this.field}
          value={this.val}
        />
      </div>
    );
  }
}

export default App;
