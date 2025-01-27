import React from "react";
import { Table, Switch, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import MainTable from "../../components/Tables/MainTable"; // Import the generic MainTable component

const ListCenterUsersView = () => {
  const userData = [
    {
      key: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "123456789",
      role: "Admin",
      status: true,
      profilePicture: "path_to_image",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "987654321",
      role: "User",
      status: false,
      profilePicture: "path_to_image",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {record.profilePicture && (
            <img
              src={record.profilePicture}
              alt="Profile"
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                marginRight: 10,
              }}
            />
          )}
          <span>{text}</span>
        </div>
      ),
    },
    { title: "Email", dataIndex: "email" },
    { title: "Phone Number", dataIndex: "contact" },
    { title: "Role", dataIndex: "role" },
    { title: "Branch", dataIndex: "branch" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, record) => (
        <Switch
          checked={status}
          onChange={(checked) =>
            console.log("Status Changed:", checked, record)
          }
        />
      ),
    },
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
  ];

  return <MainTable data={userData} columns={columns} />;
};

export default ListCenterUsersView;
