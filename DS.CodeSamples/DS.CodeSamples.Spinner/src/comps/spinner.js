import React, { Component } from "react";
import { createSpinner, showSpinner, setSpinner } from "@syncfusion/ej2-popups";

export default class SpinnerDoc extends Component {
  componentDidMount() {
    // this.hideSpinner = () => true;
    // // Specify the template content to be displayed in the Spinner
    // setSpinner({
    //   template:
    //     '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>'
    // });

    createSpinner({
      // Specify the target for the spinner to show
      target: document.getElementById("container")
    });

    // showSpinner() will make the spinner visible

    showSpinner(document.getElementById("container"));
  }

  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Spinner</div>

          <div className="flex-1" id="container" />
        </div>
      </div>
    );
  }
}
