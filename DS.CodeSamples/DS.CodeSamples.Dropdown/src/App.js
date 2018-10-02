import React, { Component } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  constructor() {
    super(...arguments);
    // define the JSON of data
    this.sportsData = [
      { Id: "Game1", Game: "American Football" },
      { Id: "Game2", Game: "Badminton" },
      { Id: "Game3", Game: "Basketball" },
      { Id: "Game4", Game: "Cricket" },
      { Id: "Game5", Game: "Football" },
      { Id: "Game6", Game: "Golf" },
      { Id: "Game7", Game: "Hockey" },
      { Id: "Game8", Game: "Rugby" },
      { Id: "Game9", Game: "Snooker" },
      { Id: "Game10", Game: "Tennis" }
    ];
    // maps the appropriate column to fields property
    this.fields = { text: "Game", value: "Id" };
    // set the value to select an item based on mapped value at initial rendering
    this.value = "Game3";
  }
  render() {
    return (
      <div className="App">
        <h1>DropDown</h1>
        <br />
        <DropDownListComponent
          placeholder="Select a thing"
          dataSource={this.sportsData}
          fields={this.fields}
          value={this.value}
        />
      </div>
    );
  }
}

export default App;
