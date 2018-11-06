import React, { Component } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";

export default class ModalDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideDialog: false
    };
  }
  handleClick() {
    this.setState({ hideDialog: true });
  }

  dialogClose = () => {
    this.setState({ hideDialog: false });
  };
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Modal</div>

          <div className="flex-1">
            <button
              className="e-control e-btn"
              id="targetButton1"
              role="button"
              onClick={(this.handleClick = this.handleClick.bind(this))}
            >
              Open
            </button>

            <DialogComponent
              width="250px"
              content="This is a Dialog with content"
              target=".Comp"
              visible={this.state.hideDialog}
              close={this.dialogClose}
              ref={dialog => (this.dialogInstance = dialog)}
            />
          </div>
        </div>
      </div>
    );
  }
}
