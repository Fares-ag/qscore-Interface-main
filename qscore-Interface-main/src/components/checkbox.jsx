import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="checkbox-label">{label}</label>
    </div>
  );
};

export default Checkbox;
