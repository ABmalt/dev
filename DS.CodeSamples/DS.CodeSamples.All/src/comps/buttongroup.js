import React, { Component } from "react";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default class ButtongroupDoc extends Component {
  render() {
    return (
      <div>
        <div className="mt-8 Comp">
          <div className="md:flex items-center">
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
              <div className="inline-block">
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
              <span>&nbsp;</span>
              <div className="inline-block">
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
