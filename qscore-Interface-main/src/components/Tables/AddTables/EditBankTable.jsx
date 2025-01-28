import React, { useState } from "react";
import Button from "../../button";
import { useDispatch } from "react-redux";
import { addAdminUser } from "../../../store/slices/platformSlice";
import { message } from "antd";
import "./BankTable.css";
import ConfirmEditBank from "../../ConfirmEditBank";

const EditBankTable = ({
  title = "General Information",
  text = "Cancel",
  buttonClass = "cancel-button",
  onButtonClick = () => {},
  formFields = [],
  showButton = true,
  showSubmitButton = true,
  isFormEditable = true,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [isPopupVisible, setPopupVisible] = useState(false); // State to manage popup visibility

  // Handle input change
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(addAdminUser(formData)).unwrap();
      message.success("Admin user added successfully!");
      setFormData({}); // Reset the form after successful submission
    } catch (error) {
      message.error(error || "Failed to add admin user");
    }
  };

  // Check if the form is completed (all fields are filled)
  const isFormFilled = formFields.every((field) => {
    return formData[field.label] && formData[field.label].trim() !== "";
  });

  // Handle Edit button click to show the popup
  const handleEditButtonClick = () => {
    if (isFormFilled) {
      setPopupVisible(true); // Show the popup if the form is filled
    } else {
      message.error("Please fill out all fields before proceeding.");
    }
  };

  // Render the form fields
  const renderFormField = (field) => {
    if (field.type === "select") {
      return (
        <div className="form-group" key={field.label}>
          <label>{field.label}</label>
          <select
            className="form-control"
            value={formData[field.label] || ""}
            onChange={(e) => handleChange(field.label, e.target.value)}
            disabled={!isFormEditable}
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
            disabled={!isFormEditable}
          />
        ) : (
          <input
            type={field.type || "text"}
            placeholder={field.placeholder || ""}
            value={formData[field.label] || ""}
            onChange={(e) => handleChange(field.label, e.target.value)}
            disabled={!isFormEditable}
          />
        )}
      </div>
    );
  };

  return (
    <div className={`add-inspection-center ${!isFormEditable ? "blur" : ""}`}>
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
            <button
              type="button"
              className="update-button"
              onClick={handleEditButtonClick} // Trigger popup on "Edit"
            >
              Update
            </button>
          )}
        </form>
      </div>

      {/* Show the Success Popup when the form is filled and "Edit" is clicked */}
      {isPopupVisible && (
        <ConfirmEditBank
          onClose={() => setPopupVisible(false)} // Close the popup on close
        />
      )}
    </div>
  );
};

export default EditBankTable;
