import React from "react";
import MainTable from "../../../components/Tables/MainTable";
import PropTypes from "prop-types";
import { Switch, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { toggleInspectionCenterStatus } from "../../../store/slices/platformSlice";

const InspectionCentersView = ({
  data,
  pagination,
  loading,
  filter,
  onPageChange,
}) => {
  const dispatch = useDispatch();

  // Filter the data based on the selected filter
  const filteredData = Array.isArray(data)
    ? data.filter((item) => {
        if (filter === "Active") return item.isActive;
        if (filter === "Inactive") return !item.isActive;
        return true;
      })
    : [];

  // Handle the status toggle action
  const handleStatusToggle = async (id, currentStatus) => {
    try {
      await dispatch(
        toggleInspectionCenterStatus({ id, currentStatus })
      ).unwrap();
      message.success("Status updated successfully");
    } catch (error) {
      message.error("Failed to update status");
    }
  };

  // Define the columns dynamically
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Address", dataIndex: "qPlateAddress", key: "qPlateAddress" },
    {
      title: "Contact Person",
      dataIndex: "contactPersonName",
      key: "contactPersonName",
    },
    { title: "Phone", dataIndex: "phoneNumber", key: "phoneNumber" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Revenue", dataIndex: "revenue", key: "revenue" },
    {
      title: "Branches",
      dataIndex: "numberOfBranches",
      key: "numberOfBranches",
      align: "center",
    },
    {
      title: "CR Number",
      dataIndex: "CRNumber",
      key: "CRNumber",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive, record) => (
        <Switch
          checked={isActive}
          onChange={() => handleStatusToggle(record.id, isActive)}
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
    <MainTable
      data={filteredData}
      columns={columns}
      loading={loading}
      pagination={pagination}
      onPageChange={onPageChange}
    />
  );
};

// Add default props
InspectionCentersView.defaultProps = {
  data: [], // Default to empty array if no data is passed
  filter: "All",
};

// Add prop types for validation
InspectionCentersView.propTypes = {
  data: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default InspectionCentersView;
