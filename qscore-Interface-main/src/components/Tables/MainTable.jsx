import React from "react";
import { Table, Switch } from "antd";

const MainTable = ({ 
  data, 
  columns, 
  loading, 
  pagination, 
  onPageChange, 
  onStatusToggle 
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
      pagination={{
        current: pagination.currentPage,
        pageSize: pagination.pageSize,
        total: pagination.totalItems,
        onChange: onPageChange,
      }}
      rowKey="id"
    />
  );
};

export default MainTable;