import React, { useState } from "react";

import { Switch } from "antd"; // Ensure Switch is imported
import Filters from "../../components/Filters/Filters";
import MainTable from "../../components/Tables/MainTable";
import AdminHeader from "../../components/AdminHeader/AdminHead";

const ListBranchStaffView = () => {
  // State to manage table data dynamically
  const [customData, setCustomData] = useState([
    {
      key: "1",
      name: "Custom Garage 1",
      address: "45-453-00",
      email: "custom@garage1.qa",
      revenue: "QR 300,000",
      branches: "3",
      contact: "1234 5678",
      CR: "98765",
      status: true,
    },
    {
      key: "2",
      name: "Custom Garage 2",
      address: "45-453-01",
      email: "custom@garage2.qa",
      revenue: "QR 500,000",
      branches: "5",
      contact: "8765 4321",
      CR: "54321",
      status: false,
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
    { title: "Name", dataIndex: "name" },
    { title: "Role", dataIndex: "text" },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <i
          className="fas fa-pencil-alt"
          style={{
            color: "#1890ff",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => console.log("Edit clicked for:", record)}
        />
      ),
    },
    ,
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

export default ListBranchStaffView;
