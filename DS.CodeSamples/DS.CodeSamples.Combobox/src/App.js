import React, { Component } from "react";
import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
export default class App extends Component {
  constructor() {
    super(...arguments);
    //define the data with category
    this.vegetableData = [
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
    // map the groupBy field with Category column
    this.groupFields = { groupBy: "Category", text: "Vegetable", value: "Id" };
  }
  render() {
    return (
      <div className="App">
        <h4>Grouping</h4>
        <ComboBoxComponent
          dataSource={this.vegetableData}
          fields={this.groupFields}
          placeholder="Select a vegetable"
          popupHeight="220px"
        />
      </div>
    );
  }
}
