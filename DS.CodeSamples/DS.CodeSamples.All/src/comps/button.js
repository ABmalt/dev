import React, { Component } from "react";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default class ButtonDoc extends Component {
  render() {
    return (
      <div>
        <div className="mt-8 Comp">
          <div className="md:flex items-center">
            <div className="w-48 font-bold">Button</div>
            <div className="flex-1 px-2">
              <ButtonComponent cssClass="e-primary">Primary</ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons account_box"
              />
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons account_box"
                disabled
              />
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent cssClass="e-outline">Outline</ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons account_box"
              />
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons account_box"
                disabled
              />
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent cssClass="e-flat">Flat</ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons account_box"
              />
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons account_box"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="mt-8 Comp">
          <div className="md:flex items-center">
            <div className="w-48 font-bold">&nbsp;</div>

            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons account_box"
              >
                Play
              </ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons account_box"
                disabled
              >
                Play
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons account_box"
                iconPosition="Right"
              >
                Open
              </ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons account_box"
                iconPosition="Right"
                disabled
              >
                Open
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons account_box"
                iconPosition="Right"
              >
                Open
              </ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons account_box"
                iconPosition="Right"
                disabled
              >
                Open
              </ButtonComponent>
            </div>
          </div>
        </div>
        <div className="mt-8 Comp">
          <div className="md:flex items-center">
            <div className="w-48 font-bold">&nbsp;</div>

            <div className="flex-1 px-2">
              <ButtonComponent cssClass="e-danger">Negative</ButtonComponent>
              <span>&nbsp;</span>
              <ButtonComponent cssClass="e-danger" disabled>
                Negative
              </ButtonComponent>
            </div>
            <div className="flex-1 px-2">
              <ButtonComponent cssClass="e-success">Positive</ButtonComponent>
              <span>&nbsp;</span>

              <ButtonComponent cssClass="e-success" disabled>
                Positive
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
