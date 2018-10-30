import React, { Component } from "react";
import { SplitButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

export default class SplitButtonDoc extends Component {
  constructor() {
    super(...arguments);
    this.items = [
      {
        text: "Paste"
      },
      {
        text: "Paste 1"
      },
      {
        text: "Paste 2"
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
              content="Paste"
            />
            <span>&nbsp;</span>
            <SplitButtonComponent
              cssClass="e-primary"
              content="Paste"
              disabled={true}
            />
          </div>

          <div className="flex-1 px-2">
            <SplitButtonComponent
              cssClass="e-outline"
              items={this.items}
              content="Paste"
            />
            <span>&nbsp;</span>
            <SplitButtonComponent
              cssClass="e-outline"
              content="Paste"
              disabled={true}
            />
          </div>
          <div className="flex-1 px-2">
            <SplitButtonComponent
              cssClass="e-flat"
              items={this.items}
              content="Paste"
            />
            <span>&nbsp;</span>
            <SplitButtonComponent
              cssClass="e-flat"
              content="Paste"
              disabled={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
