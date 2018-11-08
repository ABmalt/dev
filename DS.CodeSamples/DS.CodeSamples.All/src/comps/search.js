import React, { Component } from "react";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";

export default class SearchDoc extends Component {
  list = ["Badminton", "Basketball", "Tennis"];
  noRecordsTemplate = "<span></span>";

  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Search</div>
          <div className="flex-1 px-2">
            <AutoCompleteComponent
              cssClass="malt-searchbar"
              placeholder="Search"
              popupHeight="0"
              popupWidth="0"
              noRecordsTemplate={this.noRecordsTemplate}
            />
          </div>
          <div className="flex-1 px-2">
            <AutoCompleteComponent
              cssClass="malt-searchbar"
              placeholder="Autocomplete"
              dataSource={this.list}
              autofill={true}
            />
          </div>
          <div className="flex-1 px-2">
            <AutoCompleteComponent
              cssClass="malt-searchbar"
              placeholder="Disabled"
              enabled={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
