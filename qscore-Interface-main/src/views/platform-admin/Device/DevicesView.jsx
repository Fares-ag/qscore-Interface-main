import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainTable from "../../../components/Tables/MainTable";
import {
  fetchDevices,
  selectDevicesData,
  selectDevicesPagination,
  selectDevicesLoading,
} from "../../../store/slices/platformSlice";

const DevicesView = ({ selectedFilter, searchTerm }) => {
  const dispatch = useDispatch();
  const devices = useSelector(selectDevicesData);
  const pagination = useSelector(selectDevicesPagination);
  const loading = useSelector(selectDevicesLoading);

  useEffect(() => {
    const status =
      selectedFilter === "Active"
        ? "active"
        : selectedFilter === "Inactive"
        ? "inactive"
        : undefined;

    dispatch(
      fetchDevices({
        status,
        search: searchTerm,
        page: pagination.currentPage,
        limit: pagination.pageSize,
      })
    );
  }, [dispatch, selectedFilter, searchTerm, pagination.currentPage]);

  const handlePageChange = (page) => {
    dispatch(
      fetchDevices({
        status: selectedFilter,
        search: searchTerm,
        page,
        limit: pagination.pageSize,
      })
    );
  };

  const columns = [
    { title: "Serial Number", dataIndex: "serialNumber", key: "serialNumber" },
    { title: "Device Type", dataIndex: "deviceType", key: "deviceType" },
    {
      title: "Center",
      dataIndex: "centerId",
      key: "centerId",
      render: (center) => center?.name || "N/A",
    },
    {
      title: "Branch",
      dataIndex: "branchId",
      key: "branchId",
      render: (branch) => branch?.name || "N/A",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (status === "active" ? "Active" : "Inactive"),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <i
            className="fas fa-pencil-alt"
            style={{
              color: "#1890ff",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={() => console.log("Edit clicked for:", record)}
          />
          <i
            className="fas fa-trash-alt"
            style={{
              color: "red",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={() => console.log("Delete clicked for:", record)}
          />
        </div>
      ),
    },
  ];

  return (
    <MainTable
      data={devices}
      columns={columns}
      loading={loading}
      pagination={pagination}
      onPageChange={handlePageChange}
    />

  );
};

export default DevicesView;
