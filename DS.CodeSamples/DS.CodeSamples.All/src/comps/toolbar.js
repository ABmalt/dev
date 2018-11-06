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

          <div className="flex-1">
            <ToolbarComponent>
              <ItemsDirective>
                <ItemDirective text="Cut" />
                <ItemDirective text="Copy" />
                <ItemDirective text="Paste" />
              </ItemsDirective>
            </ToolbarComponent>
          </div>
        </div>
      </div>
    );
  }
}
