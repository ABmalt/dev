import * as React from "react";
// import * as ReactDOM from "react-dom";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Input</h1>
        <h4> FloatLabelType as Auto </h4>
        <div className="e-float-input e-input-group">
          <input type="text" required />
          <span className="e-float-line" />
          <label className="e-float-text">Enter </label>
          <span className="e-input-group-icon e-input-popup-date" />
        </div>
        <h4> FloatLabelType as Always </h4>
        <div className="e-float-input e-input-group">
          <input type="text" required />
          <span className="e-float-line" />
          <label className="e-float-text e-label-top">Enter </label>
          <span className="e-input-group-icon e-input-popup-date" />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // To get the all input fields and its container.

    let input = document.querySelectorAll(
      ".e-input-group .e-input,.e-float-input.e-input-group input"
    );

    // Add 'e-input-focus' class to the input for achive ripple effect when focus on the input field.

    for (let i = 0; i < input.length; i++) {
      input[i].addEventListener("focus", function() {
        let parentElement = this.parentNode;
        if (parentElement.classList.contains("e-input-in-wrap")) {
          parentElement.parentNode.classList.add("e-input-focus");
        } else {
          this.parentNode.classList.add("e-input-focus");
        }
      });
      input[i].addEventListener("blur", function() {
        let parentElement = this.parentNode;
        if (parentElement.classList.contains("e-input-in-wrap")) {
          parentElement.parentNode.classList.remove("e-input-focus");
        } else {
          this.parentNode.classList.remove("e-input-focus");
        }
      });
    }

    // Add 'e-input-btn-ripple' class to the icon element for achive ripple effect when click on the icon.

    let inputIcon = document.querySelectorAll(".e-input-group-icon");
    for (let i = 0; i < inputIcon.length; i++) {
      inputIcon[i].addEventListener("mousedown", function() {
        this.classList.add("e-input-btn-ripple");
      });
      inputIcon[i].addEventListener("mouseup", function() {
        let element = this;
        setTimeout(function() {
          element.classList.remove("e-input-btn-ripple");
        }, 500);
      });
    }
  }
}
export default App;
