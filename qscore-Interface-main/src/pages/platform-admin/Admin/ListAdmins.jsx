import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Topheader from "../../../components/Topheader";
import MainTable from "../../../components/Tables/MainTable";
import { Switch, message } from "antd";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import Filters from "../../../components/Filters/Filters";
import {
  fetchAdminUsers,
  toggleUserActivation, // Import the toggle action
  selectAdminUsers,
  selectAdminPagination,
  selectAdminLoading,
} from "../../../store/slices/platformSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ListAdmins = () => {
  const dispatch = useDispatch();
  const adminUsers = useSelector(selectAdminUsers);
  const pagination = useSelector(selectAdminPagination);
  const loading = useSelector(selectAdminLoading);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchAdminUsers({ page: pagination.currentPage, search }));
  }, [dispatch, pagination.currentPage, search]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    const isActive =
      selectedFilter === "Active"
        ? true
        : selectedFilter === "Inactive"
        ? false
        : undefined;
    dispatch(fetchAdminUsers({ page: 1, isActive, search }));
  };

  const handleSearchChange = (searchValue) => {
    setSearch(searchValue);
    dispatch(fetchAdminUsers({ page: 1, search: searchValue }));
  };

  const handlePageChange = (page) => {
    dispatch(fetchAdminUsers({ page, search }));
  };

  const handleStatusToggle = async (userId) => {
    try {
      await dispatch(toggleUserActivation(userId)).unwrap();
      message.success("User status updated successfully");
  
      // Fetch updated users to ensure UI reflects the change
      dispatch(fetchAdminUsers({ page: pagination.currentPage, search }));
    } catch (error) {
      message.error("Failed to update user status");
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
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
          <span>{`${record.firstName} ${record.lastName}`}</span>
        </div>
      ),
    },
    { title: "Email", dataIndex: "email" },
    { title: "Phone Number", dataIndex: "phoneNumber" },
    { title: "Role", dataIndex: "role" },
    {
      title: "Status",
      dataIndex: "isActive",
      render: (isActive, record) => (
        <Switch
          checked={isActive}
          onChange={() => handleStatusToggle(record._id)}
          style={{
            backgroundColor: isActive ? "#52c41a" : "#d9d9d9", // Green for active, gray for inactive
          }}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <EditOutlined
            style={{
              color: "#1890ff",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Edit clicked for:", record.id)}
          />
          <DeleteOutlined
            style={{
              color: "red",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Delete clicked for:", record.id)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="dashboard-container">
      <Topheader />
      <div className="dashboard-body">
        <Sidebar />
        <div className="dashboard-main">
          <main className="dashboard-content">
            <AdminHeader
              title="Admin User Management"
              buttonLabel="Add New User"
              buttonClass="center"
              onButtonClick={() => console.log("Add New User clicked")}
            />
            <Filters
              filterOptions={["All Users", "Active", "Inactive"]}
              dropdownFilters={[
                "Super Admin",
                "Admin",
                "Supervisor",
                "Officer",
              ]}
              onFilterChange={handleFilterChange}
              onSearchChange={handleSearchChange}
              searchPlaceholder="Search users"
            />
            <MainTable
              data={adminUsers}
              columns={columns}
              loading={loading}
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ListAdmins;