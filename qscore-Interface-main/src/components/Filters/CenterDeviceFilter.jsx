import React, { useState, useRef } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DropdownFilter from "../../components/Filters/DropdownFilter"; // Assuming DropdownFilter is the same component
import "./DeviceFilter.css";

const CenterDeviceFilter = ({ onFilterChange, onSearchChange }) => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const filterOptions = ["Status", "Branch"];
  const dropdownFilters = {
    Status: [
      "Assigned",
      "Unassigned",
      "In Stock",
      "Maintenance",
      "Out of Service",
    ],
    Branch: ["Alatkal Garage 001", "Alatkal Garage 002", "Alatkal Garage 003"],
  };

  const buttonRefs = useRef({}); // Store refs for all buttons

  const toggleDropdownVisibility = (filter) => {
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
      {activeDropdown && (
        <DropdownFilter
          position={dropdownPosition}
          onChange={(value) => handleDropdownChange(activeDropdown, value)}
          filters={dropdownFilters[activeDropdown]} // Pass the filters for the active dropdown
        />
      )}
    </div>
  );
};

export default CenterDeviceFilter;
