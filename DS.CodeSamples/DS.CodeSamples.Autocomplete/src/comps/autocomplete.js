import React, { Component } from "react";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";

export default class AutoCompleteDoc extends Component {
  list = ["Badminton", "Basketball", "Tennis"];

  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">AutoComplete</div>
          <div className="flex-1 px-2">
            <AutoCompleteComponent
              cssClass="malt-autocomplete"
              placeholder="AutoComplete"
              dataSource={this.list}
            />
          </div>
          <div className="flex-1 px-2">
            <AutoCompleteComponent
              cssClass="malt-autocomplete"
              placeholder="Auto fill on"
              dataSource={this.list}
              autofill={true}
            />
          </div>
          <div className="flex-1 px-2">
            <AutoCompleteComponent
              cssClass="malt-autocomplete"
              placeholder="AutoComplete"
              enabled={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
