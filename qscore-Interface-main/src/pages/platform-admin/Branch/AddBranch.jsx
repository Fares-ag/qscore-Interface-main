import React, { useState } from "react"; // Add missing useState import
import Sidebar from "../../../components/Sidebar/Sidebar";
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";
import Filters from "../../../components/Filters/Filters";
import AddBranchTable from "../../../components/Tables/AddTables/AddBranchTable";
import AddBranchView from "../../../views/platform-admin/Branch/AddBranchView";
import TimeSelection from "../../../components/TimeSelection";
import SuccessAddBranch from "../../../components/SuccessAddBranch";
import ConfirmEditBranch from "../../../components/ConfirmEditBranch";

const AddBranch = () => {
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
              title="Add A New Branch" // Dynamic title
              buttonLabel="Cancel" // Dynamic button label // Attach button handler
              buttonClass="cancel-button"
              showButton={true}
            />
            <AddBranchView />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AddBranch;
