import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { CaretRightOutlined } from "@ant-design/icons";
import "./CenterMyAccountTable.css";

const CenterMyAccountTable = () => {
  return (
    <div className="profile-table">
      {/* Dropdown Section */}
      <div className="dropdown-section">
        {/* Dropdown 1 */}
        <div className="dropdown">
          <div className="dropdown-label">My Profile</div>
          <CaretRightOutlined className="dropdown-icon" />
        </div>

        {/* Dropdown 2 */}
        <div className="dropdown">
          <div className="dropdown-label">Bank Account</div>
          <CaretRightOutlined className="dropdown-icon" />
        </div>

        {/* Dropdown 3 */}
        <div className="dropdown-changePassword">
          <div className="dropdown-label">Change Password</div>
          <CaretRightOutlined className="dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default CenterMyAccountTable;
