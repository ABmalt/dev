import React, { Component } from "react";
import {
  ItemDirective,
  ItemsDirective,
  ToolbarComponent
} from "@syncfusion/ej2-react-navigations";

export default class ToolbarDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Toolbar</div>

          <div className="flex-1 w-2 px-2">
            <ToolbarComponent>
              <ItemsDirective>
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective type="Separator" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective type="Separator" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective type="Separator" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective type="Separator" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective type="Separator" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
              </ItemsDirective>
            </ToolbarComponent>
          </div>

          <div className="flex-1 w-2 px-2">
            <ToolbarComponent overflowMode="Popup">
              <ItemsDirective>
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective type="Separator" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective type="Separator" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective type="Separator" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective type="Separator" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective type="Separator" />
                <ItemDirective prefixIcon="material-icons account_box" />
                <ItemDirective prefixIcon="material-icons account_circle" />
                <ItemDirective prefixIcon="material-icons account_box" />
              </ItemsDirective>
            </ToolbarComponent>
          </div>
        </div>
      </div>
    );
  }
}
