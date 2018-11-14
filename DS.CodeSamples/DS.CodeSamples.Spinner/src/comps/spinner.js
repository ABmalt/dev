import React, { Component } from "react";
import { createSpinner, showSpinner } from "@syncfusion/ej2-popups";

export default class SpinnerDoc extends Component {
  componentDidMount() {
    createSpinner({ target: document.getElementById("spinner1") });
    showSpinner(document.getElementById("spinner1"));
    createSpinner({ target: document.getElementById("spinner2") });
    showSpinner(document.getElementById("spinner2"));
    createSpinner({ target: document.getElementById("spinner3") });
    showSpinner(document.getElementById("spinner3"));
  }

  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="w-48 font-bold">Spinner</div>

          <div className="flex-1 relative" id="spinner1" />
          <div className="flex-1 relative" id="spinner2" />
          <div className="flex-1 relative" id="spinner3" />
        </div>
      </div>
    );
  }
}
