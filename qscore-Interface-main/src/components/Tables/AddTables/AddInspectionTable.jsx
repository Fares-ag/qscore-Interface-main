import React from "react";
import Button from "../../button";
import "./UserTable.css";

const handleCancelClick = () => {
  console.log("Cancel button clicked");
  // Add any additional logic for when the cancel button is clicked
};

const AddInspectionTable = ({
  title = "General Information",
  text = "Cancel",
  buttonClass = "cancel-button",
  onButtonClick = () => {},
  formFields = [],
  showButton = true,
  showSubmitButton = true,
}) => {
  // Function to render form fields
  const renderFormField = (field) => {
    if (field.label === "Upload Photo") {
      return (
        <div
          className={`form-group ${field.className || ""}`}
          key={field.label}
        >
          <label>{field.label}</label>
          <button
            type="button"
            className="upload-photo-button" // This can be styled as a button
            onClick={field.onClick} // Trigger the ImageUpload
          >
            {field.placeholder} {/* "Add A Photo" */}
          </button>
        </div>
      );
    }

    if (field.type === "select") {
      return (
        <div
          className={`form-group ${field.className || ""}`}
          key={field.label}
        >
          <label>{field.label}</label>
          <select className="form-control" defaultValue="">
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
      <div className={`form-group ${field.className || ""}`} key={field.label}>
        <label>{field.label}</label>
        {field.type === "file" ? (
          <input
            type="file"
            {...field.props}
            onClick={field.onClick} // Add onClick handler
          />
        ) : field.isCustomInput ? (
          <div className="custom-input">
            <span className="static-text">{field.staticText}</span>
            <input
              className="dynamic-input"
              type={field.type || "text"}
              placeholder={field.placeholder || ""}
              {...field.props}
            />
          </div>
        ) : (
          <input
            type={field.type || "text"}
            placeholder={field.placeholder || ""}
            {...field.props}
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
                text="Cancel"
                className="cancel-button" // Apply cancel-button styles
                onButtonClick={handleCancelClick} // Pass your click handler
              />
            )}
          </div>
        </div>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          {formFields.map((field, index) => (
            <div className="form-row" key={index}>
              {renderFormField(field)}
            </div>
          ))}
          {showSubmitButton && (
            <button type="submit" className="update-button">
              Update
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddInspectionTable;
