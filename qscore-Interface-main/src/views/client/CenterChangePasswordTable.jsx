import React, { useState } from "react";
import "./CenterChangePasswordTable.css";
import { InfoCircleOutlined } from "@ant-design/icons";

const CenterChangePasswordTable = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (currentPassword !== "correctPassword") {
      setError("The current password is incorrect.");
      return;
    }
    if (newPassword.length < 8 || !/\d/.test(newPassword)) {
      setError(
        "The new password must be at least 8 characters long and include at least one number."
      );
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("The new passwords do not match.");
      return;
    }
    setError("");
    alert("Password updated successfully!");
  };

  return (
    <div className="profile-table">
      {/* Form Section */}
      <div className="form-section">
        <form className="profile-form" onSubmit={handleUpdate}>
          <h1 className="profile-header">Set New Password</h1>

          {/* Error Alert */}
          {error && <div className="error-message">{error}</div>}

          {/* Form Inputs */}
          <div className="form-group">
            <label htmlFor="current-password" className="form-label">
              Current Password*
            </label>
            <input
              type="password"
              id="current-password"
              placeholder="Enter Current Password*"
              className="form-input"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password" className="form-label">
              New Password*
            </label>
            <input
              type="password"
              id="new-password"
              placeholder="Enter New Password*"
              className="form-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password" className="form-label">
              Confirm New Password*
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm New Password*"
              className="form-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Text and Button Section */}
          <div className="text-button-section">
            <button type="submit" className="update-button">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CenterChangePasswordTable;
