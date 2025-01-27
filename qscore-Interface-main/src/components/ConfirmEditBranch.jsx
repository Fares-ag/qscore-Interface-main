import React from "react";
import "./ConfirmEditBranch.css"; // Importing the CSS for styling
import Button from "./Button"; // Ensure correct capitalization and path

const ConfirmEditBranch = ({ onClose }) => {
  // Accept onClose as a prop
  return (
    <div className="modal-overlay">
      <div className="edit-message-container">
        <div className="text-container">
          <p className="first-text">Confirm Edit.</p>
          <p className="second-text">Please confirm your edits.</p>
        </div>
        <div className="buttons-container">
          <Button
            text="Cancel" // Button text
            className="cancel-edit" // Use a specific class if needed
            onClick={onClose} // Invoke onClose when clicked
          />
          <Button
            text="Confirm" // Button text
            className="confirm-edit" // Use a specific class if needed
            onClick={onClose} // Invoke onClose when clicked
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmEditBranch;
