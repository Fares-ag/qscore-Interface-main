import React from "react";
import { Table, Switch } from "antd";

const MainTable = ({
  data,
  columns,
  loading,
  pagination,
  onPageChange,
  onStatusToggle,
}) => {
  // Dynamically add the status column if `onStatusToggle` is provided
  const tableColumns = columns.map((col) => {
    if (col.dataIndex === "isActive" && onStatusToggle) {
      return {
        ...col,
        render: (isActive, record) => (
          <Switch
            checked={isActive}
            onChange={() => onStatusToggle(record.id, isActive)}
            style={{
              backgroundColor: isActive ? "#52c41a" : "#d9d9d9", // Green for active, gray for inactive
            }}
          />
        ),
      };
    }
    return col;
  });

  return (
    <Table
      dataSource={data}
      columns={tableColumns}
      loading={loading}
      pagination={
        pagination
          ? {
              current: pagination.currentPage || 1,
              pageSize: pagination.pageSize || 10,
              total: pagination.totalItems || 0,
              onChange: onPageChange,
            }
          : false
      } // Disable pagination if it's undefined
      rowKey="id"
    />
  );
};

export default MainTable;
