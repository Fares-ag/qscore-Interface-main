import React, { useState } from "react";
import Button from "../../button";
import { useDispatch } from "react-redux";
import { addAdminUser } from "../../../store/slices/platformSlice";
import { message } from "antd";
import "./BankTable.css";

const BankTable = ({
  title = "General Information",
  text = "Cancel",
  buttonClass = "cancel-button",
  onButtonClick = () => {},
  formFields = [],
  showButton = true,
  showSubmitButton = true,
  isDisabled = false, // New prop to disable the form
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  const handleChange = (key, value) => {
    if (!isDisabled) {
      // Prevent changes if disabled
      setFormData((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleSubmit = async (e) => {
    if (isDisabled) return; // Prevent form submission if disabled
    e.preventDefault();

    try {
      await dispatch(addAdminUser(formData)).unwrap();
      message.success("Admin user added successfully!");
      setFormData({});
    } catch (error) {
      message.error(error || "Failed to add admin user");
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
            disabled={isDisabled} // Disable select input
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
            disabled={isDisabled} // Disable file input
          />
        ) : (
          <input
            type={field.type || "text"}
            placeholder={field.placeholder || ""}
            value={formData[field.label] || ""}
            onChange={(e) => handleChange(field.label, e.target.value)}
            disabled={isDisabled} // Disable text input
          />
        )}
      </div>
    );
  };

  return (
    <div className={`add-inspection-center ${isDisabled ? "disabled" : ""}`}>
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
            <button type="edit" className="update-button" disabled={isDisabled}>
              Edit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default BankTable;
