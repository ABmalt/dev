import React, { Component } from "react";
import { FormValidator } from "@syncfusion/ej2-inputs";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";

export default class InputValidatorDoc extends Component {
  constructor(props) {
    super(props);
    this.inputRefElement = null;
    this.inputRef = element => {
      this.inputRefElement = element;
    };
  }
  componentDidMount() {
    this.formValidator = {
      rules: {
        name: {
          required: [true, "* Enter your name"]
        },
        email: {
          required: [true, "* Enter your email"]
        }
      }
    };
    this.formObject = new FormValidator("#formTemp", this.formValidator);
  }

  OnCreated() {
    var htmlAttr = { name: "name" };
    this.textboxInstance.addAttributes(htmlAttr);
  }
  onInputFocus(args) {
    args.target.parentElement.classList.add("e-input-focus");
  }
  onInputBlur(args) {
    args.target.parentElement.classList.remove("e-input-focus");
  }

  render() {
    return (
      <div>
        <div className="mt-8 Comp">
          <form id="formTemp" method="post" className="md:flex text-md">
            <div className="w-48 font-bold">Validator</div>

            <div className="flex-1 px-2">
              <TextBoxComponent
                name="name"
                id="textbox"
                floatLabelType="Auto"
                placeholder={"Name"}
                ref={textbox => (this.textboxInstance = textbox)}
                created={this.OnCreated.bind(this)}
                data-msg-containerid="nameError"
                required
              />
              <div id="nameError" className="pl-2" />
            </div>
            <div className="flex-1 px-2">
              <div className="e-float-input e-input-group">
                <input
                  type="email"
                  id="Email"
                  name="email"
                  data-msg-containerid="mailError"
                  onFocus={this.onInputFocus}
                  onBlur={this.onInputBlur}
                />
                <span className="e-float-line" />
                <label className="e-float-text e-label-bottom" htmlFor="email">
                  Email
                </label>
                <span className="e-input-group-icon material-icons account_box" />
              </div>
              <div id="mailError" className="pl-2" />
            </div>
            <div className="flex-1 px-2">
              <TextBoxComponent
                placeholder="Disabled"
                floatLabelType="Auto"
                disabled={true}
              />
            </div>
          </form>
        </div>
        <div className="mt-8 Comp">
          <div className="md:flex ">
            <div className="w-48 font-bold">TextArea</div>

            <div className="flex-1 px-2">
              <div className="e-float-input">
                <textarea required />
                <span className="e-float-line" />
                <label className="e-float-text">TextArea</label>
              </div>
            </div>
            <div className="flex-1 px-2">
              <div className="e-float-input">
                <textarea required />
                <span className="e-float-line" />
                <label className="e-float-text">TextArea</label>
              </div>
            </div>
            <div className="flex-1 px-2">
              <div className="e-float-input e-input-group e-disabled">
                <textarea placeholder="Disabled" disabled={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
