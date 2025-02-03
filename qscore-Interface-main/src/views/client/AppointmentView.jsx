import React, { useState } from "react";

import { Switch } from "antd"; // Ensure Switch is imported
import Filters from "../../components/Filters/Filters";
import MainTable from "../../components/Tables/MainTable";
import AdminHeader from "../../components/AdminHeader/AdminHead";
import "./AppointmentView.css";

const AppointmentView = () => {
  // State to manage table data dynamically
  const [customData, setCustomData] = useState([
    {
      key: "1",
      name: "Iftikhar",
      number: "30383011",
      text: "Toyota - Yaris",
      year: "2022",
      mileage: "55,000 KM",
      branch: "Alatakal Garage 001",
      date: "1201 Jan 2025",
    },
    {
      key: "2",
      name: "Iftikhar",
      number: "30383011",
      text: "Toyota - Yaris",
      year: "2022",
      mileage: "55,000 KM",
      branch: "Alatakal Garage 001",
      date: "1201 Jan 2025",
    },
  ]);

  // Handle status toggle
  const handleStatusChange = (key, newStatus) => {
    setCustomData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, status: newStatus } : item
      )
    );
  };

  // Custom columns configuration
  const customColumns = [
    { title: "Client Name", dataIndex: "name" },
    { title: "Phone Number", dataIndex: "number" },
    { title: "Vehicle Type", dataIndex: "text" },
    { title: "Year", dataIndex: "year" },
    { title: "Mileage", dataIndex: "mileage" },
    { title: "Branch", dataIndex: "branch" },
    { title: "Appointment Date", dataIndex: "date" },
  ];

  return (
    <div>
      {/* Table */}
      <MainTable
        data={customData}
        columns={customColumns}
        pagination={{ pageSize: 5 }}
        actions={true} // Show the actions column (edit, delete)
      />
    </div>
  );
};

export default AppointmentView;
