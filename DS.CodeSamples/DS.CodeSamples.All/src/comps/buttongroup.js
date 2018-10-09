import * as React from "react";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

// To render Button.
export default class ButtongroupDoc extends React.Component {
  render() {
    return (
      <div>
        <div className="mt-8 Comp">
          <div className="flex items-center">
            <div className="w-48 font-bold">ButtonGroup</div>
            <div className="flex-1 px-2">
              <div className="e-btn-group">
                <ButtonComponent
                  cssClass="e-primary"
                  iconCss="e-icons icon-beer"
                />
                <ButtonComponent
                  cssClass="e-primary"
                  iconCss="e-icons icon-beer"
                />
                <ButtonComponent
                  cssClass="e-primary"
                  iconCss="e-icons icon-beer"
                />
              </div>
              <span>&nbsp;</span>
              <div className="e-btn-group">
                <ButtonComponent
                  cssClass="e-primary"
                  iconCss="e-icons icon-beer"
                  disabled
                />
                <ButtonComponent
                  cssClass="e-primary"
                  iconCss="e-icons icon-beer"
                  disabled
                />
                <ButtonComponent
                  cssClass="e-primary"
                  iconCss="e-icons icon-beer"
                  disabled
                />
              </div>
            </div>
            <div className="flex-1 px-2">
              <div className="e-btn-group">
                <ButtonComponent
                  cssClass="e-outline"
                  iconCss="e-icons icon-beer"
                />
                <ButtonComponent
                  cssClass="e-outline"
                  iconCss="e-icons icon-beer"
                />
                <ButtonComponent
                  cssClass="e-outline"
                  iconCss="e-icons icon-beer"
                />
              </div>
              <span>&nbsp;</span>
              <div className="e-btn-group">
                <ButtonComponent
                  cssClass="e-outline"
                  iconCss="e-icons icon-beer"
                  disabled
                />
                <ButtonComponent
                  cssClass="e-outline"
                  iconCss="e-icons icon-beer"
                  disabled
                />
                <ButtonComponent
                  cssClass="e-outline"
                  iconCss="e-icons icon-beer"
                  disabled
                />
              </div>
            </div>
            <div className="flex-1 px-2">
              <div className="">
                <ButtonComponent
                  cssClass="e-flat"
                  iconCss="e-icons icon-beer"
                />
                <ButtonComponent
                  cssClass="e-flat"
                  iconCss="e-icons icon-beer"
                />
                <ButtonComponent
                  cssClass="e-flat"
                  iconCss="e-icons icon-beer"
                />
              </div>

              <div className="">
                <ButtonComponent
                  cssClass="e-flat"
                  iconCss="e-icons icon-beer"
                  disabled
                />
                <ButtonComponent
                  cssClass="e-flat"
                  iconCss="e-icons icon-beer"
                  disabled
                />
                <ButtonComponent
                  cssClass="e-flat"
                  iconCss="e-icons icon-beer"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
