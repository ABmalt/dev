import * as React from "react";
import {
  SplitButtonComponent,
  ItemModel,
  MenuEventArgs
} from "@syncfusion/ej2-react-splitbuttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class SplitButtonDoc extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.items = [
      {
        text: "Paste",
        iconCss: "e-btn-icons e-paste"
      },
      {
        text: "Paste Special",
        iconCss: "e-btn-icons e-paste-special"
      },
      {
        text: "Paste as Formula",
        iconCss: "e-btn-icons e-paste-formula"
      },
      {
        text: "Paste as Hyperlink",
        iconCss: "e-btn-icons e-paste-hyperlink"
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
        <div className="flex items-center">
          <div className="pr-16 font-bold">SplitButton</div>

          <div className="flex-1 px-2">
            <SplitButtonComponent
              items={this.items}
              content="Paste"
              cssClass="e-primary"
            />
          </div>
          <div className="flex-1 px-2">
            <SplitButtonComponent
              items={this.items}
              content="Paste"
              iconCss="e-btn-icons e-paste"
              disabled
            />
          </div>
          <div className="flex-1 px-2">
            <SplitButtonComponent
              items={this.items}
              content="Paste"
              iconCss="e-btn-icons e-paste"
              beforeItemRender={this.addDisabled}
            />
          </div>
        </div>
      </div>
    );
  }
}
