import React, { Component } from "react";

import AccordionDoc from "./comps/accordion";
import AutoCompleteDoc from "./comps/autocomplete";
import SwitchDoc from "./comps/switch";
import CheckboxDoc from "./comps/checkbox";
import CardDoc from "./comps/card";
import ChipDoc from "./comps/chip";
import DatePickerDoc from "./comps/datepicker";
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
// import ModalDoc from "./comps/modal";
import ProgressbarDoc from "./comps/progressbar";
import SearchDoc from "./comps/search";
import SpinnerDoc from "./comps/spinner";
import TimepickerDoc from "./comps/timepicker";
import ToolbarDoc from "./comps/toolbar";
import TooltipDoc from "./comps/tooltip";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  render() {
    return (
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mb-32 pb-32">
        <SwitchDoc />
        <CheckboxDoc />
        <RadioDoc />
        <SliderDoc />
        <ButtonDoc />
        <ButtongroupDoc />
        <SplitButtonDoc />
        <DropDownButtonDoc />
        <InputDoc />
        <InputValidatorDoc />
        <SearchDoc />
        <AutoCompleteDoc />
        <DropdownDoc />
        <ComboBoxDoc />
        <MultiSelectDoc />
        <DatePickerDoc />
        <TimepickerDoc />
        <ChipDoc />
        <AccordionDoc />
        <CardDoc />
        <MenuDoc />
        {/* <ModalDoc /> */}
        <ToolbarDoc />
        <TooltipDoc />
        <ProgressbarDoc />
        <SpinnerDoc />
      </div>
    );
  }
}
export default App;
