import React, { useState } from "react";
import { Input, Checkbox, Button } from "antd";
import "./DropdownFilter.css"; // Import the CSS file

const DropdownFilter = ({ position, onChange, filters }) => {
  const [search, setSearch] = useState("");
  const [selectedGarages, setSelectedGarages] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckboxChange = (garage) => {
    setSelectedGarages((prev) =>
      prev.includes(garage)
        ? prev.filter((item) => item !== garage)
        : [...prev, garage]
    );
  };

  const filteredGarages = filters.filter((garage) =>
    garage.toLowerCase().includes(search.toLowerCase())
  );

  const handleApply = () => {
    console.log("Selected Garages:", selectedGarages);
    // Add further logic here
  };

  return (
    <div
      className="dropdown-filter"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        position: "absolute",
      }}
    >
      <Input
        placeholder="Search Center"
        prefix={<i className="fas fa-search" />}
        value={search}
        onChange={handleSearch}
        className="dropdown-filter-input"
      />
      <div className="dropdown-filter-list">
        {filteredGarages.map((garage) => (
          <div key={garage} className="dropdown-filter-item">
            <Checkbox
              checked={selectedGarages.includes(garage)}
              onChange={() => handleCheckboxChange(garage)}
            >
              {garage}
            </Checkbox>
          </div>
        ))}
      </div>
      <Button
        type="primary"
        block
        onClick={handleApply}
        className="dropdown-filter-button"
      >
        Apply
      </Button>
    </div>
  );
};

export default DropdownFilter;
