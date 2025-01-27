import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBranch } from "../../../store/slices/platformSlice";
import { message } from "antd";
import "./AddBranchTable.css";
import SuccessAddBranch from "../../SuccessAddBranch";

const AddBranchTable = ({
  title = "General Information",
  formFields = [],
  showSubmitButton = true,
  onSave = () => {},
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Mapping for backend keys
  const fieldToBackendKeyMap = {
    "Center Name": "centerId",
    "Branch Name*": "name",
    Address: "address",
    "Branch Phone Number*": "phoneNumber",
    "Contact Person": "contactPerson",
    "Contact Number*": "contactNumber",
    Email: "email",
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const validateForm = () => {
    const newErrors = {};
    formFields.forEach((field) => {
      if (field.props?.required && !formData[field.label]) {
        newErrors[field.label] = `${field.label} is required.`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (validateForm()) {
      try {
        // Transform formData to match backend keys
        const transformedData = Object.entries(formData).reduce(
          (acc, [key, value]) => {
            const backendKey = fieldToBackendKeyMap[key] || key;
            acc[backendKey] = value;
            return acc;
          },
          {}
        );

        await dispatch(addBranch(transformedData)).unwrap();
        message.success("Branch added successfully!");
        setShowSuccess(true);
        setFormData({});
        onSave();
      } catch (error) {
        message.error(error || "Failed to add branch");
      }
    }
  };

  const renderFormField = (field) => {
    if (field.type === "select") {
      return (
        <div className="form-group" key={field.label}>
          <label>{field.label}</label>
          <select
            className={`form-control ${errors[field.label] ? "error" : ""}`}
            defaultValue=""
            onChange={(e) => handleInputChange(field.label, e.target.value)}
          >
            <option value="" disabled>
              {field.placeholder}
            </option>
            {field.options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors[field.label] && (
            <span className="error-message">{errors[field.label]}</span>
          )}
        </div>
      );
    }

    return (
      <div className="form-group" key={field.label}>
        <label>{field.label}</label>
        <input
          type={field.type || "text"}
          placeholder={field.placeholder || ""}
          value={formData[field.label] || ""}
          onChange={(e) => handleInputChange(field.label, e.target.value)}
          className={errors[field.label] ? "error" : ""}
        />
        {errors[field.label] && (
          <span className="error-message">{errors[field.label]}</span>
        )}
      </div>
    );
  };

  return (
    <>
      <div className={`add-inspection-center ${showSuccess ? "blurred" : ""}`}>
        <div className="form-container">
          <div className="form-header">
            <h2>{title}</h2>
          </div>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            {formFields.map((field, index) => (
              <div className="form-row" key={index}>
                {renderFormField(field)}
              </div>
            ))}
            {showSubmitButton && (
              <button
                type="submit"
                className="update-button"
                onClick={handleSave}
              >
                Save
              </button>
            )}
          </form>
        </div>
      </div>
      {showSuccess && <SuccessAddBranch onClose={() => setShowSuccess(false)} />}
    </>
  );
};

export default AddBranchTable;
