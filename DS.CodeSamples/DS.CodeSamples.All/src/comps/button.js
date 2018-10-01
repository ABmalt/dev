import * as React from "react";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

// To render Button.
class ButtonDoc extends React.Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="pr-16 font-bold">Slider</div>
          <div className="flex-1 text-center">
            <ButtonComponent>Button</ButtonComponent>
          </div>
          <div className="flex-1 text-center">
            <ButtonComponent>Button</ButtonComponent>
          </div>
          <div className="flex-1 text-center">
            <ButtonComponent>Button</ButtonComponent>
          </div>
          <div className="flex-1 text-center">
            <ButtonComponent>Button</ButtonComponent>
          </div>
          <div className="flex-1 text-center">
            <ButtonComponent>Button</ButtonComponent>
          </div>
        </div>
      </div>
    );
  }
}
export default ButtonDoc;
