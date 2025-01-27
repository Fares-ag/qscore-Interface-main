import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBranch } from "../../../store/slices/adminSlice"; // Import the editBranch action
import { message } from "antd";
import "./EditBranchTable.css";

const EditBranchTable = ({
  title = "General Information",
  formFields = [],
  showSubmitButton = true,
  branchId, // Receive branchId as a prop
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false })); // Clear errors
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
      setLoading(true);

      try {
        const transformedData = formFields.reduce((acc, field) => {
          acc[field.label] = formData[field.label] || "";
          return acc;
        }, {});

        await dispatch(editBranch({ branchId, updatedData: transformedData })).unwrap();
        message.success("Branch updated successfully!");
        setFormData({});
      } catch (error) {
        message.error(error || "Failed to update branch details.");
      } finally {
        setLoading(false);
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
              <option key={index} value={option}>
                {option}
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
    <div className="add-inspection-center">
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
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditBranchTable;
