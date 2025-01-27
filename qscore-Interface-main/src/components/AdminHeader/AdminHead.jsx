import React from "react";
import Button from "../button";
import { Input } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import "./AdminHeader.css";

const AdminHeader = ({
  title,
  buttonLabel = "Add Item",
  showSearch = false,
  onSearch = () => {},
  onButtonClick = () => {},
  buttonClass = "cancel-button",
  showButton = true,
  buttonIcon = "",
}) => (
  <div className="adminHeader-container">
    <h1 className="h1-button">{title}</h1>
    {showSearch && (
      <Input
        className="search-input"
        placeholder="Search"
        prefix={<SearchOutlined />}
        onPressEnter={onSearch}
      />
    )}
    {showButton && (
      <Button
        text={buttonLabel}
        onClick={onButtonClick}
        className={buttonClass}
        icon={buttonIcon}
      />
    )}
  </div>
);

export default AdminHeader;
