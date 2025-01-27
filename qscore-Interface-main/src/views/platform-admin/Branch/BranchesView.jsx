import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message, Switch } from "antd";
import MainTable from "../../../components/Tables/MainTable";
import {
  fetchBranches,
  toggleBranchStatus,
  selectBranchesData,
  selectBranchesPagination,
  selectBranchesLoading,
} from "../../../store/slices/platformSlice";

const BranchesView = ({ selectedFilter, searchTerm }) => {
  const dispatch = useDispatch();
  const branches = useSelector(selectBranchesData);
  const pagination = useSelector(selectBranchesPagination);
  const loading = useSelector(selectBranchesLoading);
  useEffect(() => {
    const status =
      selectedFilter === "Active"
        ? "active"
        : selectedFilter === "Inactive"
        ? "inactive"
        : undefined;

    dispatch(
      fetchBranches({
        status,
        search: searchTerm,
        page: pagination.currentPage,
        limit: pagination.pageSize,
      })
    );
  }, [dispatch, selectedFilter, searchTerm, pagination.currentPage]);

  const handlePageChange = (page) => {
    dispatch(
      fetchBranches({
        status: selectedFilter,
        search: searchTerm,
        page,
        limit: pagination.pageSize,
      })
    );
  };
  const handleStatusToggle = async (id, isActive) => {
    try {
      console.log(id)
      await dispatch(toggleBranchStatus({ id, isActive })).unwrap();
      message.success("Branch status updated successfully");
    } catch (error) {
      message.error("Failed to update branch status");
    }
  };

  const columns = [
    { title: "Branch Name", dataIndex: "name", key: "name" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Center",
      dataIndex: "center",
      key: "center",
      render: (center) => center?.name || "N/A", // Display center name
    },
    { title: "Contact Person", dataIndex: "contactPerson", key: "contactPerson" },
    { title: "Phone Number", dataIndex: "phoneNumber", key: "phoneNumber" },
    { title: "CR Number", dataIndex: "CRNumber", key: "CRNumber" },

    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive, record) => (
        <Switch
          checked={isActive}
          onChange={() => handleStatusToggle(record._id, isActive)}
          style={{
            backgroundColor: isActive ? "#52c41a" : "#d9d9d9",
          }}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
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

  return (
    <MainTable
      data={branches}
      columns={columns}
      loading={loading}
      pagination={pagination}
      onPageChange={handlePageChange}
    />

  );
};

export default BranchesView;