import React, { useState } from "react";
import SuccessAddBranch from "./SuccessAddBranch"; // Assuming you have this component

const AddBranchForm = () => {
  const [branchName, setBranchName] = useState("");
  const [location, setLocation] = useState("");
  const [managerName, setManagerName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Validation function
  const isFormValid = () => {
    return (
      branchName.trim() !== "" &&
      location.trim() !== "" &&
      managerName.trim() !== ""
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      setShowSuccess(true); // Show success component
    } else {
      alert("Please fill in all required fields.");
      setShowSuccess(false); // Ensure it doesn't show if fields are incomplete
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Branch Name:</label>
          <input
            type="text"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Manager Name:</label>
          <input
            type="text"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Show SuccessAddBranch only when form is valid */}
      {showSuccess && <SuccessAddBranch />}
    </div>
  );
};

export default AddBranchForm;
