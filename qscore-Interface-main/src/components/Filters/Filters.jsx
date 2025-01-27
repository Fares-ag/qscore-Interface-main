import React from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Filters.css";

const Filters = ({
  filterOptions,
  onFilterChange,
  onSearchChange,
  dropdownFilters,
}) => {
  const [activeFilter, setActiveFilter] = React.useState("All");

  // Handle filter button clicks
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  // Handle dropdown changes
  const handleDropdownChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="filters-container">
      {/* Conditionally render the filter buttons or dropdown if filterOptions is provided */}
      {filterOptions && (
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
          {dropdownFilters && (
            <select
              className="filter-dropdown"
              onChange={handleDropdownChange}
              defaultValue=""
            >
              <option value="" disabled>
                Select Role
              </option>
              {dropdownFilters.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      {/* Search Input */}
      <Input
        placeholder="Search center"
        className="filter-search"
        allowClear
        onChange={(e) => onSearchChange(e.target.value)}
        prefix={<SearchOutlined style={{ color: "#858D9D" }} />}
      />
    </div>
  );
};

export default Filters;
