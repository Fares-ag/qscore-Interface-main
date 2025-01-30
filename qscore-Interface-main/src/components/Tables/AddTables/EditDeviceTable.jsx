import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDevice } from "../../../store/slices/platformSlice";
import { message } from "antd";
import "./EditDeviceTable.css";
import SuccessAddBranch from "../../SuccessAddBranch"; // Adjust for success modal if needed

const EditDeviceTable = ({
  title = "General Information",
  formFields = [],
  showSubmitButton = true,
  onSave = () => {},
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Backend key mapping
  const fieldToBackendKeyMap = {
    "Device Type": "name",
    "Device Serial Number*": "serialNumber",
    "Purchase Date": "purchaseDate",
    "Added By*": "assignedBy",
    "Select Center": "assignedBy",
    "Select Center": "assignedBy",
  };

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
      try {
        // Transform data for backend
        const transformedData = Object.entries(formData).reduce(
          (acc, [key, value]) => {
            const backendKey = fieldToBackendKeyMap[key] || key;
            acc[backendKey] = value;
            return acc;
          },
          {}
        );

        await dispatch(addDevice(transformedData)).unwrap();
        message.success("Device added successfully!");
        setShowSuccess(true);
        setFormData({});
        onSave();
      } catch (error) {
        message.error(error || "Failed to add device");
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
      {showSuccess && (
        <SuccessAddBranch onClose={() => setShowSuccess(false)} />
      )}
    </>
  );
};

export default EditDeviceTable;
