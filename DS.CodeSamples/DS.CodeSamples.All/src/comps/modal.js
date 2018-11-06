import React, { Component } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";

export default class ModalDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideDialog: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ hideDialog: true });
  }
  // dialogClose() {this.setState({ hideDialog: false });}
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Modal</div>

          <div className="flex-1">
            <button className="e-control e-btn" onClick={this.handleClick}>
              Open
            </button>

            <DialogComponent
              width="450px"
              content="This is a Dialog with content"
              visible={this.state.hideDialog}
              // close={this.dialogClose}
            />
          </div>
        </div>
      </div>
    );
  }
}
