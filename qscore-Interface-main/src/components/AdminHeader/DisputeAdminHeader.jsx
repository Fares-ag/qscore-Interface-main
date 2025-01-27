import React, { useState } from "react";
import { Input } from "antd"; // Using Ant Design's Input for search
import { CalendarOutlined } from "@ant-design/icons";
import "./adminheader.css";

const DisputeAdminHeader = ({ onSearchChange }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearchChange(value);
  };

  // Handle calendar button click
  const handleCalendarClick = () => {
    // You can open a date picker or log to the console for now
    console.log("Calendar button clicked");
  };

  return (
    <div className="filters-container">
      <Input
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
        style={{ width: "calc(100% - 50px)", marginRight: "10px" }}
      />
      <button
        className="calendar-button"
        onClick={handleCalendarClick}
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        <CalendarOutlined style={{ fontSize: "20px", color: "#1890ff" }} />
      </button>
    </div>
  );
};

export default DisputeAdminHeader;
