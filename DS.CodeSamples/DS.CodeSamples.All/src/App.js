import * as React from "react";

import AppRows from "./AppRows";
import SwitchDoc from "./comps/switch";
import CheckboxDoc from "./comps/checkbox";
import RadioDoc from "./comps/radio";
import SliderDoc from "./comps/slider";
import InputDoc from "./comps/input";
import InputValidatorDoc from "./comps/input_validator";
import ButtonDoc from "./comps/button";
import MultiSelectDoc from "./comps/multiselect";
import DropdownDoc from "./comps/dropdown";
import SplitButtonDoc from "./comps/splitbutton";
import DropDownButtonDoc from "./comps/dropdownbutton";
import ProgressbarDoc from "./comps/progressbar";

class App extends React.Component {
  render() {
    return (
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mb-64 pb-64">
        <AppRows />
        <SwitchDoc />
        <CheckboxDoc />
        <RadioDoc />
        <SliderDoc />
        <InputDoc />
        <InputValidatorDoc />
        <ButtonDoc />
        <SplitButtonDoc />
        <DropDownButtonDoc />
        <DropdownDoc />
        <MultiSelectDoc />
        <ProgressbarDoc />
      </div>
    );
  }
}
export default App;
