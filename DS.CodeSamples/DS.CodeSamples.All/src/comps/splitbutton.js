import React, { Component } from "react";
// import {SplitButtonComponent,ItemModel,MenuEventArgs} from "@syncfusion/ej2-react-splitbuttons";
import { SplitButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

export default class SplitButtonDoc extends Component {
  constructor() {
    super();
    this.items = [
      {
        text: "Button 1"
      },
      {
        text: "Button 2"
      },
      {
        text: "Button 3"
      }
    ];
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">SplitButton</div>

          <div className="flex-1 px-2">
            <SplitButtonComponent
              cssClass="e-primary"
              items={this.items}
              content="Button"
            />
            <span>&nbsp;</span>
            <SplitButtonComponent
              cssClass="e-primary"
              content="Button"
              disabled={true}
            />
          </div>

          <div className="flex-1 px-2">
            <SplitButtonComponent
              cssClass="e-outline"
              items={this.items}
              content="Button"
            />
            <span>&nbsp;</span>
            <SplitButtonComponent
              cssClass="e-outline"
              content="Button"
              disabled={true}
            />
          </div>
          <div className="flex-1 px-2">
            <SplitButtonComponent
              cssClass="e-flat"
              items={this.items}
              content="Button"
            />
            <span>&nbsp;</span>
            <SplitButtonComponent
              cssClass="e-flat"
              content="Button"
              disabled={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
