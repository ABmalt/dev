import React, { Component } from "react";

import SwitchDoc from "./comps/switch";
import CheckboxDoc from "./comps/checkbox";
import RadioDoc from "./comps/radio";
import SliderDoc from "./comps/slider";
import InputDoc from "./comps/input";
import InputValidatorDoc from "./comps/input_validator";
import ButtonDoc from "./comps/button";
import ButtongroupDoc from "./comps/buttongroup";
import MultiSelectDoc from "./comps/multiselect";
import DropdownDoc from "./comps/dropdown";
import SplitButtonDoc from "./comps/splitbutton";
import DropDownButtonDoc from "./comps/dropdownbutton";
import ProgressbarDoc from "./comps/progressbar";
import SearchDoc from "./comps/search";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  render() {
    return (
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mb-64 pb-64">
        <SwitchDoc />
        <CheckboxDoc />
        <RadioDoc />
        <SliderDoc />
        <ButtonDoc />
        <ButtongroupDoc />
        <SplitButtonDoc />
        <DropDownButtonDoc />
        <InputValidatorDoc />
        <InputDoc />
        <DropdownDoc />
        <MultiSelectDoc />
        <ProgressbarDoc />
        <SearchDoc />
      </div>
    );
  }
}
export default App;
