import React, { Component } from "react";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="radio-control">
          <h4 className="row">Select a payment method</h4>
          <div className="row">
            <div className="e-radio-wrapper">
              <input
                id="radio1"
                type="radio"
                class="e-control e-radio"
                name="payment"
                value="credit/debit"
              />
              <label for="radio1">
                <span class="e-ripple-container" data-ripple="true" />
                <span class="e-label">Credit/Debit Card</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="e-radio-wrapper">
              <input
                id="radio2"
                type="radio"
                class="e-control e-radio"
                name="payment"
                value="netbanking"
              />
              <label for="radio2">
                <span class="e-ripple-container e-ripple" data-ripple="true">
                  <div class="e-ripple-element" />
                </span>
                <span class="e-label">Net Banking</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="e-radio-wrapper">
              <input
                id="radio3"
                type="radio"
                class="e-control e-radio"
                name="payment"
                value="cashondelivery"
              />
              <label for="radio3">
                <span class="e-ripple-container" data-ripple="true" />
                <span class="e-label">Cash on Delivery</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="e-radio-wrapper">
              <input
                id="radio4"
                type="radio"
                class="e-control e-radio"
                name="payment"
                value="others"
              />
              <label for="radio4">
                <span class="e-ripple-container" data-ripple="true" />
                <span class="e-label">Other Wallets</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
