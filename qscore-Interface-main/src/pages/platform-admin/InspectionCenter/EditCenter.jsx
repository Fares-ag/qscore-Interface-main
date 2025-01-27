import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import EditInspectionCenterView from "../../../views/platform-admin/InspectionCenter/EditInspectionCenterView";
import "../../PagesDesign.css"; // CSS module or external styles
import Topheader from "../../../components/Topheader";
import AdminHeader from "../../../components/AdminHeader/AdminHead";

const EditCenterInfo = () => {
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
            <EditInspectionCenterView />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EditCenterInfo;
