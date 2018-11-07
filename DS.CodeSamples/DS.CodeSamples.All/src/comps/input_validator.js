import React, { Component } from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { FormValidator } from "@syncfusion/ej2-inputs";

export default class InputValidatorDoc extends Component {
  rendereComplete() {
    this.formValidator1 = {
      rules: {
        name1: {
          required: [true, "* Enter your name"]
        }
      }
    };
    this.form1 = new FormValidator("#iv1", this.formValidator1);

    this.formValidator2 = {
      rules: {
        name2: {
          required: [true, "* Enter your name"]
        }
      }
    };
    this.form2 = new FormValidator("#iv2", this.formValidator2);
  }
  componentDidMount() {
    this.rendereComplete();
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex ">
          <div className="w-48 font-bold">Validator</div>

          <div className="flex-1 px-2">
            <div id="iv1">
              <div className="e-float-input">
                <input
                  type="text"
                  id="name1"
                  name="name1"
                  data-msg-containerid="nameError1"
                  required
                />
                <span className="e-float-line" />
                <label className="e-float-text" htmlFor="name1">
                  Name
                </label>
              </div>
              <div id="nameError1" className="pl-2" />
            </div>
          </div>

          <div className="flex-1 px-2">
            <div id="iv2">
              <div className="e-float-input e-input-group">
                <input
                  type="text"
                  id="name2"
                  name="name2"
                  data-msg-containerid="nameError2"
                  required
                />
                <span className="e-float-line" />
                <label className="e-float-text" htmlFor="name2">
                  Name
                </label>
                <span className="e-input-group-icon e-input-picture" />
              </div>
              <div id="nameError2" className="pl-2" />
            </div>
          </div>
          <div className="flex-1 px-2">
            <TextBoxComponent
              placeholder="Disabled"
              floatLabelType="Auto"
              disabled={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
