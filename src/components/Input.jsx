import React from "react";
import "./Input.css";

const Input = ({ onInputChange, onConfirmation }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onInputChange(name, value);
  };

  const handleConfirmClick = () => {
    onConfirmation(); // Call the parent component function to handle confirmation
  };

  return (
    <div className="input">
      <span>CARDHOLDER NAME</span>
      <div className="input1">
        <input
          type="text"
          name="cardholderName"
          placeholder="e.g Luka Giunashvili"
          onChange={handleChange}
        />
      </div>

      <div className="input2">
        <span>CARD NUMBER</span>
        <input
          type="text"
          name="cardNumber"
          placeholder="e.g 0000 0000 0000 0000"
          onChange={handleChange}
          maxLength={19}
        />
      </div>

      <div className="flexi">
        <div className="dates">
          <span>Exp. Date (MM/DD)</span>
          <div className="kide">
            <div className="input3">
              <input
                type="text"
                placeholder="MM"
                name="month"
                onChange={handleChange}
                maxLength={2}
              />
            </div>

            <div className="input4">
              <input
                type="text"
                placeholder="YY"
                name="year"
                onChange={handleChange}
                maxLength={2}
              />
            </div>
          </div>
        </div>

        <div className="input5">
          <span>CVC</span>
          <input
            type="text"
            placeholder="e.g 000"
            name="cvc"
            onChange={handleChange}
            maxLength={3}
          />
        </div>
      </div>

      <div className="confirm">
        <button onClick={handleConfirmClick}>Confirm</button>
      </div>
    </div>
  );
};

export default Input;
