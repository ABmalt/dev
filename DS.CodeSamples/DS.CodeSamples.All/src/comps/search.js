import React, { Component } from "react";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class SearchDoc extends Component {
  constructor() {
    super(...arguments);
    // define the array of string
    this.sportsData = ["Snooker", "Tennis"];
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Search</div>
          <div className="flex-1 px-2">
            <AutoCompleteComponent placeholder="Search" />
          </div>
          <div className="flex-1 px-2">
            <AutoCompleteComponent placeholder="Search" />
          </div>
          <div className="flex-1 px-2">
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
