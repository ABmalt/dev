import React, { Component } from "react";
import { MultiSelectComponent } from "@syncfusion/ej2-react-dropdowns";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends React.PureComponent {
  constructor() {
    super(...arguments);
    //define the data with category
    this.list = [
      { Vegetable: "Cabbage", Category: "Leafy and Salad", Id: "item1" },
      { Vegetable: "Chickpea", Category: "Beans", Id: "item2" },
      { Vegetable: "Garlic", Category: "Bulb and Stem", Id: "item3" },
      { Vegetable: "Green bean", Category: "Beans", Id: "item4" },
      { Vegetable: "Horse gram", Category: "Beans", Id: "item5" },
      { Vegetable: "Nopal", Category: "Bulb and Stem", Id: "item6" },
      { Vegetable: "Onion", Category: "Bulb and Stem", Id: "item7" },
      { Vegetable: "Pumpkins", Category: "Leafy and Salad", Id: "item8" },
      { Vegetable: "Spinach", Category: "Leafy and Salad", Id: "item9" },
      { Vegetable: "Wheat grass", Category: "Leafy and Salad", Id: "item10" },
      { Vegetable: "Yarrow", Category: "Leafy and Salad", Id: "item11" }
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
