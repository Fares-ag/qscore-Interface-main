import React, { useState } from "react"; // Add missing useState import
import { PlusOutlined } from "@ant-design/icons";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./AddBranch.css";
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import Filters from "../../../components/Filters/Filters";
import AddBranchTable from "../../../components/Tables/AddTables/AddBranchTable";
import TimeSelection from "../../../components/TimeSelection";
import SuccessAddBranch from "../../../components/SuccessAddBranch";
import ConfirmEditBranch from "../../../components/ConfirmEditBranch";
import ListBranchStaffView from "../../../views/client/ListBranchStaffView";

const BranchStaff = () => {
  const handleAddBranchClick = () => {
    console.log("Add Branch button clicked");
  };
  return (
    <div className="dashboard-container">
      {/* Top Header */}
      <Topheader />

      {/* Main Layout */}
      <div className="dashboard-body">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Section */}
        <div className="dashboard-main">
          <main className="dashboard-content">
            <AdminHeader
              title="Branch Staff"
              buttonLabel="Add New Staff"
              buttonClass="center"
              onButtonClick={handleAddBranchClick}
              buttonIcon={
                <PlusOutlined
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    marginRight: "8px",
                  }}
                />
              }
            />
            <br></br>
            <ListBranchStaffView />
          </main>
        </div>
      </div>
    </div>
  );
};

export default BranchStaff;
