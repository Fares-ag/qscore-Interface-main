import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import EditBranchView from "../../../views/platform-admin/Branch/EditBranchView";
import "../../PagesDesign.css"; // CSS module or external styles
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";

const EditBranchInfo = () => {
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
              title="Edit Info" // Dynamic title
              buttonLabel="Cancel" // Dynamic button label // Attach button handler
              showButton={true}
            />
            <EditBranchView />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EditBranchInfo;
