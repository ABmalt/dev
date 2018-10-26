import React, { Component } from "react";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

// To render Button.
export default class ButtonDoc extends Component {
  render() {
    return (
      <div className="App">
        <h1>Buttons</h1>
        <div className="mt-8 Comp">
          <div className="md:flex">
            <div className="flex-1 px-2">
              <ButtonComponent cssClass="e-primary">Primary</ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent cssClass="e-primary" disabled>
                Primary
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent cssClass="e-outline">Outline</ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent cssClass="e-outline" disabled>
                Outline
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent cssClass="e-flat">Flat</ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent cssClass="e-flat" disabled>
                Flat
              </ButtonComponent>
            </div>
          </div>
        </div>
        <div className="mt-8 Comp">
          <div className="md:flex">
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-round e-primary"
                iconCss="material-icons group_work"
              />
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-round e-primary"
                iconCss="material-icons group_work"
                disabled
              />
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-round e-outline"
                iconCss="material-icons group_work"
              />
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-round e-outline"
                iconCss="material-icons group_work"
                disabled
              />
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-round e-flat"
                iconCss="material-icons group_work"
              />
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-round e-flat"
                iconCss="material-icons group_work"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="mt-8 Comp">
          <div className="md:flex">
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons group_work"
              >
                Play
              </ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons group_work"
                disabled
              >
                Play
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons group_work"
                iconPosition="Right"
              >
                Open
              </ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons group_work"
                iconPosition="Right"
                disabled
              >
                Open
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons group_work"
                iconPosition="Right"
              >
                Open
              </ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons group_work"
                iconPosition="Right"
                disabled
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
