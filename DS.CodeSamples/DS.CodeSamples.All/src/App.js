import * as React from "react";
import AppRows from "./AppRows";
import SwitchDoc from "./comps/switch";
import CheckboxDoc from "./comps/checkbox";
import RadioDoc from "./comps/radio";

class App extends React.Component {
  render() {
    return (
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
        <AppRows />
        <SwitchDoc />
        <CheckboxDoc />
        <RadioDoc />
      </div>
    );
  }
}
export default App;
