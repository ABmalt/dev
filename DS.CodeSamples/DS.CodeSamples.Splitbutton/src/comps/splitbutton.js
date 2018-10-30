import React, { Component } from "react";
import { SplitButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class SplitButtonDoc extends Component {
  constructor() {
    super(...arguments);
    this.items = [
      {
        text: "Paste",
        iconCss: "e-MI e-account_box"
      },
      {
        text: "Paste 1",
        iconCss: "e-MI e-account_box"
      },
      {
        text: "Paste 2",
        iconCss: "e-MI e-account_box"
      },
      {
        text: "Paste 3",
        iconCss: "e-MI e-account_box"
      }
    ];
    this.addDisabled = args => {
      if (args.item.text !== "Paste") {
        args.element.classList.add("e-disabled");
      }
    };
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
              items={this.items}
              content="Paste"
              disabled
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
              items={this.items}
              content="Paste"
              disabled
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
              items={this.items}
              content="Paste"
              disabled
            />
          </div>
        </div>
      </div>
    );
  }
}
