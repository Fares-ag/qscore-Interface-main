import React, { useState, useRef } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DropdownFilter from "./DropdownFilter";
import Calendar from "../Calendar";
import "./DeviceFilter.css";

const AppointmentFilter = ({ onFilterChange, onSearchChange }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const filterOptions = ["Branch", "Calendar"];
  const dropdownFilters = {
    Branch: ["Alatkal Garage 001", "Alatkal Garage 002", "Alatkal Garage 003"],
    Calendar: [
      "Alatkal Garage 001",
      "Alatkal Garage 002",
      "Alatkal Garage 003",
      "Gear House Garage 001",
      "Gear House Garage 002",
      "Gear House Garage 003",
    ],
  };

  const buttonRefs = useRef({});

  const toggleDropdownVisibility = (filter) => {
    if (filter === "Calendar") {
      setActiveDropdown(activeDropdown === "Calendar" ? null : "Calendar");

      // Calculate the position of the button
      const rect = buttonRefs.current[filter]?.getBoundingClientRect();
      if (rect) {
        setDropdownPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    } else {
      if (activeDropdown === filter) {
        setActiveDropdown(null); // Close dropdown if already open
      } else {
        setActiveDropdown(filter);

        // Calculate the position of the button
        const rect = buttonRefs.current[filter]?.getBoundingClientRect();
        if (rect) {
          setDropdownPosition({
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX,
          });
        }
      }
    }
  };

  const handleDropdownChange = (filter, value) => {
    setActiveDropdown(null); // Close dropdown
    onFilterChange({ filter, value }); // Pass the selected filter and value to the parent
  };

  return (
    <div className="filters-container">
      <div className="filter-buttons">
        {filterOptions.map((filter) => (
          <Button
            key={filter}
            ref={(el) => (buttonRefs.current[filter] = el)} // Store ref for each button
            className={`filter-button ${
              activeDropdown === filter ? "active" : ""
            }`}
            onClick={() => toggleDropdownVisibility(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>
      {activeDropdown && activeDropdown !== "Calendar" && (
        <DropdownFilter
          position={dropdownPosition}
          onChange={(value) => handleDropdownChange(activeDropdown, value)}
          filters={dropdownFilters[activeDropdown]} // Pass the filters for the active dropdown
        />
      )}
      <Input
        placeholder="Search by name"
        className="filter-search"
        allowClear
        onChange={(e) => onSearchChange(e.target.value)}
        prefix={<SearchOutlined style={{ color: "#858D9D" }} />}
      />

      {/* Calendar pop-out below the button */}
      {activeDropdown === "Calendar" && (
        <div
          style={{
            position: "absolute",
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            zIndex: 1000,
            backgroundColor: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "10px",
            width: "auto",
          }}
        >
          <Calendar /> {/* Render the Calendar component below the button */}
        </div>
      )}
    </div>
  );
};

export default AppointmentFilter;
