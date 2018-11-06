import React, { Component } from "react";

import AccordionDoc from "./comps/accordion";
import AutoCompleteDoc from "./comps/autocomplete";
import SwitchDoc from "./comps/switch";
import CheckboxDoc from "./comps/checkbox";
import CardDoc from "./comps/card";
import ChipDoc from "./comps/chip";
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
import ComboBoxDoc from "./comps/combobox";
import MenuDoc from "./comps/menu";
import ModalDoc from "./comps/modal";
import ProgressbarDoc from "./comps/progressbar";
import SearchDoc from "./comps/search";
import ToolbarDoc from "./comps/toolbar";
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
        <ComboBoxDoc />
        <MultiSelectDoc />
        <ProgressbarDoc />
        <SearchDoc />
        <AutoCompleteDoc />
        <AccordionDoc />
        <CardDoc />
        <ChipDoc />
        <MenuDoc />
        <ModalDoc />
        <ToolbarDoc />
      </div>
    );
  }
}
export default App;
