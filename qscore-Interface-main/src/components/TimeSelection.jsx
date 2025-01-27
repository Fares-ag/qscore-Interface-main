import React from "react";
import "./TimeSelection.css";

const daysOfWeek = [
  { name: "Sunday", opensAt: "09:30 AM", closesAt: "09:30 PM" },
  { name: "Monday", opensAt: "09:30 AM", closesAt: "09:30 PM" },
  { name: "Tuesday", opensAt: "09:30 AM", closesAt: "09:30 PM" },
  { name: "Wednesday", opensAt: "09:30 AM", closesAt: "09:30 PM" },
  { name: "Thursday", opensAt: "09:30 AM", closesAt: "09:30 PM" },
  { name: "Friday", opensAt: "04:30 PM", closesAt: "09:30 PM" },
  { name: "Saturday", opensAt: "09:30 AM", closesAt: "09:30 PM" },
];

const TimeSelection = () => {
  return (
    <div className="time-selection-container">
      {daysOfWeek.map((day, index) => (
        <div className="time-row" key={index}>
          <div className="day-section">
            <div className="day-name">{day.name}</div>
            <div className="checkbox-container">
              <input type="checkbox" id={`closed-${index}`} />
              <label htmlFor={`closed-${index}`}>Closed</label>
            </div>
          </div>
          <div className="time-inputs">
            <div className="time-input">
              <label>Opens at</label>
              <input type="text" defaultValue={day.opensAt} />
            </div>
            <div className="time-input">
              <label>Closes at</label>
              <input type="text" defaultValue={day.closesAt} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSelection;
