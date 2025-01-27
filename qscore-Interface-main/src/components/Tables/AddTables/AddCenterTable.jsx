import React from "react";
import "./AddCenterTable.css";
import { Button } from "antd";

const AddCenterTable = ({
  title = "General Information",
  buttonLabel = "Cancel",
  onButtonClick = () => {},
  formFields = [],
}) => {
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
        <form className="form">
          {formFields.map((field, index) => (
            <div className="form-row" key={index}>
              <div className={`form-group ${field.className || ""}`}>
                <label>{field.label}</label>
                {field.type === "file" ? (
                  <input type="file" {...field.props} />
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
            </div>
          ))}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCenterTable;
