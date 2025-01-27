import React, { useState } from "react";
import "./AssignDevice.css";

const AssignDevice = () => {
  const [selectedCenter, setSelectedCenter] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

  const handleCenterChange = (event) => {
    setSelectedCenter(event.target.value);
  };

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };

  const handleUpdate = () => {
    console.log("Selected Center:", selectedCenter);
    console.log("Selected Branch:", selectedBranch);
  };

  return (
    <div className="assign-device-container">
      <div className="assign-device-header">
        <h2>Assign Device</h2>
        <button className="close-button">✕</button>
      </div>
      <p className="instruction-text">
        Please select a Center and Branch list to assign device.
      </p>
      <div className="dropdown-section">
        <div className="dropdown-container">
          <label htmlFor="center-select">Select Center</label>
          <select
            id="center-select"
            value={selectedCenter}
            onChange={handleCenterChange}
          >
            <option value="" disabled>
              Select Center
            </option>
            <option value="Alatkal Garage">Alatkal Garage</option>
            <option value="Al Moharaq Garage">Al Moharaq Garage</option>
            <option value="Al-Baida">Al-Baida</option>
            <option value="Sicilia Modern Garage">Sicilia Modern Garage</option>
            <option value="Hemyan Garage">Hemyan Garage</option>
          </select>
        </div>
        <div className="dropdown-container">
          <label htmlFor="branch-select">Select Branch</label>
          <select
            id="branch-select"
            value={selectedBranch}
            onChange={handleBranchChange}
          >
            <option value="" disabled>
              Select Manager
            </option>
            <option value="Manager 1">Manager 1</option>
            <option value="Manager 2">Manager 2</option>
            <option value="Manager 3">Manager 3</option>
            <option value="Manager 4">Manager 4</option>
          </select>
        </div>
      </div>
      <button className="update-button" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default AssignDevice;
