import * as React from "react";

import AppRows from "./AppRows";
import SwitchDoc from "./comps/switch";
import CheckboxDoc from "./comps/checkbox";
import RadioDoc from "./comps/radio";
import SliderDoc from "./comps/slider";
import ButtonDoc from "./comps/button";
import MultiSelectDoc from "./comps/multiselect";
import DropdownDoc from "./comps/dropdown";

class App extends React.Component {
  render() {
    return (
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
        <AppRows />
        <SwitchDoc />
        <CheckboxDoc />
        <RadioDoc />
        <SliderDoc />
        <ButtonDoc />
        <MultiSelectDoc />
        <DropdownDoc />
        <br />
        <br />
      </div>
    );
  }
}
export default App;
