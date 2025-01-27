import React, { useState } from "react";
import Button from "../../button";
import { useDispatch } from "react-redux";
import { editAdminUser } from "../../../store/slices/adminSlice"; // Import the correct slice
import { message } from "antd";
import "./EditUserTable.css";

const EditUserTable = ({
  title = "General Information",
  text = "Cancel",
  buttonClass = "cancel-button",
  onButtonClick = () => {},
  formFields = [],
  showButton = true,
  showSubmitButton = true,
  userId, // Pass the user ID for editing
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  // Handle input change
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatch editAdminUser with userId and formData
      await dispatch(editAdminUser({ userId, updatedData: formData })).unwrap();
      message.success("Admin user updated successfully!");
    } catch (error) {
      message.error(error || "Failed to update admin user");
    }
  };

  const renderFormField = (field) => {
    if (field.type === "select") {
      return (
        <div className="form-group" key={field.label}>
          <label>{field.label}</label>
          <select
            className="form-control"
            value={formData[field.label] || ""}
            onChange={(e) => handleChange(field.label, e.target.value)}
          >
            <option value="" disabled>
              {field.placeholder}
            </option>
            {field.options &&
              field.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
      );
    }

    return (
      <div className="form-group" key={field.label}>
        <label>{field.label}</label>
        {field.type === "file" ? (
          <input
            type="file"
            onChange={(e) => handleChange(field.label, e.target.files[0])}
          />
        ) : (
          <input
            type={field.type || "text"}
            placeholder={field.placeholder || ""}
            value={formData[field.label] || ""}
            onChange={(e) => handleChange(field.label, e.target.value)}
          />
        )}
      </div>
    );
  };

  return (
    <div className="add-inspection-center">
      <div className="form-container">
        <div className="form-header">
          <div className="header-content">
            <h2>{title}</h2>
            {showButton && (
              <Button
                text={text}
                buttonClass={buttonClass}
                onButtonClick={onButtonClick}
                style={{ borderRadius: "12px" }}
              />
            )}
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          {formFields.map((field, index) => (
            <div className="form-row" key={index}>
              {renderFormField(field)}
            </div>
          ))}
          {showSubmitButton && (
            <button type="submit" className="update-button">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditUserTable;
