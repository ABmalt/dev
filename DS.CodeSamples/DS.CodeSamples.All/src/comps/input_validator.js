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

  floatFocus(args) {
    args.target.parentElement.classList.add("e-input-focus");
  }
  floatBlur(args) {
    args.target.parentElement.classList.remove("e-input-focus");
  }
  onIconClick(args) {
    args.persist();
    setTimeout(() => {
      args.target.classList.add("e-input-btn-ripple");
    }, 500);
  }
  onIconUnClick(args) {
    args.target.classList.remove("e-input-btn-ripple");
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
                <label className="e-float-text e-label-bottom">Name</label>
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
                  onFocus={this.floatFocus}
                  onBlur={this.floatBlur}
                  data-msg-containerid="nameError2"
                  required
                />
                <span className="e-float-line" />
                <label className="e-float-text e-label-bottom">With icon</label>
                <span
                  className="e-input-group-icon material-icons account_box"
                  onMouseDown={this.onIconClick}
                  onMouseUp={this.onIconUnClick}
                />
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
