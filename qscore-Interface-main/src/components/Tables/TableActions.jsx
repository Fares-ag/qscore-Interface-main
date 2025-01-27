import React from "react";
import { Button, Space } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";

const TableActions = () => (
  <Space>
    <Button icon={<EyeOutlined />} />
    <Button icon={<EditOutlined />} />
  </Space>
);

export default TableActions;
