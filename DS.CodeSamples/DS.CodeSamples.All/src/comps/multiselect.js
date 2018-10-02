import * as React from "react";
import {
  MultiSelectComponent,
  CheckBoxSelection,
  Inject
} from "@syncfusion/ej2-react-dropdowns";

class MultiSelectDoc extends React.Component {
  constructor() {
    super(...arguments);
    // define the JSON of data
    this.sportsData = [
      { Id: "Game1", Sports: "American Football" },
      { Id: "Game2", Sports: "Badminton" },
      { Id: "Game3", Sports: "Basketball" },
      { Id: "Game4", Sports: "Cricket" },
      { Id: "Game5", Sports: "Football" },
      { Id: "Game6", Sports: "Golf" },
      { Id: "Game7", Sports: "Hockey" },
      { Id: "Game8", Sports: "Rugby" },
      { Id: "Game9", Sports: "Snooker" },
      { Id: "Game10", Sports: "Tennis" }
    ];
    // maps the appropriate column to fields property
    this.fields = { text: "Sports", value: "Id" };
    // set the value to select an item based on mapped value at initial rendering
    this.value = "Game3";
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="pr-16 font-bold">MultiSelect</div>
          <div className="flex-1 text-center px-2">
            <MultiSelectComponent
              id="defaultelement"
              dataSource={this.sportsData}
              mode="Default"
              fields={this.fields}
              placeholder="Favorite Sports"
            />
          </div>
          <div className="flex-1 text-center px-2">
            <MultiSelectComponent
              id="boxelement"
              dataSource={this.sportsData}
              mode="Box"
              fields={this.fields}
              placeholder="Favorite Sports"
            />{" "}
          </div>
          <div className="flex-1 text-center px-2">
            <MultiSelectComponent
              id="delimiterelement"
              dataSource={this.sportsData}
              mode="Delimiter"
              fields={this.fields}
              placeholder="Favorite Sports"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default MultiSelectDoc;
