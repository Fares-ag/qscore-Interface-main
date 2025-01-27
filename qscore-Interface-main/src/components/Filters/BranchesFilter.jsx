import React, { useState, useRef } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DropdownFilter from "../../components/Filters/DropdownFilter";
import "./BranchesFilter.css";

const BranchesFilter = ({
  onFilterChange,
  onSearchChange,
  disableFilterChange = false,
  hideFilter = false,
  hideSearch = false, // New prop to hide search bar
}) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const filterOptions = ["Active", "Inactive"];
  const dropdownFilters = [
    "Alatkal Garage",
    "Al Moharaq Garage",
    "Auto Scan Garage",
    "Gear House Garage,",
    "Normandy Garage",
    "Sicilia Modern Garage",
    "Hemyan Garage",
    "Sheae Almhyt",
  ];

  const handleFilterClick = (filter) => {
    if (disableFilterChange) return;
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  const handleDropdownChange = (event) => {
    if (disableFilterChange) return;
    if (onFilterChange) {
      onFilterChange(event.target.value);
    }
  };

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible((prev) => !prev);

    if (!isDropdownVisible) {
      const rect = document
        .querySelector(".center-filter-button")
        ?.getBoundingClientRect();
      setDropdownPosition({
        top: rect ? rect.bottom + window.scrollY : 0,
        left: rect ? rect.left + window.scrollX : 0,
      });
    }
  };

  return (
    <div className="filters-container">
      {!hideFilter && (
        <div className="filter-buttons">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              className={`filter-button ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </Button>
          ))}
          <Button
            className={`filter-button center-filter-button ${
              isDropdownVisible ? "active" : ""
            }`}
            onClick={toggleDropdownVisibility}
          >
            Centers
          </Button>
          {isDropdownVisible && (
            <DropdownFilter
              position={dropdownPosition}
              filters={dropdownFilters}
              onChange={handleDropdownChange} // Dropdown remains functional
            />
          )}
        </div>
      )}

      {/* Conditionally render the search bar */}
      {!hideSearch && (
        <Input
          placeholder="Search center"
          className="filter-search"
          allowClear
          onChange={(e) => onSearchChange(e.target.value)}
          prefix={<SearchOutlined style={{ color: "#858D9D" }} />}
        />
      )}
    </div>
  );
};

export default BranchesFilter;
