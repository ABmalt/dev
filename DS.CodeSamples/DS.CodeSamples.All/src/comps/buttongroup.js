import React, { Component } from "react";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default class ButtongroupDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">ButtonGroup</div>
          <div className="flex-1 px-2">
            <div className="e-btn-group">
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons account_box"
              />
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons format_list_bulleted"
              />
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons format_indent_increase"
              />
            </div>
            <span>&nbsp;</span>
            <div className="e-btn-group">
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons account_box"
                disabled
              />
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons format_list_bulleted"
                disabled
              />
              <ButtonComponent
                cssClass="e-primary"
                iconCss="material-icons format_indent_increase"
                disabled
              />
            </div>
          </div>
          <div className="flex-1 px-2">
            <div className="e-btn-group">
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons account_box"
              />
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons format_list_bulleted"
              />
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons format_indent_increase"
              />
            </div>
            <span>&nbsp;</span>
            <div className="e-btn-group">
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons account_box"
                disabled
              />
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons format_list_bulleted"
                disabled
              />
              <ButtonComponent
                cssClass="e-outline"
                iconCss="material-icons format_indent_increase"
                disabled
              />
            </div>
          </div>
          <div className="flex-1 px-2">
            <div className="inline-block">
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons account_box"
              />
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons format_list_bulleted"
              />
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons format_indent_increase"
              />
            </div>
            <span>&nbsp;</span>
            <div className="inline-block">
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons account_box"
                disabled
              />
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons format_list_bulleted"
                disabled
              />
              <ButtonComponent
                cssClass="e-flat"
                iconCss="material-icons format_indent_increase"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
