import React, { Component } from "react";
import {
  MultiSelectComponent,
  CheckBoxSelection,
  Inject
} from "@syncfusion/ej2-react-dropdowns";

export default class MultiSelectDoc extends Component {
  constructor() {
    super(...arguments);
    // define the JSON of data
    this.sports = [
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
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="w-48 font-bold">MultiSelect</div>
          <div className="flex-1 px-2">
            <MultiSelectComponent
              dataSource={this.sports}
              mode="Default"
              fields={this.fields}
              placeholder="Default"
            />
          </div>
          <div className="flex-1 px-2">
            <MultiSelectComponent
              dataSource={this.sports}
              mode="Default"
              fields={this.fields}
              placeholder="Default"
              enabled={false}
            />
          </div>

          <div className="flex-1 px-2">
            <MultiSelectComponent
              dataSource={this.sports}
              mode="CheckBox"
              fields={this.fields}
              placeholder="CheckBoxes"
              showSelectAll={true}
            >
              <Inject services={[CheckBoxSelection]} />
            </MultiSelectComponent>
          </div>
        </div>
      </div>
    );
  }
}
