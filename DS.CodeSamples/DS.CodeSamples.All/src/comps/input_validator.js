import * as React from "react";
import { FormValidator } from "@syncfusion/ej2-inputs";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
export default class InputValidatorDoc extends React.PureComponent {
  constructor(props) {
    super(props);
  }
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
      <div>
        <div className="mt-8 Comp">
          <div className="flex items-center">
            <div className="pr-16 font-bold">TextBox</div>

            <div className="flex-1 px-2">
              <div id="iv1">
                <div className="e-float-input">
                  <input
                    type="text"
                    id="name1"
                    name="name1"
                    data-msg-containerid="nameError1"
                  />
                  <span className="e-float-line" />
                  <label className="e-float-text" htmlFor="name1">
                    Name
                  </label>
                </div>
                <div id="nameError1" />
              </div>
            </div>
            <div className="flex-1 px-2">
              <div id="iv2">
                <div className="e-float-input">
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
                </div>
                <div id="nameError2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}