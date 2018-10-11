import React, { Component } from "react";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class App extends Component {
  constructor() {
    super(...arguments);
    // define the array of string
    this.sportsData = ["Snooker", "Tennis"];
  }
  render() {
    return (
      <div className="App">
        <div className="">
          <div className="mt-12 font-bold">Search</div>
          <div className="my-12">
            <AutoCompleteComponent placeholder="Search" />
          </div>
          <div className="my-12">
            <AutoCompleteComponent
              dataSource={this.sportsData}
              placeholder="AutoComplete"
            />
          </div>
        </div>
      </div>
    );
  }
}
