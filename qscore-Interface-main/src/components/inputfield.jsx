// InputField.jsx
import React from "react";
import "./InputField.css";

const InputField = ({
  type = "text",
  placeholder = "Enter text...",
  value,
  onChange,
  name,
  label,
  size = "small",
  disabled = false,
  errorMessage,
  style = {},
  className = "",
}) => {
  return (
    <div className={`input-field ${size} ${className}`} style={style}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input ${errorMessage ? "error" : ""}`}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
