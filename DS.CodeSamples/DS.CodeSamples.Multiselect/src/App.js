import React, { Component } from "react";
import {
  MultiSelectComponent,
  CheckBoxSelection,
  Inject
} from "@syncfusion/ej2-react-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  constructor() {
    super(...arguments);
    //define the data with category
    this.list = [
      { Vegetable: "Cabbage", Category: "Leafy and Salad", Id: "item1" },
      { Vegetable: "Chickpea", Category: "Beans", Id: "item2" },
      { Vegetable: "Garlic", Category: "Bulb and Stem", Id: "item3" },
      { Vegetable: "Green bean", Category: "Beans", Id: "item4" },
      { Vegetable: "Horse gram", Category: "Beans", Id: "item5" }
    ];
    // map the groupBy field with category column
    this.field = { groupBy: "Category", text: "Vegetable", value: "Id" };
  }
  render() {
    return (
      <div className="App">
        <h4>Grouping</h4>
        <MultiSelectComponent
          dataSource={this.list}
          fields={this.field}
          placeholder="Select"
        />
        <br />
        <h4>MultiSelect with CheckBox</h4>
        <MultiSelectComponent
          dataSource={this.list}
          fields={this.field}
          placeholder="Select"
          mode="CheckBox"
          showSelectAll={true}
          showDropDownIcon={true}
          filterBarPlaceholder="Search"
        >
          <Inject services={[CheckBoxSelection]} />
        </MultiSelectComponent>
      </div>
    );
  }
}

export default App;
