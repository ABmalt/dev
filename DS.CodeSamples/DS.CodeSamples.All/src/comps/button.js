import * as React from "react";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

// To render Button.
class ButtonDoc extends React.Component {
  render() {
    return (
      <div>
        <div className="mt-8 Comp">
          <div className="flex items-center">
            <div className="pr-16 font-bold">Button</div>
            <div className="flex-1 px-2">
              <ButtonComponent cssClass="e-primary">Primary</ButtonComponent>

              <ButtonComponent
                cssClass="e-round e-primary"
                iconCss="e-icons e-add-icon"
              />
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-small e-round e-primary"
                iconCss="e-icons e-add-icon"
              />
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent cssClass="e-outline">Outline</ButtonComponent>

              <ButtonComponent
                cssClass="e-round e-outline"
                iconCss="e-icons e-add-icon"
              />
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-small e-round e-outline"
                iconCss="e-icons e-add-icon"
              />
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent cssClass="e-flat">Flat</ButtonComponent>
              <ButtonComponent
                cssClass="e-round e-flat"
                iconCss="e-icons e-add-icon"
              />
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-small e-round e-flat"
                iconCss="e-icons e-add-icon"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 Comp">
          <div className="flex items-center">
            <div className="pr-16 font-bold">Button</div>

            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-primary"
                iconCss="e-icons e-play-icon"
              >
                Play
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-small e-primary"
                iconCss="e-icons e-play-icon"
              >
                Play
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-outline"
                iconCss="e-icons e-open-icon"
                iconPosition="Right"
              >
                Open
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-small e-outline"
                iconCss="e-icons e-open-icon"
                iconPosition="Right"
              >
                Open
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-flat"
                iconCss="e-icons e-open-icon"
                iconPosition="Right"
              >
                Open
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-small e-flat"
                iconCss="e-icons e-open-icon"
                iconPosition="Right"
              >
                Open
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ButtonDoc;
