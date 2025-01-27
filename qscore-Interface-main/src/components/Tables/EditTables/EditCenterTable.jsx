import React, { useState } from "react";
import "./EditCenterTable.css";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import { editInspectionCenter } from "../../../store/slices/adminSlice"; // Import the action

const EditCenterTable = ({
  title = "General Information",
  buttonLabel = "Cancel",
  onButtonClick = () => {},
  formFields = [],
  centerId, // Pass centerId dynamically
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dispatch(editInspectionCenter({ centerId, updatedData: formData })).unwrap();
      message.success("Center details updated successfully!");
    } catch (error) {
      message.error(error || "Failed to update center details.");
    } finally {
      setLoading(false);
    }
  };

  const renderFormField = (field) => {
    if (field.type === "file") {
      return (
        <input
          type="file"
          {...field.props}
          onChange={(e) => handleInputChange(field.label, e.target.files[0])}
        />
      );
    }

    if (field.isCustomInput) {
      return (
        <div className="custom-input">
          <span className="static-text">{field.staticText}</span>
          <input
            className="dynamic-input"
            type={field.type || "text"}
            placeholder={field.placeholder || ""}
            {...field.props}
            onChange={(e) => handleInputChange(field.label, e.target.value)}
          />
        </div>
      );
    }

    return (
      <input
        type={field.type || "text"}
        placeholder={field.placeholder || ""}
        {...field.props}
        onChange={(e) => handleInputChange(field.label, e.target.value)}
      />
    );
  };

  return (
    <div className="add-inspection-center">
      <div className="form-container">
        <div className="form-header">
          <div className="header-content">
            <h2>{title}</h2>
            <Button
              type="default"
              className="cancel-button"
              onClick={onButtonClick}
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          {formFields.map((field, index) => (
            <div className="form-row" key={index}>
              <div className={`form-group ${field.className || ""}`}>
                <label>{field.label}</label>
                {renderFormField(field)}
              </div>
            </div>
          ))}
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Saving..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCenterTable;
