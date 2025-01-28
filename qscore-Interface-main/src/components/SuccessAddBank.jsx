import React from "react";
import "./SuccessAddBank.css"; // Importing the CSS for styling
import Button from "./Button"; // Ensure correct capitalization and path

const SuccessAddBank = ({ onClose }) => {
  // Accept onClose as a prop
  return (
    <div className="modal-overlay">
      <div className="success-message-container">
        <div className="text-container">
          <p className="first-text">Success.</p>
          <p className="second-text">Bank Details added successfully.</p>
        </div>
        <Button
          text="Ok" // Button text
          className="success" // Use a specific class if needed
          onClick={onClose} // Invoke onClose when clicked
        />
      </div>
    </div>
  );
};

export default SuccessAddBank;
